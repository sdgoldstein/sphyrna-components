import type {BaseComponentProps} from "../component";

interface CancelButtonProps extends BaseComponentProps
{
    oncancel: (event: MouseEvent) => void;
}

export type{CancelButtonProps};