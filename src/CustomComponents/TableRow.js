/*

description:
	Creates a row of a table
	
state:
	- redirect: set to true when the row is clicked, thus the page should redirect to the
		props link
	
props:
	- data[{}]: the content of the row, with the items in the form { "type", "value" } or
		{ "type", "first", "last" } if type = "timeDuration".
	- id: an unique identifier used as React key
	- width: the width the columns must have
	- link(optional): if inserted, you will be redirected to it when clicking the row
	
hooks:
	
context:
	
imported into:
	- SortedTable
	
component dependences:
	
other dependences:
	- moment
	- react-router-dom components
	
*/

import React, { useState } from "react";

import Moment from "react-moment";
import { Navigate } from "react-router-dom";

const TableRow = ({ data, id, width, link }) => {
	const [redirect, setRedirect] = useState(false);

	if (redirect) return <Navigate to={link} />;
	return (
		<tr
			key={id}
			onClick={() => {
				if (link) setRedirect(true);
			}}
			className={link ? "clickable" : ""}
		>
			{data.map((col, index) => {
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
