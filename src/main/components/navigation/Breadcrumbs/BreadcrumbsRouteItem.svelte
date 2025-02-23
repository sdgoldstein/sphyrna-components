<!--
Category -> NamedVariant -> Feature -> Element - -> State
-->

<script module lang="ts">
</script>

<script lang="ts">
    import { ChevronRight } from "lucide-svelte";
    import {
        DEFAULT_COLOR_CATEGORY_VARIANT,
        getBaseColorStyleForDynamicColorTheme,
        themedTWMerge,
    } from "../../../theme/theme.js";

    import { buildTestId } from "../../component.js";
    import type { BreadcrumbsRouteItemProps } from "./breadcrumbs.js";

    let {
        id,
        testid: testidProp,
        colorVariant = DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        children: providedChildren,
        ...restProps
    }: BreadcrumbsRouteItemProps = $props();

    let testId = $derived(buildTestId(id, testidProp));

    const styleClass = $derived(
        themedTWMerge("inline text-lg font-semibold last:hidden"),
    );
    const style = $derived(
        dynamicColorTheme
            ? getBaseColorStyleForDynamicColorTheme(
                  dynamicColorTheme,
                  colorVariant,
              )
            : "",
    );
</script>

<li class={styleClass} {style} {...restProps}>
    {@render providedChildren(id, testId)}
</li>
<li class={styleClass} {style}>
    <ChevronRight class="inline" />
</li>
