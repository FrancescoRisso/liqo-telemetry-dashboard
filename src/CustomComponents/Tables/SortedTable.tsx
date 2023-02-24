/*

description:
	Creates a scrollable table that allows you to sort the entries by column value
	
state:
	- sortingBy: the name of the column the sort is being done on (or null)
	- data: the sorted data displayed in the table
	- sortedAscending: whether data is currently sorted in an ascending or descending order
		null if no sorting is currently in place
	- expandedRow: the row with the child displayed, if present, null otherwhise
	
hooks:
	- useEffect: every time the props data changes, pushes it into the state variable,
		while marking that no sorting is currently acrive
	
context:
	- 
	
imported into:
	- ClustersList
	
component dependences:
	- TableHeader
	- TableRow
	
	other dependences:
	- React-bootstrap components
	
*/

import { useEffect, useState } from "react";

import { TableColumnTitle, TableRowType } from "../../types";
import { HeaderCellSort, useSort } from "@table-library/react-table-library/sort";
import TableCell from "./TableCell";
import { Table, Header, HeaderRow, Body, TableNode } from "@table-library/react-table-library/table";
import NewTableRow from "./NewTableRow";
import { sortTable } from "../../utils";

import SortBoth from "../../images/sort-both.svg";
import SortUp from "../../images/sort-up.svg";
import SortDown from "../../images/sort-down.svg";

export interface SortedTableProps {
	columns: TableColumnTitle[]; // the list of titles of the columns
	values: TableRowType[]; // the list of rows.
	// If there is a LinkColumn, that value would not be inserted as a column, but
	// the whole row would be a link to  that path
	initialSorting?: { col: number; ascending: boolean }; // if an initial sorting is
	// retquired, and how (col == index of the desired column)
	sortingFunct: Function;
}

const SortedTable = ({ columns, values, initialSorting, sortingFunct }: SortedTableProps) => {
	const [expandedRow, setExpandedRow] = useState<number | null>(null);

	const data = {
		nodes: values.map((row: TableRowType, index: number) => {
			const id = ["id", index];

			const otherfields = columns.map((col, index) => {
				return [col.label, row[index]];
			});

			const link = ["link", row.filter((x) => x.type === "link")[0] || undefined];
			const child = ["child", row.filter((x) => x.type === "child")[0] || undefined];
			return Object.fromEntries([id, ...otherfields, link, child]);
		})
	};

	const tableValues = columns.map((col) => {
		return {
			label: col.label,
			renderCell: (item: any) => {
				return <TableCell value={item[col.label]} />;
			}
		};
	});

	const sort = useSort(
		data,
		{
			onChange: () => {},
			state: initialSorting ? { sortKey: columns[initialSorting.col].label, reverse: !initialSorting.ascending } : {}
		},
		{
			sortFns: Object.fromEntries(
				columns.map((col) => {
					return [col.label, (array) => array.sort(sortFunct(col.label))];
				})
			),
			sortIcon: {
				margin: "5px",
				iconDefault: <img src={SortBoth} alt="" />,
				iconUp: <img src={SortUp} alt="" />,
				iconDown: <img src={SortDown} alt="" />
			}
		}
	);

	const resize = { resizerHighlight: "#dde2eb", resizerWidth: 10 };

	return (
		<div className="pb-0 h-100percent w-100percent">
			<div className="pb-0 h-100percent w-100percent">
				<Table data={data} sort={sort} layout={{fixedHeader: true}}>
					{(tableList) => (
						<>
							<Header>
								<HeaderRow>
									{tableValues.map((title, index) => (
										<HeaderCellSort resize={resize} id={index} sortKey={title.label}>
											{title.label}
										</HeaderCellSort>
									))}
								</HeaderRow>
							</Header>
							<Body>
								{tableList.map((item, index) => (
									<NewTableRow
										item={item}
										columns={tableValues}
										expanded={item.child && index === expandedRow}
										setExpanded={() => {
											if (item.child && index === expandedRow) setExpandedRow(null);
											else setExpandedRow(index);
										}}
									/>
								))}
							</Body>
						</>
					)}
				</Table>
			</div>
		</div>
	);
};

export default SortedTable;

const sortFunct = (field: string) => {
	const sorter = sortTable(0)(true);
	return (a: TableNode, b: TableNode) => {
		return sorter([a[field]], [b[field]]);
	};
};
