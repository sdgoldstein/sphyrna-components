<script module lang="ts">
    import Label from "./../../../main/components/core/forms/Label.svelte";
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { zExtended } from "../../../main/components/core/forms/form";
    import Input from "../../../main/components/core/forms/Input.svelte";

    import SubmitCancelModal from "../../../main/components/core/modal/SubmitCancelModal.svelte";
    import Button from "../../../main/components/core/Button.svelte";

    const { Story } = defineMeta({});

    const dynamicColorTheme = {
        colorThemes: new Map([
            ["foo", { bgColor: "#900000", textColor: "#000020" }],
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
    >
        {#snippet title()}
            Submit Modal Default Story
        {/snippet}
        <Label for="name_input_id">Name</Label>
        <Input
            id="name_input_id"
            name="name_input_name"
            placeholder="John Stevens"
            schema={zExtended.requiredString("Name")}
        />
    </SubmitCancelModal>
</Story>
