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

    let {
        id,
        testid: testidProp,
        route,
        label,
        ...restProps
    }: BreadcrumbsDropdownRouteItemProps = $props();

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
