<script module lang="ts">
    import { defineMeta, setTemplate, type Args, type StoryContext  } from "@storybook/addon-svelte-csf";
    import Select from "../../../main/components/core/form/Select.svelte";
    import Form from "../../../main/components/core/form/Form.svelte";
    
    const { Story } = defineMeta({
        component: Select,
        args: {
            name: "select_name",
            placeholder: "Select an Item"
        },
    });

    const dynamicColorTheme = {
        colorThemes: new Map([
            ["foo", { coreColor: "#900000", textColor: "#000020" }],
        ]),
    };

    let selectedValue = {value:"three", label:"Three"};
</script>

<script lang="ts">
    import SelectOption from "../../../main/components/core/form/SelectOption.svelte";

    setTemplate(template);
  </script>

{#snippet template({ ...args }: Args<typeof Story>, context: StoryContext<typeof Story>)}
    <Form onsubmit={()=>{}}>
        <Select {...args}>
            <SelectOption value="one">One</SelectOption>
            <SelectOption value="two">Two</SelectOption>
            <SelectOption value="three">Three</SelectOption>
            <SelectOption value="four">Fourth Option</SelectOption>
        </Select>
    </Form>
{/snippet}

<Story name="Default" />
<Story name="Primary Color Variant" args={{ colorVariant: "primary" }} />
<Story name="Secondary Color Variant" args={{ colorVariant: "secondary" }} />
<Story name="Dynamic Color Theme" args={{ colorVariant: "foo", dynamicColorTheme:dynamicColorTheme  }} />
<Story name="Selected Value" args={{selected:selectedValue}}/>
<Story name="With Error" args={{ error:"You messed up!"  }} />