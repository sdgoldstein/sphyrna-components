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

<SelectPrimitive.Item {value}>
    {@render children()}
    <SelectPrimitive.ItemIndicator>
        <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <Check class="h-4 w-4" />
        </span>
    </SelectPrimitive.ItemIndicator>
</SelectPrimitive.Item>


