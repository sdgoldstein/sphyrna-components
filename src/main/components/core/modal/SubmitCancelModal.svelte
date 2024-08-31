<svelte:options runes={true} />

<script module lang="ts">
    import type { ParentComponentProps } from "../../component.js";

    import SubmitButton from "../forms/SubmitButton.svelte";

    import type { Snippet } from "svelte";

    export type FormSubmitEvent = SubmitEvent & {
        currentTarget: EventTarget & HTMLFormElement;
    };

    export interface SubmitCancelModalProps
        extends ParentComponentProps {
        open: boolean;
        title: Snippet;
        actionButtonText:string;
        onsubmit:FormSubmissionHandler;
    }
</script>

<script lang="ts">
    import Modal from "./Modal.svelte";
    import CancelButton from "./CancelButton.svelte";    
    import Form, { type FormSubmissionHandler } from "../forms/Form.svelte";

    function close()
    {
        open = false;
    }

    let {
        open = $bindable(),
        title,
        actionButtonText,
        children:providedChildren,
        onsubmit:providedSubmitHandler,
    }: SubmitCancelModalProps = $props();
</script>

<Modal
    {title}
    bind:open>
    <Form id="submit_cancel_form" onsubmit={providedSubmitHandler}>
        {@render providedChildren()}
    </Form>
    {#snippet footer()}
        <div class="flex justify-end w-full py-2 gap-x-2">
            <SubmitButton form="submit_cancel_form">{actionButtonText}</SubmitButton>
            <CancelButton oncancel={close}/>
        </div>
    {/snippet}  
</Modal>
