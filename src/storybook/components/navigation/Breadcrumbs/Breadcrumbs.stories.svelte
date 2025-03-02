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
    <BreadcrumbsRouteItem route="/H">Home</BreadcrumbsRouteItem>
    <BreadcrumbsRouteItem route="/B">Before</BreadcrumbsRouteItem>
    <BreadcrumbsDropdown route="/a">
      <BreadcrumbsDropdownRouteItem route="/a">A</BreadcrumbsDropdownRouteItem>
      <BreadcrumbsDropdownRouteItem route="/b">B</BreadcrumbsDropdownRouteItem>
      <BreadcrumbsDropdownRouteItem route="/c">C</BreadcrumbsDropdownRouteItem>
    </BreadcrumbsDropdown>
    <BreadcrumbsRouteItem route="/R">Road</BreadcrumbsRouteItem>
    <BreadcrumbsDropdown route="/1">
      <BreadcrumbsDropdownRouteItem route="/1">One</BreadcrumbsDropdownRouteItem
      >
      <BreadcrumbsDropdownRouteItem route="/2">Two</BreadcrumbsDropdownRouteItem
      >
      <BreadcrumbsDropdownRouteItem route="/3"
        >Three</BreadcrumbsDropdownRouteItem
      >
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
