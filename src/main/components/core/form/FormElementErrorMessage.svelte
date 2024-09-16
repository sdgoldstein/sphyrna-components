<svelte:options runes={true} />

<script module lang="ts">
    import type { BaseComponentProps } from "../../component.js";
    import type { FormError } from "./form.js";

    export interface FormElementErrorMessageProps extends BaseComponentProps {
        errors: FormError[];
    }
</script>

<script lang="ts">
    let { errors, ...restProps }: FormElementErrorMessageProps = $props();
</script>

{#if errors.length > 0}
    <div class="text-xs font-medium px-1 pb-1 text-error" {...restProps}>
        {errors[0].message}
    </div>
{/if}
