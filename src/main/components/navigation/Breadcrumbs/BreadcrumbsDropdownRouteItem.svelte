<!--
Category -> NamedVariant -> Feature -> Element - -> State
-->

<script module lang="ts">
</script>

<script lang="ts">
    import { buildTestId } from "../../component.js";
    import { Select as SelectPrimitive } from "bits-ui";
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

<SelectPrimitive.Item
    class="flex w-full select-none rounded-sm px-2 py-1 items-center justify-between"
    value={route}
    {...restProps}
>
    {@render providedChildren(id, testId)}
</SelectPrimitive.Item>
