<script module lang="ts">
    import { buildTestId, type ParentComponentProps } from "../component.js";
    import { Select as SelectPrimitive } from "bits-ui";
    import { Check } from "lucide-svelte";

    export interface SelectOptionProps extends ParentComponentProps {
        value: any;
    }
</script>

<script lang="ts">
    let {
        id,
        testid: testidProp,
        value,
        children: providedChildren,
        ...restProps
    }: SelectOptionProps = $props();
    let testId = $derived(buildTestId(id, testidProp));
</script>

<SelectPrimitive.Item
    class="flex w-full select-none rounded-sm px-2 py-1 items-center justify-between"
    {value}
    {...restProps}
>
    {@render providedChildren(id, testId)}

    <!--    <Check class="h-4 w-4" /> -->
</SelectPrimitive.Item>
