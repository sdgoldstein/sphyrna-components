<script lang="ts">
    import { RadioGroup as RadioGroupPrimitive } from "bits-ui";
    import { buildTestId } from "../component.js";
    import {
        DEFAULT_COLOR_CATEGORY_VARIANT,
        getBaseColorClassesForColorCategoryStyleVariant,
        themedTWMerge,
    } from "../../theme/theme.js";
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";
    import {
        type FormError,
        type ZodFormValidator,
        FORM_VALIDATOR_CONTEXT_KEY,
        SimpleFormError,
    } from "./form.js";

    import FormElementErrorMessage from "./FormElementErrorMessage.svelte";
    import type { RadioGroupProps } from "./radioGroup.js";

    let {
        id,
        testid: testidProp,
        value = $bindable(),
        name,
        schema,
        colorVariant = DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        disabled = false,
        error: errorProp,
        onValueChange = (newValue: string) => {},
        children: providedChildren,
        ...restProps
    }: RadioGroupProps = $props();
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
            "rounded-md w-full p-2 mb-2 border-2 border-surface-dark",
            getBaseColorClassesForColorCategoryStyleVariant("surface"),
            errors.length > 0 &&
                "bg-error-lightest border-error text-error-text",
        ),
    );

    let style: string = $state.raw("");
</script>

<FormElementErrorMessage {errors} />
<RadioGroupPrimitive.Root
    {id}
    data-testid={testId}
    {value}
    {name}
    {...restProps}
    class={styleClass}
    {style}
    {disabled}
    onValueChange={(newValue: string) => {
        value = newValue;

        $formValidator.clearErrors(name);
        errorProp = undefined;

        // FIXME - force update
        $formValidator = $formValidator;

        // FIXME
        onValueChange(newValue);
    }}
>
    {@render providedChildren(id, testId)}
</RadioGroupPrimitive.Root>
