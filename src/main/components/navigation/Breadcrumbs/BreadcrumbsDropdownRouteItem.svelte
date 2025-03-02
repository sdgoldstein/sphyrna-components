<!--
Category -> NamedVariant -> Feature -> Element - -> State
-->

<script module lang="ts">
</script>

<script lang="ts">
    import { Select as SelectPrimitive } from "bits-ui";
    import type {
        BreadcrumbsDropdownRouteItemDescriptor,
        BreadcrumbsDropdownRouteItemProps,
    } from "./breadcrumbs.js";
    import { getContext } from "svelte";
    import { buildTestId } from "../../component.js";

    let {
        id,
        testid: testidProp,
        route,
        children: providedChildren,
        ...restProps
    }: BreadcrumbsDropdownRouteItemProps = $props();

    let testId = $derived(buildTestId(id, testidProp));

    getContext<BreadcrumbsDropdownRouteItemDescriptor[]>(
        "optionRegistration",
    ).push({
        route: route,
        children: providedChildren,
    } as BreadcrumbsDropdownRouteItemDescriptor);
</script>

<SelectPrimitive.Item
    class="flex w-full select-none rounded-sm px-2 py-1 items-center justify-between"
    value={route}
    {...restProps}
>
    {@render providedChildren(id, testId)}
</SelectPrimitive.Item>
