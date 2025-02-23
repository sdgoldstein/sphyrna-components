<script module lang="ts">
  import type { DynamicColorTheme } from "../../../../main/theme/theme";

  import {
    defineMeta,
    setTemplate,
    type Args,
    type StoryContext,
  } from "@storybook/addon-svelte-csf";
  import BreadcrumbsRouteItem from "../../../../main/components/navigation/Breadcrumbs/BreadcrumbsRouteItem.svelte";
  import {
    Breadcrumbs,
    BreadcrumbsDropdown,
    BreadcrumbsDropdownRouteItem,
  } from "../../../../main";

  const { Story } = defineMeta({
    component: Breadcrumbs,
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
  <Breadcrumbs {...args}>
    <BreadcrumbsRouteItem route="/H" label="Home" />
    <BreadcrumbsRouteItem route="/B" label="Before" />
    <BreadcrumbsDropdown route="/a">
      <BreadcrumbsDropdownRouteItem route="/a" label="A" />
      <BreadcrumbsDropdownRouteItem route="/b" label="B" />
      <BreadcrumbsDropdownRouteItem route="/c" label="C" />
    </BreadcrumbsDropdown>
    <BreadcrumbsRouteItem route="/R" label="Road" />
    <BreadcrumbsDropdown route="/1">
      <BreadcrumbsDropdownRouteItem route="/1" label="One" />
      <BreadcrumbsDropdownRouteItem route="/2" label="Two" />
      <BreadcrumbsDropdownRouteItem route="/3" label="Three" />
    </BreadcrumbsDropdown>
  </Breadcrumbs>
{/snippet}

<Story name="Default" />
<Story name="Primary Color Variant" args={{ colorVariant: "primary" }} />
<Story name="Secondary Color Variant" args={{ colorVariant: "secondary" }} />
<Story
  name="Dynamic Color Theme"
  args={{ colorVariant: "foo", dynamicColorTheme: dynamicColorTheme }}
/>
