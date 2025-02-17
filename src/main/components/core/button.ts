import type {ParentComponentProps} from "../component";

interface ButtonProps extends ParentComponentProps
{
    onclick?: (e: MouseEvent) => void;
    classOverride?: string;
}

export type{ButtonProps};