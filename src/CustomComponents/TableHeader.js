/*

description:
	A <td> that contains a table colum title, and allows the user to sort the records
	in the table according to this column
	
state:
	- sorted: null | "asc" | "desc". Tells if the table is currently sorted by this
		column, and in this case if it is sorted ascending or descending
	
props:
	- title: the title to be displayed
	- width: the width of the column
	- doSort: a function to sort the table (by passing a comparison function)
	- isCurrentSort: whether this column is the one which is currently sorting the table
	
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

import React, { useEffect, useState } from "react";

import sortBoth from "../images/sort-both.svg";
import sortUp from "../images/sort-up.svg";
import sortDown from "../images/sort-down.svg";

const TableHeader = ({ title, width, doSort, isCurrentSort }) => {
	const [sorted, setSorted] = useState(null);

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
