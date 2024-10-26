<script module lang="ts">
    import { getContext } from "svelte";
    import { DEFAULT_COLOR_CATEGORY_VARIANT, getBaseColorClassesForColorCategoryStyleVariant, getBaseColorStyleForDynamicColorTheme, themedTWMerge } from "../../theme/theme.js";
    import { type ParentComponentProps, buildTestId } from "../component.js";
    import { SIZE_CONTEXT_NAME } from "./NavBar.svelte";

    export interface NavMenuItemProps extends ParentComponentProps {
        href?:string;
    }
</script>

<script lang="ts">
    let { id, testid:testidProp, colorVariant=DEFAULT_COLOR_CATEGORY_VARIANT, dynamicColorTheme, href, children:providedChildren, ...restProps }: NavMenuItemProps = $props();

    let testId=$derived(buildTestId(id, testidProp));

    let size:number = getContext(SIZE_CONTEXT_NAME);
    const styleClass = themedTWMerge("text-center whitespace-nowrap font-medium cursor-pointer",
        getBaseColorClassesForColorCategoryStyleVariant(colorVariant)
    );

    const style = `font-size:${.25+size*.25}rem; ${(dynamicColorTheme) ? getBaseColorStyleForDynamicColorTheme(dynamicColorTheme, colorVariant) : ""}`;
</script>

<!-- Calcualted arbitrary tailwind classes don't work, so need to use style for text size-->
{#if href}
    <a href={href} class={styleClass} {style} {...restProps}>{@render providedChildren(id, testId)}</a>
{:else}
    <div class={styleClass} {style} {...restProps}>{@render providedChildren(id, testId)}</div>
{/if}

