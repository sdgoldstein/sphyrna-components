<script context="module">
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({});

  import { Button } from "../../build/dist/index.js"; // FIXME
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
