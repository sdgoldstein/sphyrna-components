import type {ZodType} from "zod";
import type {BaseComponentProps, ParentComponentProps} from "../component";

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

interface SelectOptionProps extends BaseComponentProps
{
    value: any;
    label: string;
}

interface SelectOptionDescriptor
{
    value: any;
    label: string;
}
export type{SelectProps, SelectOptionProps, SelectOptionDescriptor};