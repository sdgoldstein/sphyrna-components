<svelte:options runes={true} />

<script module lang="ts">
    import { DEFAULT_COLOR_CATEGORY_VARIANT, getBaseColorClassesForColorCategoryStyleVariant, getDynamicColorTheme, themedTWMerge } from "../../../theme/theme.js";

    import { FORM_VALIDATOR_CONTEXT_KEY, type ZodFormValidator, type FormError } from "./form.js";

    import type { BaseComponentProps } from "../../component.js";

    export interface InputProps extends BaseComponentProps {
        name: string;
        placeholder?: string;
        schema?: ZodType;
        error?: string;
    }
</script>

<script lang="ts">
 
    import { getContext } from "svelte";
    import { type ZodType } from "zod";
    import type { Writable } from "svelte/store";

    let {
        id,
        name,
        placeholder,
        schema,
        colorVariant=DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        error,
        ...restProps
    }: InputProps = $props();

    const formValidator: Writable<ZodFormValidator> = getContext(
        FORM_VALIDATOR_CONTEXT_KEY,
    );
    if (schema) {
        $formValidator.register(name, schema);
    }
    let errors: FormError[] = $derived($formValidator.getErrors(name));

    let styleClass = $derived(themedTWMerge("rounded-md w-full p-2 border-2 border-surface-dark outline-none",
        getBaseColorClassesForColorCategoryStyleVariant("surface-lightest"),
        `focus:border-${colorVariant}`,
        errors.length > 0 && "bg-error border-error text-error-text"
    ));

    let style:string=$state.raw("");
</script>

<input
    id={id}
    name={name}
    placeholder={placeholder}
    class={styleClass}
    style={style}
    onfocus={() => { if (dynamicColorTheme) { style=`border-color:${getDynamicColorTheme(dynamicColorTheme, colorVariant).coreColor} !important;`}}}
    onblur={() => { if (dynamicColorTheme) { style=""}}}
    {...restProps}
    onchange={() => {
        $formValidator.clearErrors(name);

        // FIXME - force update
        $formValidator = $formValidator;
    }}
/>
{#if errors.length > 0}
    <span class="text-error-text">{errors[0].getMessage()}</span>
{/if}
