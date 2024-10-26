<script module lang="ts">
    import { setContext } from "svelte";
    import { DEFAULT_COLOR_CATEGORY_VARIANT, themedTWMerge, getBaseColorClassesForColorCategoryStyleVariant, getBaseColorStyleForDynamicColorTheme, getDynamicColorTheme } from "../../theme/theme.js";
    import { type ParentComponentProps, buildTestId } from "../component.js";

    export interface NavBarProps extends ParentComponentProps {
        size?:number;
    }

    export const SIZE_CONTEXT_NAME:string="SIZE_CONTEXT";
</script>

<script lang="ts">
    let { id, testid:testidProp, size=3, colorVariant=DEFAULT_COLOR_CATEGORY_VARIANT, dynamicColorTheme, children:providedChildren, ...restProps }: NavBarProps = $props();

    let testId=$derived(buildTestId(id, testidProp));

    setContext(SIZE_CONTEXT_NAME, size);

    const styleClass = themedTWMerge("px-4 py-3.5 border-b-2 w-full flex justify-start items-center",
        `border-${colorVariant}-text`,
        getBaseColorClassesForColorCategoryStyleVariant(colorVariant)
    );

    const style=(dynamicColorTheme) ? `border-color:${getDynamicColorTheme(dynamicColorTheme, colorVariant).textColor} !important; ${getBaseColorStyleForDynamicColorTheme(dynamicColorTheme, colorVariant)}` : "";
</script>

<div class={styleClass} {style} {...restProps} >
    {@render providedChildren(id, testId)}
</div>