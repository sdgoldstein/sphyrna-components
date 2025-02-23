<script lang="ts">
    import { Select as SelectPrimitive } from "bits-ui";
    import { buildTestId } from "../component.js";
    import {
        DEFAULT_COLOR_CATEGORY_VARIANT,
        getDynamicColorTheme,
        isValidDesignTokenColorVariant,
        themedTWMerge,
        type DesignTokenColorVariantLookup,
    } from "../../theme/theme.js";
    import { getContext, setContext } from "svelte";
    import type { Writable } from "svelte/store";
    import {
        type FormError,
        type ZodFormValidator,
        FORM_VALIDATOR_CONTEXT_KEY,
        SimpleFormError,
    } from "./form.js";

    import FormElementErrorMessage from "./FormElementErrorMessage.svelte";
    import { ChevronDown } from "lucide-svelte";
    import type { SelectOptionDescriptor, SelectProps } from "./select.js";

    let {
        id,
        testid: testidProp,
        value = $bindable(),
        name,
        placeholder,
        schema,
        disabled = false,
        colorVariant = DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        error: errorProp,
        onValueChange = () => {},
        children: providedChildren,
        ...restProps
    }: SelectProps = $props();

    let testId = $derived(buildTestId(id, testidProp));

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

    const selectClassFromColorVariant: DesignTokenColorVariantLookup = {
        primary: "focus:border-primary",
        secondary: "focus:border-secondary",
        tertiary: "focus:border-tertiary",
    };

    let baseStyleClass = $derived(
        themedTWMerge(
            "rounded-md w-full p-2 mb-2 border-2 border-surface-dark bg-surface-lightest text-surface-text outline-none",
            isValidDesignTokenColorVariant(colorVariant)
                ? selectClassFromColorVariant[colorVariant]
                : "",
            disabled ? "bg-surface-dark text-surface-text-placeholder" : "",
            errors.length > 0 &&
                "bg-error-lightest border-error text-error-text",
        ),
    );

    let triggerStyleClass = $derived(
        themedTWMerge(
            baseStyleClass,
            "flex items-center justify-between data-placeholder:text-surface-text-placeholder",
        ),
    );
    let contentStyleClass = $derived(
        themedTWMerge(
            baseStyleClass,
            "relative z-50 overflow-hidden shadow-md overflow-y-auto w-[var(--bits-select-anchor-width)] min-w-[var(--bits-select-anchor-width)]",
        ),
    );

    let style: string = $state.raw("");
    let onFocusStyle = $derived(
        dynamicColorTheme
            ? `border-color:${getDynamicColorTheme(dynamicColorTheme, colorVariant).coreColor} !important;`
            : "",
    );

    const selectOptions: SelectOptionDescriptor[] = $state([]);
    setContext("foo", selectOptions);

    const selectedLabel = $derived(
        selectOptions.find((item) => item.value === value)?.label,
    );
</script>

<FormElementErrorMessage {errors} />
<SelectPrimitive.Root
    {id}
    data-testid={testId}
    type="single"
    {name}
    {value}
    {...restProps}
    {disabled}
    onValueChange={(newValue: string) => {
        value = newValue;

        $formValidator.clearErrors(name);
        errorProp = undefined;

        // FIXME - force update
        $formValidator = $formValidator;

        onValueChange(newValue);
    }}
>
    <SelectPrimitive.Trigger
        class={triggerStyleClass}
        {id}
        data-testid={testId}
        {name}
        {style}
        onfocus={() => {
            style = onFocusStyle;
        }}
        onblur={() => {
            style = "";
        }}
    >
        {selectedLabel ? selectedLabel : placeholder}
        <ChevronDown class="h-4 w-4 opacity-50" />
    </SelectPrimitive.Trigger>
    <SelectPrimitive.Portal>
        <SelectPrimitive.Content class={contentStyleClass}>
            <div class="w-full p-1">
                {@render providedChildren(id, testId)}
            </div>
        </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
</SelectPrimitive.Root>
