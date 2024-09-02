<script module>
    import Button from "../../../main/components/core/Button.svelte";
  import FlexModal from "./../../../main/components/core/modal/FlexModal.svelte";
 
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({});

  const dynamicColorTheme = {
    colorThemes: new Map([
      ["foo", { coreColor: "#900000", textColor: "#000020" }],
    ]),
  };

  let defaultOpen = false;
</script>

<Story name="Default">
  <Button
    onclick={() => {
      defaultOpen = true;
    }}>Open Modal</Button
  >
  <FlexModal
    bind:open={defaultOpen}>
    {#snippet header()}
    Header
{/snippet} 
{#snippet children()}
    Children
{/snippet} 
{#snippet footer()}
    Footer
{/snippet}   
   </FlexModal>
</Story>
