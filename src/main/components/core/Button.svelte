<svelte:options runes={true} />

<!--
Category -> NamedVariant -> Feature -> Element - -> State
-->

<script module lang="ts">
    interface ButtonProps extends ParentComponentProps {
        onclick?: (e: MouseEvent) => void;
        classOverride?:string;
    }

    export type {ButtonProps};
</script>
<script lang="ts">
 
    import { Button as ButtonPrimitive } from "bits-ui";
    import {buildTestId, type ParentComponentProps} from "../component.js"
    import {DEFAULT_COLOR_CATEGORY_VARIANT, themedTWMerge, getBaseColorClassesForColorCategoryStyleVariant, getBaseColorStyleForDynamicColorTheme} from "../../theme/theme.js"

    let { id, testid:testidProp, colorVariant=DEFAULT_COLOR_CATEGORY_VARIANT, dynamicColorTheme, classOverride="", children:providedChildren, ...restProps }: ButtonProps = $props();

    let testId=$derived(buildTestId(id, testidProp));

    const styleClass = themedTWMerge("m-0 rounded-lg py-2 px-4 transition-all active:scale-[95%]",
        getBaseColorClassesForColorCategoryStyleVariant(colorVariant),
        `hover:bg-${colorVariant}-dark`,
        classOverride
    );
    const style=(dynamicColorTheme) ? getBaseColorStyleForDynamicColorTheme(dynamicColorTheme, colorVariant) : "";
</script>

<ButtonPrimitive.Root
    id={id}
    data-testid={testId}
	type="button"
    class={styleClass}
    style={style}
	{...restProps}
    on:click={onclick}>
    {@render providedChildren(id, testId)}
</ButtonPrimitive.Root>

