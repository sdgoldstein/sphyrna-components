<script module>
  import IconButton from "../../main/components/core/IconButton.svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({});

  const dynamicColorTheme = {
    colorThemes: new Map([
      ["foo", { coreColor: "#900000", textColor: "#000020" }],
    ]),
  };
</script>

<Story name="Default">
  <IconButton onclick={() => alert("hh")}>T</IconButton>
</Story>

<Story name="Primary Color Variant">
  <IconButton colorVariant="primary">T</IconButton>
</Story>

<Story name="Secondary Color Variant">
  <IconButton colorVariant="secondary">T</IconButton>
</Story>

<Story name="Dynamic Color Theme">
  <IconButton colorVariant="foo" {dynamicColorTheme}>T</IconButton>
</Story>
