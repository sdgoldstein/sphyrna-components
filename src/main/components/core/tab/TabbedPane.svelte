<script module lang="ts">
    interface TabbedPaneProps extends ParentComponentProps {}

    interface TabDescriptor {
        name: string;
        label: string;
    }

    export type { TabbedPaneProps, TabDescriptor };
</script>

<script lang="ts">
    import {
        DEFAULT_COLOR_CATEGORY_VARIANT,
        getBaseColorClassesForColorCategoryStyleVariant,
        getDynamicColorTheme,
        themedTWMerge,
    } from "../../../theme/theme.js";
    import { setContext } from "svelte";
    import { Tabs as TabsPrimitive } from "bits-ui";
    import { type ParentComponentProps, buildTestId } from "../../component.js";

    let {
        id,
        testid: testidProp,
        colorVariant = DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        children: providedChildren,
        ...restProps
    }: TabbedPaneProps = $props();

    let testId = $derived(buildTestId(id, testidProp));

    let listStyleClass = themedTWMerge(
        "flex border-b w-full border-surface-dark",
        getBaseColorClassesForColorCategoryStyleVariant("surface"),
    );

    let tabStyleClass = $derived(
        themedTWMerge(
            "data_active:border-b-2 px-2 py-1",
            `data_active:border-${colorVariant}`,
            getBaseColorClassesForColorCategoryStyleVariant("surface"),
        ),
    );

    const childTabs: TabDescriptor[] = $state([]);
    setContext("foo", childTabs);

    let selectedTabId = $state();
</script>

<TabsPrimitive.Root
    {id}
    data-testid={testId}
    {...restProps}
    onValueChange={(newValue: string | undefined) => {
        if (newValue) {
            selectedTabId = newValue;
        }
    }}
>
    <TabsPrimitive.List class={listStyleClass}>
        {#each childTabs as nextChildTab}
            <TabsPrimitive.Trigger
                value={nextChildTab.name}
                class={tabStyleClass}
                style={nextChildTab.name == selectedTabId && dynamicColorTheme
                    ? `border-bottom:2px solid ${getDynamicColorTheme(dynamicColorTheme, colorVariant).coreColor} !important;`
                    : ""}
            >
                {nextChildTab.label}
            </TabsPrimitive.Trigger>
        {/each}
    </TabsPrimitive.List>
    {@render providedChildren(id, testId)}
</TabsPrimitive.Root>
