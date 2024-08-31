<svelte:options runes={true} />

<script module lang="ts">
    import { Label } from "bits-ui";
    import type { ParentComponentProps } from "../../component.js";

    export interface LabelProps extends ParentComponentProps {
        for: string;
    }
</script>

<script lang="ts">
    let { for: forProp, children, ...restProps }: LabelProps = $props();
</script>

<Label.Root class="text-xs font-semibold px-1" for={forProp} {...restProps}>{@render children()}</Label.Root>
