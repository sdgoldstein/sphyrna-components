<script module lang="ts">
    export interface CheckboxProps extends ParentComponentProps {
        name: string;
        value?: string;
        disabled?: boolean;
        checked?: boolean;
    }
</script>

<script lang="ts">
    import { Checkbox as CheckboxPrimitive } from "bits-ui";
    import { buildTestId, type ParentComponentProps } from "../../component.js";
    import Label from "./Label.svelte";

    let {
        id,
        testid: testidProp,
        name,
        value,
        disabled,
        checked,
        children: providedChildren,
    }: CheckboxProps = $props();

    let testId = $derived(buildTestId(id, testidProp));

    let styleClass =
        "border data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground h-[.65lh] w-[.65lh] shrink-0 rounded-sm disabled:cursor-not-allowed disabled:opacity-50 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50";
</script>

<div class="flex">
    <CheckboxPrimitive.Root
        {id}
        {name}
        {value}
        {checked}
        {disabled}
        class={styleClass}
    >
        <CheckboxPrimitive.Indicator></CheckboxPrimitive.Indicator>
        <CheckboxPrimitive.Input />
    </CheckboxPrimitive.Root>
    <Label for={`${id}_label_id`}>{@render providedChildren(id, testId)}</Label>
</div>
