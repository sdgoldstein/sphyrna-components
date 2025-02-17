<!--
Category -> NamedVariant -> Feature -> Element - -> State
-->

<script module lang="ts">
    interface BreadcrumbsDropdownRouteItemProps extends ParentComponentProps {
        route: string;
    }

    export type { BreadcrumbsDropdownRouteItemProps };
</script>

<script lang="ts">
    import { buildTestId, type ParentComponentProps } from "../component.js";
    import SelectOption from "../form/SelectOption.svelte";

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
