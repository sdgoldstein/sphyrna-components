<script module lang="ts">
    import { defineMeta, setTemplate, type Args, type StoryContext  } from "@storybook/addon-svelte-csf";
    import RadioGroup from "../../../main/components/core/form/RadioGroup.svelte";
    import Form from "../../../main/components/core/form/Form.svelte";
    
    const { Story } = defineMeta({
        component: RadioGroup,
        args: {
            name: "radio_name"
        },
    });

    const dynamicColorTheme = {
        colorThemes: new Map([
            ["foo", { coreColor: "#900000", textColor: "#000020" }],
        ]),
    };

    let value="three";
</script>

<script lang="ts">
    import RadioGroupOption from "../../../main/components/core/form/RadioGroupOption.svelte";

    setTemplate(template);
  </script>

{#snippet template({ ...args }: Args<typeof Story>, context: StoryContext<typeof Story>)}
    <Form onsubmit={()=>{}}>
        <RadioGroup {...args}>
            <RadioGroupOption value="one" dynamicColorTheme={args.dynamicColorTheme} colorVariant={args.colorVariant}>One</RadioGroupOption>
            <RadioGroupOption value="two" dynamicColorTheme={args.dynamicColorTheme} colorVariant={args.colorVariant}>Two</RadioGroupOption>
            <RadioGroupOption value="three" dynamicColorTheme={args.dynamicColorTheme} colorVariant={args.colorVariant}>Three</RadioGroupOption>
        </RadioGroup>
    </Form>
{/snippet}

<Story name="Default" />
<Story name="Primary Color Variant" args={{ colorVariant: "primary" }} />
<Story name="Secondary Color Variant" args={{ colorVariant: "secondary" }} />
<Story name="Dynamic Color Theme" args={{ colorVariant: "foo", dynamicColorTheme:dynamicColorTheme  }} />
<Story name="Selected Value" args={{value:value}}/>
<Story name="With Error" args={{ error:"You messed up!"  }} />