<script module>
    import Label from "../../../main/components/core/form/Label.svelte";
    import { defineMeta } from "@storybook/addon-svelte-csf";

    import Input from "../../../main/components/core/form/Input.svelte";
    import Form from "../../../main/components/core/form/Form.svelte";
    import { zExtended } from "../../../main/components/core/form/form";

    const { Story } = defineMeta({});

    const dynamicColorTheme = {
        colorThemes: new Map([
            ["foo", { coreColor: "#900000", textColor: "#000020" }],
        ]),
    };
</script>

<Story name="Default">
    <Form>
        <Label for="name_input_id">Name</Label>
        <Input
            id="name_input_id"
            name="name_input_name"
            placeholder="John Stevens"
            schema={zExtended.requiredString("Name")}
        />
    </Form>
</Story>
