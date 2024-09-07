<svelte:options runes={true} />

<script module lang="ts">
    import { DEFAULT_COLOR_CATEGORY_VARIANT, getBaseColorClassesForColorCategoryStyleVariant, themedTWMerge } from "../../../theme/theme.js";
    import type { ParentComponentProps } from "../../component.js";
    import {RadioGroup as RadioGroupPrimitive} from "bits-ui"

    export interface RadioGroupOptionProps extends ParentComponentProps {
        value: any;

    }
</script>

<script lang="ts">
    let { value, 
        colorVariant=DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,children, ...restProps }: RadioGroupOptionProps = $props();

        let styleClass = $derived(themedTWMerge("shrink-0 h-[.65lh] w-[.65lh] rounded-full border data_checked:border-4",
        getBaseColorClassesForColorCategoryStyleVariant("surface-lightest"),
        `data_checked:border-primary`
    ));

</script>

<div class="flex items-center gap-1">
    <RadioGroupPrimitive.Item     
        class={styleClass}
        {value} 
        {...restProps}/>
    {@render children()}
</div>


