<!--
Category -> NamedVariant -> Feature -> Element - -> State
-->

<script module lang="ts">
    interface BreadcrumbsDropdownProps extends ParentComponentProps {}

    export type { BreadcrumbsDropdownProps };
</script>

<script lang="ts">
    import {
        DEFAULT_COLOR_CATEGORY_VARIANT,
        themedTWMerge,
    } from "../../theme/theme.js";

    import { buildTestId, type ParentComponentProps } from "../component.js";

    import Select from "../core/form/Select.svelte";

    let {
        id,
        testid: testidProp,
        colorVariant = DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        children: providedChildren,
        ...restProps
    }: BreadcrumbsDropdownProps = $props();

    let testId = $derived(buildTestId(id, testidProp));

    let selectedValue: { value: any; label: string } | undefined =
        $state(undefined);
</script>

<li class={styleClass} {style}>
    <Select {id} testid={testId} {name}>
        {@render providedChildren(id, testId)}
    </Select>
</li>
