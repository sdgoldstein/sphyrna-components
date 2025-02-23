import type {BaseComponentProps, ParentComponentProps} from "../../component";

interface BreadcrumbsProps extends ParentComponentProps
{
}
interface BreadcrumbsDropdownProps extends ParentComponentProps
{
    route: string;
}
interface BreadcrumbsDropdownRouteItemProps extends BaseComponentProps
{
    route: string;
    label: string;
}
interface BreadcrumbsRouteItemProps extends BaseComponentProps
{
    route: string;
    label: string;
}

interface BreadcrumbsDropdownRouteItemDescriptor
{
    route: string;
    label: string;
}

export type{
    BreadcrumbsRouteItemProps,
    BreadcrumbsDropdownRouteItemProps,
    BreadcrumbsDropdownRouteItemDescriptor,
    BreadcrumbsDropdownProps,
    BreadcrumbsProps
};
