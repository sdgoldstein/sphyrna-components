<!--
Category -> NamedVariant -> Feature -> Element - -> State
-->

<script module lang="ts">
    interface BreadcrumbsProps extends ParentComponentProps {}

    export type { BreadcrumbsProps };
</script>

<script lang="ts">
    import { buildTestId, type ParentComponentProps } from "../component.js";

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
