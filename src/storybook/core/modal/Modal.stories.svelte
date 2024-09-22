<script module>
	import Modal from './../../../main/components/core/modal/Modal.svelte';
  
    import Button from "../../../main/components/core/Button.svelte";

 
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
    component:Modal
  });

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
  <Modal
    bind:open={defaultOpen}>
    {#snippet title()}
    Modal Title
{/snippet} 
{#snippet children()}
    Children
{/snippet} 
{#snippet footer()}
    Footer
{/snippet}   
   </Modal>
</Story>
