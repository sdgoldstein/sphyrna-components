import type {Snippet} from "svelte";
import type {ParentComponentProps} from "../component";

interface ModalProps extends ParentComponentProps
{
    open: boolean;
    title: Snippet;
    description: Snippet;
    footer?: Snippet<[ string | undefined, string|undefined ]>;
}

export type{ModalProps};