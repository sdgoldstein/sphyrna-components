import type {ParentComponentProps} from "../component";

interface ButtonProps extends ParentComponentProps
{
    onclick?: (e: MouseEvent) => void;
    classOverride?: string;
    type?: "button"|"submit"|"reset";
    form?: string;
}

export type{ButtonProps};