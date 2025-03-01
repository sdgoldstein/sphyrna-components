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
        value: providedValue = $bindable(),
        name,
        placeholder = "Select an Option",
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
            "relative z-50 overflow-hidden shadow-md overflow-y-auto w-[var(--bits-select-anchor-width)] p-1",
        ),
    );

    let style: string = $state.raw("");
    let onFocusStyle = $derived(
        dynamicColorTheme
            ? `border-color:${getDynamicColorTheme(dynamicColorTheme, colorVariant).coreColor} !important;`
            : "",
    );

    const selectOptions: SelectOptionDescriptor[] = $state([]);
    setContext("optionRegistration", selectOptions);

    let value = $state(providedValue?.toString());
    const selectedOption: SelectOptionDescriptor | undefined = $derived(
        selectOptions.find((item) => item.value === value),
    );

    function getValue(): string {
        return selectedOption ? selectedOption.value.toString() : "";
    }

    function setValue(newValue: string) {
        value = newValue;

        $formValidator.clearErrors(name);
        errorProp = undefined;

        // FIXME - force update
        $formValidator = $formValidator;

        if (selectedOption) {
            // FIXME - Will this ever not be defined?
            providedValue = selectedOption.value;
            onValueChange(providedValue);
        }
    }

    function addHiddenStyleIfClosed(
        wrapperProps: Record<string, unknown>,
        open: boolean,
    ) {
        if (!open) {
            wrapperProps.style = "display: none";
        }
        return wrapperProps;
    }
</script>

<FormElementErrorMessage {errors} />
<SelectPrimitive.Root
    type="single"
    {name}
    bind:value={getValue, setValue}
    {...restProps}
    {disabled}
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
        {#if selectedOption}
            {@render selectedOption.children()}
        {:else}
            {placeholder}
        {/if}

        <ChevronDown class="h-4 w-4 opacity-50" />
    </SelectPrimitive.Trigger>
    <SelectPrimitive.Portal>
        <SelectPrimitive.Content class={contentStyleClass} forceMount>
            {#snippet child({ wrapperProps, props, open })}
                <div {...addHiddenStyleIfClosed(wrapperProps, open)}>
                    <div {...props}>
                        {@render providedChildren(id, testId)}
                    </div>
                </div>
            {/snippet}
        </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
</SelectPrimitive.Root>
