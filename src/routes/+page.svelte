<script lang="ts">
    import "../app.css";
    import { zExtended } from "../main/components/form/form.js";
    import Input from "../main/components/form/Input.svelte";
    import Label from "../main/components/form/Label.svelte";
    import { Button } from "../main/index";
    import { SubmitCancelModal } from "../main/index.js";

    let defaultOpen = false;
    function handleSubmit(formData: FormData): void {}
</script>

<h1>Welcome to your library project</h1>
<p>
    Create your package using @sveltejs/package and preview/showcase your work
    with SvelteKit
</p>
<p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<Button>Press It</Button>

<Button
    onclick={() => {
        defaultOpen = true;
    }}>Open Modal</Button
>
<SubmitCancelModal
    bind:open={defaultOpen}
    actionButtonText="Save It!"
    onsubmit={handleSubmit}
    title="Submit Modal Default Story"
    description="Please submit this model.  Please!"
>
    <Label for="name_input_id">Name</Label>
    <Input
        id="name_input_id"
        name="name_input_name"
        placeholder="John Stevens"
        schema={zExtended.requiredString("Name")}
    />
</SubmitCancelModal>
