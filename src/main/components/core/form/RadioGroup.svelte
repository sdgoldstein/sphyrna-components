<svelte:options runes={true} />

<script module lang="ts">
    import { RadioGroup as RadioGroupPrimitive } from "bits-ui";
    import type { ParentComponentProps } from "../../component.js";
    import { DEFAULT_COLOR_CATEGORY_VARIANT, getBaseColorClassesForColorCategoryStyleVariant, themedTWMerge } from "../../../theme/theme.js";
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";
    import { type FormError, type ZodFormValidator, FORM_VALIDATOR_CONTEXT_KEY } from "./form.js";
    import type { ZodType } from "zod";

    export interface RadioGroupProps extends ParentComponentProps {
        name:string;
        value?:string;
        schema?: ZodType;
        error?: string;
        onchange?:(e: Event) => void;
    }
</script>

<script lang="ts">

    let {
        id,
        value = $bindable(),
        name,
        schema,
        colorVariant=DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        error,
        onchange=()=>{},
        children,
        ...restProps
    }: RadioGroupProps = $props();
    const formValidator: Writable<ZodFormValidator> = getContext(
        FORM_VALIDATOR_CONTEXT_KEY,
    );
    if (schema) {
        $formValidator.register(name, schema);
    }
    let errors: FormError[] = $derived($formValidator.getErrors(name));

    let styleClass = $derived(themedTWMerge("rounded-md w-full p-2 mb-2 border-2 border-surface-dark",
        getBaseColorClassesForColorCategoryStyleVariant("surface"),
           errors.length > 0 && "bg-error border-error text-error-text"
    ));

    let style:string=$state.raw("");
</script>

<RadioGroupPrimitive.Root 
    bind:value
    {...restProps}
    class={styleClass}
    style={style}
    onValueChange={() => {
    error = undefined;
}}>
    {@render children()}
    <RadioGroupPrimitive.Input name={name} />
</RadioGroupPrimitive.Root>
