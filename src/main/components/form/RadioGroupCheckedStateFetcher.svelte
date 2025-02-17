<script module lang="ts">
    import type { BaseComponentProps } from "../component.js";

    export interface RadioGroupCheckedStateFetcherProps
        extends BaseComponentProps {
        checked: boolean;
        fetchedChecked: boolean;
    }
</script>

<script lang="ts">
    let {
        checked,
        fetchedChecked = $bindable(),
    }: RadioGroupCheckedStateFetcherProps = $props();

    fetchedChecked = checked;
</script>
