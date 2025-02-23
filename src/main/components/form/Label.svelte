<script lang="ts">
    import { Label } from "bits-ui";
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

<Label.Root class="text-xs font-medium px-1" for={forProp} {...restProps}>
    {@render providedChildren(id, testId)}</Label.Root
>
