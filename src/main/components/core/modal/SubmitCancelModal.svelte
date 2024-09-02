<svelte:options runes={true} />

<script module lang="ts">
    import type { ParentComponentProps } from "../../component.js";

    import SubmitButton from "../form/SubmitButton.svelte";

    export type FormSubmitEvent = SubmitEvent & {
        currentTarget: EventTarget & HTMLFormElement;
    };

    export interface SubmitCancelModalProps
        extends ParentComponentProps {
        open: boolean;
        title: string;
        description:string;
        actionButtonText:string;
        onsubmit:FormSubmissionHandler;
    }
</script>

<script lang="ts">
    import Modal from "./Modal.svelte";
    import CancelButton from "./CancelButton.svelte";    
    import Form, { type FormSubmissionHandler } from "../form/Form.svelte";

    function close()
    {
        open = false;
    }

    let {
        open = $bindable(),
        title:titleStringOnly,
        description:descriptionStringOnly,
        actionButtonText,
        colorVariant, 
        dynamicColorTheme,
        children:providedChildren,
        onsubmit:providedSubmitHandler,
    }: SubmitCancelModalProps = $props();
</script>

<Modal bind:open>
    {#snippet title()}
        {titleStringOnly}
    {/snippet}
    {#snippet description()}
        {descriptionStringOnly}
    {/snippet}
    <Form id="submit_cancel_form" class="w-full" onsubmit={providedSubmitHandler}>
        {@render providedChildren()}
    </Form>
    {#snippet footer()}
        <div class="flex justify-end w-full py-2 gap-x-2">
            <SubmitButton form="submit_cancel_form" {colorVariant} {dynamicColorTheme}>{actionButtonText}</SubmitButton>
            <CancelButton oncancel={close} />
        </div>
    {/snippet}  
</Modal>
