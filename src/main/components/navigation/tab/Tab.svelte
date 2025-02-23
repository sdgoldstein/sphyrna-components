<script lang="ts">
    import { getContext } from "svelte";
    import { Tabs as TabsPrimitive } from "bits-ui";
    import { DEFAULT_COLOR_CATEGORY_VARIANT } from "../../../theme/theme.js";
    import { buildTestId } from "../../component.js";
    import type { TabDescriptor, TabProps } from "./tabbedPane.js";

    let {
        id,
        testid: testidProp,
        name,
        label,
        colorVariant = DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        children: providedChildren,
        ...restProps
    }: TabProps = $props();

    let testId = $derived(buildTestId(id, testidProp));

    getContext<TabDescriptor[]>("foo").push({
        name: name,
        label: label,
    } as TabDescriptor);
</script>

<TabsPrimitive.Content value={name} class="p-2" {...restProps}>
    {@render providedChildren(id, testId)}
</TabsPrimitive.Content>
