<script module lang="ts">
    import Label from "../../../main/components/core/form/Label.svelte";
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Input from "../../../main/components/core/form/Input.svelte";

    import SubmitCancelModal from "../../../main/components/core/modal/SubmitCancelModal.svelte";
    import Button from "../../../main/components/core/Button.svelte";
    import { zExtended } from "../../../main/components/core/form/form.js";
    import Select from "../../../main/components/core/form/Select.svelte";
    import SelectOption from "../../../main/components/core/form/SelectOption.svelte";

    import RadioGroupOption from "../../../main/components/core/form/RadioGroupOption.svelte";
    import RadioGroup from "../../../main/components/core/form/RadioGroup.svelte";

    const { Story } = defineMeta({
        component: SubmitCancelModal,
    });

    const dynamicColorTheme = {
        colorThemes: new Map([
            ["foo", { coreColor: "#900000", textColor: "#000020" }],
        ]),
    };

    let defaultOpen = false;

    function handleSubmit(formData: FormData): void {}
</script>

<Story name="Default">
    <Button
        onclick={() => {
            defaultOpen = true;
        }}>Open Modal</Button
    >
    <SubmitCancelModal
        bind:open={defaultOpen}
        actionButtonText="Save It!"
        onsubmit={handleSubmit}
        title="Submit Modal Default Story"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    >
        <Label for="name_input_id">Name</Label>
        <Input
            id="name_input_id"
            name="name_input_name"
            placeholder="John Stevens"
            schema={zExtended.requiredString("Name")}
        />

        <Label for="name_select_id">Item</Label>
        <Select
            id="name_select_id"
            name="name_select_name"
            placeholder="Select an Item"
        >
            <SelectOption value="one">One</SelectOption>
            <SelectOption value="two">Two</SelectOption>
            <SelectOption value="three">Three</SelectOption>
            <SelectOption value="four">Fourth Option</SelectOption>
        </Select>

        <Label for="name_radio_id">Select a Radio</Label>
        <RadioGroup id="name_radio_id" name="name_radio_name">
            <RadioGroupOption value="one">One</RadioGroupOption>
            <RadioGroupOption value="two">Two</RadioGroupOption>
            <RadioGroupOption value="three">Three</RadioGroupOption>
            <RadioGroupOption value="four">Fourth Option</RadioGroupOption>
        </RadioGroup>
    </SubmitCancelModal>
</Story>
