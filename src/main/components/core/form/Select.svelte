<svelte:options runes={true} />

<script module lang="ts">
    import { Select as SelectPrimitive } from "bits-ui";
    import ChevronDown from "lucide-svelte/icons/chevron-down";
    import type { ParentComponentProps } from "../../component.js";
    import { DEFAULT_COLOR_CATEGORY_VARIANT, getBaseColorClassesForColorCategoryStyleVariant, getDynamicColorTheme, themedTWMerge } from "../../../theme/theme.js";
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";
    import { type FormError, type ZodFormValidator, FORM_VALIDATOR_CONTEXT_KEY } from "./form.js";
    import type { ZodType } from "zod";

    export interface SelectProps extends ParentComponentProps {
        name:string;
        selected?: {value:any,label:string};
        placeholder:string;
        schema?: ZodType;
        error?: string;
        onchange?:(e: Event) => void;
    }
</script>

<script lang="ts">

    let {
        id,
        selected = $bindable(),
        name,
        placeholder,
        schema,
        colorVariant=DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        error,
        onchange=()=>{},
        children,
        ...restProps
    }: SelectProps = $props();
    const formValidator: Writable<ZodFormValidator> = getContext(
        FORM_VALIDATOR_CONTEXT_KEY,
    );
    if (schema) {
        $formValidator.register(name, schema);
    }
    let errors: FormError[] = $derived($formValidator.getErrors(name));

    let styleClass = $derived(themedTWMerge("rounded-md w-full p-2 mb-2 border-2 border-surface-dark outline-none",
        getBaseColorClassesForColorCategoryStyleVariant("surface-lightest"),
        `focus:border-${colorVariant}`,
           errors.length > 0 && "bg-error border-error text-error-text"
    ));

    let style:string=$state.raw("");
</script>

{#if errors.length > 0}
    <div class="text-xs font-medium px-1 text-error">
        {errors[0].getMessage()}
    </div>
{/if}
<SelectPrimitive.Root 
    bind:selected={selected}
    {...restProps}
    onOpenChange={() => {
    error = undefined;
}} onSelectedChange={onchange}>
    <SelectPrimitive.Trigger class={themedTWMerge(styleClass, "flex items-center justify-between")}  
        style={style}   
        onfocus={() => { if (dynamicColorTheme) { style=`border-color:${getDynamicColorTheme(dynamicColorTheme, colorVariant).coreColor} !important;`}}}
        onblur={() => { if (dynamicColorTheme) { style=""}}}>
        <SelectPrimitive.Value placeholder={placeholder}/>
        <ChevronDown class="h-4 w-4 opacity-50" />
    </SelectPrimitive.Trigger>
    <SelectPrimitive.Content class={themedTWMerge(styleClass, "relative z-50 overflow-hidden shadow-md")}>
        <div class="w-full p-1">
            {@render children()}
        </div>
    </SelectPrimitive.Content>
    <SelectPrimitive.Input {name}/>
</SelectPrimitive.Root>
