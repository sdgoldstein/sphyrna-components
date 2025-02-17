<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import type { DynamicColorTheme } from "../../../main/theme/theme";
  import IconButton from "../../../main/components/core/IconButton.svelte";

  const { Story } = defineMeta({});

  const dynamicColorTheme = {
    colorThemes: new Map([
      [
        "foo",
        { coreColor: "#900000", textColor: "#000020" } as DynamicColorTheme,
      ],
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
