<!--
Category -> NamedVariant -> Feature -> Element - -> State
-->
<script module lang="ts">
    export interface AccordionPanelProps extends ParentComponentProps {
        activeItemName?: string;
    }
</script>

<script lang="ts">
    import { Accordion as AccordionPrimitive } from "bits-ui";
    import { buildTestId, type ParentComponentProps } from "../../component.js";

    let {
        id,
        testid: testidProp,
        activeItemName = $bindable(),
        children: providedChildren,
        ...restProps
    }: AccordionPanelProps = $props();

    let testId = $derived(buildTestId(id, testidProp));

    const styleClass = "flex flex-col space-y-0.5";
</script>

<AccordionPrimitive.Root
    {id}
    data-testid={testId}
    type="single"
    value={activeItemName}
    class={styleClass}
    {...restProps}
>
    {@render providedChildren(id, testId)}
</AccordionPrimitive.Root>
