<!--
Category -> NamedVariant -> Feature -> Element - -> State
-->
<script module lang="ts">
    interface IconButtonProps extends ParentComponentProps {
        onclick?: (e: MouseEvent) => void;
    }
</script>

<script lang="ts">
    import { Button as ButtonPrimitive } from "bits-ui";
    import { buildTestId, type ParentComponentProps } from "../component.js";
    import {
        DEFAULT_COLOR_CATEGORY_VARIANT,
        themedTWMerge,
        getBaseColorClassesForColorCategoryStyleVariant,
        getBaseColorStyleForDynamicColorTheme,
    } from "../../theme/theme.js";

    let {
        id,
        testid: testidProp,
        onclick = (e: MouseEvent) => {},
        colorVariant = DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        children: providedChildren,
        ...restProps
    }: IconButtonProps = $props();

    let testId = $derived(buildTestId(id, testidProp));

    const styleClass = $derived(
        themedTWMerge(
            "flex justify-center items-center w-8 h-8 rounded-full mb-1 p-2 transition-all active:scale-[95%]",
            getBaseColorClassesForColorCategoryStyleVariant(colorVariant),
            `hover:bg-${colorVariant}-dark`,
        ),
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

<ButtonPrimitive.Root
    {id}
    data-testid={testId}
    type="button"
    class={styleClass}
    {style}
    {...restProps}
    {onclick}
>
    {@render providedChildren(id, testId)}
</ButtonPrimitive.Root>
