<script lang="ts">
    import { buildTestId } from "../component.js";
    import Button from "../core/Button.svelte";
    import type { SubmitButtonProps } from "./submitButton.js";

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
