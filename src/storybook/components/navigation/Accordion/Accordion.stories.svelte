<script module lang="ts">
  import AccordionPanel from "../../../../main/components/navigation/Accordion/AccordionPanel.svelte";
  import AccordionPanelItem from "../../../../main/components/navigation/Accordion/AccordionPanelItem.svelte";
  import AccordionPanelItemHeader from "../../../../main/components/navigation/Accordion/AccordionPanelItemHeader.svelte";
  import AccordionPanelItemContent from "../../../../main/components/navigation/Accordion/AccordionPanelItemContent.svelte";

  import {
    defineMeta,
    setTemplate,
    type Args,
    type StoryContext,
  } from "@storybook/addon-svelte-csf";
  import type { DynamicColorTheme } from "../../../../main/theme/theme";

  const { Story } = defineMeta({
    component: AccordionPanel,
    args: {},
  });

  const dynamicColorTheme = {
    colorThemes: new Map([
      [
        "foo",
        { coreColor: "#900000", textColor: "#000020" } as DynamicColorTheme,
      ],
    ]),
  };
</script>

<script lang="ts">
  setTemplate(template);
</script>

{#snippet template(
  { children, ...args }: Args<typeof Story>,
  context: StoryContext<typeof Story>,
)}
  <AccordionPanel {...args}>
    <AccordionPanelItem name="one">
      <AccordionPanelItemHeader {...args}>One</AccordionPanelItemHeader>
      <AccordionPanelItemContent
        >This is the content from the first drawer</AccordionPanelItemContent
      >
    </AccordionPanelItem>
    <AccordionPanelItem name="two">
      <AccordionPanelItemHeader {...args}>Two</AccordionPanelItemHeader>
      <AccordionPanelItemContent
        >This is the content from the second drawer</AccordionPanelItemContent
      >
    </AccordionPanelItem>
  </AccordionPanel>
{/snippet}

<Story name="Default" />
<Story name="Primary Color Variant" args={{ colorVariant: "primary" }} />
<Story name="Secondary Color Variant" args={{ colorVariant: "secondary" }} />
<Story
  name="Dynamic Color Theme"
  args={{ colorVariant: "foo", dynamicColorTheme: dynamicColorTheme }}
/>
