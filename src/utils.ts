import { PeeringInfo, Telemetry, isDurationColumn } from "./types";
import { TableColumn, TableRowType, TableSortingFunction } from "./types";

import aksLogo from "./images/providers_logos/aks.svg"
import k3sLogo from "./images/providers_logos/k3s.svg"
import openshiftLogo from "./images/providers_logos/openshift.svg"
import awsLogo from "./images/providers_logos/aws.svg"
import googleLogo from "./images/providers_logos/google.svg"
import k8sLogo from "./images/providers_logos/k8s.svg"
import othersLogo from "./images/providers_logos/others.svg"

export const sortTable: TableSortingFunction = (fieldNo: number) => {
	return (asc: boolean) => {
		return (rowA: TableRowType, rowB: TableRowType) => {
			const fieldA: TableColumn = rowA[fieldNo];
			const fieldB: TableColumn = rowB[fieldNo];

			let a: number | string;
			let b: number | string;

			if (isDurationColumn(fieldA) && isDurationColumn(fieldB)) {
				a = fieldA.last - fieldA.first;
				b = fieldB.last - fieldB.first;
			} else if (!isDurationColumn(fieldA) && !isDurationColumn(fieldB)) {
				a = fieldA.value;
				b = fieldB.value;
			} else return 0;

			if (asc) return a === b ? 0 : a > b ? -1 : 1;
			return a === b ? 0 : a < b ? -1 : 1;
		};
	};
};

export const countPeers = (direction: "incoming" | "outgoing", telemetry: Telemetry) => {
	if (telemetry?.peeringInfo === undefined) return 0;

	return telemetry.peeringInfo.filter((pi: PeeringInfo) =>
		pi[direction] === undefined ? false : pi[direction]?.enabled
	).length;
};

export const providerToIcon = (provider: string) =>{
	switch(provider){
		case "aks": return aksLogo;
		case "eks": return awsLogo;
		case "gke": return googleLogo;
		case "k3s": return k3sLogo;
		case "kind": return othersLogo; // to be modified
		case "kubeadm": return k8sLogo;
		case "openshift": return openshiftLogo;
		default: return othersLogo;
	}
}
