<script module lang="ts">
    import {
        defineMeta,
        setTemplate,
        type Args,
        type StoryContext,
    } from "@storybook/addon-svelte-csf";
    import Select from "../../../main/components/form/Select.svelte";
    import Form from "../../../main/components/form/Form.svelte";

    const { Story } = defineMeta({
        component: Select,
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

    let selectedValue = { value: "three", label: "Three" };
</script>

<script lang="ts">
    import SelectOption from "../../../main/components/form/SelectOption.svelte";
    import type { DynamicColorTheme } from "../../../main";

    setTemplate(template);
</script>

{#snippet template(
    { ...args }: Args<typeof Story>,
    context: StoryContext<typeof Story>,
)}
    <Form onsubmit={() => {}}>
        <Select name="select_name" placeholder="Select an Item" {...args}>
            <SelectOption value="one" label="One" />
            <SelectOption value="two" label="Two" />
            <SelectOption value="three" label="Three" />
            <SelectOption value="four" label="Fourth Option" />
        </Select>
    </Form>
{/snippet}

<Story name="Default" />
<Story name="Primary Color Variant" args={{ colorVariant: "primary" }} />
<Story name="Secondary Color Variant" args={{ colorVariant: "secondary" }} />
<Story
    name="Dynamic Color Theme"
    args={{ colorVariant: "foo", dynamicColorTheme: dynamicColorTheme }}
/>
<Story name="Selected Value" args={{ selected: selectedValue }} />
<Story name="With Error" args={{ error: "You messed up!" }} />
<Story
    name="Disabled"
    args={{
        colorVariant: "secondary",
        disabled: true,
        selected: selectedValue,
    }}
/>
<Story
    name="Disabled with Dynamic Color Theme"
    args={{
        colorVariant: "foo",
        dynamicColorTheme: dynamicColorTheme,
        disabled: true,
    }}
/>
