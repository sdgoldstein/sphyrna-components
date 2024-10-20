<svelte:options runes={true} />

<script module lang="ts">
    interface TabProps extends ParentComponentProps {
        label:string;
    }

    export type {TabProps};
</script>
<script lang="ts">
    import { getContext } from "svelte";
     import {Tabs as TabsPrimitive} from "bits-ui"
    import { DEFAULT_COLOR_CATEGORY_VARIANT } from "../../../theme/theme.js";

     let { id, testid:testidProp, label, colorVariant=DEFAULT_COLOR_CATEGORY_VARIANT, dynamicColorTheme, children:providedChildren, ...restProps }: TabProps = $props();
    
    getContext("foo").push({id:id,label:label});
</script>

<TabsPrimitive.Content value={id}>
    {label}
</TabsPrimitive.Content>
