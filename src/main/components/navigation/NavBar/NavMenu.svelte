<script lang="ts">
    import { DEFAULT_COLOR_CATEGORY_VARIANT } from "../../../theme/theme.js";
    import { buildTestId } from "../../component.js";
    import type { NavMenuProps } from "./navBar.js";

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
