import type {BaseComponentProps, ParentComponentProps} from "../../component";

const SIZE_CONTEXT_NAME: string = "SIZE_CONTEXT";

interface NavBarProps extends ParentComponentProps
{
    size?: number;
}

interface NavBarBrandProps extends ParentComponentProps
{
}

interface NavBarBrandLogoProps extends BaseComponentProps
{
    src: string;
    alt: string;
    aspectRatio?: number;
}

interface NavBarBrandTitleProps extends ParentComponentProps
{
}

interface NavMenuProps extends ParentComponentProps
{
}

interface NavMenuItemProps extends ParentComponentProps
{
    href?: string;
}

export {SIZE_CONTEXT_NAME};
export type{NavBarProps, NavBarBrandProps, NavBarBrandLogoProps, NavBarBrandTitleProps, NavMenuProps, NavMenuItemProps};
