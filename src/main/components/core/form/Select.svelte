

<script module lang="ts">
    import { Select as SelectPrimitive } from "bits-ui";
    import ChevronDown from "lucide-svelte/icons/chevron-down";
    import { buildTestId, type ParentComponentProps } from "../../component.js";
    import { DEFAULT_COLOR_CATEGORY_VARIANT, getBaseColorClassesForColorCategoryStyleVariant, getDynamicColorTheme, themedTWMerge } from "../../../theme/theme.js";
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";
    import { type FormError, type ZodFormValidator, FORM_VALIDATOR_CONTEXT_KEY, SimpleFormError } from "./form.js";
    import type { ZodType } from "zod";
    import FormElementErrorMessage from "./FormElementErrorMessage.svelte";

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
        testid:testidProp,
        selected = $bindable(),
        name,
        placeholder,
        schema,
        colorVariant=DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        error:errorProp,
        onchange=()=>{},
        children:providedChildren,
        ...restProps
    }: SelectProps = $props();
    
    let testId=$derived(buildTestId(id, testidProp));

    /**************/
    /*
        The code between the star comments is repeated for all form elements
        I tried to put out into a FormElementValidationHelper.svelte
        But, I need to make "errors" bindable so that the Input or other form element component can read it for sytling, etc.
        It's not possible to have both a property that is bindale and have its value be derived
        "state_invalid_placement" - $derived can only be used to initialize a variable 
    */
    /**************/
    const formValidator: Writable<ZodFormValidator> = getContext(
        FORM_VALIDATOR_CONTEXT_KEY,
    );
    if (schema) {
        $formValidator.register(name, schema);
    }
    let errors: FormError[] = $derived(
        errorProp
            ? [new SimpleFormError(errorProp)]
            : $formValidator.getErrors(name),
    );
    /**************/

    let baseStyleClass = $derived(themedTWMerge("rounded-md w-full p-2 mb-2 border-2 border-surface-dark outline-none",
        getBaseColorClassesForColorCategoryStyleVariant("surface-lightest"),
        `focus:border-${colorVariant}`,
           errors.length > 0 && "bg-error-lightest border-error text-error-text"
    ));

  let triggerStyleClass = $derived(themedTWMerge(baseStyleClass, "flex items-center justify-between"));
    let contentStyleClass = $derived(themedTWMerge(baseStyleClass, "relative z-50 overflow-hidden shadow-md"));

    let style:string=$state.raw("");
    let onFocusStyle = $derived(dynamicColorTheme ? `border-color:${getDynamicColorTheme(dynamicColorTheme, colorVariant).coreColor} !important;`:"");
</script>

<FormElementErrorMessage {errors} />
<SelectPrimitive.Root 
    {id}
    data-testid={testId}
    bind:selected={selected}
    {...restProps}
    onSelectedChange={(event)=>{
        $formValidator.clearErrors(name);
        errorProp = undefined;
      
        // FIXME - force update
        $formValidator = $formValidator;
  
    }}>
    <SelectPrimitive.Trigger class={triggerStyleClass} 
        {id}
        data-testid={testId} 
        style={style}   
        onfocus={() => { style=onFocusStyle }}
        onblur={() => { style=""}}>
        <SelectPrimitive.Value placeholder={placeholder} class="data_placeholder:text-surface-text-placeholder"/>
        <ChevronDown class="h-4 w-4 opacity-50" />
    </SelectPrimitive.Trigger>
    <SelectPrimitive.Content class={contentStyleClass}>
        <div class="w-full p-1">
            {@render providedChildren(id, testId)}
        </div>
    </SelectPrimitive.Content>
    <SelectPrimitive.Input {name}/>
</SelectPrimitive.Root>
