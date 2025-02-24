<!--
Category -> NamedVariant -> Feature -> Element - -> State
-->

<script lang="ts">
    import { ChevronRight } from "lucide-svelte";
    import {
        DEFAULT_COLOR_CATEGORY_VARIANT,
        getBaseColorStyleForDynamicColorTheme,
        themedTWMerge,
    } from "../../../theme/theme.js";

    import type { BreadcrumbsRouteItemProps } from "./breadcrumbs.js";
    import Button from "../../core/Button.svelte";

    let {
        id,
        testid: testidProp,
        label,
        colorVariant = DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        ...restProps
    }: BreadcrumbsRouteItemProps = $props();

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
    <Button>{label}</Button>
</li>
<li class={styleClass} {style}>
    <ChevronRight class="inline" />
</li>
