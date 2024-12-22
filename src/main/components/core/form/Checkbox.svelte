<script module lang="ts">
    export interface CheckboxProps extends ParentComponentProps {
        name: string;
        value?: string;
        disabled?: boolean;
        checked?: boolean;
        onValueChange?: (checked: boolean) => void;
    }
</script>

<script lang="ts">
    import { Checkbox as CheckboxPrimitive } from "bits-ui";
    import { buildTestId, type ParentComponentProps } from "../../component.js";
    import Label from "./Label.svelte";
    import {
        DEFAULT_COLOR_CATEGORY_VARIANT,
        getBaseColorStyleForDynamicColorTheme,
    } from "../../../theme/theme.js";

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

    let styleClass = `border data_checked:bg-${colorVariant} h-[.65lh] w-[.65lh] shrink-0 rounded-sm disabled:cursor-not-allowed disabled:opacity-50 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50`;

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
    >
        <CheckboxPrimitive.Indicator></CheckboxPrimitive.Indicator>
        <CheckboxPrimitive.Input />
    </CheckboxPrimitive.Root>
    <Label for={`${id}_label_id`}>{@render providedChildren(id, testId)}</Label>
</div>
