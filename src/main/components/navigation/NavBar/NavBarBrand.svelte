<script module lang="ts">
    import { getContext } from "svelte";
    import {
        DEFAULT_COLOR_CATEGORY_VARIANT,
        themedTWMerge,
        getBaseColorClassesForColorCategoryStyleVariant,
        getBaseColorStyleForDynamicColorTheme,
    } from "../../theme/theme.js";
    import { type ParentComponentProps, buildTestId } from "../component.js";
    import { SIZE_CONTEXT_NAME } from "./NavBar.svelte";

    export interface NavBarBrandProps extends ParentComponentProps {}
</script>

<script lang="ts">
    let {
        id,
        testid: testidProp,
        colorVariant = DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        children: providedChildren,
        ...restProps
    }: NavBarBrandProps = $props();

    let testId = $derived(buildTestId(id, testidProp));

    let size = getContext(SIZE_CONTEXT_NAME);
    const styleClass = $derived(
        themedTWMerge(
            "flex items-stretch space-x-2",
            `text-${size}xl`,
            "font-semibold",
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

<a href="/" {...restProps}>
    <div class={styleClass} {style}>
        {@render providedChildren(id, testId)}
    </div>
</a>
