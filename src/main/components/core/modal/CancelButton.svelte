<svelte:options runes={true} />

<script module lang="ts">
    import type { BaseComponentProps } from "../../component.js";

    export interface CancelButtonProps
        extends BaseComponentProps {
        oncancel: (event: MouseEvent) => void;
    }
</script>

<script lang="ts">
    import Button from "../Button.svelte";

    let { colorVariant="surface-dark", dynamicColorTheme, oncancel }: CancelButtonProps = $props();
</script>

<Button {colorVariant} {dynamicColorTheme} classOverride="border-surface-darkest border" {oncancel}>Cancel</Button>
