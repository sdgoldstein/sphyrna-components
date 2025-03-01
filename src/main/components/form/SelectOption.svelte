<script lang="ts">
    import { Select as SelectPrimitive } from "bits-ui";
    import { Check } from "lucide-svelte";
    import type {
        SelectOptionDescriptor,
        SelectOptionProps,
    } from "./select.js";
    import { getContext } from "svelte";
    import { buildTestId } from "../component.js";

    let {
        id,
        testid: testidProp,
        value: providedValue,
        typeaheadIndex: label,
        children: providedChildren,
        ...restProps
    }: SelectOptionProps = $props();

    let testId = $derived(buildTestId(id, testidProp));
    getContext<SelectOptionDescriptor[]>("optionRegistration").push({
        value: providedValue,
        typeaheadIndex: label,
        children: providedChildren,
    } as SelectOptionDescriptor);
</script>

<SelectPrimitive.Item
    class="flex w-full select-none rounded-sm px-2 py-1 items-center justify-between"
    value={providedValue.toString()}
    {label}
    {...restProps}
>
    {#snippet children({ selected })}
        {@render providedChildren(id, testId)}
        {#if selected}
            <Check class="h-4 w-4" />
        {/if}
    {/snippet}
</SelectPrimitive.Item>
