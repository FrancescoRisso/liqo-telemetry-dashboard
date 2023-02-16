/*

description:
	Creates a scrollable table that allows you to sort the entries by column value
	
state:
	- sortingBy: the name of the column the sort is being done on (or null)
	- data: the sorted data displayed in the table
	- sortedAscending: whether data is currently sorted in an ascending or descending order
		null if no sorting is currently in place
	
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

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

import { Table } from "react-bootstrap";
import { TableColumnTitle, TableRowType, LinkColumn } from "../types";

export interface SortedTableProps {
	columns: TableColumnTitle[]; // the list of titles of the columns
	values: TableRowType[]; // the list of rows.
	// If there is a LinkColumn, that value would not be inserted as a column, but
	// the whole row would be a link to  that path
	sortingFunct: Function; // a function that, given the column name, returns a
	// series of nested functions, that work as follows:
	// - sortingFunct(colName, index) -> returns sortingFunctAsc(ascending: bool)
	// - sortingFunctAsc(asc) -> returns comparisonFunct(a, b)
	// - comparisonFunct is the function to be passed to Array.sort()
	initialSorting?: { col: number; ascending: boolean }; // if an initial sorting is
	// retquired, and how (col == index of the desired column)
}

const SortedTable = ({ columns, values, sortingFunct, initialSorting }: SortedTableProps) => {
	const [sortingBy, setSortingBy] = useState<string | null>(null);
	const [sortedAscending, setSortedAscending] = useState<boolean | null>(null);
	const [data, setData] = useState<TableRowType[]>([]);

	useEffect(() => {
		if (initialSorting) {
			const sortingFunctAsc = sortingFunct(initialSorting.col);
			const comparisonFunct = sortingFunctAsc(initialSorting.ascending);
			setData([...values].sort(comparisonFunct));
			setSortingBy(columns[initialSorting.col].label);
			setSortedAscending(initialSorting.ascending);
		} else setData(values);
	}, [values, columns, initialSorting, sortingFunct]);

	return (
		<div className="pb-0 h-100percent w-100percent">
			<div className="pb-0 h-100percent table-wrapper w-100percent">
				<div className="border">
					<Table striped bordered className="mb-0 fixed white-bg border-table">
						<thead className="fixed bg-white">
							<tr>
								{columns.map((title, index, array) => {
									const sortingFunctAsc = sortingFunct(index);
									return (
										<TableHeader
											key={title.label}
											width={`${100 / array.length}%`}
											title={title.label}
											doSort={() => {
												const newSortDirection =
													sortedAscending === null || sortingBy !== title.label
														? true
														: !sortedAscending;
												const comparisonFunct = sortingFunctAsc(newSortDirection);
												if (sortingBy !== title.label) setSortingBy(title.label);
												setSortedAscending(newSortDirection);
												setData([...data].sort(comparisonFunct));
											}}
											currentSortAscending={sortingBy === title.label ? sortedAscending : null}
										/>
									);
								})}
							</tr>
						</thead>
						<tbody className="table-wrapper">
							{data.map((record, index) => {
								const width = `${100 / columns.length}%`;
								let link: string | undefined = undefined;
								if (record.filter((x) => x.type === "link").length !== 0) {
									const linkSetting: LinkColumn = record.filter(
										(x) => x.type === "link"
									)[0] as LinkColumn;
									link = linkSetting.value;
								}
								return (
									<TableRow
										id={index}
										key={index}
										width={width}
										data={record.filter((x) => x.type !== "link")}
										link={link}
									/>
								);
							})}
						</tbody>
					</Table>
				</div>
				<p className="ml-10px mb-0">
					<i>
						<small> {values.length} rows displayed.</small>
					</i>
				</p>
			</div>
		</div>
	);
};

export default SortedTable;
