<script module>
  import { Button } from "../../../main";
  import FlexModal from "./../../../main/components/modal/FlexModal.svelte";

  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
    component: FlexModal,
  });

  let defaultOpen = false;
</script>

<Story name="Default">
  <Button
    onclick={() => {
      defaultOpen = true;
    }}>Open Modal</Button
  >
  <FlexModal id="flex_modal_el_id" bind:open={defaultOpen}>
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
