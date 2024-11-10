<script module lang="ts">
    import { DEFAULT_COLOR_CATEGORY_VARIANT, getBaseColorClassesForColorCategoryStyleVariant, getBaseColorStyleForDynamicColorTheme, themedTWMerge} from "../../theme/theme.js";
    import { type BaseComponentProps, buildTestId } from "../component.js";
    import Image from "../core/Image.svelte";

    export interface NavBarBrandLogoProps extends BaseComponentProps {
        src: string;
        alt: string;
        aspectRatio?:number;
    }
</script>

<script lang="ts">
    let { id, testid:testidProp, src, alt, aspectRatio=1, colorVariant=DEFAULT_COLOR_CATEGORY_VARIANT, dynamicColorTheme, ...restProps }: NavBarLogoProps = $props();

    let testId=$derived(buildTestId(id, testidProp));

    const styleClass = $derived(themedTWMerge("h-[1lh]",
        getBaseColorClassesForColorCategoryStyleVariant(colorVariant)
    ));
    const style = $derived(`width:${aspectRatio}lh; ${(dynamicColorTheme) ? getBaseColorStyleForDynamicColorTheme(dynamicColorTheme, colorVariant) : ""}`);
</script>

<!-- Using the w-[*lh] tailwind class did not save space for the image, leading to the layout redrawing after the logo image was loaded.  Therefore, moved it to the style attribute-->
<div class={styleClass} {style}>
    <Image {src} {alt} class="h-full w-full"/>
</div>