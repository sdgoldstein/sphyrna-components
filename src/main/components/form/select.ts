import type {ZodType} from "zod";
import type {ParentComponentProps} from "../component";
import type {Snippet} from "svelte";

type SelectValue = string|number;

interface SelectProps extends ParentComponentProps
{
    name: string;
    value?: SelectValue;
    placeholder?: string;
    schema?: ZodType;
    disabled?: boolean;
    error?: string;
    onValueChange?: (newValue: SelectValue) => void;
}

interface SelectOptionProps extends ParentComponentProps
{
    value: SelectValue;
    typeaheadIndex: string;
}

interface SelectOptionDescriptor
{
    value: SelectValue;
    typeaheadIndex: string;
    children: Snippet;
}

export type{SelectProps, SelectOptionProps, SelectOptionDescriptor};