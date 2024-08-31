<svelte:options runes={true} />

<!-- Overall form CSS inspired by:
  https://www.creative-tim.com/twcomponents/component/simple-registersign-up-form
  https://medium.theoremone.co/button-ambiguity-alignment-order-a42736e25334
   -->
<script module lang="ts">
    import { DefaultZodFormValidator, FORM_VALIDATOR_CONTEXT_KEY } from "./form";

    import type { ParentComponentProps } from "../../component.js";

    export type FormSubmissionHandler = (formData:FormData) => void;

    export type FormSubmitEvent = SubmitEvent & {
        currentTarget: EventTarget & HTMLFormElement;
    };

    export interface FormProps extends ParentComponentProps {
        onsubmit:FormSubmissionHandler;
    }
</script>

<script lang="ts">
    
    import { enhance } from "$app/forms";
    import { writable } from "svelte/store";
    import { setContext } from 'svelte';

    function validate(formData:FormData):boolean
    {
        let valueToReturn = $formValidator.validate(formData);

        // FIXME - for reactivity for input components to update their forms based on error states
        $formValidator = $formValidator;

        return valueToReturn;
    }

    let formValidator = writable(new DefaultZodFormValidator());
    setContext(FORM_VALIDATOR_CONTEXT_KEY, formValidator);

    let {
        id,
        children,
        onsubmit:providedSubmitHandler,
        ...restProps
    }: FormProps = $props();
</script>


<form {id} method="POST" {...restProps} use:enhance={({ formElement, formData, action, cancel, submitter }) => {
    let isValid = validate(formData);
    if (isValid)
    {
        providedSubmitHandler(formData);
    }

    cancel();
}}>
    {@render children()}
</form>

