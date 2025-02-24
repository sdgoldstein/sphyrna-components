<!--
Category -> NamedVariant -> Feature -> Element - -> State
-->

<script lang="ts">
    import {
        DEFAULT_COLOR_CATEGORY_VARIANT,
        getBaseColorStyleForDynamicColorTheme,
        themedTWMerge,
    } from "../../../theme/theme.js";

    import { buildTestId } from "../../component.js";

    import { Select as SelectPrimitive } from "bits-ui";
    import type {
        BreadcrumbsDropdownProps,
        BreadcrumbsDropdownRouteItemDescriptor,
    } from "./breadcrumbs.js";
    import { ChevronDown, ChevronRight } from "lucide-svelte";
    import { onMount, setContext } from "svelte";

    let {
        id,
        testid: testidProp,
        route = $bindable(),
        colorVariant = DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        children: providedChildren,
        ...restProps
    }: BreadcrumbsDropdownProps = $props();

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

    const breadcrumbDropdownItems: BreadcrumbsDropdownRouteItemDescriptor[] =
        $state([]);
    setContext("foo", breadcrumbDropdownItems);

    const selectedBreadcrumb = $derived(
        breadcrumbDropdownItems.find((item) => item.route === route)?.label,
    );

    onMount(() => {
        if (breadcrumbDropdownItems.length > 0) {
            route = breadcrumbDropdownItems[0].route;
        }
    });

    function addHiddenStyleIfClosed(
        wrapperProps: Record<string, unknown>,
        open: boolean,
    ) {
        if (!open) {
            wrapperProps.style = "display: none";
        }
        return wrapperProps;
    }
</script>

<li {id} data-testid={testId} class={styleClass} {...restProps}>
    <SelectPrimitive.Root type="single" bind:value={route} {...restProps}>
        <SelectPrimitive.Trigger
            class={triggerStyleClass}
            {id}
            data-testid={testId}
        >
            {selectedBreadcrumb}
            <ChevronDown class="h-4 w-4 opacity-50" />
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
            <SelectPrimitive.Content class={contentStyleClass} forceMount>
                {#snippet child({ wrapperProps, props, open })}
                    <div {...addHiddenStyleIfClosed(wrapperProps, open)}>
                        <div {...props}>
                            {@render providedChildren(id, testId)}
                        </div>
                    </div>
                {/snippet}
            </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
</li>
<li class={styleClass} {style}>
    <ChevronRight class="inline" />
</li>
