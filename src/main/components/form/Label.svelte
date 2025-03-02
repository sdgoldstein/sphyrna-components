<script lang="ts">
    import { Label as LabelPrimitive } from "bits-ui";
    import { buildTestId } from "../component.js";
    import type { LabelProps } from "./label.js";
    let {
        id,
        testid: testidProp,
        for: forProp,
        children: providedChildren,
        ...restProps
    }: LabelProps = $props();
    let testId = $derived(buildTestId(id, testidProp));
</script>

<LabelPrimitive.Root
    class="text-xs font-medium px-1"
    for={forProp}
    {...restProps}
>
    {@render providedChildren(id, testId)}</LabelPrimitive.Root
>
