<script lang="ts">
    import { Checkbox as CheckboxPrimitive } from "bits-ui";
    import { buildTestId } from "../component.js";
    import Label from "./Label.svelte";
    import {
        DEFAULT_COLOR_CATEGORY_VARIANT,
        getBaseColorStyleForDynamicColorTheme,
        isValidDesignTokenColorVariant,
        themedTWMerge,
        type DesignTokenColorVariantLookup,
    } from "../../theme/theme.js";
    import type { CheckboxProps } from "./checkbox.js";

    let {
        id,
        testid: testidProp,
        name,
        value,
        disabled,
        colorVariant = DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        checked,
        onValueChange = (checked: boolean) => {},
        children: providedChildren,
    }: CheckboxProps = $props();

    let testId = $derived(buildTestId(id, testidProp));

    const checkboxClassFromColorVariant: DesignTokenColorVariantLookup = {
        primary: "data-[state=checked]:bg-primary",
        secondary: "data-[state=checked]:bg-secondary",
        tertiary: "data-[state=checked]:bg-tertiary",
    };

    let styleClass = themedTWMerge(
        `border h-[.65lh] w-[.65lh] shrink-0 rounded-sm disabled:cursor-not-allowed disabled:opacity-50 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50`,
        isValidDesignTokenColorVariant(colorVariant)
            ? checkboxClassFromColorVariant[colorVariant]
            : "",
    );

    let style = $derived(
        checked && dynamicColorTheme
            ? `${getBaseColorStyleForDynamicColorTheme(dynamicColorTheme, colorVariant)} !important;`
            : "",
    );
</script>

<div class="flex">
    <CheckboxPrimitive.Root
        {id}
        {name}
        {value}
        bind:checked
        {disabled}
        class={styleClass}
        {style}
        onCheckedChange={(checked: boolean | "indeterminate") => {
            if (checked != "indeterminate") {
                onValueChange(checked);
            }
        }}
    ></CheckboxPrimitive.Root>
    <Label for={`${id}_label_id`}>{@render providedChildren(id, testId)}</Label>
</div>
