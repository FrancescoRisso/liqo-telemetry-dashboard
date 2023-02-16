/*

description:
	A <td> that contains a table colum title, and allows the user to sort the records
	in the table according to this column

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

import sortBoth from "../images/sort-both.svg";
import sortUp from "../images/sort-up.svg";
import sortDown from "../images/sort-down.svg";

export interface TableHeaderProps {
	title: string; //the title to be displayed
	width: number | string; //the width of the column
	doSort: Function; // a function to sort the table (by passing a comparison function)
	currentSortAscending: boolean | null; // null ? the table is not sorted according to this column : it is sorted according to the boolean value
}

const TableHeader = ({ title, width, doSort, currentSortAscending }: TableHeaderProps) => {
	return (
		<th
			style={{ width: width }}
			className="position center-text-vertically sort-th"
			onClick={() => {
				doSort();
			}}
		>
			<div
				className="sort-div center-vertically"
				style={{
					backgroundImage: `url(${
						currentSortAscending === null ? sortBoth : currentSortAscending ? sortUp : sortDown
					})`
				}}
			/>
			{title}
		</th>
	);
};

export default TableHeader;
