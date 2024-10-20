<script module>
	import TabbedPane from "./../../../main/components/core/tab/TabbedPane.svelte";
  import Tab from "./../../../main/components/core/tab/Tab.svelte";
  
    import { fn } from "@storybook/test";
    import {
      defineMeta,
      setTemplate,
      type Args,
      type StoryContext,
    } from "@storybook/addon-svelte-csf";
  
    const { Story } = defineMeta({
      component: TabbedPane
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
  
  {#snippet template({ children, ...args }: Args<typeof Story>, context: StoryContext<typeof Story>)}
    <TabbedPane {...args}>
      <Tab id="one" label="One"></Tab>
      <Tab id="two" label="Two"></Tab>
    </TabbedPane>
  {/snippet}
  
  <Story name="Default" />
<Story name="Primary Color Variant" args={{ colorVariant: "primary" }} />
<Story name="Secondary Color Variant" args={{ colorVariant: "secondary" }} />
<Story name="Dynamic Color Theme" args={{ colorVariant: "foo", dynamicColorTheme:dynamicColorTheme  }} />