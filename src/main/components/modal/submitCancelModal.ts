import type {ParentComponentProps} from "../component";
import type {FormSubmissionHandler} from "../form/form";

type FormSubmitEvent = SubmitEvent&
{
    currentTarget: EventTarget&HTMLFormElement;
};

interface SubmitCancelModalProps extends ParentComponentProps
{
    open: boolean;
    title: string;
    description: string;
    actionButtonText: string;
    onsubmit: FormSubmissionHandler;
}

export type{SubmitCancelModalProps, FormSubmitEvent};