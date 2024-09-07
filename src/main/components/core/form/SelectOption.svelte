<svelte:options runes={true} />

<script module lang="ts">
    import type { ParentComponentProps } from "../../component.js";
    import {Select as SelectPrimitive} from "bits-ui"
    import {Check} from "lucide-svelte"

    export interface SelectOptionProps extends ParentComponentProps {
        value: any;
    }
</script>

<script lang="ts">
    let { value, children, ...restProps }: SelectOptionProps = $props();
</script>

<SelectPrimitive.Item class="flex w-full select-none rounded-sm px-2 py-1 items-center justify-between"
{value} 
{...restProps}>
    {@render children()}
    <SelectPrimitive.ItemIndicator>
        <Check class="h-4 w-4" />
    </SelectPrimitive.ItemIndicator>
</SelectPrimitive.Item>


