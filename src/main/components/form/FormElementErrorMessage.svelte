<script module lang="ts">
    import { buildTestId, type BaseComponentProps } from "../component.js";
    import type { FormError } from "./form.js";

    export interface FormElementErrorMessageProps extends BaseComponentProps {
        errors: FormError[];
    }
</script>

<script lang="ts">
    let {
        id,
        testid: testidProp,
        errors,
        ...restProps
    }: FormElementErrorMessageProps = $props();
    let testId = $derived(buildTestId(id, testidProp));
</script>

{#if errors.length > 0}
    <div
        data-testid={testId}
        class="text-xs font-medium px-1 pb-1 text-error"
        {...restProps}
    >
        {errors[0].message}
    </div>
{/if}
