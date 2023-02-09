/*

description:
	A <td> that contains a table colum title, and allows the user to sort the records
	in the table according to this column

state:
	- sorted: null | "asc" | "desc". Tells if the table is currently sorted by this
		column, and in this case if it is sorted ascending or descending

hooks:
	- useEffect: if the table was sorted by this column, and it is not
		anymore, updates the state accordingly

context:

imported into:
	- SortedTable

component dependences:

other dependences:
	- sort images

*/

import { useEffect, useState } from "react";

import sortBoth from "../images/sort-both.svg";
import sortUp from "../images/sort-up.svg";
import sortDown from "../images/sort-down.svg";

export interface TableHeaderProps {
	title: string; //the title to be displayed
	width: number | string; //the width of the column
	doSort: Function; // a function to sort the table (by passing a comparison function)
	isCurrentSort: boolean; // whether this column is the one which is currently sorting the table
}

const TableHeader = ({ title, width, doSort, isCurrentSort }: TableHeaderProps) => {
	const [sorted, setSorted] = useState<"asc" | "desc" | null>(null);

	useEffect(() => {
		if (!isCurrentSort) setSorted(null);
	}, [isCurrentSort]);

	return (
		<th
			style={{ width: width }}
			className="position center-text-vertically sort-th"
			onClick={() => {
				doSort(sorted === "asc");
				setSorted(sorted !== "asc" ? "asc" : "desc");
			}}
		>
			<div
				className="sort-div center-vertically"
				style={{
					backgroundImage: `url(${sorted ? (sorted === "asc" ? sortUp : sortDown) : sortBoth})`
				}}
			/>
			{title}
		</th>
	);
};

export default TableHeader;
