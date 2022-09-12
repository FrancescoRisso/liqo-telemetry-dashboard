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
	
functions:
	- componentDidUpdate(prevprops): if the table was sorted by this column, and it is not
		anymore, updates the state accordingly 
	
imported into:
	- SortedTable
	
dependences:
	- sort images
	
*/

import React from "react";

import sortBoth from "../images/sort-both.svg";
import sortUp from "../images/sort-up.svg";
import sortDown from "../images/sort-down.svg";

class TableHeader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sorted: null
		};
	}

	componentDidUpdate = (prevProps) => {
		if (prevProps.isCurrentSort && !this.props.isCurrentSort) this.setState({ sorted: null });
	};

	render() {
		return (
			<th
				style={{ width: this.props.width }}
				className="position center-text-vertically sort-th"
				onClick={() => {
					this.setState({ sorted: this.state.sorted !== "asc" ? "asc" : "desc" }, () => {
						this.props.doSort(this.state.sorted !== "asc");
					});
				}}
			>
				<div
					className="sort-div center-vertically"
					style={{
						backgroundImage: `url(${
							this.state.sorted ? (this.state.sorted === "asc" ? sortUp : sortDown) : sortBoth
						})`
					}}
				/>
				{this.props.title}
			</th>
		);
	}
}

export default TableHeader;
