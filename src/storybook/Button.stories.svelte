<script context="module">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import { Button } from "../main/index";

  const { Story } = defineMeta({});

  const dynamicColorTheme = {
    colorThemes: new Map([
      ["foo", { bgColor: "#900000", textColor: "#000020" }],
    ]),
  };
</script>

<Story name="Default">
  <Button>Button Text</Button>
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
