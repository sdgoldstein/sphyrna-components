

<script module lang="ts">
    import { Label } from "bits-ui";
    import { buildTestId, type ParentComponentProps } from "../../component.js";

    export interface LabelProps extends ParentComponentProps {
        for: string;
    }
</script>

<script lang="ts">
    let { id, testid:testidProp, for: forProp, children:providedChildren, ...restProps }: LabelProps = $props();
    let testId=$derived(buildTestId(id, testidProp));
</script>

<Label.Root class="text-xs font-medium px-1" for={forProp} {...restProps}> {@render providedChildren(id, testId)}</Label.Root>
