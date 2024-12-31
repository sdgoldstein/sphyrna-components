<!--
Category -> NamedVariant -> Feature -> Element - -> State
-->
<script module lang="ts">
    export interface AccordionPanelItemProps extends ParentComponentProps {
        name: string;
    }
</script>

<script lang="ts">
    import { Accordion as AccordionPrimitive } from "bits-ui";
    import { buildTestId, type ParentComponentProps } from "../component.js";
    import {
        DEFAULT_COLOR_CATEGORY_VARIANT,
        themedTWMerge,
        getBaseColorClassesForColorCategoryStyleVariant,
        getBaseColorStyleForDynamicColorTheme,
    } from "../../theme/theme.js";

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
