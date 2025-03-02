import type {Snippet} from "svelte";
import type {ParentComponentProps} from "../../component";

interface BreadcrumbsProps extends ParentComponentProps
{
}
interface BreadcrumbsDropdownProps extends ParentComponentProps
{
    route: string;
}

interface BreadcrumbsDropdownRouteItemProps extends ParentComponentProps
{
    route: string;
}
interface BreadcrumbsRouteItemProps extends ParentComponentProps
{
    route: string;
}

interface BreadcrumbsDropdownRouteItemDescriptor
{
    route: string;
    children: Snippet;
}

export type{
    BreadcrumbsRouteItemProps,
    BreadcrumbsDropdownRouteItemProps,
    BreadcrumbsDropdownRouteItemDescriptor,
    BreadcrumbsDropdownProps,
    BreadcrumbsProps
};
