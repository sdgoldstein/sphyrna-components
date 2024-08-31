<script module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { zExtended } from "../../../main/components/core/forms/form";
    import Input from "../../../main/components/core/forms/Input.svelte";
    import Form from "../../../main/components/core/forms/Form.svelte";

    const { Story } = defineMeta({});

    const dynamicColorTheme = {
        colorThemes: new Map([
            ["foo", { bgColor: "#900000", textColor: "#000020" }],
        ]),
    };
</script>

<Story name="Default">
    <Form>
        <Input
            id="name_input_id"
            name="name_input_name"
            placeholder="John Stevens"
            schema={zExtended.requiredString("Name")}
        />
    </Form>
</Story>
