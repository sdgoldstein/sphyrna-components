<script lang="ts" module>
    export interface FileInputProps extends BaseComponentProps {
        name: string;
        placeholder?: string;
        schema?: ZodType;
        error?: string;
        value?: string;
    }
</script>

<script lang="ts">
    import {
        DEFAULT_COLOR_CATEGORY_VARIANT,
        getBaseColorClassesForColorCategoryStyleVariant,
        themedTWMerge,
    } from "../../../theme/theme.js";

    import {
        FORM_VALIDATOR_CONTEXT_KEY,
        type ZodFormValidator,
        type FormError,
        SimpleFormError,
    } from "./form.js";

    import { getContext, onMount } from "svelte";
    import type { Writable } from "svelte/store";

    import FormElementErrorMessage from "./FormElementErrorMessage.svelte";
    import { buildTestId, type BaseComponentProps } from "../../component.js";
    import type { ZodType } from "zod";
    import type { InputProps } from "./input.js";
    import Label from "./Label.svelte";
    import Button from "../Button.svelte";

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

    onMount(() => {
        const fileInput = document.getElementById(id);
        if (fileInput === null) {
            throw new Error("Could not find file element");
        }

        const form = fileInput.closest("form");
        if (form === null) {
            throw new Error("Could not find parent form element");
        }

        form.method = "POST";
        form.enctype = "multipart/form-data";
    });

    let testId = $derived(buildTestId(id, testidProp));

    let styleClass = $derived(
        themedTWMerge(
            "rounded-md w-full p-2 mb-2 border-2 border-surface-dark outline-none placeholder:text-surface-text-placeholder",
            getBaseColorClassesForColorCategoryStyleVariant("surface-lightest"),
            errors.length > 0 &&
                "bg-error-lightest border-error text-error-text",
        ),
    );
</script>

<FormElementErrorMessage {errors} />
<div class="flex gap-2 items-center">
    <input
        data-testid={testId}
        {placeholder}
        {value}
        class={styleClass}
        {...restProps}
        oninput={() => {
            $formValidator.clearErrors(name);
            errorProp = undefined;

            // FIXME - force update
            $formValidator = $formValidator;
        }}
        readonly
    />
    <Label {colorVariant} {dynamicColorTheme} for={id}
        ><div class="flex flex-col">
            <Button
                {colorVariant}
                {dynamicColorTheme}
                onclick={() => {
                    // FIXME - only allows one file input on page
                    const fileInput = document.getElementById(id);
                    if (fileInput === null) {
                        throw new Error("Could not find file element");
                    }
                    fileInput.click();
                }}>Choose File</Button
            ><span class="mb-2"></span>
        </div></Label
    >
</div>
<input
    {id}
    {name}
    class="hidden"
    type="file"
    onchange={() => {
        $formValidator.clearErrors(name);
        errorProp = undefined;

        // FIXME - force update
        $formValidator = $formValidator;

        // FIXME - only allows one file input on page
        const fileInput = document.getElementById(id);
        if (fileInput === null) {
            throw new Error("Could not find file element");
        }
        value = fileInput.files[0].name;
    }}
/>
