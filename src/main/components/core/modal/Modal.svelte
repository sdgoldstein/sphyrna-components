<svelte:options runes={true} />

<script lang="ts">
    import type {ParentComponentProps} from "../../component.js"
    import type { Snippet } from "svelte";
    import FlexModal from "./FlexModal.svelte";
    import { Separator } from "bits-ui";

    interface ModalProps extends ParentComponentProps {
        open: boolean;
        title:Snippet;
        footer?:Snippet;
    }

    let {
        open = $bindable(),
        title,
        children:providedChildren,
        footer:providedFooter,
    }: ModalProps = $props();
</script>

<FlexModal bind:open={open}>
    {#snippet header()}
        <div class="flex w-full items-center justify-center text-lg font-bold">
            {@render title()}
        </div>
    {/snippet} 
    <Separator.Root class="-mx-5 mb-6 mt-5 block h-px bg-black" />
    <div class="flex w-full">
        {@render providedChildren()}
    </div>
    {#snippet footer()}
        <div class="flex w-full">
            {@render providedFooter?.()}
        </div>
    {/snippet}
</FlexModal>



