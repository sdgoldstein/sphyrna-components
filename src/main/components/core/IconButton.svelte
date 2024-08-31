<svelte:options runes={true} />

<!--
Category -> NamedVariant -> Feature -> Element - -> State
-->
<script module lang="ts">
    interface IconButtonProps extends ParentComponentProps {
        onclick?: (e: MouseEvent) => void;
    }
</script>

<script lang="ts">
    import { Button as ButtonPrimitive } from "bits-ui";
    import type { ParentComponentProps } from "../component.js";
    import {
        DEFAULT_COLOR_CATEGORY_VARIANT,
        themedTWMerge,
        getBaseColorClassesForColorCategoryStyleVariant,
        getBaseColorStyleForDynamicColorTheme,
    } from "../../theme/theme.js";

    let {
        colorVariant = DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        children,
        ...restProps
    }: IconButtonProps = $props();

    const styleClass = themedTWMerge(
        "flex justify-center items-center w-8 h-8 rounded-full mb-1 p-2 transition-all active:scale-[95%]",
        getBaseColorClassesForColorCategoryStyleVariant(colorVariant),
    );
</script>

<ButtonPrimitive.Root
    type="button"
    class={styleClass}
    style={dynamicColorTheme
        ? getBaseColorStyleForDynamicColorTheme(dynamicColorTheme, colorVariant)
        : ""}
    {...restProps}
    on:click={onclick}
>
    {@render children()}
</ButtonPrimitive.Root>
