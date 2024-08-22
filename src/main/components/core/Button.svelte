<svelte:options runes={true} />

<!--
Category -> NamedVariant -> Feature -> Element - -> State

Background:


Text:

Border:

Shape:

bg-${colorVariant}-500 text-on${colorVariant}
-->
<script lang="ts">
 
 import { Button as ButtonPrimitive } from "bits-ui";
    import type { Snippet } from "svelte";
import type {ParentComponentProps} from "./component.js"
import {DEFAULT_COLOR_CATEGORY_VARIANT} from "../../theme/theme.js"

    interface ButtonProps extends ParentComponentProps {
    }

    let { colorVariant=DEFAULT_COLOR_CATEGORY_VARIANT, children, ...restProps }: ButtonProps = $props();
</script>

<ButtonPrimitive.Root
	type="button"
    class="bg-primary text-primaryText"
	{...restProps}>
    {@render children()}
</ButtonPrimitive.Root>

