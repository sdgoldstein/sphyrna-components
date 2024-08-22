/**
 * Design token format is the following: Category -> NamedVariant -> Feature -> Element - -> State.  For example, color-primary-background-button-disabled.
 * Components utilize hierarchical selection, meaning that a background color will be based on the most specific token available.  For example, the background color
 * of a disabled button will be color-primary-background-button-disabled if it exists.  Otherwise, it will check color-primary-background-button.  If that doesn't exists, it will check color-primary-background.  
 * Finally, if that doens't exist, it will fallback to color-primary
 * 
 * References:
 * https://amzn.github.io/style-dictionary/#/tokens?id=design-token-structure
 * https://www.contentful.com/blog/design-token-system/
 * https://atlassian.design/tokens/design-tokens
 * https://m3.material.io/foundations/design-tokens
 */
interface ThemeableComponentProps {
    colorVariant?:string;
}

enum DesignTokenCategory {
    COLOR = "color"
}

enum DesignTokenColorCategoryStyleVariant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TERTIARY = 'tertiary',
    WARNING = 'warning',
    SUCCESS = 'success',
    ERROR = 'error',
    SURFACE = 'surface',
  }
  const DEFAULT_COLOR_CATEGORY_VARIANT = "primary";

enum DesignTokenElementState {
    DISABLED = 'disabled' 
}

export type {ThemeableComponentProps};
export {DesignTokenCategory, DesignTokenColorCategoryStyleVariant, DesignTokenElementState, DEFAULT_COLOR_CATEGORY_VARIANT}

 