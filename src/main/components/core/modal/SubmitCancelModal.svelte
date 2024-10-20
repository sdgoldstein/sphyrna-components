<svelte:options runes={true} />

<script module lang="ts">
    import { buildTestId, type ParentComponentProps } from "../../component.js";

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
        id,
        testid:testidProp, 
        open = $bindable(),
        title:titleStringOnly,
        description:descriptionStringOnly,
        actionButtonText,
        colorVariant, 
        dynamicColorTheme,
        children:providedChildren,
        onsubmit:providedSubmitHandler,
    }: SubmitCancelModalProps = $props();

    let testId:string|undefined=$derived(buildTestId(id, testidProp));
</script>

<Modal bind:open {id} testid={testId}>
    {#snippet title()}
        {titleStringOnly}
    {/snippet}
    {#snippet description()}
        {descriptionStringOnly}
    {/snippet}
    <Form id={`${id}_form`} class="w-full" onsubmit={providedSubmitHandler}>
        {@render providedChildren(id, testId)}
    </Form>
    {#snippet footer(id, testId)}
        <div class="flex justify-end w-full py-2 gap-x-2">
            <SubmitButton id={id ? `${id}_submit_button_id` : undefined} form={`${id}_form`} {colorVariant} {dynamicColorTheme}>{actionButtonText}</SubmitButton>
            <CancelButton id={id ? `${id}_cancel_button_id`: undefined} oncancel={()=>{close()}} />
        </div>
    {/snippet}  
</Modal>
