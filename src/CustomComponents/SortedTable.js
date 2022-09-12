/*

description:
	Creates a scrollable table that allows you to sort the entries by column value
	
state:
	- sortingBy: the name of the column the sort is being done on (or null)
	- data: the sorted data displayed in the table
	
props:
	- columns[{}]: the list of titles of the columns, in the form { "type", "label" }
	- data[[{}]]: the list of rows, with the items in the form { "type", "value" } or
		{ "type", "first", "last" } if type = "timeDuration"
	- sortingFunct(): a function that, given the column name, returns a series of nested
		functions, that work as follows:
		- sortingFunct(colName, index) -> returns sortingFunctAsc(ascending: bool)
		- sortingFunctAsc(asc) -> returns comparisonFunct(a, b)
		- comparisonFunct is the function to be passed to Array.sort()
	
functions:
	- componentDidMount(): copies the data from the props to the state (with no sorting)
	- componentDidUpdate(prevprops): if data from the props changes, copies it into the state
		(removing any eventyal sorting setting)
	
imported into:
	- ClustersList
	
dependences:
	- TableHeader
	- moment
	- React-bootstrap components
	
*/

import React from "react";

import TableHeader from "./TableHeader";

import { Table } from "react-bootstrap";
import Moment from "react-moment";

class SortedTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = { sortingBy: null, data: [] };
	}

	componentDidMount = () => {
		this.setState({ data: this.props.data });
	};

	componentDidUpdate = (prevprops) => {
		if (prevprops.data !== this.props.data) this.setState({ data: this.props.data, sortingBy: null });
	};

	render() {
		return (
			<div className="pb-0 h-100percent w-100percent">
				<div className=" pb-0 h-100percent table-wrapper w-100percent">
					<Table striped bordered className="mb-0 fixed white-bg border-table">
						<thead className="fixed bg-white">
							<tr>
								{this.props.columns.map((title, index, array) => {
									let sortingFunctAsc = this.props.sortingFunct(title.type, index);
									return (
										<TableHeader
											key={title.label}
											width={`${100 / array.length}%`}
											title={title.label}
											doSort={(asc) => {
												let comparisonFunct = sortingFunctAsc(asc);
												this.setState((state) => {
													state.data.sort(comparisonFunct);
													return { sortingBy: title, data: state.data };
												});
											}}
											isCurrentSort={this.state.sortingBy === title}
										/>
									);
								})}
							</tr>
						</thead>
						<tbody className="table-wrapper">
							{this.state.data.map((record, i) => {
								const width = `${100 / this.props.columns.length}%`;
								return (
									<tr key={i}>
										{record.map((col, index) => {
											return (
												<td
													key={index}
													className="table-data"
													style={{ width, maxWidth: width }}
												>
													{col.type === "time" ? (
														<Moment date={col.value} format="YYYY-MM-DD HH:mm:ss" />
													) : col.type === "text" ? (
														col.value
													) : col.type === "timeDuration" ? (
														<Moment
															duration={record.first}
															date={record.last}
															format="D [days], H [hours], m [minutes]"
														/>
													) : (
														""
													)}
												</td>
											);
										})}
									</tr>
								);
							})}
						</tbody>
					</Table>
				</div>
			</div>
		);
	}
}

export default SortedTable;
