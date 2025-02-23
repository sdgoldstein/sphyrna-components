<!--
Category -> NamedVariant -> Feature -> Element - -> State
-->

<script module lang="ts">
</script>

<script lang="ts">
    import { buildTestId } from "../../component.js";
    import type { BreadcrumbsProps } from "./breadcrumbs.js";

    let {
        id,
        testid: testidProp,
        children: providedChildren,
        ...restProps
    }: BreadcrumbsProps = $props();

    let testId = $derived(buildTestId(id, testidProp));

    const styleClass = "list-none";
</script>

<nav {id} data-testid={testId} {...restProps}>
    <ul class={styleClass}>
        {@render providedChildren(id, testId)}
    </ul>
</nav>
