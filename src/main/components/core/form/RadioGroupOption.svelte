<script module lang="ts">
    import {
        DEFAULT_COLOR_CATEGORY_VARIANT,
        getBaseColorClassesForColorCategoryStyleVariant,
        getDynamicColorTheme,
        themedTWMerge,
    } from "../../../theme/theme.js";
    import { buildTestId, type ParentComponentProps } from "../../component.js";
    import { RadioGroup as RadioGroupPrimitive } from "bits-ui";
    import RadioGroupCheckedStateFetcher from "./RadioGroupCheckedStateFetcher.svelte";

    export interface RadioGroupOptionProps extends ParentComponentProps {
        value: string;
        disabled?: boolean;
    }
</script>

<script lang="ts">
    let {
        id,
        testid: testidProp,
        value,
        disabled = false,
        colorVariant = DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        children: providedChildren,
        ...restProps
    }: RadioGroupOptionProps = $props();

    let styleClass = $derived(
        themedTWMerge(
            "shrink-0 h-[.65lh] w-[.65lh] rounded-full border data_checked:border-4",
            getBaseColorClassesForColorCategoryStyleVariant("surface-lightest"),
            `data_checked:border-${colorVariant}`,
            disabled
                ? "border-surface-darkest bg-surface-darkest data_checked:border-surface-darkest data_checked:bg-surface-lightest"
                : "",
        ),
    );

    /**
     * This mutation listener is used in combination with the checked state fetcher to set and unset the style when a radio button is seleted and unselected.  Specifically, this function handles when the radio button is unselected and the fetcher handles it when it's selected
     * @param mutationsList
     */
    function mutationCallback(mutationsList) {
        for (const mutation of mutationsList) {
            if (
                mutation.type === "attributes" &&
                mutation.attributeName === "data-state"
            ) {
                if (
                    mutation.target.getAttribute("data-state") === "unchecked"
                ) {
                    fetchedChecked = false;
                }
            }
        }
    }
    const observer = new MutationObserver(mutationCallback);

    let boundElement: HTMLButtonElement | undefined = $state();
    $effect(() => {
        if (boundElement) {
            observer.observe(boundElement, { attributes: true });
        }
    });

    let testId = $derived(buildTestId(id, testidProp));

    let fetchedChecked: boolean = $state(false);
    let style = $derived(
        fetchedChecked && dynamicColorTheme && !disabled
            ? `border:4px solid ${getDynamicColorTheme(dynamicColorTheme, colorVariant).coreColor} !important;`
            : "",
    );
</script>

<div class="flex items-center gap-1">
    <RadioGroupPrimitive.Item
        {value}
        {disabled}
        bind:el={boundElement}
        class={styleClass}
        {style}
        {...restProps}
    >
        <!-- The indicator and fetcher is used to set fetchedChecked to set the style.  A mutation observer cannot be used alone, as on load it doesn't get called -->
        <RadioGroupPrimitive.ItemIndicator let:checked>
            <RadioGroupCheckedStateFetcher bind:fetchedChecked {checked} />
        </RadioGroupPrimitive.ItemIndicator>
    </RadioGroupPrimitive.Item>
    {@render providedChildren(id, testId)}
</div>
