import type {ParentComponentProps} from "../../component";

interface BreadcrumbsProps extends ParentComponentProps
{
}
interface BreadcrumbsDropdownProps extends ParentComponentProps
{
}
interface BreadcrumbsDropdownRouteItemProps extends ParentComponentProps
{
    route: string;
}
interface BreadcrumbsRouteItemProps extends ParentComponentProps
{
    route: string;
}

export type{BreadcrumbsRouteItemProps, BreadcrumbsDropdownRouteItemProps, BreadcrumbsDropdownProps, BreadcrumbsProps};
