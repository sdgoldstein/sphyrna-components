<!--
Category -> NamedVariant -> Feature -> Element - -> State
-->

<script module lang="ts">
</script>

<script lang="ts">
    import { buildTestId } from "../../component.js";
    import { Select as SelectPrimitive } from "bits-ui";
    import type {
        BreadcrumbsDropdownRouteItemDescriptor,
        BreadcrumbsDropdownRouteItemProps,
    } from "./breadcrumbs.js";
    import { getContext, onMount } from "svelte";

    let {
        id,
        testid: testidProp,
        route,
        label,
        ...restProps
    }: BreadcrumbsDropdownRouteItemProps = $props();

    let testId = $derived(buildTestId(id, testidProp));

    getContext<BreadcrumbsDropdownRouteItemDescriptor[]>("foo").push({
        route: route,
        label: label,
    } as BreadcrumbsDropdownRouteItemDescriptor);
</script>

<SelectPrimitive.Item
    class="flex w-full select-none rounded-sm px-2 py-1 items-center justify-between"
    value={route}
    {...restProps}
>
    {label}
</SelectPrimitive.Item>
