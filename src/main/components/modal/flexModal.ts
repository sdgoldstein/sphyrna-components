import type {Snippet} from "svelte";
import type {ParentComponentProps} from "../component";

interface FlexModalProps extends ParentComponentProps
{
    open: boolean;
    header?: Snippet<[ string | undefined, string|undefined ]>;
    footer?: Snippet<[ string | undefined, string|undefined ]>;
}

export type{FlexModalProps};