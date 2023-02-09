/*

description:
	Creates a scrollable table that allows you to sort the entries by column value
	
state:
	- sortingBy: the name of the column the sort is being done on (or null)
	- data: the sorted data displayed in the table
	
props:
	- columns[{}]: the list of titles of the columns, in the form { "type", "label" }
	- data[[{}]]: the list of rows, with the items in the form { "type", "value" } or
		{ "type", "first", "last" } if type = "timeDuration". If there is a "type" = "link",
		that value would not be inserted as a column, but the whole row would be a link to
		that path
	- sortingFunct(): a function that, given the column name, returns a series of nested
		functions, that work as follows:
		- sortingFunct(colName, index) -> returns sortingFunctAsc(ascending: bool)
		- sortingFunctAsc(asc) -> returns comparisonFunct(a, b)
		- comparisonFunct is the function to be passed to Array.sort()
	
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

export interface TextColumn {
	type: "text";
	value: string;
}

export interface LinkColumn {
	type: "link";
	value: string;
}

export interface TimeColumn {
	type: "time";
	value: number;
}

export interface DurationColumn {
	type: "timeDuration";
	last: number;
	first: number;
	value?: undefined; //unused
}

export type TableColumn = TextColumn | LinkColumn | TimeColumn | DurationColumn;
export type TableRowType = TableColumn[];

export function isDurationColumn (obj: TableColumn): obj is DurationColumn {
	return obj.type === "timeDuration";
};

interface TableColumnTitle {
	type: "text" | "timeDuration";
	label: string;
}

export interface SortedTableProps {
	columns: TableColumnTitle[];
	values: TableRowType[];
	sortingFunct: Function;
}

const SortedTable = ({ columns, values, sortingFunct }: SortedTableProps) => {
	const [sortingBy, setSortingBy] = useState<string | null>(null);
	const [data, setData] = useState<TableRowType[]>([]);

	useEffect(() => {
		setData(values);
		setSortingBy(null);
	}, [values]);

	return (
		<div className="pb-0 h-100percent w-100percent">
			<div className="pb-0 h-100percent table-wrapper w-100percent">
				<Table striped bordered className="mb-0 fixed white-bg border-table">
					<thead className="fixed bg-white">
						<tr>
							{columns.map((title, index, array) => {
								let sortingFunctAsc = sortingFunct(index);
								return (
									<TableHeader
										key={title.label}
										width={`${100 / array.length}%`}
										title={title.label}
										doSort={(asc: boolean) => {
											let comparisonFunct = sortingFunctAsc(asc);
											setSortingBy(title.label);
											setData([...data].sort(comparisonFunct));
										}}
										isCurrentSort={sortingBy === title.label}
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
		</div>
	);
};

export default SortedTable;
