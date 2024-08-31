<svelte:options runes={true} />

<script module lang="ts">
    import type { ParentComponentProps } from "../../component.js";

    export interface SubmitButtonProps extends ParentComponentProps {
    }
</script>

<script lang="ts">
    import Button from "../Button.svelte";

    let { colorVariant, dynamicColorTheme, children, ...restProps }: SubmitButtonProps = $props();
</script>

<Button type="submit" {colorVariant} {dynamicColorTheme} {...restProps}>{@render children()}</Button>
