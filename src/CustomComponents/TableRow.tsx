/*

description:
	Creates a row of a table
	
state:
	- redirect: set to true when the row is clicked, thus the page should redirect to the
		props link
	
hooks:
	
context:
	
imported into:
	- SortedTable
	
component dependences:
	
other dependences:
	- moment
	- react-router-dom components
	
*/

import { useState } from "react";

import Moment from "react-moment";
import { Navigate } from "react-router-dom";
import { TableRowType, TableColumn } from "./SortedTable";

export interface TableRowProps {
	data: TableRowType; //the content of the row
	id: number; //an unique identifier used as React key
	width: number | string; //the width the columns must have
	link?: string; //if inserted, you will be redirected to it when clicking the row
}

const TableRow = ({ data, id, width, link }: TableRowProps) => {
	const [redirect, setRedirect] = useState<boolean>(false);

	if (redirect && link) return <Navigate to={link} />;
	return (
		<tr
			key={id}
			onClick={() => {
				if (link) setRedirect(true);
			}}
			className={link ? "clickable" : ""}
		>
			{data.map((col: TableColumn, index: number) => {
				return (
					<td key={index} className="table-data" style={{ width: width, maxWidth: width }}>
						{col.type === "time" ? (
							<Moment date={col.value} format="YYYY-MM-DD HH:mm:ss" />
						) : col.type === "text" ? (
							col.value
						) : col.type === "timeDuration" ? (
							<Moment duration={col.last} date={col.first} format="D [days], H [hours], m [minutes]" />
						) : (
							""
						)}
					</td>
				);
			})}
		</tr>
	);
};
export default TableRow;
