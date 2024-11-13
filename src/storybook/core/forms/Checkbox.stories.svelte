<script module lang="ts">
    import { defineMeta, setTemplate, type Args, type StoryContext  } from "@storybook/addon-svelte-csf";
    import Form from "../../../main/components/core/form/Form.svelte";
    import  Checkbox  from "../../../main/components/core/form/Checkbox.svelte";
    
    const { Story } = defineMeta({
        component: Checkbox,
        args: {
            id: "name_checkbox_id",
            name: "name_checkbox_name",
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
        <Checkbox {...args}>A Checkbox</Checkbox>
    </Form>
{/snippet}

<Story name="Default" />
<Story name="Primary Color Variant" args={{ colorVariant: "primary" }} />
<Story name="Secondary Color Variant" args={{ colorVariant: "secondary" }} />
<Story name="Dynamic Color Theme" args={{ colorVariant: "foo", dynamicColorTheme:dynamicColorTheme  }} />
<Story name="Checked" args={{ checked: true }} />
<Story name="Disabled" args={{ disabled:true  }} />

<!-- FIXME - Cannot test error messages.  See Form.stories.svelte-->