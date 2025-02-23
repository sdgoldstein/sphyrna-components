<script lang="ts">
    import { setContext } from "svelte";
    import {
        DEFAULT_COLOR_CATEGORY_VARIANT,
        themedTWMerge,
        getBaseColorClassesForColorCategoryStyleVariant,
        getBaseColorStyleForDynamicColorTheme,
        getDynamicColorTheme,
    } from "../../../theme/theme.js";
    import { buildTestId } from "../../component.js";
    import { SIZE_CONTEXT_NAME, type NavBarProps } from "./navBar.js";

    let {
        id,
        testid: testidProp,
        size = 3,
        colorVariant = DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        children: providedChildren,
        ...restProps
    }: NavBarProps = $props();

    let testId = $derived(buildTestId(id, testidProp));

    setContext(SIZE_CONTEXT_NAME, size);

    const styleClass = $derived(
        themedTWMerge(
            "px-4 py-3.5 border-b-2 w-full flex justify-start items-center",
            `border-${colorVariant}-text`,
            getBaseColorClassesForColorCategoryStyleVariant(colorVariant),
        ),
    );

    const style = $derived(
        dynamicColorTheme
            ? `border-color:${getDynamicColorTheme(dynamicColorTheme, colorVariant).textColor} !important; ${getBaseColorStyleForDynamicColorTheme(dynamicColorTheme, colorVariant)}`
            : "",
    );
</script>

<div class={styleClass} {style} {...restProps}>
    {@render providedChildren(id, testId)}
</div>
