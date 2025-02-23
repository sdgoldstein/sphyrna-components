<script lang="ts">
    import { buildTestId } from "../component.js";

    import FlexModal from "./FlexModal.svelte";
    import type { ModalProps } from "./modal.js";

    let {
        id,
        testid: testidProp,
        open = $bindable(),
        title,
        description,
        children: providedChildren,
        footer: providedFooter,
    }: ModalProps = $props();

    let testId: string | undefined = $derived(buildTestId(id, testidProp));
</script>

<FlexModal bind:open {id} testid={testId}>
    {#snippet header()}
        <div
            class="flex w-full py-2 items-center justify-start text-lg font-bold"
        >
            {@render title()}
        </div>
    {/snippet}
    <div class="flex flex-col justify-start w-full">
        <div class="flex py-2 w-full">
            {@render description()}
        </div>
        <div class="flex py-2 w-full">
            {@render providedChildren(id, testId)}
        </div>
    </div>
    {#snippet footer()}
        <div class="flex w-full">
            {@render providedFooter?.(id, testId)}
        </div>
    {/snippet}
</FlexModal>
