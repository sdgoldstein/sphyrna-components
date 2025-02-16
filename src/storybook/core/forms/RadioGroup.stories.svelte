<script module lang="ts">
    import {
        defineMeta,
        setTemplate,
        type Args,
        type StoryContext,
    } from "@storybook/addon-svelte-csf";
    import RadioGroup from "../../../main/components/core/form/RadioGroup.svelte";
    import Form from "../../../main/components/core/form/Form.svelte";

    const { Story } = defineMeta({
        component: RadioGroup,
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

    let value = "three";
</script>

<script lang="ts">
    import RadioGroupOption from "../../../main/components/core/form/RadioGroupOption.svelte";
    import type { DynamicColorTheme } from "../../../main/theme/theme";

    setTemplate(template);
</script>

{#snippet template(
    { ...args }: Args<typeof Story>,
    context: StoryContext<typeof Story>,
)}
    <Form onsubmit={() => {}}>
        <RadioGroup name="radio_name" {...args}>
            <RadioGroupOption
                value="one"
                dynamicColorTheme={args.dynamicColorTheme}
                colorVariant={args.colorVariant}>One</RadioGroupOption
            >
            <RadioGroupOption
                value="two"
                dynamicColorTheme={args.dynamicColorTheme}
                colorVariant={args.colorVariant}>Two</RadioGroupOption
            >
            <RadioGroupOption
                value="three"
                dynamicColorTheme={args.dynamicColorTheme}
                colorVariant={args.colorVariant}>Three</RadioGroupOption
            >
        </RadioGroup>
    </Form>
{/snippet}

<Story name="Default" />
<Story name="Primary Color Variant" args={{ colorVariant: "primary" }} />
<Story name="Secondary Color Variant" args={{ colorVariant: "secondary" }} />
<Story
    name="Dynamic Color Theme"
    args={{ colorVariant: "foo", dynamicColorTheme: dynamicColorTheme }}
/>
<Story name="Selected Value" args={{ value: value }} />
<Story name="With Error" args={{ error: "You messed up!" }} />
<Story name="Disabled">
    <Form onsubmit={() => {}}>
        <RadioGroup name="radio_name" disabled={true} {value}>
            <RadioGroupOption disabled={true} value="one" colorVariant="primary"
                >One</RadioGroupOption
            >
            <RadioGroupOption disabled={true} value="two" colorVariant="primary"
                >Two</RadioGroupOption
            >
            <RadioGroupOption
                disabled={true}
                value="three"
                colorVariant="primary">Three</RadioGroupOption
            >
        </RadioGroup>
    </Form>
</Story>
<Story name="Disabled Dyanamic Colol Theme">
    <Form onsubmit={() => {}}>
        <RadioGroup
            name="radio_name"
            disabled={true}
            {value}
            {dynamicColorTheme}
            colorVariant="foo"
        >
            <RadioGroupOption
                disabled={true}
                value="one"
                {dynamicColorTheme}
                colorVariant="foo">One</RadioGroupOption
            >
            <RadioGroupOption
                disabled={true}
                value="two"
                {dynamicColorTheme}
                colorVariant="foo">Two</RadioGroupOption
            >
            <RadioGroupOption
                disabled={true}
                value="three"
                {dynamicColorTheme}
                colorVariant="foo">Three</RadioGroupOption
            >
        </RadioGroup>
    </Form>
</Story>
