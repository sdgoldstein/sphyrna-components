<svelte:options runes={true} />

<!--
Category -> NamedVariant -> Feature -> Element - -> State
-->
<script module lang="ts">
    export interface ButtonBarProps extends ParentComponentProps {
    }
</script>
<script lang="ts">
    import { Toolbar as ToolbarPrimitive } from "bits-ui";
    import type {ParentComponentProps} from "../component.js"
    import {DEFAULT_COLOR_CATEGORY_VARIANT, themedTWMerge, getBaseColorClassesForColorCategoryStyleVariant, getBaseColorStyleForDynamicColorTheme} from "../../theme/theme.js"

    let { colorVariant=DEFAULT_COLOR_CATEGORY_VARIANT, dynamicColorTheme, children, ...restProps }: ButtonBarProps = $props();

    const styleClass = themedTWMerge("fixed z-30 mt-1 ml-1",
        getBaseColorClassesForColorCategoryStyleVariant(colorVariant)
    );
</script>

<ToolbarPrimitive.Root
	orientation="vertical"
    class={styleClass}
    style={dynamicColorTheme ? getBaseColorStyleForDynamicColorTheme(dynamicColorTheme, colorVariant) : ""}
	{...restProps}>
    {@render children()}
</ToolbarPrimitive.Root>

