<script lang="ts">
    import {
        DEFAULT_COLOR_CATEGORY_VARIANT,
        getBaseColorClassesForColorCategoryStyleVariant,
        getBaseColorStyleForDynamicColorTheme,
        isValidDesignTokenColorVariant,
        themedTWMerge,
    } from "../../../theme/theme.js";
    import { buildTestId } from "../../component.js";
    import Image from "../../core/Image.svelte";
    import type { NavBarBrandLogoProps } from "./navBar.js";

    let {
        id,
        testid: testidProp,
        src,
        alt,
        aspectRatio = 1,
        colorVariant = DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        ...restProps
    }: NavBarBrandLogoProps = $props();

    let testId = $derived(buildTestId(id, testidProp));

    const styleClass = $derived(
        themedTWMerge(
            "h-[1lh]",
            isValidDesignTokenColorVariant(colorVariant)
                ? getBaseColorClassesForColorCategoryStyleVariant(colorVariant)
                : "",
        ),
    );
    const style = $derived(
        `width:${aspectRatio}lh; ${dynamicColorTheme ? getBaseColorStyleForDynamicColorTheme(dynamicColorTheme, colorVariant) : ""}`,
    );
</script>

<!-- Using the w-[*lh] tailwind class did not save space for the image, leading to the layout redrawing after the logo image was loaded.  Therefore, moved it to the style attribute-->
<div data-testid={testId} class={styleClass} {style} {...restProps}>
    <Image {src} {alt} />
</div>
