<!-- Overall form CSS inspired by:
  https://www.creative-tim.com/twcomponents/component/simple-registersign-up-form
  https://medium.theoremone.co/button-ambiguity-alignment-order-a42736e25334
   -->

<script lang="ts">
    import { enhance } from "$app/forms";
    import { writable } from "svelte/store";
    import { setContext } from "svelte";
    import {
        DefaultZodFormValidator,
        FORM_VALIDATOR_CONTEXT_KEY,
        type FormProps,
    } from "./form";
    import { buildTestId } from "../component";

    function validate(formData: FormData): boolean {
        let valueToReturn = $formValidator.validate(formData);

        // FIXME - for reactivity for input components to update their forms based on error states
        $formValidator = $formValidator;

        return valueToReturn;
    }

    let formValidator = writable(new DefaultZodFormValidator());
    setContext(FORM_VALIDATOR_CONTEXT_KEY, formValidator);

    let {
        id,
        testid: testidProp,
        children: providedChildren,
        onsubmit: providedSubmitHandler,
        ...restProps
    }: FormProps = $props();

    let testId = $derived(buildTestId(id, testidProp));
</script>

<form
    {id}
    method="POST"
    {...restProps}
    use:enhance={({ formElement, formData, action, cancel, submitter }) => {
        let isValid = validate(formData);
        if (isValid && providedSubmitHandler != undefined) {
            providedSubmitHandler(formData);
        }

        cancel();
    }}
>
    {@render providedChildren(id, testId)}
</form>
