<script lang="ts">
    import {
        DEFAULT_COLOR_CATEGORY_VARIANT,
        getDynamicColorTheme,
        isValidDesignTokenColorVariant,
        themedTWMerge,
        type DesignTokenColorVariantLookup,
    } from "../../theme/theme.js";

    import {
        FORM_VALIDATOR_CONTEXT_KEY,
        type ZodFormValidator,
        type FormError,
        SimpleFormError,
    } from "./form.js";

    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";
    import type { InputProps } from "./input.js";
    import FormElementErrorMessage from "./FormElementErrorMessage.svelte";
    import { buildTestId } from "../component.js";

    let {
        id,
        testid: testidProp,
        name,
        placeholder,
        value,
        schema,
        colorVariant = DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        error: errorProp,
        ...restProps
    }: InputProps = $props();

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

    let testId = $derived(buildTestId(id, testidProp));

    const inputClassFromColorVariant: DesignTokenColorVariantLookup = {
        primary: "focus:border-primary",
        secondary: "focus:border-secondary",
        tertiary: "focus:border-tertiary",
    };

    let styleClass = $derived(
        themedTWMerge(
            "rounded-md w-full p-2 mb-2 border-2 border-surface-dark bg-surface-lightest text-surface-text outline-none placeholder:text-surface-text-placeholder",
            isValidDesignTokenColorVariant(colorVariant)
                ? inputClassFromColorVariant[colorVariant]
                : "",
            errors.length > 0 &&
                "bg-error-lightest border-error text-error-text",
        ),
    );

    let style: string = $state.raw("");
    let onFocusStyle: string = $derived(
        dynamicColorTheme
            ? `border-color:${getDynamicColorTheme(dynamicColorTheme, colorVariant).coreColor} !important;`
            : "",
    );
</script>

<FormElementErrorMessage {errors} />
<input
    {id}
    data-testid={testId}
    {name}
    {placeholder}
    {value}
    class={styleClass}
    {style}
    onfocus={() => {
        style = onFocusStyle;
    }}
    onblur={() => {
        style = "";
    }}
    {...restProps}
    oninput={() => {
        $formValidator.clearErrors(name);
        errorProp = undefined;

        // FIXME - force update
        $formValidator = $formValidator;
    }}
/>
