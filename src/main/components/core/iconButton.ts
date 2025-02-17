import type {ParentComponentProps} from "../component";

interface IconButtonProps extends ParentComponentProps
{
    onclick?: (e: MouseEvent) => void;
}

export type{IconButtonProps};