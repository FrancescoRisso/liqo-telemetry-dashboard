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
	- TableCell	

other dependences:
	- react-router-dom components
	
*/

import { useState } from "react";

import { Navigate } from "react-router-dom";
import { TableRowType, TableColumn, ChildWithVisibility } from "../../types";
import TableCell from "./TableCell";

export interface TableRowProps {
	data: TableRowType; //the content of the row
	id: number; //an unique identifier used as React key
	width: number | string; //the width the columns must have
	link?: string; //if inserted, you will be redirected to it when clicking the row
	child?: ChildWithVisibility; //if inserted, clicking the row will display this element underneath
}

const TableRow = ({ data, id, width, link, child }: TableRowProps) => {
	const [redirect, setRedirect] = useState<boolean>(false);

	if (redirect && link) return <Navigate to={link} />;
	return (
		<>
			<tr
				style={{ backgroundColor: id % 2 === 0 ? "rgba(0,0,0,.05)" : "rgba(0,0,0,0)" }}
				key={id}
				onClick={() => {
					if (link) setRedirect(true);
					else if (child) child.selectMe();
				}}
				className={link || child ? "clickable" : ""}
			>
				{data.map((col: TableColumn, index: number) => {
					return (
						<td key={index} style={{ width: width, maxWidth: width }}>
							<TableCell value={col} />
						</td>
					);
				})}
			</tr>
			{child?.visible ? (
				<tr key={`${id}-child`} style={{ backgroundColor: id % 2 === 0 ? "rgba(0,0,0,.05)" : "rgba(0,0,0,0)" }}>
					<td className="border" children={child.element} colSpan={data.length} />
				</tr>
			) : (
				<></>
			)}
		</>
	);
};
export default TableRow;
