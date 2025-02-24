<script module lang="ts">
  import TabbedPane from "../../../../main/components/navigation/tab/TabbedPane.svelte";
  import Tab from "../../../../main/components/navigation/tab/Tab.svelte";

  import {
    defineMeta,
    setTemplate,
    type Args,
    type StoryContext,
  } from "@storybook/addon-svelte-csf";
  import type { DynamicColorTheme } from "../../../../main/theme/theme";

  const { Story } = defineMeta({
    component: TabbedPane,
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
  <TabbedPane selectedTab="one" {...args}>
    <Tab name="one" label="One">This is content inside tab one</Tab>
    <Tab name="two" label="Two">This is content inside tab two</Tab>
  </TabbedPane>
{/snippet}

<Story name="Default" />
<Story name="Primary Color Variant" args={{ colorVariant: "primary" }} />
<Story name="Secondary Color Variant" args={{ colorVariant: "secondary" }} />
<Story
  name="Dynamic Color Theme"
  args={{ colorVariant: "foo", dynamicColorTheme: dynamicColorTheme }}
/>
