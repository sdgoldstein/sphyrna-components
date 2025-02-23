<script module lang="ts">
  import {
    defineMeta,
    setTemplate,
    type StoryContext,
    type Args,
  } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
    component: NavBar,
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
  import type { DynamicColorTheme } from "../../../../main/theme/theme";
  import {
    NavBar,
    NavBarBrand,
    NavBarBrandLogo,
    NavBarBrandTitle,
    NavMenu,
    NavMenuItem,
  } from "../../../../main";

  setTemplate(template);
</script>

{#snippet template(
  { children, colorVariant, dynamicColorTheme, ...args }: Args<typeof Story>,
  context: StoryContext<typeof Story>,
)}
  <NavBar {colorVariant} {dynamicColorTheme} {...args}>
    <NavBarBrand {colorVariant} {dynamicColorTheme}>
      <NavBarBrandLogo
        src="/logo.png"
        alt="alt"
        aspectRatio={2.5}
        {colorVariant}
        {dynamicColorTheme}
      />
      <NavBarBrandTitle {colorVariant} {dynamicColorTheme}
        >Title</NavBarBrandTitle
      >
    </NavBarBrand>
    <NavMenu {colorVariant} {dynamicColorTheme}>
      <NavMenuItem {colorVariant} {dynamicColorTheme}>First</NavMenuItem>
      <NavMenuItem {colorVariant} {dynamicColorTheme}>Second</NavMenuItem>
      <NavMenuItem {colorVariant} {dynamicColorTheme}>Third</NavMenuItem>
      <NavMenuItem {colorVariant} {dynamicColorTheme}>Fourth</NavMenuItem>
    </NavMenu>
  </NavBar>
{/snippet}

<Story name="Default" />
<Story name="Primary Color Variant" args={{ colorVariant: "primary" }} />
<Story name="Secondary Color Variant" args={{ colorVariant: "secondary" }} />
<Story
  name="Dynamic Color Theme"
  args={{ colorVariant: "foo", dynamicColorTheme: dynamicColorTheme }}
/>
<Story name="Size 5" args={{ size: 5 }} />
