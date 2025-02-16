<script module lang="ts">
    import { buildTestId, type ParentComponentProps } from "../../component.js";

    export interface SubmitButtonProps extends ParentComponentProps {
        form?: string;
    }
</script>

<script lang="ts">
    import Button from "../Button.svelte";

    let {
        id,
        testid: testidProp,
        form,
        colorVariant,
        dynamicColorTheme,
        children: providedChildren,
        ...restProps
    }: SubmitButtonProps = $props();

    let testId: string | undefined = $derived(buildTestId(id, testidProp));
</script>

<Button
    {id}
    testid={testId}
    type="submit"
    {form}
    {colorVariant}
    {dynamicColorTheme}
    {...restProps}>{@render providedChildren(id, testId)}</Button
>
