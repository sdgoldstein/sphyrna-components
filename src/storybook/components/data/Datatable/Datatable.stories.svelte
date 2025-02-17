<script module lang="ts">
  import {
    defineMeta,
    setTemplate,
    type Args,
    type StoryContext,
  } from "@storybook/addon-svelte-csf";
  import Datatable from "../../../../main/components/data/Datatable/Datatable.svelte";
  import { ArrayDataRowIterable } from "../../../../main/components/data/Datatable/datatableModel";
  import type { DynamicColorTheme } from "../../../../main/theme/theme";

  const data = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
  ];

  const { Story } = defineMeta({
    component: Datatable,
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
  <Datatable
    columnDefinitions={[
      { columnName: "name", columnLabel: "Name" },
      { columnName: "age", columnLabel: "Age" },
    ]}
    rowData={new ArrayDataRowIterable(data)}
  />
{/snippet}

<Story name="Default" />
<Story name="Primary Color Variant" args={{ colorVariant: "primary" }} />
<Story name="Secondary Color Variant" args={{ colorVariant: "secondary" }} />
<Story
  name="Dynamic Color Theme"
  args={{ colorVariant: "foo", dynamicColorTheme: dynamicColorTheme }}
/>
