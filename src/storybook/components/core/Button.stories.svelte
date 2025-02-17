<script module lang="ts">
  import Button from "../../../main/components/core/Button.svelte";
  import {
    defineMeta,
    setTemplate,
    type Args,
    type StoryContext,
  } from "@storybook/addon-svelte-csf";
  import type { DynamicColorTheme } from "../../../main/theme/theme";

  const { Story } = defineMeta({
    component: Button,
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
  { ...args }: Args<typeof Story>,
  context: StoryContext<typeof Story>,
)}
  <Button
    onclick={(e: MouseEvent) => {
      alert("click");
    }}
    {...args}>Button Text</Button
  >
{/snippet}

<Story name="Default" />
<Story name="Primary Color Variant" args={{ colorVariant: "primary" }} />
<Story name="Secondary Color Variant" args={{ colorVariant: "secondary" }} />
<Story
  name="Dynamic Color Theme"
  args={{ colorVariant: "foo", dynamicColorTheme: dynamicColorTheme }}
/>
<Story name="With ID" args={{ id: "button" }} />
<Story name="With ID Ending in Id" args={{ id: "button_el_id" }} />
<Story name="With TestID" args={{ testid: "button_testid_foo" }} />
<Story
  name="With ID and TestId"
  args={{ id: "button_el_id", testid: "button_testid_foo" }}
/>
