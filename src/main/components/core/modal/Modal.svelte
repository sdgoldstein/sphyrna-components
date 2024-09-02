<svelte:options runes={true} />

<script lang="ts">
    import type {ParentComponentProps} from "../../component.js"
    import type { Snippet } from "svelte";
    import FlexModal from "./FlexModal.svelte";

    interface ModalProps extends ParentComponentProps {
        open: boolean;
        title:Snippet;
        description:Snippet;
        footer?:Snippet;
    }

    let {
        open = $bindable(),
        title,
        description,
        children:providedChildren,
        footer:providedFooter,
    }: ModalProps = $props();
</script>

<FlexModal bind:open>
    {#snippet header()}
        <div class="flex w-full py-2 items-center justify-start text-lg font-bold">
            {@render title()}
        </div>
    {/snippet} 
    <div class="flex flex-col justify-start w-full">
        <div class="flex py-2 w-full">
            {@render description()}
        </div>
        <div class="flex py-2 w-full">
            {@render providedChildren()}
        </div>
    </div>
    {#snippet footer()}
        <div class="flex w-full">
            {@render providedFooter?.()}
        </div>
    {/snippet}
</FlexModal>



