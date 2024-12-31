<!--
Category -> NamedVariant -> Feature -> Element - -> State
-->
<script module lang="ts">
    export interface AccordionPanelItemHeaderProps
        extends ParentComponentProps {}
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
    import { ChevronDown } from "lucide-svelte";

    let {
        id,
        testid: testidProp,
        colorVariant = DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        children: providedChildren,
        ...restProps
    }: AccordionPanelItemHeaderProps = $props();

    let testId = $derived(buildTestId(id, testidProp));

    const styleClass = $derived(
        themedTWMerge(
            getBaseColorClassesForColorCategoryStyleVariant(colorVariant),
        ),
    );

    const style = $derived(
        dynamicColorTheme
            ? getBaseColorStyleForDynamicColorTheme(
                  dynamicColorTheme,
                  colorVariant,
              )
            : "",
    );

    let triggerStyleClass = $derived(
        themedTWMerge(
            "w-full p-1 flex items-center justify-between [&[data-state=open]>svg]:rotate-180 ",
            getBaseColorClassesForColorCategoryStyleVariant(colorVariant),
        ),
    );
</script>

<AccordionPrimitive.Header {...restProps}>
    <AccordionPrimitive.Trigger class={triggerStyleClass} {style}>
        {@render providedChildren(id, testId)}
        <ChevronDown class="h-4 w-4 transition-all duration-100" />
    </AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
