import type {ParentComponentProps} from "../../component";

interface AccordionPanelProps extends ParentComponentProps
{
    activeItemName?: string;
}

interface AccordionPanelItemProps extends ParentComponentProps
{
    name: string;
}

interface AccordionPanelItemContentProps extends ParentComponentProps
{
}

interface AccordionPanelItemHeaderProps extends ParentComponentProps
{
}

export
type{AccordionPanelProps, AccordionPanelItemProps, AccordionPanelItemContentProps, AccordionPanelItemHeaderProps};