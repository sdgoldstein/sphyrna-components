<script lang="ts">
    import Button from "../core/Button.svelte";
    import type { CancelButtonProps } from "./cancelButton";

    let {
        id,
        testid,
        colorVariant = "surface-dark",
        dynamicColorTheme,
        oncancel,
    }: CancelButtonProps = $props();
</script>

<!-- I use to have hover:bg-surface-darkest, but we don't have hover on the submit buttong, so removing it to be consistent-->
<Button
    {id}
    {testid}
    {colorVariant}
    {dynamicColorTheme}
    classOverride="bg-surface-dark border-surface-darkest border"
    onclick={oncancel}>Cancel</Button
>
