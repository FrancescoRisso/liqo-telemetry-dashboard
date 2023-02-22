import { PeeringInfo, Telemetry, isDurationColumn, ClusterGenericInfo, isChildColumn } from "./types";
import { TableColumn, TableRowType, TableSortingFunction } from "./types";

import aksLogo from "./images/providers_logos/aks.svg";
import k3sLogo from "./images/providers_logos/k3s.svg";
import openshiftLogo from "./images/providers_logos/openshift.svg";
import awsLogo from "./images/providers_logos/aws.svg";
import googleLogo from "./images/providers_logos/google.svg";
import k8sLogo from "./images/providers_logos/k8s.svg";
import kindLogo from "./images/providers_logos/kind.svg";
import othersLogo from "./images/providers_logos/others.svg";

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
			} else if (
				!isDurationColumn(fieldA) &&
				!isDurationColumn(fieldB) &&
				!isChildColumn(fieldA) &&
				!isChildColumn(fieldB)
			) {
				a = fieldA.value;
				b = fieldB.value;
			} else return 0;

			if (!asc) return a === b ? 0 : a > b ? -1 : 1;
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

export const providerToIcon = (provider: string) => {
	switch (provider) {
		case "aks":
			return aksLogo;
		case "eks":
			return awsLogo;
		case "gke":
			return googleLogo;
		case "k3s":
			return k3sLogo;
		case "kind":
			return kindLogo;
		case "kubeadm":
			return k8sLogo;
		case "openshift":
			return openshiftLogo;
		default:
			return othersLogo;
	}
};

export const getLocationString = (
	clusterSummary: "Error" | Record<string, ClusterGenericInfo>,
	clusterID: string
): string => {
	if (clusterSummary === "Error" || JSON.stringify(clusterSummary) === "{}") return "N.A.";

	const country = clusterSummary[clusterID].ip?.geo?.country || "N.A.";
	const region = clusterSummary[clusterID].ip?.geo?.region || "N.A.";
	const city = clusterSummary[clusterID].ip?.geo?.city || "N.A.";

	return country === "N.A." || city === "N.A." || region === "N.A." ? "N.A." : `${country}/${region}/${city}`;
};
