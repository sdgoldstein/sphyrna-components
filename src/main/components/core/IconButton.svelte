<!--
Category -> NamedVariant -> Feature -> Element - -> State
-->

<script lang="ts">
    import { Button as ButtonPrimitive } from "bits-ui";
    import { buildTestId } from "../component.js";
    import {
        DEFAULT_COLOR_CATEGORY_VARIANT,
        themedTWMerge,
        getBaseColorClassesForColorCategoryStyleVariant,
        getBaseColorStyleForDynamicColorTheme,
        type DesignTokenColorVariantLookup,
        isValidDesignTokenColorVariant,
    } from "../../theme/theme.js";
    import type { IconButtonProps } from "./iconButton.js";

    let {
        id,
        testid: testidProp,
        onclick = (e: MouseEvent) => {},
        colorVariant = DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        children: providedChildren,
        ...restProps
    }: IconButtonProps = $props();

    let testId = $derived(buildTestId(id, testidProp));

    const buttonClassFromColorVariant: DesignTokenColorVariantLookup = {
        primary: "hover:bg-primary-dark",
        secondary: "hover:bg-secondary-dark",
        tertiary: "hover:bg-tertiary-dark",
    };

    const styleClass = $derived(
        themedTWMerge(
            "flex justify-center items-center w-8 h-8 rounded-full mb-1 p-2 transition-all active:scale-[95%]",
            isValidDesignTokenColorVariant(colorVariant)
                ? getBaseColorClassesForColorCategoryStyleVariant(colorVariant)
                : "",
            isValidDesignTokenColorVariant(colorVariant)
                ? buttonClassFromColorVariant[colorVariant]
                : "",
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

<ButtonPrimitive.Root
    {id}
    data-testid={testId}
    type="button"
    class={styleClass}
    {style}
    {...restProps}
    on:click={onclick}
>
    {@render providedChildren(id, testId)}
</ButtonPrimitive.Root>
