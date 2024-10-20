<script module lang="ts">
    import { defineMeta, setTemplate, type Args, type StoryContext  } from "@storybook/addon-svelte-csf";
    import Input from "../../../main/components/core/form/Input.svelte";
    import Form from "../../../main/components/core/form/Form.svelte";
    import { zExtended } from "../../../main/components/core/form/form";
    
    const { Story } = defineMeta({
        component: Input,
        args: {
            placeholder: "John Smith",
            id: "name_input_id",
            name: "name_input_name",
            schema: zExtended.requiredString("Name")
        },
    });

    const dynamicColorTheme = {
        colorThemes: new Map([
            ["foo", { coreColor: "#900000", textColor: "#000020" }],
        ]),
    };
</script>

<script lang="ts">
    setTemplate(template);
  </script>

{#snippet template({ ...args }: Args<typeof Story>, context: StoryContext<typeof Story>)}
    <Form onsubmit={()=>{}}>
        <Input {...args}/>
    </Form>
{/snippet}

<Story name="Default" />
<Story name="Primary Color Variant" args={{ colorVariant: "primary" }} />
<Story name="Secondary Color Variant" args={{ colorVariant: "secondary" }} />
<Story name="Dynamic Color Theme" args={{ colorVariant: "foo", dynamicColorTheme:dynamicColorTheme  }} />
<Story name="With Value" args={{ value: "My Value" }} />
<Story name="With Error" args={{ error:"You messed up!"  }} />

<!-- FIXME - Cannot test error messages.  See Form.stories.svelte-->