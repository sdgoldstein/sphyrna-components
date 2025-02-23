<!--
Category -> NamedVariant -> Feature -> Element - -> State
-->

<script lang="ts">
    import {
        DEFAULT_COLOR_CATEGORY_VARIANT,
        getBaseColorStyleForDynamicColorTheme,
        isValidDesignTokenColorVariant,
        themedTWMerge,
    } from "../../../theme/theme.js";

    import { buildTestId } from "../../component.js";
    import Form from "../../form/Form.svelte";

    import { Select as SelectPrimitive } from "bits-ui";
    import type { BreadcrumbsDropdownProps } from "./breadcrumbs.js";
    import { ChevronDown, ChevronRight } from "lucide-svelte";

    let {
        id,
        testid: testidProp,
        colorVariant = DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        children: providedChildren,
        ...restProps
    }: BreadcrumbsDropdownProps = $props();

    let testId = $derived(buildTestId(id, testidProp));

    const styleClass = $derived(themedTWMerge("inline text-lg font-semibold"));
    const style = $derived(
        dynamicColorTheme
            ? getBaseColorStyleForDynamicColorTheme(
                  dynamicColorTheme,
                  colorVariant,
              )
            : "",
    );

    let baseStyleClass = $derived(themedTWMerge("outline-none"));

    let triggerStyleClass = $derived(
        themedTWMerge(
            baseStyleClass,
            "inline-flex items-center justify-between",
        ),
    );
    let contentStyleClass = $derived(
        themedTWMerge(
            baseStyleClass,
            "relative z-50 overflow-hidden shadow-md overflow-y-auto w-[var(--bits-select-anchor-width)]",
        ),
    );

    const selectedLabel = $derived("sdfsdf");
</script>

<li {id} data-testid={testId} class={styleClass} {...restProps}>
    <SelectPrimitive.Root
        {id}
        data-testid={testId}
        type="single"
        {...restProps}
    >
        <SelectPrimitive.Trigger
            class={triggerStyleClass}
            {id}
            data-testid={testId}
        >
            {selectedLabel}
            <ChevronDown class="h-4 w-4 opacity-50" />
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
            <SelectPrimitive.Content class={contentStyleClass}>
                {@render providedChildren(id, testId)}
            </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
</li>
<li class={styleClass} {style}>
    <ChevronRight class="inline" />
</li>
