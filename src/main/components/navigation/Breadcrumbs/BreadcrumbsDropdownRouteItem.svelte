<!--
Category -> NamedVariant -> Feature -> Element - -> State
-->

<script module lang="ts">
</script>

<script lang="ts">
    import { buildTestId } from "../../component.js";
    import SelectOption from "../../form/SelectOption.svelte";
    import type { BreadcrumbsDropdownRouteItemProps } from "./breadcrumbs.js";

    let {
        id,
        testid: testidProp,
        route,
        children: providedChildren,
        ...restProps
    }: BreadcrumbsDropdownRouteItemProps = $props();

    let testId = $derived(buildTestId(id, testidProp));
</script>

<SelectOption {id} testid={testId} value={route} {...restProps}>
    {@render providedChildren(id, testId)}
</SelectOption>
