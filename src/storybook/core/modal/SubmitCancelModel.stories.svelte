<script module lang="ts">
    import Label from "../../../main/components/core/form/Label.svelte";
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Input from "../../../main/components/core/form/Input.svelte";

    import SubmitCancelModal from "../../../main/components/core/modal/SubmitCancelModal.svelte";
    import Button from "../../../main/components/core/Button.svelte";
    import { zExtended } from "../../../main/components/core/form/form.js";

    const { Story } = defineMeta({});

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
    </SubmitCancelModal>
</Story>
