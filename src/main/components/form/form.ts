import {z, ZodError} from "zod";
import type {ParentComponentProps} from "../component";

const FORM_VALIDATOR_CONTEXT_KEY: string = "FORM_VALIDATOR_CONTEXT_KEY";

type FormSubmissionHandler = (formData: FormData) => void;

type FormSubmitEvent = SubmitEvent&
{
    currentTarget: EventTarget&HTMLFormElement;
};

interface FormProps extends ParentComponentProps
{
    onsubmit?: FormSubmissionHandler;
}

class ZExtension
{
    requiredString = (fieldTitle: string) => {
        return z.string({required_error : `${fieldTitle} is required`}).min(1, `${fieldTitle} is required`);
    }
}
const zExtensionInstance = new ZExtension();
const zExtended = Object.assign(zExtensionInstance, z);

interface FormError
{
    readonly message: string;
}

interface FormValidator
{
    validate(formData: FormData): boolean;
    clearErrors(name: string): void;
    getErrors(key: string): FormError[];
}

interface ZodFormValidator extends FormValidator
{
    register(key: string, schema: z.ZodType<any, z.ZodTypeDef, any>): void
}

class DefaultZodFormValidator implements ZodFormValidator
{

    private readonly _registeredScehema: Map<string, z.ZodType<any, z.ZodTypeDef, any>> =
        new Map<string, z.ZodType<any, z.ZodTypeDef, any>>();
    private readonly _errorMap: Map<string, FormError[]> = new Map<string, FormError[]>();

    register(key: string, schema: z.ZodType<any, z.ZodTypeDef, any>): void
    {
        this._registeredScehema.set(key, schema);
    }
    validate(formData: FormData): boolean
    {
        let valueToReturn: boolean = true;

        this._registeredScehema.forEach((schema, key) => {
            const valueToValidate = formData.get(key);
            const validationResult = schema.safeParse(valueToValidate);
            if (!validationResult.success)
            {
                valueToReturn = false;
                const errorData: ZodError = validationResult.error;
                const formErrors: FormError[] = [];
                errorData.issues.map(
                    (issue: z.ZodIssue, index: number) => { formErrors[index] = new DefaultZodFormError(issue); });
                this._errorMap.set(key, formErrors);
            }
        });

        return valueToReturn;
    }

    getErrors(key: string): FormError[]
    {
        const valueToReturn: FormError[] = this._errorMap.get(key) ?? [];

        return valueToReturn;
    }

    clearErrors(key: string): void
    {
        this._errorMap.delete(key);
    }
}

class SimpleFormError implements FormError
{
    constructor(public readonly message: string) {}
}

class DefaultZodFormError implements FormError
{
    readonly message: string;

    constructor(zodIssue: z.ZodIssue)
    {
        this.message = zodIssue.message;
    }
}

export {zExtended, FORM_VALIDATOR_CONTEXT_KEY, SimpleFormError, DefaultZodFormValidator};
export type{FormValidator, ZodFormValidator, FormError, FormProps, FormSubmissionHandler, FormSubmitEvent};