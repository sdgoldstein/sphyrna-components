import type {BaseComponentProps} from "../../component";
import type {ColumnDefinition, TableDataSource} from "./datatableModel";

interface DatatableProps extends BaseComponentProps
{
    columnDefinitions: ColumnDefinition[];
    rowData: TableDataSource;
}

export type
{
    DatatableProps
}