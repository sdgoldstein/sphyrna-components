import type {ParentComponentProps} from "../../component";

interface TabProps extends ParentComponentProps
{
    name: string;
    label: string;
}

interface TabbedPaneProps extends ParentComponentProps
{
}

interface TabDescriptor
{
    name: string;
    label: string;
}

export type{TabbedPaneProps, TabDescriptor, TabProps};