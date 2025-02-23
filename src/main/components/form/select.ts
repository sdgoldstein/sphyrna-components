import type {ZodType} from "zod";
import type {ParentComponentProps} from "../component";

interface SelectProps extends ParentComponentProps
{
    name: string;
    value?: string;
    placeholder: string;
    schema?: ZodType;
    disabled?: boolean;
    error?: string;
    onValueChange?: (newValue: unknown) => void;
}

interface SelectOptionDescriptor
{
    value: any;
    label: string;
}
export type{SelectProps, SelectOptionDescriptor};