/*

description:
	
	
state:
	
hooks:
	
context:
	
imported into:
	- TableRow
	
component dependences:
	
other dependences:
	- moment
	
*/

import Moment from "react-moment";
import { TableColumn } from "../types";

export interface TableCellProps {
	width: number | string; // the width the columns must have
	value: TableColumn; // the content of the cell
}

const TableCell = ({ width, value }: TableCellProps) => {
	if (value.type === "time")
		return (
			<td className="table-data" style={{ width: width, maxWidth: width }}>
				<Moment date={value.value} format="YYYY-MM-DD HH:mm:ss" />
			</td>
		);

	if (value.type === "text")
		return (
			<td className="table-data" style={{ width: width, maxWidth: width }}>
				{value.value}
			</td>
		);

	if (value.type === "timeDuration")
		return (
			<td className="table-data" style={{ width: width, maxWidth: width }}>
				<Moment duration={value.last} date={value.first} format="D [days], H [hours], m [minutes]" />
			</td>
		);

	if (value.type === "textWithIcon")
		return (
			<td className="table-data" style={{ width: width, maxWidth: width }}>
				<img src={value.icon} alt="" height={"20vh"} /> &nbsp;{value.value}
			</td>
		);

	return <></>;
};

export default TableCell;
