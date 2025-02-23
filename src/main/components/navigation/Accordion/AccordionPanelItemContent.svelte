<!--
Category -> NamedVariant -> Feature -> Element - -> State
-->
<script module lang="ts">
</script>

<script lang="ts">
    import { Accordion as AccordionPrimitive } from "bits-ui";
    import { buildTestId } from "../../component.js";
    import type { AccordionPanelItemContentProps } from "./accordion.js";

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
