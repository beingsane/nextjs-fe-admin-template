import {
  Grid,
  Toolbar,
  SearchPanel,
  PagingPanel,
  VirtualTable,
  Table,
  TableHeaderRow,
  TableColumnResizing,
  TableSelection,
  TableColumnVisibility
} from '@devexpress/dx-react-grid-material-ui';
import {
  Column,
  FilteringState,
  Filter,
  TableColumnWidthInfo,
  SearchState,
  SortingState,
  Sorting,
  PagingState,
  DataTypeProvider,
  SelectionState,
  IntegratedSelection,
  CustomPaging
} from '@devexpress/dx-react-grid';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export enum DataGridColumnType {}

export interface DataGridColumn<T extends Record<string, unknown>> extends Omit<Column, 'name'> {
    /** * Specifies the column name or the name of a row field whose value the column displays.
     * If the column name does not match any field name, specify the `getCellValue` function.
     **/
    name: Extract<keyof T, string>;
    /** The table column width. */
    width: number | string;
    /** The table column alignment. */
    align?: 'left' | 'right' | 'center';
    /** Specifies whether word wrap is enabled in a column's cells. */
    wordWrapEnabled?: boolean;
    visible: boolean;
    columnType?: DataGridColumnType;
  }

export interface CellFormatter<T extends Record<string, unknown>> {
    columnNames: Extract<keyof T, string>[];
    component: React.ComponentType<DataTypeProvider.ValueFormatterProps>;
  }

const StyledTableRow = styled(VirtualTable.Row)`
    transition: background-color 0.1s ease-out;
    background-color: ${({ theme, tableRow }) =>
    tableRow.rowId % 2 ? 'rgba(0, 0, 0, 0.08)' : theme.palette.background.paper};
    cursor: pointer;
  
    &:hover {
      background-color: #daefff;
    }
  
    td {
      padding: 4px 8px;
    }
  `;

const StyledHead = styled(VirtualTable.TableHead)`
    background: #565656;
  
    th {
      padding: 4px 8px;
    }
    th,
    .MuiCheckbox-root,
    .MuiTableSortLabel-root:hover {
      color: #fff;
    }
  `;

export interface DataGridProps<T extends Record<string, unknown>> {
    columns: DataGridColumn<T>[];
    data: T[];
    load: (queryString: string) => Promise<T[]>;
    cellFormatters?: CellFormatter<T>[];
    onHiddenColumnNamesChange?: (hiddenColumnNames: string[]) => void;
    onColumnWidthsChange?: (nextColumnWidths: TableColumnWidthInfo[]) => void;
    onRowClick?: (T) => void;
  }

function DataGridContainer<T extends Record<string, unknown>>({
  columns,
  data,
  cellFormatters,
  load,
  onHiddenColumnNamesChange,
  onColumnWidthsChange,
  onRowClick
}: DataGridProps<T>): React.ReactElement {
  const [rows, setRows] = useState<T[]>(data);
  const [filters, setFilters] = useState<Filter[]>([]);
  const [sorting, setSorting] = useState<Sorting[]>([]);
  const [totalCount] = useState(0);
  const [pageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [lastQuery, setLastQuery] = useState<string>();
  const [selection, setSelection] = useState([]);

  const TableRow = ({ row, ...restProps }: Table.DataRowProps): React.ReactElement => {
    console.info(row, restProps);
    return (
      <StyledTableRow
        {...restProps}
        // eslint-disable-next-line no-alert
        onClick={() => onRowClick(row)}
      />
    );
  };

  const getQueryString = (): string => {
    let filter = filters
      .reduce((acc, { columnName, value }) => {
        acc.push(`["${columnName}", "contains", "${encodeURIComponent(value)}"]`);
        return acc;
      }, [])
      .join(',"and",');

    if (filters.length > 1) {
      filter = `[${filter}]`;
    }
    let search = columns
      .reduce((acc, { name }) => {
        acc.push(`["${name}", "contains", "${encodeURIComponent(searchValue)}"]`);
        return acc;
      }, [])
      .join(',"or",');

    if (columns.length > 1) {
      search = `[${search}]`;
    }

    return `${URL}?filter=${filter}&search=${search}`;
  };

  const loadData = (): void => {
    const queryString = getQueryString();
    if (queryString !== lastQuery && !loading) {
      setLoading(true);
      load(queryString)
        .then((rows) => {
          setRows(rows);
          setLoading(false);
          setLastQuery(queryString);
        })
        .catch(() => setLoading(false));
      setLastQuery(queryString);
    }
  };

  useEffect(() => loadData(), [filters, searchValue]);

  return (
    <Grid rows={rows} columns={columns}>
      {cellFormatters?.map((formatter) => (
        <DataTypeProvider
          key={formatter.columnNames.join('_')}
          formatterComponent={formatter.component}
          for={formatter.columnNames}
        />
      ))}
      <SelectionState selection={selection} onSelectionChange={setSelection} />
      <IntegratedSelection />
      <SearchState value={searchValue} onValueChange={setSearchValue} />
      <FilteringState filters={filters} onFiltersChange={setFilters} />
      <SortingState sorting={sorting} onSortingChange={setSorting} />
      <PagingState currentPage={currentPage} onCurrentPageChange={setCurrentPage} pageSize={pageSize} />
      <CustomPaging totalCount={totalCount} />
      <VirtualTable
        /* containerComponent={(props) => {
                      return (
                          <div style={(props as any).style}>
                              <CustomScroll
                                  heightRelativeToParent={`${(props as any).style.width}px`}
                              >
                                  {props.children}
                              </CustomScroll>
                          </div>
                      );
          }} */
        height="615px"
        rowComponent={TableRow}
        headComponent={StyledHead}
        columnExtensions={columns.map(
          (column): VirtualTable.ColumnExtension => ({
            ...column,
            columnName: column.name
          })
        )}
      />
      <TableColumnResizing
        columnWidths={columns.map(
          (column): TableColumnWidthInfo => ({
            columnName: column.name,
            width: column.width
          })
        )}
        onColumnWidthsChange={onColumnWidthsChange}
      />
      <Toolbar />
      <SearchPanel />
      <PagingPanel />
      <TableHeaderRow showSortingControls />
      <TableColumnVisibility
        hiddenColumnNames={columns?.filter((column) => !column.visible)?.map((column) => column.name)}
        onHiddenColumnNamesChange={onHiddenColumnNamesChange}
      />
      <TableSelection showSelectAll />
    </Grid>
  );
}

export default DataGridContainer;