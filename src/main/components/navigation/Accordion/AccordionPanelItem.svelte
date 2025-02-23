<!--
Category -> NamedVariant -> Feature -> Element - -> State
-->

<script lang="ts">
    import { Accordion as AccordionPrimitive } from "bits-ui";
    import { buildTestId } from "../../component.js";
    import { DEFAULT_COLOR_CATEGORY_VARIANT } from "../../../theme/theme.js";
    import type { AccordionPanelItemProps } from "./accordion.js";

    let {
        id,
        testid: testidProp,
        colorVariant = DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        name,
        children: providedChildren,
        ...restProps
    }: AccordionPanelItemProps = $props();

    let testId = $derived(buildTestId(id, testidProp));
</script>

<AccordionPrimitive.Item value={name} {...restProps}>
    {@render providedChildren(id, testId)}
</AccordionPrimitive.Item>
