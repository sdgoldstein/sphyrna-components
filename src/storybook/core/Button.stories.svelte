<script module>
  import { fn } from "@storybook/test";
  import Button from "./../../main/components/core/Button.svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({});

  const dynamicColorTheme = {
    colorThemes: new Map([
      ["foo", { bgColor: "#900000", textColor: "#000020" }],
    ]),
  };
</script>

<Story name="Default">
  <Button onclick={() => fn()}>Button Text</Button>
</Story>

<Story name="Primary Color Variant">
  <Button colorVariant="primary">Button Text</Button>
</Story>

<Story name="Secondary Color Variant">
  <Button colorVariant="secondary">Button Text</Button>
</Story>

<Story name="Dynamic Color Theme">
  <Button colorVariant="foo" {dynamicColorTheme}>Button Text</Button>
</Story>
