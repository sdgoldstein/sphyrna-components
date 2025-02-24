<script module>
  import { Button } from "../../../main";
  import Modal from "./../../../main/components/modal/Modal.svelte";

  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
    component: Modal,
  });

  let defaultOpen = false;
</script>

<Story name="Default">
  <Button
    onclick={() => {
      defaultOpen = true;
    }}>Open Modal</Button
  >
  <Modal bind:open={defaultOpen}>
    {#snippet title()}
      Modal Title
    {/snippet}
    {#snippet description()}
      This is the model description
    {/snippet}
    {#snippet children()}
      Children
    {/snippet}
    {#snippet footer()}
      Footer
    {/snippet}
  </Modal>
</Story>
