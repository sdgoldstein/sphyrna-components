/**
 * Design token format is the following: Category -> NamedVariant -> Feature ->
 * Element - -> State.  For example, color-primary-background-button-disabled.
 * Components utilize hierarchical selection, meaning that a background color
 * will be based on the most specific token available.  For example, the
 * background color of a disabled button will be
 * color-primary-background-button-disabled if it exists.  Otherwise, it will
 * check color-primary-background-button.  If that doesn't exists, it will check
 * color-primary-background. Finally, if that doens't exist, it will fallback to
 * color-primary
 *
 * References:
 * https://amzn.github.io/style-dictionary/#/tokens?id=design-token-structure
 * https://www.contentful.com/blog/design-token-system/
 * https://atlassian.design/tokens/design-tokens
 * https://m3.material.io/foundations/design-tokens
 */
import {extendTailwindMerge} from "tailwind-merge";

type ColorHex = `#${string}`;

enum DesignTokenColorCategoryStyleVariant {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    TERTIARY = "tertiary",
    WARNING = "warning",
    SUCCESS = "success",
    ERROR = "error",
    SURFACE = "surface",
}

interface DynamicColorTheme
{
    coreColor: ColorHex;
    textColor: ColorHex;
}

interface DynamicTheme
{
    colorThemes: Map<string, DynamicColorTheme>;
}

interface ThemeableComponentProps
{
    colorVariant?: string;
    dynamicColorTheme?: DynamicTheme;
}

enum DesignTokenCategory
{
    COLOR = "color"
}

const DEFAULT_COLOR_CATEGORY_VARIANT = "primary";

enum DesignTokenElementState
{
    DISABLED = "disabled"
}

const COLOR_VARIANTS_TO_BASE_CLASSES: Map<string, string> = new Map<string, string>([
    [ "primary", "bg-primary text-primary-text" ], [ "secondary", "bg-secondary text-secondary-text" ],
    [ "tertiary", "bg-tertiary text-tertiary-text" ], [ "warning", "bg-warning text-warning-text" ],
    [ "success", "bg-success text-success-text" ], [ "error", "bg-error text-error-text" ],
    [ "surface", "bg-surface text-surface-text" ]
]);

/**
 * Get the base CSS class for the provided style variant.  These include
 * background and font colors
 * @param styleVariant the style variant.  This may be one of the known
 *     variant's in DesignTokenColorCategoryStyleVariant or it may be a custom
 *     one
 * @returns the base css classes for the provided style variant
 */
function getBaseColorClassesForColorCategoryStyleVariant(styleVariant: string): string
{
    const styleVariantBase = styleVariant.split("-");
    if (styleVariantBase.length <= 0)
    {
        throw new Error(`styleVariant specified is invalid: ${styleVariant}`)
    }

    return COLOR_VARIANTS_TO_BASE_CLASSES.get(styleVariantBase[0]) ?? "";
}

function getDynamicColorTheme(dynamicTheme: DynamicTheme, styleVariant: string): DynamicColorTheme
{
    const dynamicColorThemeToReturn = dynamicTheme.colorThemes.get(styleVariant);
    if (dynamicColorThemeToReturn === undefined)
    {
        throw new Error("Dynamic Color Theme does not contain provided color variant");
    }

    return dynamicColorThemeToReturn
}

function getBaseColorStyleForDynamicColorTheme(dynamicTheme: DynamicTheme, styleVariant: string): string
{
    const dynamicColorTheme: DynamicColorTheme = getDynamicColorTheme(dynamicTheme, styleVariant);
    return `background-color:${dynamicColorTheme.coreColor} !important; color:${
        dynamicColorTheme.textColor} !important;`;
}

const themedTWMerge = extendTailwindMerge({
    extend : {
        classGroups : {
            rounded : [ {rounded : [ "component", "container" ]} ],
        },
    },
})

export type{ThemeableComponentProps, DynamicColorTheme, ColorHex, DynamicTheme};
export {
    DesignTokenCategory,
    DesignTokenColorCategoryStyleVariant,
    DesignTokenElementState,
    themedTWMerge,
    DEFAULT_COLOR_CATEGORY_VARIANT,
    getBaseColorClassesForColorCategoryStyleVariant,
    getBaseColorStyleForDynamicColorTheme,
    getDynamicColorTheme
}
