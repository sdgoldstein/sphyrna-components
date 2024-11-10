

<script module lang="ts">
    import { RadioGroup as RadioGroupPrimitive } from "bits-ui";
    import { buildTestId, type ParentComponentProps } from "../../component.js";
    import { DEFAULT_COLOR_CATEGORY_VARIANT, getBaseColorClassesForColorCategoryStyleVariant, themedTWMerge } from "../../../theme/theme.js";
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";
    import { type FormError, type ZodFormValidator, FORM_VALIDATOR_CONTEXT_KEY, SimpleFormError } from "./form.js";
    import type { ZodType } from "zod";
    import FormElementErrorMessage from "./FormElementErrorMessage.svelte";

    export interface RadioGroupProps extends ParentComponentProps {
        name:string;
        value?:string;
        schema?: ZodType;
        disabled?:boolean;
        error?: string;
        onchange?:(e: Event) => void;
       
    }
</script>

<script lang="ts">

    let {
        id,
        testid:testidProp,
        value = $bindable(),
        name,
        schema,
        colorVariant=DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        disabled=false,
        error:errorProp,
        onchange=()=>{},
        children:providedChildren,
        ...restProps
    }: RadioGroupProps = $props();
    /**************/
    /*
        The code between the star comments is repeated for all form elements
        I tried to put out into a FormElementValidationHelper.svelte
        But, I need to make "errors" bindable so that the Input or other form element component can read it for sytling, etc.
        It's not possible to have both a property that is bindale and have its value be derived
        "state_invalid_placement" - $derived can only be used to initialize a variable 
    */
    /**************/
    const formValidator: Writable<ZodFormValidator> = getContext(
        FORM_VALIDATOR_CONTEXT_KEY,
    );
    if (schema) {
        $formValidator.register(name, schema);
    }
    let errors: FormError[] = $derived(
        errorProp
            ? [new SimpleFormError(errorProp)]
            : $formValidator.getErrors(name),
    );
    /**************/

    let testId=$derived(buildTestId(id, testidProp));
    
    let styleClass = $derived(themedTWMerge("rounded-md w-full p-2 mb-2 border-2 border-surface-dark",
        getBaseColorClassesForColorCategoryStyleVariant("surface"),
           errors.length > 0 && "bg-error-lightest border-error text-error-text"
    ));

    let style:string=$state.raw("");
</script>


<FormElementErrorMessage {errors} />
<RadioGroupPrimitive.Root 
    bind:value
    {id}
    data-testid={testId}
    {...restProps}
    class={styleClass}
    {style}
    onValueChange={() => {
    $formValidator.clearErrors(name);
    {disabled}
    errorProp = undefined;
    
     // FIXME - force update
     $formValidator = $formValidator;
}}>
    {@render providedChildren(id, testId)}
    <RadioGroupPrimitive.Input name={name} />
</RadioGroupPrimitive.Root>
