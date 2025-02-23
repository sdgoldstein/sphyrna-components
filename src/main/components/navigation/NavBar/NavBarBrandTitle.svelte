<script lang="ts">
    import { getContext } from "svelte";
    import {
        DEFAULT_COLOR_CATEGORY_VARIANT,
        getBaseColorClassesForColorCategoryStyleVariant,
        getBaseColorStyleForDynamicColorTheme,
        themedTWMerge,
    } from "../../../theme/theme.js";
    import { buildTestId } from "../../component.js";
    import { SIZE_CONTEXT_NAME, type NavBarBrandTitleProps } from "./navBar.js";

    let {
        id,
        testid: testidProp,
        colorVariant = DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        children: providedChildren,
        ...restProps
    }: NavBarBrandTitleProps = $props();

    let testId = $derived(buildTestId(id, testidProp));

    let size = getContext(SIZE_CONTEXT_NAME);
    const titleStyleClass = $derived(
        themedTWMerge(
            "text-center whitespace-nowrap",
            `text-${size}xl`,
            "font-semibold",
            "h-[1lh]",
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

<div class={titleStyleClass} {style} {...restProps}>
    {@render providedChildren(id, testId)}
</div>
