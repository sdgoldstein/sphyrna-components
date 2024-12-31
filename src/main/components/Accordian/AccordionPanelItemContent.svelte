<!--
Category -> NamedVariant -> Feature -> Element - -> State
-->
<script module lang="ts">
    export interface AccordionPanelItemContentProps
        extends ParentComponentProps {}
</script>

<script lang="ts">
    import { Accordion as AccordionPrimitive } from "bits-ui";
    import { buildTestId, type ParentComponentProps } from "../component.js";

    let {
        id,
        testid: testidProp,
        children: providedChildren,
        ...restProps
    }: AccordionPanelItemContentProps = $props();

    let testId = $derived(buildTestId(id, testidProp));
</script>

<AccordionPrimitive.Content {...restProps}>
    {@render providedChildren(id, testId)}
</AccordionPrimitive.Content>
