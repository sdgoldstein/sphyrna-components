

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
    import { buildTestId, type ParentComponentProps } from "../../component.js";

     let { id, testid:testidProp, label, colorVariant=DEFAULT_COLOR_CATEGORY_VARIANT, dynamicColorTheme, children:providedChildren, ...restProps }: TabProps = $props();
     
     let testId=$derived(buildTestId(id, testidProp));
    
     getContext("foo").push({id:id,label:label});
</script>

<TabsPrimitive.Content value={id} class="p-2">
    {@render providedChildren(id, testId)}
</TabsPrimitive.Content>
