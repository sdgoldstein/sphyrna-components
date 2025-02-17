<script module lang="ts">
    import { type BaseComponentProps } from "../../component.js";

    export interface CancelButtonProps extends BaseComponentProps {
        oncancel: (event: MouseEvent) => void;
    }
</script>

<script lang="ts">
    import Button from "../Button.svelte";

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
