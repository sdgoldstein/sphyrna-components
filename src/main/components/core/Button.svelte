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
    import type { ButtonProps } from "./button.js";

    let {
        id,
        testid: testidProp,
        colorVariant = DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        classOverride = "",
        children: providedChildren,
        ...restProps
    }: ButtonProps = $props();

    let testId = $derived(buildTestId(id, testidProp));

    const buttonClassFromColorVariant: DesignTokenColorVariantLookup = {
        primary: "hover:bg-primary-dark",
        secondary: "hover:bg-secondary-dark",
        tertiary: "hover:bg-tertiary-dark",
    };

    const styleClass = $derived(
        themedTWMerge(
            "m-0 rounded-lg py-2 px-4 transition-all active:scale-[95%] text-nowrap",
            isValidDesignTokenColorVariant(colorVariant)
                ? getBaseColorClassesForColorCategoryStyleVariant(colorVariant)
                : "",
            isValidDesignTokenColorVariant(colorVariant)
                ? buttonClassFromColorVariant[colorVariant]
                : "",
            classOverride,
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
