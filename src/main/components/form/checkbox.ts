import type {ParentComponentProps} from "../component";

interface CheckboxProps extends ParentComponentProps
{
    name: string;
    value?: string;
    disabled?: boolean;
    checked?: boolean;
    onValueChange?: (checked: boolean) => void;
}

export type{CheckboxProps};