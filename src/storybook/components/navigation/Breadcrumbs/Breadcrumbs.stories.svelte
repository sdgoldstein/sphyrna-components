<script module lang="ts"     >
  import BreadcrumbsDropdown from "../../main/components/Breadcrumbs/BreadcrumbsDropdown.svelte";
  import BreadcrumbsDropdownRouteItem from "../../main/components/Breadcrumbs/BreadcrumbsDropdownRouteItem.svelte";
  import BreadcrumbsRouteItem from "../../main/components/Breadcrumbs/BreadcrumbsRouteItem.svelte";

  import type { DynamicColorTheme } from "../../../../main/theme/theme";
  import Breadcrumbs from "./../../main/components/Breadcrumbs/Breadcrumbs.svelte";
  import {
    defineMeta,
    setTemplate,
    type Args,
    type StoryContext,
  } from "@storybook/addon-svelte-csf";

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
    <BreadcrumbsRouteItem route="/">Home</BreadcrumbsRouteItem>
    <BreadcrumbsRouteItem route="/">Before</BreadcrumbsRouteItem>
    <BreadcrumbsDropdown>
      <BreadcrumbsDropdownRouteItem route="/">A</BreadcrumbsDropdownRouteItem>
      <BreadcrumbsDropdownRouteItem route="/">B</BreadcrumbsDropdownRouteItem>
      <BreadcrumbsDropdownRouteItem route="/">C</BreadcrumbsDropdownRouteItem>
    </BreadcrumbsDropdown>
    <BreadcrumbsRouteItem route="/">Road</BreadcrumbsRouteItem>
    <BreadcrumbsDropdown>
      <BreadcrumbsDropdownRouteItem route="/">One</BreadcrumbsDropdownRouteItem>
      <BreadcrumbsDropdownRouteItem route="/">Two</BreadcrumbsDropdownRouteItem>
      <BreadcrumbsDropdownRouteItem route="/"
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
