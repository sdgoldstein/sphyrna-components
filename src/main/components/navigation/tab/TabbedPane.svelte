<script lang="ts">
    import {
        DEFAULT_COLOR_CATEGORY_VARIANT,
        getBaseColorClassesForColorCategoryStyleVariant,
        getDynamicColorTheme,
        isValidDesignTokenColorVariant,
        themedTWMerge,
        type DesignTokenColorVariantLookup,
    } from "../../../theme/theme.js";
    import { setContext } from "svelte";
    import { Tabs as TabsPrimitive } from "bits-ui";
    import { buildTestId } from "../../component.js";
    import type { TabbedPaneProps, TabDescriptor } from "./tabbedPane.js";

    let {
        id,
        testid: testidProp,
        selectedTab = $bindable(),
        colorVariant = DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        children: providedChildren,
        ...restProps
    }: TabbedPaneProps = $props();

    let testId = $derived(buildTestId(id, testidProp));

    const tabbedPaneClassFromColorVariant: DesignTokenColorVariantLookup = {
        primary: "data-[state=active]:border-primary",
        secondary: "data-[state=active]:border-secondary",
        tertiary: "data-[state=active]:border-tertiary",
    };

    let listStyleClass = themedTWMerge(
        "flex border-b w-full border-surface-dark",
        getBaseColorClassesForColorCategoryStyleVariant("surface"),
    );

    let tabStyleClass = $derived(
        themedTWMerge(
            "data-[state=active]:border-b-2 px-2 py-1 bg-surface text-surface-text",
            isValidDesignTokenColorVariant(colorVariant)
                ? tabbedPaneClassFromColorVariant[colorVariant]
                : "",
        ),
    );

    const childTabs: TabDescriptor[] = $state([]);
    setContext("optionRegistration", childTabs);
</script>

<TabsPrimitive.Root
    {id}
    data-testid={testId}
    {...restProps}
    bind:value={selectedTab}
>
    <TabsPrimitive.List class={listStyleClass}>
        {#each childTabs as nextChildTab}
            <TabsPrimitive.Trigger
                value={nextChildTab.name}
                class={tabStyleClass}
                style={nextChildTab.name == selectedTab && dynamicColorTheme
                    ? `border-bottom:2px solid ${getDynamicColorTheme(dynamicColorTheme, colorVariant).coreColor} !important;`
                    : ""}
            >
                {nextChildTab.label}
            </TabsPrimitive.Trigger>
        {/each}
    </TabsPrimitive.List>
    {@render providedChildren(id, testId)}
</TabsPrimitive.Root>
