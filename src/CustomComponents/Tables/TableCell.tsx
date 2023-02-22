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
import { TableColumn } from "../../types";

export interface TableCellProps {
	value: TableColumn; // the content of the cell
}

const TableCell = ({ value }: TableCellProps) => {
	if (value.type === "time") return <Moment date={value.value} format="YYYY-MM-DD HH:mm:ss" />;

	if (value.type === "text") return <>{value.value}</>;

	if (value.type === "timeDuration")
		return <Moment duration={value.first} date={value.last} format="D[d], H[h], m[m]" />;

	if (value.type === "textWithIcon")
		return (
			<>
				<img src={value.icon} alt="" height={"20vh"} /> &nbsp;{value.value}
			</>
		);

	return <></>;
};

export default TableCell;
