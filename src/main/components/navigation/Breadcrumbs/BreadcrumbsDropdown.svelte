<!--
Category -> NamedVariant -> Feature -> Element - -> State
-->

<script lang="ts">
    import { DEFAULT_COLOR_CATEGORY_VARIANT } from "../../../theme/theme.js";

    import { buildTestId } from "../../component.js";
    import Form from "../../form/Form.svelte";

    import Select from "../../form/Select.svelte";
    import type { BreadcrumbsDropdownProps } from "./breadcrumbs.js";

    let {
        id,
        testid: testidProp,
        colorVariant = DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        children: providedChildren,
        ...restProps
    }: BreadcrumbsDropdownProps = $props();

    let testId = $derived(buildTestId(id, testidProp));
</script>

<li {id} data-testid={testId} {...restProps}>
    <Form onsubmit={() => {}}>
        <Select name="" placeholder="">
            {@render providedChildren(id, testId)}
        </Select>
    </Form>
</li>
