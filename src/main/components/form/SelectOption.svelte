<script module lang="ts">
    import { buildTestId, type BaseComponentProps } from "../component.js";
    import { Select as SelectPrimitive } from "bits-ui";
    import { Check } from "lucide-svelte";
    import type { SelectOptionDescriptor } from "./select.js";
    import { getContext } from "svelte";

    export interface SelectOptionProps extends BaseComponentProps {
        value: any;
        label: string;
    }
</script>

<script lang="ts">
    let {
        id,
        testid: testidProp,
        value,
        label,
        ...restProps
    }: SelectOptionProps = $props();
    let testId = $derived(buildTestId(id, testidProp));

    getContext<SelectOptionDescriptor[]>("foo").push({
        value: value,
        label: label,
    } as SelectOptionDescriptor);
</script>

<SelectPrimitive.Item
    class="flex w-full select-none rounded-sm px-2 py-1 items-center justify-between"
    {value}
    {label}
    {...restProps}
>
    {#snippet children({ selected })}
        {label}
        {#if selected}
            <Check class="h-4 w-4" />
        {/if}
    {/snippet}
</SelectPrimitive.Item>
