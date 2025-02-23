<script module lang="ts">
    import { DEFAULT_COLOR_CATEGORY_VARIANT } from "../../../theme/theme.js";
    import { type ParentComponentProps, buildTestId } from "../../component.js";

    export interface NavMenuProps extends ParentComponentProps {}
</script>

<script lang="ts">
    let {
        id,
        testid: testidProp,
        colorVariant = DEFAULT_COLOR_CATEGORY_VARIANT,
        dynamicColorTheme,
        children: providedChildren,
        ...restProps
    }: NavMenuProps = $props();

    let testId = $derived(buildTestId(id, testidProp));
</script>

<nav {...restProps} class="flex justify-center items-center space-x-8 grow">
    {@render providedChildren(id, testId)}
</nav>
