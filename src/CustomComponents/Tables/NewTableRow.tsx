import { Cell, Row, TableNode } from "@table-library/react-table-library/table";
import { Link } from "react-router-dom";
import TableCell from "./TableCell";
import { useState } from "react";
/*

description:
	Creates a row of a table
	
state:
	
hooks:
	- 
	
context:
	- 
	
imported into:
	- 
	
component dependences:
	- 
	
other dependences:
	- 
	
*/

export interface NewTableRowProps {
	item: TableNode;
	columns: { label: string; renderCell: Function }[];
	expanded: boolean;
	setExpanded: Function;
}

const NewTableRow = ({ item, columns, expanded, setExpanded }: NewTableRowProps) => {
	return (
		<>
			<Row
				item={item}
				className={item.link || item.child ? "clickable" : ""}
				onClick={() => {
					if (item.link) document.getElementById(`${item.id}-link`)?.click();
					if (item.child) setExpanded();
				}}
			>
				{Object.entries(item)
					.filter((x) => !["id", "link", "child"].includes(x[0]))
					.map((col, index) => (
						<Cell key={index}>
							<TableCell value={col[1]} />
						</Cell>
					))}
				{item.link ? (
					<Cell className="d-none">
						<Link id={`${item.id}-link`} to={item.link.value} />
					</Cell>
				) : (
					<></>
				)}
			</Row>
			{expanded ? (
				<Row item={item}>
					<Cell gridColumnStart={1} gridColumnEnd={columns.length + 1}>
						{item.child.value}
					</Cell>
				</Row>
			) : (
				<></>
			)}
		</>
	);
};

export default NewTableRow;
