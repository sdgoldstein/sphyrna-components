<script module lang="ts">
    import Label from "../../../main/components/form/Label.svelte";
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Input from "../../../main/components/form/Input.svelte";

    import SubmitCancelModal from "../../../main/components/modal/SubmitCancelModal.svelte";

    import { zExtended } from "../../../main/components/form/form.js";
    import Select from "../../../main/components/form/Select.svelte";
    import SelectOption from "../../../main/components/form/SelectOption.svelte";

    import RadioGroupOption from "../../../main/components/form/RadioGroupOption.svelte";
    import RadioGroup from "../../../main/components/form/RadioGroup.svelte";
    import { Button } from "../../../main";

    const { Story } = defineMeta({
        component: SubmitCancelModal,
    });

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
            <SelectOption value="one" label="One" />
            <SelectOption value="two" label="Two" />
            <SelectOption value="three" label="Three" />
            <SelectOption value="four" label="Fourth Option" />
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
