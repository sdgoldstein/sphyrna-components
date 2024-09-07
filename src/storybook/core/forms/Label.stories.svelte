<script module lang="ts">
	import Label from "../../../main/components/core/form/Label.svelte"
    import { defineMeta, setTemplate, type Args, type StoryContext  } from "@storybook/addon-svelte-csf";
    import Input from "../../../main/components/core/form/Input.svelte";
    import Form from "../../../main/components/core/form/Form.svelte";
    import { zExtended } from "../../../main/components/core/form/form";
    
    const { Story } = defineMeta({
        component: Label,
    });

</script>

<script lang="ts">
    setTemplate(template);
  </script>

{#snippet template({ ...args }: Args<typeof Story>, context: StoryContext<typeof Story>)}
    <Form onsubmit={()=>{}}>
        <Label for="name_input_id">Name</Label>
        <Input
            id="name_input_id"
            name="name_input_name"
            placeholder="John Stevens"
            schema={zExtended.requiredString("Name")}
        />
    </Form>
{/snippet}

<Story name="Default" />

