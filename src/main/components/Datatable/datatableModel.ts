
interface ColumnDefinition
{
    columnName: string;
    columnLabel: string;
}

interface DataRow
{
    rowKey: string;

    getData(columnName: string): string;
}

type TableDataSource = Iterable<DataRow>;

const EMPTY_TABLE_DATA_SOURCE: TableDataSource = {
    [Symbol.iterator]() {
        return new EmptyIterator<DataRow>();
    }
}

class EmptyIterator<T> implements Iterator<T>
{
    next(): IteratorResult<T>
    {
        return {done : true, value : undefined};
    }
}

class ArrayDataRowIterable<T> implements Iterable<DataRow>
{
    constructor(private data: T[]) {}

    [Symbol.iterator](): Iterator<DataRow>
    {
        return new ArrayDataRowIterator(this.data);
    }
}

class ArrayDataRowIterator<T> implements Iterator<DataRow>
{
    private _index = 0;

    constructor(private data: T[]) {}

    next(): IteratorResult<DataRow>
    {
        const done = this.index >= this.data.length;
        const value = new DefaultDataRow(this.index.toString(), this.data[this.index]);
        this._index++;

        return {done, value};
    }

    private get index(): number
    {
        return this._index;
    }
}

class DefaultDataRow<T> implements DataRow
{
    constructor(public rowKey: string, private readonly _data: T) {}

    getData(columnName: string): string
    {
        let currentValue: any = this._data;
        const columnNameSegments = columnName.split(".");

        for (const nextColumnNameSegment of columnNameSegments)
        {
            currentValue = currentValue[nextColumnNameSegment];
            if (currentValue === undefined || currentValue === null)
            {
                throw new Error(`Could not find nested property ${columnName}`);
            }
        }
        return currentValue.toString();
    }
}

export {EMPTY_TABLE_DATA_SOURCE, ArrayDataRowIterable};
export type{TableDataSource, ColumnDefinition, DataRow};
