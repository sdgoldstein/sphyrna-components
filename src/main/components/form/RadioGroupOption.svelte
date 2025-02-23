<script lang="ts">
    import {
        DEFAULT_COLOR_CATEGORY_VARIANT,
        getDynamicColorTheme,
        isValidDesignTokenColorVariant,
        themedTWMerge,
        type DesignTokenColorVariantLookup,
    } from "../../theme/theme.js";
    import { buildTestId } from "../component.js";
    import { RadioGroup as RadioGroupPrimitive } from "bits-ui";
    import RadioGroupCheckedStateFetcher from "./RadioGroupCheckedStateFetcher.svelte";
    import type { RadioGroupOptionProps } from "./radioGroup.js";

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

    const radioGroupOptionClassFromColorVariant: DesignTokenColorVariantLookup =
        {
            primary: "data-[state=checked]:border-primary",
            secondary: "data-[state=checked]:border-secondary",
            tertiary: "data-[state=checked]:border-tertiary",
        };

    let styleClass = $derived(
        themedTWMerge(
            "shrink-0 h-[.65lh] w-[.65lh] rounded-full border data-[state=checked]:border-4 bg-surface-lightest text-surface-text",
            isValidDesignTokenColorVariant(colorVariant)
                ? radioGroupOptionClassFromColorVariant[colorVariant]
                : "",
            disabled
                ? "border-surface-dark bg-surface-dark data-[state=checked]:border-surface-darkest data-[state=checked]:bg-surface-lightest"
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
                } else {
                    fetchedChecked = true;
                }
            }
        }
    }
    const observer = new MutationObserver(mutationCallback);

    let boundElement: HTMLButtonElement | null = $state(null);
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
        bind:ref={boundElement}
        class={styleClass}
        {style}
        {...restProps}
    >
        <!-- The indicator and fetcher is used to set fetchedChecked to set the style.  A mutation observer cannot be used alone, as on load it doesn't get called -->
        {#snippet children({ checked })}
            <RadioGroupCheckedStateFetcher bind:fetchedChecked {checked} />
        {/snippet}
    </RadioGroupPrimitive.Item>
    {@render providedChildren(id, testId)}
</div>
