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

    let selectedValue = "three";
</script>

<script lang="ts">
    import SelectOption from "../../../main/components/form/SelectOption.svelte";
    import type { DynamicColorTheme } from "../../../main/theme/theme";
    import type { SelectValue } from "../../../main/components/form/select";

    setTemplate(template);
</script>

{#snippet template(
    { ...args }: Args<typeof Story>,
    context: StoryContext<typeof Story>,
)}
    <Form onsubmit={() => {}}>
        <Select name="select_name" placeholder="Select an Item" {...args}>
            <SelectOption value="one" typeaheadIndex="O">One</SelectOption>
            <SelectOption value="two" typeaheadIndex="T">Two</SelectOption>
            <SelectOption value="three" typeaheadIndex="T">Three</SelectOption>
            <SelectOption value="four" typeaheadIndex="F"
                >Fourth Option</SelectOption
            >
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
<Story name="Selected Value" args={{ value: selectedValue }} />
<Story name="With Error" args={{ error: "You messed up!" }} />
<Story
    name="Disabled"
    args={{
        colorVariant: "secondary",
        disabled: true,
        value: selectedValue,
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

<Story name="With Numbers as Values">
    <Form>
        <Select
            name="select_name"
            placeholder="Select an Item"
            onValueChange={(selectedValue: SelectValue) => {
                alert(selectedValue);
            }}
        >
            <SelectOption value="0" typeaheadIndex="O">One</SelectOption>
            <SelectOption value="1" typeaheadIndex="T">Two</SelectOption>
            <SelectOption value="2" typeaheadIndex="T">Three</SelectOption>
            <SelectOption value="3" typeaheadIndex="F"
                >Fourth Option</SelectOption
            >
        </Select>
    </Form>
</Story>
