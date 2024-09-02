<svelte:options runes={true} />

<script module lang="ts">
    import { Select as SelectPrimitive } from "bits-ui";
    import ChevronDown from "lucide-svelte/icons/chevron-down";
    import type { ParentComponentProps } from "../../component.js";

    export interface SelectProps extends ParentComponentProps {
        name?:string;
        value?: any;
        error?: string;
        onchange?:(e: Event) => void
    }
</script>

<script lang="ts">

    let {
        id,
        value = $bindable(),
        name,
        error,
        onchange=()=>{},
        children,
        ...restProps
    }: SelectProps = $props();

    let styleClass="";
</script>

<SelectPrimitive.Root 
    selected={value}
    onOpenChange={() => {
    error = undefined;
}} onSelectedChange={onchange}>
    <SelectPrimitive.Trigger>
        <div>
            <ChevronDown class="h-4 w-4 opacity-50" />
        </div>
    </SelectPrimitive.Trigger>
    <SelectPrimitive.Content class={styleClass}>
        <div class="w-full p-1">
            {@render children()}
        </div>
    </SelectPrimitive.Content>
    <SelectPrimitive.Input {name}/>
</SelectPrimitive.Root>
