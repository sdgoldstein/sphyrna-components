<!--
Category -> NamedVariant -> Feature -> Element - -> State
-->

<script lang="ts">
    import { Toolbar as ToolbarPrimitive } from "bits-ui";
    import { buildTestId } from "../../component.js";
    import {
        DEFAULT_COLOR_CATEGORY_VARIANT,
        themedTWMerge,
        getBaseColorClassesForColorCategoryStyleVariant,
        getBaseColorStyleForDynamicColorTheme,
    } from "../../../theme/theme.js";
    import type { ButtonBarProps } from "./buttonBar.js";

    let {
        id,
        testid: testidProp,
        colorVariant = DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        children: providedChildren,
        ...restProps
    }: ButtonBarProps = $props();

    let testId = $derived(buildTestId(id, testidProp));

    const styleClass = $derived(
        themedTWMerge(
            "fixed z-30 mt-1 ml-1",
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
</script>

<ToolbarPrimitive.Root
    orientation="vertical"
    class={styleClass}
    {style}
    {...restProps}
>
    {@render providedChildren(id, testId)}
</ToolbarPrimitive.Root>
