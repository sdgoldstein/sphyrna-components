import type {ZodType} from "zod";
import type {ParentComponentProps} from "../component";

interface RadioGroupProps extends ParentComponentProps
{
    name: string;
    value?: string;
    schema?: ZodType;
    disabled?: boolean;
    error?: string;
    onValueChange?: (newValue: string) => void;
}

interface RadioGroupOptionProps extends ParentComponentProps
{
    value: string;
    disabled?: boolean;
}

export type{RadioGroupProps, RadioGroupOptionProps};