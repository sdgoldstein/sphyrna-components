<svelte:options runes={true} />

<script lang="ts">
    import {
        DEFAULT_COLOR_CATEGORY_VARIANT,
        getBaseColorClassesForColorCategoryStyleVariant,
        getDynamicColorTheme,
        themedTWMerge,
    } from "../../../theme/theme.js";

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
    import { buildTestId } from "../../component.js";

    let {
        id,
        testid: testidProp,
        name,
        placeholder,
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

    let styleClass = $derived(
        themedTWMerge(
            "rounded-md w-full p-2 mb-2 border-2 border-surface-dark outline-none placeholder:text-surface-text-placeholder",
            getBaseColorClassesForColorCategoryStyleVariant("surface-lightest"),
            `focus:border-${colorVariant}`,
            errors.length > 0 &&
                "bg-error-lightest border-error text-error-text",
        ),
    );

    let style: string = $state.raw("");
</script>

<FormElementErrorMessage {errors} />
<input
    {id}
    data-testid={testId}
    {name}
    {placeholder}
    class={styleClass}
    {style}
    onfocus={() => {
        if (dynamicColorTheme) {
            style = `border-color:${getDynamicColorTheme(dynamicColorTheme, colorVariant).coreColor} !important;`;
        }
    }}
    onblur={() => {
        if (dynamicColorTheme) {
            style = "";
        }
    }}
    {...restProps}
    oninput={() => {
        $formValidator.clearErrors(name);
        errorProp = undefined;

        // FIXME - force update
        $formValidator = $formValidator;
    }}
/>
