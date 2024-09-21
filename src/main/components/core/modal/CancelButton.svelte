<svelte:options runes={true} />

<script module lang="ts">
    import { type BaseComponentProps } from "../../component.js";

    export interface CancelButtonProps
        extends BaseComponentProps {
        oncancel: (event: MouseEvent) => void;
    }
</script>

<script lang="ts">
    import Button from "../Button.svelte";

    let { id, testid, colorVariant="surface-dark", dynamicColorTheme, oncancel }: CancelButtonProps = $props();

</script>

<Button {id} {testid} {colorVariant} {dynamicColorTheme} classOverride="hover:bg-surface-darkest bg-surface-dark border-surface-darkest border" {oncancel}>Cancel</Button>
