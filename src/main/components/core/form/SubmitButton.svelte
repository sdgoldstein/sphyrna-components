

<script module lang="ts">
    import { buildTestId, type ParentComponentProps } from "../../component.js";

    export interface SubmitButtonProps extends ParentComponentProps {
    }
</script>

<script lang="ts">
    import Button from "../Button.svelte";

    let { id, testid:testidProp, colorVariant, dynamicColorTheme, children:providedChildren, ...restProps }: SubmitButtonProps = $props();

    let testId:string|undefined=$derived(buildTestId(id, testidProp));
</script>

<Button id={id} testid={testId} type="submit" {colorVariant} {dynamicColorTheme} {...restProps}>{@render providedChildren(id, testId)}</Button>
