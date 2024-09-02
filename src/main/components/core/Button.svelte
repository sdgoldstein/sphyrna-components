<svelte:options runes={true} />

<!--
Category -> NamedVariant -> Feature -> Element - -> State
-->

<script lang="ts">
 
    import { Button as ButtonPrimitive } from "bits-ui";
    import type {ParentComponentProps} from "../component.js"
    import {DEFAULT_COLOR_CATEGORY_VARIANT, themedTWMerge, getBaseColorClassesForColorCategoryStyleVariant, getBaseColorStyleForDynamicColorTheme} from "../../theme/theme.js"

    interface ButtonProps extends ParentComponentProps {
        onclick?: (e: MouseEvent) => void;
        classOverride?:string;
    }

    let { colorVariant=DEFAULT_COLOR_CATEGORY_VARIANT, dynamicColorTheme, classOverride="", children, ...restProps }: ButtonProps = $props();

    const styleClass = themedTWMerge("m-0 rounded-lg py-2 px-4 transition-all active:scale-[95%]",
        getBaseColorClassesForColorCategoryStyleVariant(colorVariant),
        `hover:bg-${colorVariant}-dark`,
        classOverride
    );
</script>

<ButtonPrimitive.Root
	type="button"
    class={styleClass}
    style={dynamicColorTheme ? getBaseColorStyleForDynamicColorTheme(dynamicColorTheme, colorVariant) : ""}
	{...restProps}
    on:click={onclick}>
    {@render children()}
</ButtonPrimitive.Root>

