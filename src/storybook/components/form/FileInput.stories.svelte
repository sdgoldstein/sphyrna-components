<script module lang="ts">
    import {
        defineMeta,
        setTemplate,
        type Args,
        type StoryContext,
    } from "@storybook/addon-svelte-csf";
    import FileInput from "../../../main/components/form/FileInput.svelte";
    import Form from "../../../main/components/form/Form.svelte";
    import { zExtended } from "../../../main/components/form/form.js";
    import type { DynamicColorTheme } from "../../../main/theme/theme";

    const { Story } = defineMeta({
        component: FileInput,
        args: {},
    });

    const dynamicColorTheme = {
        colorThemes: new Map([
            [
                "foo",
                {
                    coreColor: "#900000",
                    textColor: "#000020",
                } as DynamicColorTheme,
            ],
        ]),
    };
</script>

<script lang="ts">
    setTemplate(template);
</script>

{#snippet template(
    { ...args }: Args<typeof Story>,
    context: StoryContext<typeof Story>,
)}
    <Form onsubmit={() => {}}>
        <FileInput
            placeholder=""
            id="name_file_input_id"
            name="name_file_input_name"
            schema={zExtended.requiredString("file")}
            {...args}
        />
    </Form>
{/snippet}

<Story name="Default" />
<Story name="Primary Color Variant" args={{ colorVariant: "primary" }} />
<Story name="Secondary Color Variant" args={{ colorVariant: "secondary" }} />
<Story
    name="Dynamic Color Theme"
    args={{ colorVariant: "foo", dynamicColorTheme: dynamicColorTheme }}
/>
<Story name="With Error" args={{ error: "You messed up!" }} />

<!-- FIXME - Cannot test error messages.  See Form.stories.svelte-->
