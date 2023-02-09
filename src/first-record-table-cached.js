const value = [
	{
		ip: {
			geo: {
				eu: "1",
				ll: [35.3274, 25.1281],
				area: 5,
				country: "GR",
				city: "Heraklion",
				timezone: "Europe/Athens",
				metro: 0,
				range: [2472501248, 2472509440],
				region: "M"
			},
			ip: "147.95.122.134"
		},
		clusterID: "f06a6774-9abb-461e-9980-530b94a89d2f",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "f06a6774-9abb-461e-9980-530b94a89d2f",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1670318704965
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [36.6534, -78.375],
				area: 20,
				country: "US",
				city: "Boydton",
				timezone: "America/New_York",
				metro: 560,
				range: [341114880, 341147648],
				region: "VA"
			},
			ip: "20.85.38.31"
		},
		clusterID: "01ccc11d-9af4-4f32-b907-dbb46c2caab9",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "01ccc11d-9af4-4f32-b907-dbb46c2caab9",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1669977723449
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [35.3274, 25.1281],
				area: 5,
				country: "GR",
				city: "Heraklion",
				timezone: "Europe/Athens",
				metro: 0,
				range: [2472501248, 2472509440],
				region: "M"
			},
			ip: "147.95.122.135"
		},
		clusterID: "756cadf5-17ec-48d5-b308-51d12ce3119e",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "756cadf5-17ec-48d5-b308-51d12ce3119e",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1670238007364
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [40.875, -8.4122],
				area: 100,
				country: "PT",
				city: "Vale de Cambra",
				timezone: "Europe/Lisbon",
				metro: 0,
				range: [1042079744, 1042080256],
				region: "01"
			},
			ip: "62.28.224.222"
		},
		clusterID: "2260d1d3-c126-4292-8673-19c2278af2fe",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "2260d1d3-c126-4292-8673-19c2278af2fe",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1668621547823
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.213.62"
		},
		clusterID: "5fb4e7d4-fec5-4de1-9281-916322e77dc9",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "110164040Ki",
							memory: "14499M",
							cpu: "6255m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "92ec2440-0861-4ab5-9646-a61ba787c807",
					discoveryType: "IncomingPeering",
					latency: 519000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "5fb4e7d4-fec5-4de1-9281-916322e77dc9",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668012965885
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [51.2993, 9.491],
				area: 200,
				country: "DE",
				city: "",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [1959510016, 1959526400],
				region: ""
			},
			ip: "116.203.250.188"
		},
		clusterID: "84c1d1e4-4ec5-49e5-8f6d-86c2bb97c1de",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "84c1d1e4-4ec5-49e5-8f6d-86c2bb97c1de",
			provider: "k3s",
			kubernetesVersion: "v1.25.4+k3s1"
		},
		timestamp: 1669664702233
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [22.2908, 114.1501],
				area: 50,
				country: "HK",
				city: "",
				timezone: "Asia/Hong_Kong",
				metro: 0,
				range: [822140928, 822149120],
				region: "HCW"
			},
			ip: "49.0.242.161"
		},
		clusterID: "a249e3d5-a574-4d5b-9b56-93a225e9e1e9",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "6255m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "73837152Ki",
							memory: "14697M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "291cafdc-30bc-4796-913d-cb26a79da019",
					discoveryType: "Manual",
					latency: 253000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "a249e3d5-a574-4d5b-9b56-93a225e9e1e9",
			namespacesInfo: [
				{
					uid: "2b9d8890-dd40-4c41-ba4b-4ceabb7e7ca0",
					offloadingStrategy: "LocalAndRemote",
					mappingStrategy: "DefaultName",
					numOffloadedPods: {
						"291cafdc-30bc-4796-913d-cb26a79da019": 1
					}
				}
			],
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668024975410
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.7627, 12.9911],
				area: 100,
				country: "IT",
				city: "San Michele al Tagliamento",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562410496, 1562411008],
				region: "34"
			},
			ip: "93.32.126.165"
		},
		clusterID: "cf98f617-7517-452a-ab23-9afcbb331376",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "cf98f617-7517-452a-ab23-9afcbb331376",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668868282718
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.4722, 9.1922],
				area: 20,
				country: "IT",
				city: "Milan",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1383126976, 1383127008],
				region: "25"
			},
			ip: "82.112.215.203"
		},
		clusterID: "48bf54fb-c82a-4e0c-a6c1-e3af2e716a43",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "55082020Ki",
							memory: "7135M",
							cpu: "3645m",
							"hugepages-2Mi": "0",
							pods: "99",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "55082020Ki",
							memory: "7135M",
							cpu: "3645m",
							"hugepages-2Mi": "0",
							pods: "99",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "9973b9f9-2044-496a-b95d-381b47609a6b",
					discoveryType: "Manual",
					latency: 798000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "48bf54fb-c82a-4e0c-a6c1-e3af2e716a43",
			provider: "kind",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1668874087112
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "2ea40556-6435-4b45-be83-7fb2e8b784bb",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "2ea40556-6435-4b45-be83-7fb2e8b784bb",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667244847192
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [37.9921, -1.1201],
				area: 10,
				country: "ES",
				city: "Murcia",
				timezone: "Europe/Madrid",
				metro: 0,
				range: [2604056576, 2604064768],
				region: "MC"
			},
			ip: "155.54.210.2"
		},
		clusterID: "afac7d38-e7f2-436d-bef5-9d5e9be79b0c",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "afac7d38-e7f2-436d-bef5-9d5e9be79b0c",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.4"
		},
		timestamp: 1670584042601
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2394, 21.0362],
				area: 200,
				country: "PL",
				city: "",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [3106990080, 3106991104],
				region: ""
			},
			ip: "185.48.232.43"
		},
		clusterID: "1e504131-a8fb-4cf5-b1b6-1deb1e5601f0",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "85455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "218979434496",
							memory: "486111M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "e9bc3516-feae-4419-b70c-bc0dfc134f7f",
					discoveryType: "IncomingPeering",
					latency: 865000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "1e504131-a8fb-4cf5-b1b6-1deb1e5601f0",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.4"
		},
		timestamp: 1669648326444
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.4722, 9.1922],
				area: 1000,
				country: "IT",
				city: "Milan",
				timezone: "Europe/Rome",
				metro: 0,
				range: [262144000, 262275072],
				region: "25"
			},
			ip: "15.161.78.14"
		},
		clusterID: "e2c187bc-ce95-4951-b4e3-012027c8c105",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "e2c187bc-ce95-4951-b4e3-012027c8c105",
			provider: "eks",
			kubernetesVersion: "v1.22.10-eks-84b4fe6"
		},
		timestamp: 1666858803085
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [33.5768, -112.2348],
				area: 10,
				country: "US",
				city: "Peoria",
				timezone: "America/Phoenix",
				metro: 753,
				range: [2924134400, 2924138496],
				region: "AZ"
			},
			ip: "174.74.207.219"
		},
		clusterID: "3945ce88-e0ab-4885-a6d8-4f309261da64",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "3945ce88-e0ab-4885-a6d8-4f309261da64",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667418424847
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [51.2993, 9.491],
				area: 200,
				country: "DE",
				city: "",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [88834048, 88866816],
				region: ""
			},
			ip: "5.75.158.125"
		},
		clusterID: "3a1842e3-5531-4a56-babb-7a16d0acf2e2",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "3330m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "68355407872",
							memory: "6843750Ki",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						resources: {
							cpu: "92565m",
							"hugepages-2Mi": "0",
							pods: "693",
							"ephemeral-storage": "767236636672",
							memory: "492789M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "1e8257aa-6010-4002-80e5-99f7ecf9cf06",
					discoveryType: "Manual",
					latency: 29000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "3a1842e3-5531-4a56-babb-7a16d0acf2e2",
			provider: "k3s",
			kubernetesVersion: "v1.24.6+k3s1"
		},
		timestamp: 1666776662236
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [41.9008, 12.4874],
				area: 200,
				country: "IT",
				city: "",
				timezone: "Europe/Rome",
				metro: 0,
				range: [631455744, 631463936],
				region: "62"
			},
			ip: "37.163.65.225"
		},
		clusterID: "aa242f65-d88a-429e-89f7-d8b5f8c9abc2",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "13545m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "184782608Ki",
							memory: "14257M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "1cf31bde-ba9e-4999-9dc7-869df79223cd",
					discoveryType: "IncomingPeering",
					latency: 781000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "aa242f65-d88a-429e-89f7-d8b5f8c9abc2",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1670440929967
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [885907456, 885911552],
				region: "VA"
			},
			ip: "52.205.236.211"
		},
		clusterID: "a3d8f42e-018e-4d6f-8d74-c3c3b107575c",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "a3d8f42e-018e-4d6f-8d74-c3c3b107575c",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1667976484274
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [43.1479, 12.1097],
				area: 500,
				country: "IT",
				city: "",
				timezone: "Europe/Rome",
				metro: 0,
				range: [631302144, 631304192],
				region: ""
			},
			ip: "37.160.234.141"
		},
		clusterID: "3da90ec9-470f-46e2-bf3f-f3ceabb095cd",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "9945m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "179964Mi",
							memory: "14605M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "InBand",
					remoteClusterID: "54fd9ed4-1d01-44c4-a3cc-0554203faeff",
					discoveryType: "Manual",
					latency: 5000000
				}
			],
			liqoVersion: "9f345fdfa30653103386f885b9bcf474ca4ef648",
			clusterID: "3da90ec9-470f-46e2-bf3f-f3ceabb095cd",
			namespacesInfo: [
				{
					uid: "4fcb9f64-3b36-4a62-955c-b61193b8284c",
					offloadingStrategy: "Remote",
					mappingStrategy: "DefaultName",
					numOffloadedPods: {
						"54fd9ed4-1d01-44c4-a3cc-0554203faeff": 1
					}
				}
			],
			provider: "kind",
			kubernetesVersion: "v1.23.0"
		},
		timestamp: 1666882152825
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [57.7486, 13.189],
				area: 100,
				country: "SE",
				city: "AEspered",
				timezone: "Europe/Stockholm",
				metro: 0,
				range: [1374176384, 1374176512],
				region: "O"
			},
			ip: "81.232.68.192"
		},
		clusterID: "7c46aee2-4bc0-41ee-8950-bf65f7c382bd",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "850845376Ki",
							memory: "59691M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "94fc3c0f-54f7-4888-ad5b-a11ab308b7c0",
					discoveryType: "IncomingPeering",
					latency: 378000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "7c46aee2-4bc0-41ee-8950-bf65f7c382bd",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1670229603783
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193681408, 2193682432],
				region: "21"
			},
			ip: "130.192.238.250"
		},
		clusterID: "60c6794b-49e1-454f-a1cb-be8af6f914e0",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "60c6794b-49e1-454f-a1cb-be8af6f914e0",
			provider: "kubeadm",
			kubernetesVersion: "v1.23.0"
		},
		timestamp: 1669732398056
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 50,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [89784320, 89788416],
				region: "21"
			},
			ip: "5.90.7.230"
		},
		clusterID: "6f5c2030-41ea-4886-a5d4-ba70a03fa752",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "6f5c2030-41ea-4886-a5d4-ba70a03fa752",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668093311879
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.9273, -76.8545],
				area: 20,
				country: "US",
				city: "Tappahannock",
				timezone: "America/New_York",
				metro: 556,
				range: [340852736, 340885504],
				region: "VA"
			},
			ip: "20.81.118.87"
		},
		clusterID: "7dda0fa1-c215-487f-8817-cd1acf6816cb",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "6445m",
							"hugepages-2Mi": "0",
							pods: "180",
							"ephemeral-storage": "107732746240",
							memory: "25667M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "e2391ff5-959b-4720-bd0e-76a143b9c3da",
					discoveryType: "IncomingPeering",
					latency: 2000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "7dda0fa1-c215-487f-8817-cd1acf6816cb",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1667296683914
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.2872, 127.0116],
				area: 20,
				country: "KR",
				city: "Suwon",
				timezone: "Asia/Seoul",
				metro: 0,
				range: [2093096960, 2093101056],
				region: "41"
			},
			ip: "124.194.34.5"
		},
		clusterID: "e8163d4f-534d-413a-a17a-3fb5af96203b",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "e8163d4f-534d-413a-a17a-3fb5af96203b",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1667467329523
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [915963904, 915980288],
				region: "VA"
			},
			ip: "54.152.155.179"
		},
		clusterID: "84b0f4a5-9a81-46ed-a6de-11ed00bfb2eb",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						enabled: false
					},
					method: "InBand",
					remoteClusterID: "1c03a48e-11fe-4b2b-a7a3-78ed3eb7411b",
					discoveryType: "Manual",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "84b0f4a5-9a81-46ed-a6de-11ed00bfb2eb",
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1668611464217
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2296, 21.0067],
				area: 20,
				country: "PL",
				city: "Warsaw",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [578060288, 578093056],
				region: "14"
			},
			ip: "34.116.252.93"
		},
		clusterID: "b855faf3-ae18-4ef8-bcd5-0c924a473da4",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"attachable-volumes-gce-pd": "114",
							"ephemeral-storage": "42354061312",
							memory: "54774M",
							cpu: "13782m",
							"hugepages-2Mi": "0",
							pods: "99",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "5eaee01d-d1ae-4b7a-a53a-180e03307894",
					discoveryType: "IncomingPeering",
					latency: 10000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "b855faf3-ae18-4ef8-bcd5-0c924a473da4",
			provider: "gke",
			kubernetesVersion: "v1.23.8-gke.1900"
		},
		timestamp: 1666720867065
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 100,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [3262402560, 3262402816],
				region: "21"
			},
			ip: "194.116.80.82"
		},
		clusterID: "f34f4777-3942-4cfc-ad8d-0eac2f00e0e1",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "f34f4777-3942-4cfc-ad8d-0eac2f00e0e1",
			provider: "kind",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1667817125760
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [34.7732, 113.722],
				area: 1000,
				country: "CN",
				city: "",
				timezone: "Asia/Shanghai",
				metro: 0,
				range: [1954807808, 1955069952],
				region: ""
			},
			ip: "116.132.250.56"
		},
		clusterID: "059915ac-7eeb-4bfe-9777-4c76e37401e0",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "059915ac-7eeb-4bfe-9777-4c76e37401e0",
			provider: "kind",
			kubernetesVersion: "v1.24.6"
		},
		timestamp: 1667392684255
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1564606464, 1564606976],
				region: "21"
			},
			ip: "93.66.1.85"
		},
		clusterID: "fa5845c9-8b75-4768-865a-7f78abb79c02",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "1015m",
							"hugepages-2Mi": "0",
							pods: "11",
							"ephemeral-storage": "19996Mi",
							memory: "1395M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						resources: {
							cpu: "2190m",
							"hugepages-2Mi": "0",
							pods: "22",
							"ephemeral-storage": "39992Mi",
							memory: "3203M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "71de7196-b792-4ed6-a758-75a3f57dc444",
					discoveryType: "Manual",
					latency: 236000
				},
				{
					incoming: {
						resources: {
							cpu: "1015m",
							"hugepages-2Mi": "0",
							pods: "11",
							"ephemeral-storage": "19996Mi",
							memory: "1395M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						resources: {
							cpu: "3285m",
							"hugepages-2Mi": "0",
							pods: "33",
							"ephemeral-storage": "61427716Ki",
							memory: "4805M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "29f76fe8-4b1a-4eef-a9be-d21e2ae1e043",
					discoveryType: "Manual",
					latency: 2000000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "fa5845c9-8b75-4768-865a-7f78abb79c02",
			provider: "kind",
			kubernetesVersion: "v1.25.0"
		},
		timestamp: 1669909744584
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [50.1188, 8.6843],
				area: 20,
				country: "DE",
				city: "Frankfurt am Main",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [579665920, 579698688],
				region: "HE"
			},
			ip: "34.141.4.155"
		},
		clusterID: "880f5f03-5905-487c-b707-4b7dde52b252",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"attachable-volumes-gce-pd": "40",
							"ephemeral-storage": "127062179840",
							memory: "2546M",
							cpu: "1375m",
							"hugepages-2Mi": "0",
							pods: "297",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "c5a18fc1-f99d-4dec-8123-1d3ef4c2c738",
					discoveryType: "Manual",
					latency: 18000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "880f5f03-5905-487c-b707-4b7dde52b252",
			provider: "gke",
			kubernetesVersion: "v1.23.8-gke.1900"
		},
		timestamp: 1667401214278
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [35.6897, 139.6895],
				area: 500,
				country: "JP",
				city: "",
				timezone: "Asia/Tokyo",
				metro: 0,
				range: [2130116608, 2130149376],
				region: ""
			},
			ip: "126.247.84.169"
		},
		clusterID: "ecb96bd1-af14-46bd-a818-9b6bc7cf81c7",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "ecb96bd1-af14-46bd-a818-9b6bc7cf81c7",
			provider: "kind",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1667956263311
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.5112, 126.9741],
				area: 200,
				country: "KR",
				city: "",
				timezone: "Asia/Seoul",
				metro: 0,
				range: [1744071680, 1744072704],
				region: ""
			},
			ip: "103.244.109.233"
		},
		clusterID: "d59cd71e-fd90-4616-9ba2-dfe22772120f",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "d59cd71e-fd90-4616-9ba2-dfe22772120f",
			kubernetesVersion: "v1.23.9"
		},
		timestamp: 1667193309717
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.751, -97.822],
				area: 1000,
				country: "US",
				city: "",
				timezone: "America/Chicago",
				metro: 0,
				range: [81788928, 83886080],
				region: ""
			},
			ip: "4.227.192.215"
		},
		clusterID: "9b1be3e8-5d57-4cc5-99ae-c32a73482e33",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "e223e9cf-525b-4edb-880f-22616f26269f",
					discoveryType: "Manual"
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "9b1be3e8-5d57-4cc5-99ae-c32a73482e33",
			provider: "k3s",
			kubernetesVersion: "v1.24.6+k3s1"
		},
		timestamp: 1666782063962
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.213.62"
		},
		clusterID: "fd688892-518b-4ec3-ba1e-2f68b210d696",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "fd688892-518b-4ec3-ba1e-2f68b210d696",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668584704492
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [40.867, 14.2385],
				area: 200,
				country: "IT",
				city: "Naples",
				timezone: "Europe/Rome",
				metro: 0,
				range: [36557824, 36558336],
				region: "72"
			},
			ip: "2.45.213.161"
		},
		clusterID: "e75f1051-7b15-41e3-bc91-4076a1a6a527",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "e75f1051-7b15-41e3-bc91-4076a1a6a527",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667245155761
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [751828992, 752877568],
				region: "VA"
			},
			ip: "44.213.29.166"
		},
		clusterID: "29da10ad-a774-430e-9cce-4c4da2c0a8d9",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						enabled: false
					},
					method: "InBand",
					remoteClusterID: "4074b40c-becc-43f1-935b-dd2ae8d07adc",
					discoveryType: "Manual"
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "29da10ad-a774-430e-9cce-4c4da2c0a8d9",
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1669711863229
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.7388, -104.9868],
				area: 100,
				country: "US",
				city: "Denver",
				timezone: "America/Denver",
				metro: 751,
				range: [2889497088, 2889497600],
				region: "CO"
			},
			ip: "172.58.58.226"
		},
		clusterID: "2a7e3be5-6eff-4e30-b105-c325b4a84a0c",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "555ceabe-f138-4063-a821-b707d40ed8a4",
					discoveryType: "Manual"
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "2a7e3be5-6eff-4e30-b105-c325b4a84a0c",
			provider: "kind",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1669414805878
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [43.1479, 12.1097],
				area: 500,
				country: "IT",
				city: "",
				timezone: "Europe/Rome",
				metro: 0,
				range: [631394816, 631395328],
				region: ""
			},
			ip: "37.162.82.102"
		},
		clusterID: "b041c741-f67b-40d8-bce5-d9a8b0a26e28",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "b041c741-f67b-40d8-bce5-d9a8b0a26e28",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667733976108
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [751206400, 751239168],
				region: "VA"
			},
			ip: "44.198.240.130"
		},
		clusterID: "ec10a4e0-8df7-4c6d-8f71-af5db0fd3e30",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "ec10a4e0-8df7-4c6d-8f71-af5db0fd3e30",
			provider: "k3s",
			kubernetesVersion: "v1.23.13+k3s1"
		},
		timestamp: 1669219863437
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.9273, -76.8545],
				area: 1000,
				country: "US",
				city: "Tappahannock",
				timezone: "America/New_York",
				metro: 556,
				range: [350748672, 350814208],
				region: "VA"
			},
			ip: "20.232.225.89"
		},
		clusterID: "6eb14848-1408-4b08-99d8-6a0a19ca6984",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "6445m",
							"hugepages-2Mi": "0",
							pods: "180",
							"ephemeral-storage": "107732746240",
							memory: "25667M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "609a43b9-663a-40a0-adc3-a11ab0487784",
					discoveryType: "Manual",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "6eb14848-1408-4b08-99d8-6a0a19ca6984",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1668660311143
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.212.33"
		},
		clusterID: "0ef248a6-c6dc-460f-8a13-081b7b291569",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "110164040Ki",
							memory: "14499M",
							cpu: "6255m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "4d2f98b7-9c28-41f3-80f5-e69cbb3ea362",
					discoveryType: "IncomingPeering",
					latency: 2000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "0ef248a6-c6dc-460f-8a13-081b7b291569",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666817107050
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [50.1188, 8.6843],
				area: 20,
				country: "DE",
				city: "Frankfurt am Main",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [579665920, 579698688],
				region: "HE"
			},
			ip: "34.141.4.155"
		},
		clusterID: "c789c1c7-b554-4772-be8e-5788bf852d0d",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"attachable-volumes-gce-pd": "40",
							"ephemeral-storage": "127062179840",
							memory: "2546M",
							cpu: "1375m",
							"hugepages-2Mi": "0",
							pods: "297",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "a17c0f7d-17c4-4996-a171-e5bda328b7e7",
					discoveryType: "Manual",
					latency: 17000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "c789c1c7-b554-4772-be8e-5788bf852d0d",
			provider: "gke",
			kubernetesVersion: "v1.23.8-gke.1900"
		},
		timestamp: 1667464808485
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [872611840, 872644608],
				region: "VA"
			},
			ip: "52.3.105.214"
		},
		clusterID: "ae902071-1efb-47d8-aeaa-cde1a57c8ae5",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "ae902071-1efb-47d8-aeaa-cde1a57c8ae5",
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1670932624429
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.9273, -76.8545],
				area: 20,
				country: "US",
				city: "Tappahannock",
				timezone: "America/New_York",
				metro: 556,
				range: [351076352, 351109120],
				region: "VA"
			},
			ip: "20.237.52.1"
		},
		clusterID: "04f48b3d-8a79-4e84-8473-722615551874",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "04f48b3d-8a79-4e84-8473-722615551874",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1667976963448
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "219250e8-3d29-4485-b8ee-c6d5ae19ecff",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "219250e8-3d29-4485-b8ee-c6d5ae19ecff",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667297227436
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.9273, -76.8545],
				area: 20,
				country: "US",
				city: "Tappahannock",
				timezone: "America/New_York",
				metro: 556,
				range: [341147648, 341180416],
				region: "VA"
			},
			ip: "20.85.207.29"
		},
		clusterID: "a8ed5219-c796-45d6-b4ea-8edfe31eebc9",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "1117m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "107732746240",
							memory: "1546M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "InBand",
					remoteClusterID: "d3f5d830-2e26-4f4a-a1c5-9edffdf88bc0",
					discoveryType: "Manual",
					latency: 6000000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "a8ed5219-c796-45d6-b4ea-8edfe31eebc9",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1669983004441
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [43.1479, 12.1097],
				area: 500,
				country: "IT",
				city: "",
				timezone: "Europe/Rome",
				metro: 0,
				range: [631265280, 631265792],
				region: ""
			},
			ip: "37.160.89.208"
		},
		clusterID: "824c52fe-e7b2-4b02-8bc3-bd3104b27d78",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "824c52fe-e7b2-4b02-8bc3-bd3104b27d78",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668092650699
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [51.2993, 9.491],
				area: 200,
				country: "DE",
				city: "",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [3107492864, 3107493888],
				region: ""
			},
			ip: "185.56.150.157"
		},
		clusterID: "b41b0d77-37d7-46e8-a2ca-588470c83958",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "b41b0d77-37d7-46e8-a2ca-588470c83958",
			provider: "k3s",
			kubernetesVersion: "v1.24.6+k3s1"
		},
		timestamp: 1666716789860
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 100,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [3262402560, 3262402816],
				region: "21"
			},
			ip: "194.116.80.85"
		},
		clusterID: "c160999d-515f-4fd4-b92f-bbadf58f6d28",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "c160999d-515f-4fd4-b92f-bbadf58f6d28",
			provider: "kind",
			kubernetesVersion: "v1.23.4"
		},
		timestamp: 1667810045639
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [43.6547, -79.3623],
				area: 20,
				country: "CA",
				city: "Toronto",
				timezone: "America/Toronto",
				metro: 0,
				range: [578580480, 578584576],
				region: "ON"
			},
			ip: "34.124.117.245"
		},
		clusterID: "1c9fd7b7-335d-4546-90bc-651684f09dbf",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"attachable-volumes-gce-pd": "228",
							"ephemeral-storage": "84708122624",
							memory: "24072M",
							cpu: "6098m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "6226e593-d26f-4944-813f-ccedfa812311",
					discoveryType: "IncomingPeering",
					latency: 109000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "1c9fd7b7-335d-4546-90bc-651684f09dbf",
			provider: "gke",
			kubernetesVersion: "v1.23.8-gke.1900"
		},
		timestamp: 1667311324965
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.751, -97.822],
				area: 1000,
				country: "US",
				city: "",
				timezone: "America/Chicago",
				metro: 0,
				range: [79691776, 80216064],
				region: ""
			},
			ip: "4.196.219.202"
		},
		clusterID: "930428e8-16a9-49d8-8515-81f38e58d1d5",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "930428e8-16a9-49d8-8515-81f38e58d1d5",
			kubernetesVersion: "v1.24.7+rke2r1"
		},
		timestamp: 1667538242218
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "00ea18bc-9dd1-4e3d-acfe-1a39ec95b661",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "80698792Ki",
							memory: "27809M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "85ac6cf7-cab2-4c45-bcad-365ed176b5a0",
					discoveryType: "Manual",
					latency: 5000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "00ea18bc-9dd1-4e3d-acfe-1a39ec95b661",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667378887696
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.3759, 4.8975],
				area: 1000,
				country: "NL",
				city: "Amsterdam",
				timezone: "Europe/Amsterdam",
				metro: 0,
				range: [342294528, 342360064],
				region: "NH"
			},
			ip: "20.103.101.67"
		},
		clusterID: "596b8ed8-ea13-45fb-9252-d3b485f88817",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "596b8ed8-ea13-45fb-9252-d3b485f88817",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1669281425771
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [32.8608, -79.9746],
				area: 1000,
				country: "US",
				city: "North Charleston",
				timezone: "America/New_York",
				metro: 519,
				range: [602734592, 602800128],
				region: "SC"
			},
			ip: "35.237.49.148"
		},
		clusterID: "b8f76e3d-7ab6-49b3-9f5e-302858386e43",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "b8f76e3d-7ab6-49b3-9f5e-302858386e43",
			provider: "gke",
			kubernetesVersion: "v1.23.14-gke.401"
		},
		timestamp: 1670927226345
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "2d9dd169-7182-499b-b538-901b9c3b861f",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "80699000Ki",
							memory: "27809M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "InBand",
					remoteClusterID: "b2651a56-b3e3-41d0-a44d-e5fca9f2e33d",
					discoveryType: "Manual",
					latency: 531000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "2d9dd169-7182-499b-b538-901b9c3b861f",
			namespacesInfo: [
				{
					uid: "04da4030-4660-4d40-a163-3e43f61e5987",
					offloadingStrategy: "Local",
					mappingStrategy: "EnforceSameName",
					numOffloadedPods: {
						"b2651a56-b3e3-41d0-a44d-e5fca9f2e33d": 0
					}
				},
				{
					uid: "f6839afc-35b6-4468-be02-ded6fa66fe91",
					offloadingStrategy: "Remote",
					mappingStrategy: "EnforceSameName",
					numOffloadedPods: {
						"b2651a56-b3e3-41d0-a44d-e5fca9f2e33d": 2
					}
				}
			],
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666713068173
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.1835, -121.7714],
				area: 20,
				country: "US",
				city: "San Jose",
				timezone: "America/Los_Angeles",
				metro: 807,
				range: [339869696, 339902464],
				region: "CA"
			},
			ip: "20.66.25.43"
		},
		clusterID: "eb6eea42-3ac2-4cc5-b0fd-6d50dd1f287b",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "eb6eea42-3ac2-4cc5-b0fd-6d50dd1f287b",
			provider: "kubeadm",
			kubernetesVersion: "v1.21.10"
		},
		timestamp: 1670425146254
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [40.867, 14.2385],
				area: 200,
				country: "IT",
				city: "Naples",
				timezone: "Europe/Rome",
				metro: 0,
				range: [36557824, 36558336],
				region: "72"
			},
			ip: "2.45.213.161"
		},
		clusterID: "659b95ef-6bb3-4b6a-8f07-b09f8325f50a",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "659b95ef-6bb3-4b6a-8f07-b09f8325f50a",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667302636863
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [40.867, 14.2385],
				area: 200,
				country: "IT",
				city: "Naples",
				timezone: "Europe/Rome",
				metro: 0,
				range: [36557824, 36558336],
				region: "72"
			},
			ip: "2.45.213.161"
		},
		clusterID: "fc45cecb-1a9b-4c45-ad0d-86c18b1802f9",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "fc45cecb-1a9b-4c45-ad0d-86c18b1802f9",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667302635383
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 20,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [3262400512, 3262402560],
				region: "21"
			},
			ip: "194.116.77.120"
		},
		clusterID: "e7f7b25c-b869-4d31-a874-4100eaaaeb41",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "123900m",
							"hugepages-2Mi": "0",
							pods: "11110",
							"ephemeral-storage": "222881316864",
							memory: "436940M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "ce23b992-6366-4114-afa8-7e390f23a1a0",
					discoveryType: "IncomingPeering",
					latency: 818000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "e7f7b25c-b869-4d31-a874-4100eaaaeb41",
			kubernetesVersion: "v1.21.3+k3s1"
		},
		timestamp: 1669795866225
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2394, 21.0362],
				area: 200,
				country: "PL",
				city: "",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [3106990080, 3106991104],
				region: ""
			},
			ip: "185.48.232.43"
		},
		clusterID: "d51c010e-f059-4a92-a245-4c9152986fb9",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "d51c010e-f059-4a92-a245-4c9152986fb9",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1667231942476
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "9afe42fe-effa-4b59-acb6-c7d13f17bbd1",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "80698792Ki",
							memory: "27809M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "dbc6453f-4105-4d28-a4e7-7885edf9a41d",
					discoveryType: "IncomingPeering",
					latency: 5000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "9afe42fe-effa-4b59-acb6-c7d13f17bbd1",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667467870442
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [43.1479, 12.1097],
				area: 500,
				country: "IT",
				city: "",
				timezone: "Europe/Rome",
				metro: 0,
				range: [631302144, 631304192],
				region: ""
			},
			ip: "37.160.234.141"
		},
		clusterID: "54fd9ed4-1d01-44c4-a3cc-0554203faeff",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "9945m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "179964Mi",
							memory: "14605M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "InBand",
					remoteClusterID: "3da90ec9-470f-46e2-bf3f-f3ceabb095cd",
					discoveryType: "Manual",
					latency: 279000
				}
			],
			liqoVersion: "9f345fdfa30653103386f885b9bcf474ca4ef648",
			clusterID: "54fd9ed4-1d01-44c4-a3cc-0554203faeff",
			provider: "kind",
			kubernetesVersion: "v1.23.0"
		},
		timestamp: 1666882152698
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [36.7295, 3.0905],
				area: 500,
				country: "DZ",
				city: "Algiers",
				timezone: "Africa/Algiers",
				metro: 0,
				range: [1768308736, 1768316928],
				region: "16"
			},
			ip: "105.102.87.81"
		},
		clusterID: "72280a2c-b3cb-40d6-bd04-2c7b9597bc5c",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "945m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "42704891904",
							memory: "3342M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "InBand",
					remoteClusterID: "db86a755-ad42-4e47-a876-303c27008435",
					discoveryType: "Manual",
					latency: 38000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "72280a2c-b3cb-40d6-bd04-2c7b9597bc5c",
			provider: "kind",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1669226309941
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [35.3274, 25.1281],
				area: 5,
				country: "GR",
				city: "Heraklion",
				timezone: "Europe/Athens",
				metro: 0,
				range: [2472501248, 2472509440],
				region: "M"
			},
			ip: "147.95.122.134"
		},
		clusterID: "f06398da-d862-40e7-8d57-6d2a44d88ae2",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "427955616Ki",
							memory: "29650M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "400fb137-f142-4c63-be59-a198fb421866",
					discoveryType: "IncomingPeering",
					latency: 767000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "f06398da-d862-40e7-8d57-6d2a44d88ae2",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1670312644509
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [40.867, 14.2385],
				area: 200,
				country: "IT",
				city: "Naples",
				timezone: "Europe/Rome",
				metro: 0,
				range: [36557824, 36558336],
				region: "72"
			},
			ip: "2.45.213.161"
		},
		clusterID: "5623d766-692c-4767-8b6f-2f9b4d65d1c4",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "473713568Ki",
							memory: "10700M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "0c717468-26dc-412a-8952-4b4d3acc2386",
					discoveryType: "IncomingPeering",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "5623d766-692c-4767-8b6f-2f9b4d65d1c4",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666777270058
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [-33.8715, 151.2006],
				area: 20,
				country: "AU",
				city: "Sydney",
				timezone: "Australia/Sydney",
				metro: 0,
				range: [351830016, 351862784],
				region: "NSW"
			},
			ip: "20.248.202.251"
		},
		clusterID: "5e81c48c-fb2b-426a-b54d-3ecd1e1e72c1",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "5e81c48c-fb2b-426a-b54d-3ecd1e1e72c1",
			provider: "k3s",
			kubernetesVersion: "v1.24.4+k3s1"
		},
		timestamp: 1667219049787
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.4722, 9.1922],
				area: 5,
				country: "IT",
				city: "Milan",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2182727168, 2182727680],
				region: "25"
			},
			ip: "130.25.199.252"
		},
		clusterID: "4c97d91b-6eb5-466e-b434-630d140ca6a2",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "6255m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "110259880Ki",
							memory: "14515M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "96a26e36-2a15-440c-8aac-1f87d7194305",
					discoveryType: "IncomingPeering",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "4c97d91b-6eb5-466e-b434-630d140ca6a2",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666715466265
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [751566848, 751828992],
				region: "VA"
			},
			ip: "44.206.221.162"
		},
		clusterID: "ca2c563f-ca8c-4a28-a894-8b07bffa6494",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "ca2c563f-ca8c-4a28-a894-8b07bffa6494",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667204704111
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.9273, -76.8545],
				area: 1000,
				country: "US",
				city: "Tappahannock",
				timezone: "America/New_York",
				metro: 556,
				range: [343474176, 343539712],
				region: "VA"
			},
			ip: "20.121.102.11"
		},
		clusterID: "3476ee70-0025-44e3-9666-a80baa242edd",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "6445m",
							"hugepages-2Mi": "0",
							pods: "180",
							"ephemeral-storage": "107732746240",
							memory: "25667M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "3b2a2993-364f-41d7-8168-bea14ef6165d",
					discoveryType: "IncomingPeering",
					latency: 2000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "3476ee70-0025-44e3-9666-a80baa242edd",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1667399582839
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [51.2993, 9.491],
				area: 200,
				country: "DE",
				city: "",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [1440153600, 1440219136],
				region: ""
			},
			ip: "85.215.220.3"
		},
		clusterID: "7c59a868-8277-4f97-902a-20e0a559f39c",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "3420m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "17628237824",
							memory: "3549M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "InBand",
					remoteClusterID: "f1d127c5-0b4e-48ab-bc23-ab742b0f959f",
					discoveryType: "Manual",
					latency: 711000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "7c59a868-8277-4f97-902a-20e0a559f39c",
			provider: "k3s",
			kubernetesVersion: "v1.25.3+k3s1"
		},
		timestamp: 1666948687834
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.9273, -76.8545],
				area: 1000,
				country: "US",
				city: "Tappahannock",
				timezone: "America/New_York",
				metro: 556,
				range: [343474176, 343539712],
				region: "VA"
			},
			ip: "20.121.96.111"
		},
		clusterID: "d4c03806-7b01-4b78-baed-9eaa261c4991",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "6445m",
							"hugepages-2Mi": "0",
							pods: "180",
							"ephemeral-storage": "107732746240",
							memory: "25667M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "b7c61970-869c-407a-9837-f5902eec48fa",
					discoveryType: "Manual",
					latency: 2000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "d4c03806-7b01-4b78-baed-9eaa261c4991",
			namespacesInfo: [
				{
					uid: "79e2c90d-4647-4eaf-af0b-234b43f08317",
					offloadingStrategy: "Remote",
					mappingStrategy: "EnforceSameName",
					hasClusterSelector: true,
					numOffloadedPods: {
						"b7c61970-869c-407a-9837-f5902eec48fa": 0
					}
				},
				{
					uid: "ab60c3ee-8174-48dd-94be-8fa28c7d2918",
					offloadingStrategy: "Local",
					mappingStrategy: "EnforceSameName",
					hasClusterSelector: true,
					numOffloadedPods: {
						"b7c61970-869c-407a-9837-f5902eec48fa": 0
					}
				}
			],
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1668185583989
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [1.3036, 103.8554],
				area: 1000,
				country: "SG",
				city: "Singapore",
				timezone: "Asia/Singapore",
				metro: 0,
				range: [917045248, 917078016],
				region: ""
			},
			ip: "54.169.96.179"
		},
		clusterID: "43f84e42-d74f-42f9-b440-312af0bb42c9",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "43f84e42-d74f-42f9-b440-312af0bb42c9",
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1669618387182
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [35.3274, 25.1281],
				area: 5,
				country: "GR",
				city: "Heraklion",
				timezone: "Europe/Athens",
				metro: 0,
				range: [2472501248, 2472509440],
				region: "M"
			},
			ip: "147.95.122.134"
		},
		clusterID: "46907237-bf7e-42ee-87c9-91c72ad4af56",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "46907237-bf7e-42ee-87c9-91c72ad4af56",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.4"
		},
		timestamp: 1670494082327
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.213.62"
		},
		clusterID: "86f033da-39f7-4f5c-b3f9-2d8e70c04739",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "110164040Ki",
							memory: "14499M",
							cpu: "6255m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "b231e001-70d3-405d-9544-1f11ae3611bc",
					discoveryType: "Manual",
					latency: 656000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "86f033da-39f7-4f5c-b3f9-2d8e70c04739",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668189667149
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [1.3036, 103.8554],
				area: 20,
				country: "SG",
				city: "Singapore",
				timezone: "Asia/Singapore",
				metro: 0,
				range: [579764224, 579796992],
				region: ""
			},
			ip: "34.142.176.91"
		},
		clusterID: "a134da4c-fade-4979-99f0-22144ce8ecfc",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "a134da4c-fade-4979-99f0-22144ce8ecfc",
			provider: "gke",
			kubernetesVersion: "v1.23.11-gke.300"
		},
		timestamp: 1669793886280
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.212.33"
		},
		clusterID: "5a9e4158-eaa1-4305-8734-32ff0f1ef82e",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "110164040Ki",
							memory: "14499M",
							cpu: "6255m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "81bc70e2-7fb3-4b58-b982-ab61607202e2",
					discoveryType: "Manual",
					latency: 18000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "5a9e4158-eaa1-4305-8734-32ff0f1ef82e",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666725367461
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.213.62"
		},
		clusterID: "82d53b19-2677-4297-bdd8-d636f0ca7b1a",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "110164040Ki",
							memory: "14215M",
							cpu: "5895m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "577b59fc-d809-4d3f-8d1f-1be86b837a3f",
					discoveryType: "Manual",
					latency: 554000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "82d53b19-2677-4297-bdd8-d636f0ca7b1a",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668701827718
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.213.62"
		},
		clusterID: "c8089def-7f00-4d37-ac0f-5929f40494fc",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "110164040Ki",
							memory: "14215M",
							cpu: "5895m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "ba16b045-3db4-45e3-a955-f0a46995e945",
					discoveryType: "Manual",
					latency: 503000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "c8089def-7f00-4d37-ac0f-5929f40494fc",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668759906132
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.213.62"
		},
		clusterID: "0e307eb2-1c6e-43f3-b0c2-59c68636da22",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "110164040Ki",
							memory: "14215M",
							cpu: "5895m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "fcc3084a-3b0e-4233-80c0-85ae0c8c11b7",
					discoveryType: "IncomingPeering",
					latency: 4000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "0e307eb2-1c6e-43f3-b0c2-59c68636da22",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1669020190354
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "72d8c6d3-54ab-46bb-be08-8c1277e24d0b",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "72d8c6d3-54ab-46bb-be08-8c1277e24d0b",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667415512691
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [628595904, 628595968],
				region: "21"
			},
			ip: "37.119.156.250"
		},
		clusterID: "bb3859d0-d68a-419f-8de6-167e5641bf2e",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "bb3859d0-d68a-419f-8de6-167e5641bf2e",
			provider: "kind",
			kubernetesVersion: "v1.23.4"
		},
		timestamp: 1668520505174
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [35.3274, 25.1281],
				area: 5,
				country: "GR",
				city: "Heraklion",
				timezone: "Europe/Athens",
				metro: 0,
				range: [2472501248, 2472509440],
				region: "M"
			},
			ip: "147.95.122.134"
		},
		clusterID: "2e687ae4-3c2e-4d79-afe6-e928eb6cc671",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "2e687ae4-3c2e-4d79-afe6-e928eb6cc671",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1670318586306
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2394, 21.0362],
				area: 200,
				country: "PL",
				city: "",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [3106990080, 3106991104],
				region: ""
			},
			ip: "185.48.232.43"
		},
		clusterID: "10a65df6-84b4-4833-ad61-5d4839f8ba51",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "85455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "218979434496",
							memory: "486111M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "a6db021e-6e3d-4786-91df-69cf6868a53c",
					discoveryType: "IncomingPeering",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "10a65df6-84b4-4833-ad61-5d4839f8ba51",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1667817064953
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [51.2993, 9.491],
				area: 200,
				country: "DE",
				city: "",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [1440153600, 1440219136],
				region: ""
			},
			ip: "85.215.249.153"
		},
		clusterID: "f1d127c5-0b4e-48ab-bc23-ab742b0f959f",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "d94454d8-6724-4b0b-a674-25f6090585dd",
					discoveryType: "Manual"
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "f1d127c5-0b4e-48ab-bc23-ab742b0f959f",
			provider: "k3s",
			kubernetesVersion: "v1.25.3+k3s1"
		},
		timestamp: 1666886044565
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.212.33"
		},
		clusterID: "cdbe089f-9c4c-4241-82d5-1dbb20c8fd51",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "110164040Ki",
							memory: "14499M",
							cpu: "6255m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "f9c5e900-dcb6-4e3b-b9d9-c73ea4ddb4a8",
					discoveryType: "Manual",
					latency: 12000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "cdbe089f-9c4c-4241-82d5-1dbb20c8fd51",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667766496078
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2296, 21.0067],
				area: 20,
				country: "PL",
				city: "Warsaw",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [578158592, 578191360],
				region: "14"
			},
			ip: "34.118.78.111"
		},
		clusterID: "54ab9213-df1e-4103-9d76-d97e66778969",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"attachable-volumes-gce-pd": "114",
							"ephemeral-storage": "42354061312",
							memory: "54774M",
							cpu: "13782m",
							"hugepages-2Mi": "0",
							pods: "99",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "5eaee01d-d1ae-4b7a-a53a-180e03307894",
					discoveryType: "IncomingPeering",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "54ab9213-df1e-4103-9d76-d97e66778969",
			provider: "gke",
			kubernetesVersion: "v1.23.8-gke.1900"
		},
		timestamp: 1666720868462
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [40.867, 14.2385],
				area: 200,
				country: "IT",
				city: "Naples",
				timezone: "Europe/Rome",
				metro: 0,
				range: [36557824, 36558336],
				region: "72"
			},
			ip: "2.45.213.161"
		},
		clusterID: "f561c534-e113-4812-80ef-957e903625a2",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "f561c534-e113-4812-80ef-957e903625a2",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666799561629
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [40.867, 14.2385],
				area: 200,
				country: "IT",
				city: "Naples",
				timezone: "Europe/Rome",
				metro: 0,
				range: [36557824, 36558336],
				region: "72"
			},
			ip: "2.45.213.161"
		},
		clusterID: "4f5a175c-c993-4a3a-b4d0-13646422d67a",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "4f5a175c-c993-4a3a-b4d0-13646422d67a",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667319773468
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [60.1797, 24.9344],
				area: 200,
				country: "FI",
				city: "Helsinki",
				timezone: "Europe/Helsinki",
				metro: 0,
				range: [1431072768, 1431076864],
				region: "18"
			},
			ip: "85.76.112.100"
		},
		clusterID: "c7437471-f0f3-4b95-b8da-d168b3b21f6a",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "7020m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "1681192255488",
							memory: "60390M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "cac8c162-6001-4d62-b8c7-2ab8df599023",
					discoveryType: "IncomingPeering",
					latency: 936000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "c7437471-f0f3-4b95-b8da-d168b3b21f6a",
			provider: "k3s",
			kubernetesVersion: "v1.24.4+k3s1"
		},
		timestamp: 1668444068296
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 10,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [521902592, 521902848],
				region: "21"
			},
			ip: "31.27.154.6"
		},
		clusterID: "fc8dfcfb-bc6a-4994-9339-f741cc50ec61",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "fc8dfcfb-bc6a-4994-9339-f741cc50ec61",
			kubernetesVersion: "v1.23.11"
		},
		timestamp: 1668886446932
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [43.1479, 12.1097],
				area: 200,
				country: "IT",
				city: "",
				timezone: "Europe/Rome",
				metro: 0,
				range: [631406592, 631407616],
				region: ""
			},
			ip: "37.162.130.211"
		},
		clusterID: "b54dbbc9-950c-4066-82b9-f431498f4235",
		telemetry: {
			liqoVersion: "9f345fdfa30653103386f885b9bcf474ca4ef648",
			clusterID: "b54dbbc9-950c-4066-82b9-f431498f4235",
			provider: "kind",
			kubernetesVersion: "v1.23.0"
		},
		timestamp: 1666909984737
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.2872, 127.0116],
				area: 20,
				country: "KR",
				city: "Suwon",
				timezone: "Asia/Seoul",
				metro: 0,
				range: [2093096960, 2093101056],
				region: "41"
			},
			ip: "124.194.34.5"
		},
		clusterID: "10a2135a-0b60-4d53-b691-e1b7f7168e0f",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "10a2135a-0b60-4d53-b691-e1b7f7168e0f",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1668047403548
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.9273, -76.8545],
				area: 20,
				country: "US",
				city: "Tappahannock",
				timezone: "America/New_York",
				metro: 556,
				range: [342228992, 342261760],
				region: "VA"
			},
			ip: "20.102.25.136"
		},
		clusterID: "eb7124ce-fdc6-4cb8-8162-0fbe26e7f670",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "eb7124ce-fdc6-4cb8-8162-0fbe26e7f670",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1669201205862
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [33.5768, -112.2348],
				area: 10,
				country: "US",
				city: "Peoria",
				timezone: "America/Phoenix",
				metro: 753,
				range: [2924134400, 2924138496],
				region: "AZ"
			},
			ip: "174.74.207.219"
		},
		clusterID: "532f6aec-cfad-4e82-9a76-736e0b1a517c",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "532f6aec-cfad-4e82-9a76-736e0b1a517c",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667418369247
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [35796992, 35797248],
				region: "21"
			},
			ip: "2.34.56.150"
		},
		clusterID: "8eb34c11-b6ec-422e-baa5-ee752476ce4c",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "8eb34c11-b6ec-422e-baa5-ee752476ce4c",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668101285507
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "2231d37b-2a2d-4690-83e7-62e1b43ea9c4",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "2231d37b-2a2d-4690-83e7-62e1b43ea9c4",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667415196811
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [55.9489, -3.1632],
				area: 20,
				country: "GB",
				city: "Edinburgh",
				timezone: "Europe/London",
				metro: 0,
				range: [3519870208, 3519870464],
				region: "SCT"
			},
			ip: "209.204.245.4"
		},
		clusterID: "f12a192a-ecc9-4d9f-9edb-2174e193472e",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "f12a192a-ecc9-4d9f-9edb-2174e193472e",
			provider: "kubeadm",
			kubernetesVersion: "v1.21.6"
		},
		timestamp: 1668531302653
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [585816064, 585818112],
				region: "VA"
			},
			ip: "34.234.219.87"
		},
		clusterID: "d98f1923-8dea-4397-85a0-20b7e2d5c64e",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "2655m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "91365488Ki",
							memory: "6977M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "fa724b05-51b6-46f8-84be-dedf4e27e2c7",
					discoveryType: "IncomingPeering",
					latency: 299000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "d98f1923-8dea-4397-85a0-20b7e2d5c64e",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666776004059
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2296, 21.0067],
				area: 20,
				country: "PL",
				city: "Warsaw",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [578158592, 578191360],
				region: "14"
			},
			ip: "34.118.78.111"
		},
		clusterID: "e349075d-421f-4661-8cb2-cff27b9031d6",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "e349075d-421f-4661-8cb2-cff27b9031d6",
			provider: "gke",
			kubernetesVersion: "v1.22.12-gke.1200"
		},
		timestamp: 1667212627867
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.751, -97.822],
				area: 1000,
				country: "US",
				city: "",
				timezone: "America/Chicago",
				metro: 0,
				range: [346554368, 347078656],
				region: ""
			},
			ip: "20.169.184.154"
		},
		clusterID: "7db2b116-3348-462a-8eb0-fd0d61afe229",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "7db2b116-3348-462a-8eb0-fd0d61afe229",
			provider: "k3s",
			kubernetesVersion: "v1.25.3+k3s1"
		},
		timestamp: 1667214783910
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [35.3274, 25.1281],
				area: 5,
				country: "GR",
				city: "Heraklion",
				timezone: "Europe/Athens",
				metro: 0,
				range: [2472501248, 2472509440],
				region: "M"
			},
			ip: "147.95.122.135"
		},
		clusterID: "4526e0fc-e033-4f08-b1e4-c80eaba987d6",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "427955616Ki",
							memory: "29650M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "f3193658-c301-43a5-91c6-9e0ef85aa3da",
					discoveryType: "IncomingPeering",
					latency: 885000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "4526e0fc-e033-4f08-b1e4-c80eaba987d6",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1670245084574
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [51.2993, 9.491],
				area: 200,
				country: "DE",
				city: "",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [1959510016, 1959526400],
				region: ""
			},
			ip: "116.203.250.188"
		},
		clusterID: "6a98ce81-e356-4c9f-8014-e3c72f6d4443",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "3a1dbbba-79d2-42d1-8349-e5493b5742e5",
					discoveryType: "Manual"
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "6a98ce81-e356-4c9f-8014-e3c72f6d4443",
			provider: "kubeadm",
			kubernetesVersion: "v1.23.14"
		},
		timestamp: 1669663204597
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2394, 21.0362],
				area: 200,
				country: "PL",
				city: "",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [3106990080, 3106991104],
				region: ""
			},
			ip: "185.48.232.43"
		},
		clusterID: "17e50f3b-c4d2-4d9a-939f-9f73cf203872",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "85455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "218979434496",
							memory: "486111M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "9c7db9e8-bc74-430a-9002-5304c2a11935",
					discoveryType: "IncomingPeering",
					latency: 855000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "17e50f3b-c4d2-4d9a-939f-9f73cf203872",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1667993411069
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.9273, -76.8545],
				area: 20,
				country: "US",
				city: "Tappahannock",
				timezone: "America/New_York",
				metro: 556,
				range: [351436800, 351469568],
				region: "VA"
			},
			ip: "20.242.176.45"
		},
		clusterID: "9d4a282d-e052-40dc-b1bf-26adf78feb2f",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "9d4a282d-e052-40dc-b1bf-26adf78feb2f",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1670829303047
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "7b56db6a-32d5-4708-895c-3fd005200a10",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "26814830Ki",
							memory: "27809M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "c5be23d3-1e3d-410a-afee-3c93120b84b1",
					discoveryType: "IncomingPeering",
					latency: 984000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "7b56db6a-32d5-4708-895c-3fd005200a10",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667150827562
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2296, 21.0067],
				area: 20,
				country: "PL",
				city: "Warsaw",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [578060288, 578093056],
				region: "14"
			},
			ip: "34.116.252.93"
		},
		clusterID: "68920e55-86bd-4e77-b7e7-21953d898047",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							"attachable-volumes-gce-pd": "114",
							"ephemeral-storage": "42354061312",
							memory: "26236M",
							cpu: "6600m",
							"hugepages-2Mi": "0",
							pods: "99",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "505f47aa-572b-4b4e-9c70-2b5a0e6f9a61",
					discoveryType: "Manual",
					latency: 724000
				},
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							"attachable-volumes-gce-pd": "114",
							"ephemeral-storage": "42354061312",
							memory: "26236M",
							cpu: "6600m",
							"hugepages-2Mi": "0",
							pods: "99",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "495156f1-ec96-4313-90c6-cfb41d47f6c7",
					discoveryType: "Manual",
					latency: 909000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "68920e55-86bd-4e77-b7e7-21953d898047",
			provider: "gke",
			kubernetesVersion: "v1.23.8-gke.1900"
		},
		timestamp: 1667314028842
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 20,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [3262400512, 3262402560],
				region: "21"
			},
			ip: "194.116.77.120"
		},
		clusterID: "ce23b992-6366-4114-afa8-7e390f23a1a0",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "123900m",
							"hugepages-2Mi": "0",
							pods: "11110",
							"ephemeral-storage": "222881316864",
							memory: "436940M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "e7f7b25c-b869-4d31-a874-4100eaaaeb41",
					discoveryType: "Manual",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "ce23b992-6366-4114-afa8-7e390f23a1a0",
			namespacesInfo: [
				{
					uid: "4b85c454-ccb6-4603-96df-e24755b52396",
					offloadingStrategy: "LocalAndRemote",
					mappingStrategy: "EnforceSameName",
					numOffloadedPods: {
						"e7f7b25c-b869-4d31-a874-4100eaaaeb41": 800
					}
				}
			],
			kubernetesVersion: "v1.21.3+k3s1"
		},
		timestamp: 1669795866100
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.213.62"
		},
		clusterID: "68d0f5ec-aa8e-4aa3-893f-60a655ba0925",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "110164040Ki",
							memory: "14215M",
							cpu: "5895m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "555437b6-a84a-4d26-973c-97b4f4d4aaf7",
					discoveryType: "Manual",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "68d0f5ec-aa8e-4aa3-893f-60a655ba0925",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668791766376
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [56524800, 56557568],
				region: "VA"
			},
			ip: "3.94.172.55"
		},
		clusterID: "322f6754-aa93-4492-856e-b2b72aabb7ad",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "322f6754-aa93-4492-856e-b2b72aabb7ad",
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1669637644945
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "4c8430e6-2f42-4b0a-97fc-9b473ce092b8",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "4c8430e6-2f42-4b0a-97fc-9b473ce092b8",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667297227322
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [40.867, 14.2385],
				area: 200,
				country: "IT",
				city: "Naples",
				timezone: "Europe/Rome",
				metro: 0,
				range: [36557824, 36558336],
				region: "72"
			},
			ip: "2.45.213.161"
		},
		clusterID: "e2e2c9a3-b90b-47a9-8242-37f322ac8674",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "473713568Ki",
							memory: "10700M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "68a91c9e-b0e5-4c08-8321-eacc0b07d23d",
					discoveryType: "Manual",
					latency: 2613000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "e2e2c9a3-b90b-47a9-8242-37f322ac8674",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667318435773
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.212.33"
		},
		clusterID: "e6ea0ea9-170c-41fb-b3b6-9cfd286d3cf7",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "110164040Ki",
							memory: "14499M",
							cpu: "6255m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "3f0b8985-47f4-4515-a817-7c5e07a2aecd",
					discoveryType: "IncomingPeering",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "e6ea0ea9-170c-41fb-b3b6-9cfd286d3cf7",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667463006435
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [40.867, 14.2385],
				area: 200,
				country: "IT",
				city: "Naples",
				timezone: "Europe/Rome",
				metro: 0,
				range: [36557824, 36558336],
				region: "72"
			},
			ip: "2.45.213.161"
		},
		clusterID: "600c2b28-155b-4da3-9e5c-db6780faeb95",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "473713568Ki",
							memory: "10700M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "6e1462da-df0b-4e03-a781-d2810ad862e1",
					discoveryType: "Manual",
					latency: 67000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "600c2b28-155b-4da3-9e5c-db6780faeb95",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666866145049
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 20,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [3262400512, 3262402560],
				region: "21"
			},
			ip: "194.116.77.120"
		},
		clusterID: "595835b8-812a-4689-80be-24c5a55b3ada",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "92565m",
							"hugepages-2Mi": "0",
							pods: "693",
							"ephemeral-storage": "767236636672",
							memory: "492818M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "1b20ed42-f806-43b2-9375-82917fc44121",
					discoveryType: "IncomingPeering",
					latency: 31000000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "595835b8-812a-4689-80be-24c5a55b3ada",
			kubernetesVersion: "v1.24.7"
		},
		timestamp: 1669711445981
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.751, -97.822],
				area: 1000,
				country: "US",
				city: "",
				timezone: "America/Chicago",
				metro: 0,
				range: [2691006464, 2691039232],
				region: ""
			},
			ip: "160.101.128.1"
		},
		clusterID: "7c28f366-1958-499f-9ee4-8d6738abee90",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "13545m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "202105664Ki",
							memory: "37512M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						resources: {
							cpu: "10980m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "202105664Ki",
							memory: "28715M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "51b5b0c6-2af9-47f9-a2e2-04885dbe5319",
					discoveryType: "LAN",
					latency: 809000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "7c28f366-1958-499f-9ee4-8d6738abee90",
			provider: "kind",
			kubernetesVersion: "v1.21.1"
		},
		timestamp: 1667468642868
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.7612, 8.7974],
				area: 5,
				country: "IT",
				city: "Brunello",
				timezone: "Europe/Rome",
				metro: 0,
				range: [3259971584, 3259972096],
				region: "25"
			},
			ip: "194.79.57.5"
		},
		clusterID: "3c3e13f9-4553-4a4d-97da-094ae4cb615b",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "1620m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "14677133312",
							memory: "3571M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "b05cab44-c356-4305-93b5-68da3b291e1b",
					discoveryType: "Manual",
					latency: 8000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "3c3e13f9-4553-4a4d-97da-094ae4cb615b",
			namespacesInfo: [
				{
					uid: "7c1728bd-69f0-49dd-8891-03f88fb7f7da",
					offloadingStrategy: "LocalAndRemote",
					mappingStrategy: "EnforceSameName",
					numOffloadedPods: {
						"b05cab44-c356-4305-93b5-68da3b291e1b": 0
					}
				}
			],
			provider: "k3s",
			kubernetesVersion: "v1.24.6+k3s1"
		},
		timestamp: 1666879925631
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.9273, -76.8545],
				area: 20,
				country: "US",
				city: "Tappahannock",
				timezone: "America/New_York",
				metro: 556,
				range: [340852736, 340885504],
				region: "VA"
			},
			ip: "20.81.88.134"
		},
		clusterID: "ad6e0827-443b-4b11-b56b-6bebf37a4ece",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "6445m",
							"hugepages-2Mi": "0",
							pods: "180",
							"ephemeral-storage": "107732746240",
							memory: "25667M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "6e246a7a-fdd0-4ab3-abfb-155db35e9ae6",
					discoveryType: "Manual",
					latency: 2000000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "ad6e0827-443b-4b11-b56b-6bebf37a4ece",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1669634044340
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2394, 21.0362],
				area: 200,
				country: "PL",
				city: "",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [3106990080, 3106991104],
				region: ""
			},
			ip: "185.48.232.43"
		},
		clusterID: "d3884b6a-fd3d-446b-8036-2b104f1d98af",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "85455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "218979434496",
							memory: "486111M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "9c7db9e8-bc74-430a-9002-5304c2a11935",
					discoveryType: "IncomingPeering",
					latency: 767000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "d3884b6a-fd3d-446b-8036-2b104f1d98af",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1667993410620
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [628595904, 628595968],
				region: "21"
			},
			ip: "37.119.156.250"
		},
		clusterID: "96284743-2046-4020-802e-d8109f0acfbe",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "96284743-2046-4020-802e-d8109f0acfbe",
			provider: "kind",
			kubernetesVersion: "v1.23.4"
		},
		timestamp: 1668520505125
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [885628928, 885637120],
				region: "VA"
			},
			ip: "52.201.169.145"
		},
		clusterID: "ec40d7d7-673a-41a6-95f7-0dd1823d26c9",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "ec40d7d7-673a-41a6-95f7-0dd1823d26c9",
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1669221545446
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [55.9489, -3.1632],
				area: 20,
				country: "GB",
				city: "Edinburgh",
				timezone: "Europe/London",
				metro: 0,
				range: [3519870208, 3519870464],
				region: "SCT"
			},
			ip: "209.204.245.4"
		},
		clusterID: "b2c6258b-7ee8-4cf8-be31-d6e07f194952",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "6120m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "25105784832",
							memory: "21750M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "f12a192a-ecc9-4d9f-9edb-2174e193472e",
					discoveryType: "IncomingPeering",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "b2c6258b-7ee8-4cf8-be31-d6e07f194952",
			provider: "kubeadm",
			kubernetesVersion: "v1.21.6"
		},
		timestamp: 1668531724281
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 100,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [3262402560, 3262402816],
				region: "21"
			},
			ip: "194.116.80.82"
		},
		clusterID: "ef56131e-2295-49ff-99e0-76218a9814d7",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "55082020Ki",
							memory: "7135M",
							cpu: "3645m",
							"hugepages-2Mi": "0",
							pods: "99",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						resources: {
							cpu: "2",
							"ephemeral-storage": "10G",
							memory: "2G",
							pod: "110",
							storate: "10G"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "1648dd7a-29d8-4d26-98db-98569d119468",
					discoveryType: "IncomingPeering",
					latency: 4000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "ef56131e-2295-49ff-99e0-76218a9814d7",
			provider: "kind",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1667841186458
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [51.2993, 9.491],
				area: 200,
				country: "DE",
				city: "",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [1440153600, 1440219136],
				region: ""
			},
			ip: "85.215.233.27"
		},
		clusterID: "3b5257a5-84b7-49e7-82f9-2a198158e576",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "3b5257a5-84b7-49e7-82f9-2a198158e576",
			provider: "k3s",
			kubernetesVersion: "v1.25.3+k3s1"
		},
		timestamp: 1667476025575
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [35.3274, 25.1281],
				area: 5,
				country: "GR",
				city: "Heraklion",
				timezone: "Europe/Athens",
				metro: 0,
				range: [2472501248, 2472509440],
				region: "M"
			},
			ip: "147.95.122.134"
		},
		clusterID: "d2d51f73-f44d-4b03-b673-5178ad31eff2",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "d2d51f73-f44d-4b03-b673-5178ad31eff2",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1670318645005
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.751, -97.822],
				area: 1000,
				country: "US",
				city: "",
				timezone: "America/Chicago",
				metro: 0,
				range: [2691006464, 2691039232],
				region: ""
			},
			ip: "160.101.128.1"
		},
		clusterID: "53467ae9-fe42-4ed4-b53c-91ea367197ad",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "13545m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "202197824Ki",
							memory: "37512M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "a9a9ba62-e8b2-4117-8ae7-a2840fe3a36a",
					discoveryType: "IncomingPeering",
					latency: 794000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "53467ae9-fe42-4ed4-b53c-91ea367197ad",
			provider: "kind",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1668165663121
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [40.867, 14.2385],
				area: 200,
				country: "IT",
				city: "Naples",
				timezone: "Europe/Rome",
				metro: 0,
				range: [36557824, 36558336],
				region: "72"
			},
			ip: "2.45.213.161"
		},
		clusterID: "9c7ccef9-7370-457b-aa28-6acc8566ca23",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "473713568Ki",
							memory: "10700M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "edbe2ea7-782a-4c5a-bf3f-49db3b892edf",
					discoveryType: "IncomingPeering",
					latency: 67000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "9c7ccef9-7370-457b-aa28-6acc8566ca23",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666800568879
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "29c25518-6534-44f2-a930-3efd2f66c997",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "29c25518-6534-44f2-a930-3efd2f66c997",
			provider: "k3s",
			kubernetesVersion: "v1.25.3+k3s1"
		},
		timestamp: 1667473627105
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [45.4995, -73.5848],
				area: 20,
				country: "CA",
				city: "Montreal",
				timezone: "America/Toronto",
				metro: 0,
				range: [576651264, 576659456],
				region: "QC"
			},
			ip: "34.95.17.246"
		},
		clusterID: "441a883a-dc6d-4b09-814d-120c085ffaf8",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"attachable-volumes-gce-pd": "228",
							"ephemeral-storage": "84708122624",
							memory: "24166M",
							cpu: "6107m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "e349075d-421f-4661-8cb2-cff27b9031d6",
					discoveryType: "IncomingPeering",
					latency: 102000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "441a883a-dc6d-4b09-814d-120c085ffaf8",
			provider: "gke",
			kubernetesVersion: "v1.22.12-gke.1200"
		},
		timestamp: 1667214185019
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.9273, -76.8545],
				area: 20,
				country: "US",
				city: "Tappahannock",
				timezone: "America/New_York",
				metro: 556,
				range: [340852736, 340885504],
				region: "VA"
			},
			ip: "20.81.57.249"
		},
		clusterID: "2585d048-69a1-4e02-8537-c11266ea1422",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "2585d048-69a1-4e02-8537-c11266ea1422",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1669361823607
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 20,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [3262400512, 3262402560],
				region: "21"
			},
			ip: "194.116.77.120"
		},
		clusterID: "1e8257aa-6010-4002-80e5-99f7ecf9cf06",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "92565m",
							"hugepages-2Mi": "0",
							pods: "693",
							"ephemeral-storage": "767236636672",
							memory: "492789M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						resources: {
							cpu: "3330m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "68355407872",
							memory: "6843750Ki",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "3a1842e3-5531-4a56-babb-7a16d0acf2e2",
					discoveryType: "IncomingPeering",
					latency: 29000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "1e8257aa-6010-4002-80e5-99f7ecf9cf06",
			kubernetesVersion: "v1.24.7"
		},
		timestamp: 1666776666402
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "89915f6c-1bbd-43c2-8c1d-4463f6974646",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "89915f6c-1bbd-43c2-8c1d-4463f6974646",
			provider: "kubeadm",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668177907955
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [-33.8715, 151.2006],
				area: 20,
				country: "AU",
				city: "Sydney",
				timezone: "Australia/Sydney",
				metro: 0,
				range: [351830016, 351862784],
				region: "NSW"
			},
			ip: "20.248.202.251"
		},
		clusterID: "b9bc36c9-33f6-4441-8ebf-6dadd281502f",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "b9bc36c9-33f6-4441-8ebf-6dadd281502f",
			kubernetesVersion: "v1.24.7+rke2r1"
		},
		timestamp: 1667536872177
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.9273, -76.8545],
				area: 1000,
				country: "US",
				city: "Tappahannock",
				timezone: "America/New_York",
				metro: 556,
				range: [676888576, 676921344],
				region: "VA"
			},
			ip: "40.88.204.232"
		},
		clusterID: "53e27f32-1748-4970-a197-bec6e522ab33",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "53e27f32-1748-4970-a197-bec6e522ab33",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1670829184048
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.213.62"
		},
		clusterID: "29fa1a08-aeca-4a2e-abd9-b664a7c4a796",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "110164040Ki",
							memory: "14215M",
							cpu: "5895m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "812d6950-014a-499d-b27f-66c5658b6bd4",
					discoveryType: "Manual",
					latency: 499000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "29fa1a08-aeca-4a2e-abd9-b664a7c4a796",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668158402283
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [35.3274, 25.1281],
				area: 5,
				country: "GR",
				city: "Heraklion",
				timezone: "Europe/Athens",
				metro: 0,
				range: [2472501248, 2472509440],
				region: "M"
			},
			ip: "147.95.122.135"
		},
		clusterID: "afe25cb7-cbab-4cc3-a945-1a9c5b22bbf3",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "afe25cb7-cbab-4cc3-a945-1a9c5b22bbf3",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.4"
		},
		timestamp: 1670232607404
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [44.4071, 8.95],
				area: 200,
				country: "IT",
				city: "Genoa",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1519624192, 1519628288],
				region: "42"
			},
			ip: "90.147.174.94"
		},
		clusterID: "93c6be66-a25c-4f9a-8d61-c51d575bd5a0",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "93c6be66-a25c-4f9a-8d61-c51d575bd5a0",
			provider: "kubeadm",
			kubernetesVersion: "v1.23.13"
		},
		timestamp: 1667672891928
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [1.3036, 103.8554],
				area: 1000,
				country: "SG",
				city: "Singapore",
				timezone: "Asia/Singapore",
				metro: 0,
				range: [917045248, 917078016],
				region: ""
			},
			ip: "54.169.96.179"
		},
		clusterID: "28e0bd6a-2daa-4fd9-9b5e-81d1ad6655a6",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "28e0bd6a-2daa-4fd9-9b5e-81d1ad6655a6",
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1669793823088
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [37.9921, -1.1201],
				area: 10,
				country: "ES",
				city: "Murcia",
				timezone: "Europe/Madrid",
				metro: 0,
				range: [2604056576, 2604064768],
				region: "MC"
			},
			ip: "155.54.210.2"
		},
		clusterID: "f19288e8-c68f-4529-8ebd-055954a8b3de",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "f19288e8-c68f-4529-8ebd-055954a8b3de",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.4"
		},
		timestamp: 1670581547797
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.751, -97.822],
				area: 1000,
				country: "US",
				city: "",
				timezone: "America/Chicago",
				metro: 0,
				range: [570425344, 574619648],
				region: ""
			},
			ip: "34.28.214.147"
		},
		clusterID: "556b53aa-5e5c-405d-9b97-05724644282e",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "274m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "55053352960",
							memory: "11064M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						resources: {
							cpu: "2407m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "55053352960",
							memory: "12817M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "eb0cd482-c7ad-4dea-999c-286e3bdc0907",
					discoveryType: "Manual",
					latency: 622000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "556b53aa-5e5c-405d-9b97-05724644282e",
			namespacesInfo: [
				{
					uid: "c0e03e7e-b305-4c34-ad7a-57e4284ff0b4",
					offloadingStrategy: "LocalAndRemote",
					mappingStrategy: "EnforceSameName",
					numOffloadedPods: {
						"eb0cd482-c7ad-4dea-999c-286e3bdc0907": 0
					}
				}
			],
			kubernetesVersion: "v1.23.13+rke2r1"
		},
		timestamp: 1669262645036
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [35796992, 35797248],
				region: "21"
			},
			ip: "2.34.56.150"
		},
		clusterID: "adba0356-6278-4414-a654-f6d1f65296ed",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "9945m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "950186560Ki",
							memory: "7139M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "d1d13a14-6cd6-45a0-a8b1-79bad663ce77",
					discoveryType: "IncomingPeering",
					latency: 944000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "adba0356-6278-4414-a654-f6d1f65296ed",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668608406547
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [32.8608, -79.9746],
				area: 1000,
				country: "US",
				city: "North Charleston",
				timezone: "America/New_York",
				metro: 519,
				range: [580124672, 580190208],
				region: "SC"
			},
			ip: "34.148.233.161"
		},
		clusterID: "c8bdaaf7-6899-497d-91d4-2363c97b2430",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "c8bdaaf7-6899-497d-91d4-2363c97b2430",
			provider: "gke",
			kubernetesVersion: "v1.23.13-gke.900"
		},
		timestamp: 1669365365194
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [46.0682, 11.114],
				area: 100,
				country: "IT",
				city: "Trento",
				timezone: "Europe/Rome",
				metro: 0,
				range: [3645722624, 3645726720],
				region: "32"
			},
			ip: "217.77.82.232"
		},
		clusterID: "a17c0f7d-17c4-4996-a171-e5bda328b7e7",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							"attachable-volumes-gce-pd": "40",
							"ephemeral-storage": "127062179840",
							memory: "2546M",
							cpu: "1375m",
							"hugepages-2Mi": "0",
							pods: "297",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "c789c1c7-b554-4772-be8e-5788bf852d0d",
					discoveryType: "Manual",
					latency: 31000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "a17c0f7d-17c4-4996-a171-e5bda328b7e7",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667464393748
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [583532544, 583540736],
				region: "VA"
			},
			ip: "34.200.7.151"
		},
		clusterID: "fd87c62b-8dc3-4f73-84ad-4ba602da575c",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "fd87c62b-8dc3-4f73-84ad-4ba602da575c",
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1669191543204
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.5495, 9.1607],
				area: 200,
				country: "IT",
				city: "Cormano",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680616, 2193680617],
				region: "25"
			},
			ip: "130.192.232.232"
		},
		clusterID: "5995260b-be71-4235-ae26-979c8fab28b9",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "2",
							memory: "2G"
						},
						enabled: true
					},
					outgoing: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "55082020Ki",
							memory: "6968750Ki",
							cpu: "3645m",
							"hugepages-2Mi": "0",
							pods: "99",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "418dafbe-12e6-4081-bb53-a7857a3d3ab7",
					discoveryType: "IncomingPeering",
					latency: 404000
				}
			],
			liqoVersion: "1172934f82800e5ad438156239a22a47a84b22b3",
			clusterID: "5995260b-be71-4235-ae26-979c8fab28b9",
			provider: "kind",
			kubernetesVersion: "v1.25.2"
		},
		timestamp: 1666708327943
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 50,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [89784320, 89788416],
				region: "21"
			},
			ip: "5.90.7.230"
		},
		clusterID: "89ee11ab-3bdb-48eb-bb54-d33d667dad4f",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "89ee11ab-3bdb-48eb-bb54-d33d667dad4f",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668092534099
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.751, -97.822],
				area: 1000,
				country: "US",
				city: "",
				timezone: "America/Chicago",
				metro: 0,
				range: [79691776, 80216064],
				region: ""
			},
			ip: "4.196.144.107"
		},
		clusterID: "f19d4c33-c7bb-4a09-b32d-59acb30a092c",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "f19d4c33-c7bb-4a09-b32d-59acb30a092c",
			kubernetesVersion: "v1.23.13+rke2r1"
		},
		timestamp: 1668057730437
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [751206400, 751239168],
				region: "VA"
			},
			ip: "44.198.240.130"
		},
		clusterID: "cb1edd34-5dd9-4e21-a5c4-4a4e9ff5db5a",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "cb1edd34-5dd9-4e21-a5c4-4a4e9ff5db5a",
			provider: "k3s",
			kubernetesVersion: "v1.23.13+k3s1"
		},
		timestamp: 1669199402886
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.212.33"
		},
		clusterID: "f9c5e900-dcb6-4e3b-b9d9-c73ea4ddb4a8",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "110164040Ki",
							memory: "14499M",
							cpu: "6255m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "cdbe089f-9c4c-4241-82d5-1dbb20c8fd51",
					discoveryType: "IncomingPeering",
					latency: 17000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "f9c5e900-dcb6-4e3b-b9d9-c73ea4ddb4a8",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667766622119
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [628595904, 628595968],
				region: "21"
			},
			ip: "37.119.156.250"
		},
		clusterID: "959868a1-b613-43ec-b3e2-aebff8fa0ec5",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "959868a1-b613-43ec-b3e2-aebff8fa0ec5",
			provider: "kind",
			kubernetesVersion: "v1.23.4"
		},
		timestamp: 1668520505247
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [40.867, 14.2385],
				area: 200,
				country: "IT",
				city: "Naples",
				timezone: "Europe/Rome",
				metro: 0,
				range: [36557824, 36558336],
				region: "72"
			},
			ip: "2.45.213.161"
		},
		clusterID: "68a91c9e-b0e5-4c08-8321-eacc0b07d23d",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "473713568Ki",
							memory: "10700M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "e2e2c9a3-b90b-47a9-8242-37f322ac8674",
					discoveryType: "IncomingPeering",
					latency: 131000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "68a91c9e-b0e5-4c08-8321-eacc0b07d23d",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667318435784
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2394, 21.0362],
				area: 200,
				country: "PL",
				city: "",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [3106990080, 3106991104],
				region: ""
			},
			ip: "185.48.232.43"
		},
		clusterID: "b61632e6-638a-4171-a503-0ae8cc37624e",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "b61632e6-638a-4171-a503-0ae8cc37624e",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1667226906344
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [35.3274, 25.1281],
				area: 5,
				country: "GR",
				city: "Heraklion",
				timezone: "Europe/Athens",
				metro: 0,
				range: [2472501248, 2472509440],
				region: "M"
			},
			ip: "147.95.122.134"
		},
		clusterID: "400fb137-f142-4c63-be59-a198fb421866",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "427955616Ki",
							memory: "29650M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "f06398da-d862-40e7-8d57-6d2a44d88ae2",
					discoveryType: "Manual",
					latency: 332000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "400fb137-f142-4c63-be59-a198fb421866",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1670312585750
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [51.2993, 9.491],
				area: 200,
				country: "DE",
				city: "",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [1959510016, 1959526400],
				region: ""
			},
			ip: "116.203.250.188"
		},
		clusterID: "114f9b20-00cf-4db4-8eb7-af781d6221c1",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "f2094db3-3d2b-47ee-8a96-d41cc3edd082",
					discoveryType: "Manual"
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "114f9b20-00cf-4db4-8eb7-af781d6221c1",
			provider: "kubeadm",
			kubernetesVersion: "v1.23.14"
		},
		timestamp: 1669661704925
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [-33.8715, 151.2006],
				area: 1000,
				country: "AU",
				city: "Sydney",
				timezone: "Australia/Sydney",
				metro: 0,
				range: [335872000, 335937536],
				region: "NSW"
			},
			ip: "20.5.91.75"
		},
		clusterID: "e26779d8-159e-438a-bcae-bc90b9c63956",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "e26779d8-159e-438a-bcae-bc90b9c63956",
			provider: "k3s",
			kubernetesVersion: "v1.24.6+rke2r1"
		},
		timestamp: 1666872303891
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.5112, 126.9741],
				area: 200,
				country: "KR",
				city: "",
				timezone: "Asia/Seoul",
				metro: 0,
				range: [1744071680, 1744072704],
				region: ""
			},
			ip: "103.244.109.233"
		},
		clusterID: "8bc86b1b-5adb-408b-b396-984748626db9",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "8bc86b1b-5adb-408b-b396-984748626db9",
			kubernetesVersion: "v1.23.9"
		},
		timestamp: 1667193849856
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [35796992, 35797248],
				region: "21"
			},
			ip: "2.34.56.150"
		},
		clusterID: "d1d13a14-6cd6-45a0-a8b1-79bad663ce77",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "9945m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "950186560Ki",
							memory: "7139M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "adba0356-6278-4414-a654-f6d1f65296ed",
					discoveryType: "Manual",
					latency: 1000000
				},
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "9945m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "950186560Ki",
							memory: "7139M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "928fec17-ec64-4371-8c47-e5818fbe3a26",
					discoveryType: "Manual",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "d1d13a14-6cd6-45a0-a8b1-79bad663ce77",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668608347186
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [22.2578, 114.1657],
				area: 50,
				country: "HK",
				city: "",
				timezone: "Asia/Hong_Kong",
				metro: 0,
				range: [1736334336, 1736335360],
				region: ""
			},
			ip: "103.126.92.92"
		},
		clusterID: "ce3262d6-5e44-4e56-8f5a-287a1075fa51",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "ce3262d6-5e44-4e56-8f5a-287a1075fa51",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1668072370694
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [40.867, 14.2385],
				area: 200,
				country: "IT",
				city: "Naples",
				timezone: "Europe/Rome",
				metro: 0,
				range: [36557824, 36558336],
				region: "72"
			},
			ip: "2.45.213.161"
		},
		clusterID: "2875d68b-c47b-4867-83c8-c7bc7f122a5e",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "473713568Ki",
							memory: "10700M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "266dd9b4-fe85-43e6-afcb-28ffa764a2d1",
					discoveryType: "Manual",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "2875d68b-c47b-4867-83c8-c7bc7f122a5e",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666870457029
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.751, -97.822],
				area: 1000,
				country: "US",
				city: "",
				timezone: "America/Chicago",
				metro: 0,
				range: [2691006464, 2691039232],
				region: ""
			},
			ip: "160.101.128.1"
		},
		clusterID: "c08b98cf-3d30-4b4f-baa4-a6befde63e29",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "c08b98cf-3d30-4b4f-baa4-a6befde63e29",
			provider: "kind",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1668163264221
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.7388, -104.9868],
				area: 100,
				country: "US",
				city: "Denver",
				timezone: "America/Denver",
				metro: 751,
				range: [2889497088, 2889497600],
				region: "CO"
			},
			ip: "172.58.59.208"
		},
		clusterID: "06f5e76f-57a3-4f08-9f2d-e6a30fc130a5",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "06f5e76f-57a3-4f08-9f2d-e6a30fc130a5",
			provider: "kind",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1669401306329
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [1.3036, 103.8554],
				area: 20,
				country: "SG",
				city: "Singapore",
				timezone: "Asia/Singapore",
				metro: 0,
				range: [579829760, 579862528],
				region: ""
			},
			ip: "34.143.237.189"
		},
		clusterID: "698c5feb-96d9-40c9-b92c-8d0ce7a7f93e",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "698c5feb-96d9-40c9-b92c-8d0ce7a7f93e",
			provider: "gke",
			kubernetesVersion: "v1.23.11-gke.300"
		},
		timestamp: 1669689186498
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [55.9489, -3.1632],
				area: 20,
				country: "GB",
				city: "Edinburgh",
				timezone: "Europe/London",
				metro: 0,
				range: [3519870208, 3519870464],
				region: "SCT"
			},
			ip: "209.204.245.4"
		},
		clusterID: "a2424385-3f0f-4202-8c66-ad1eb4dca988",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "2040m",
							"hugepages-2Mi": "0",
							pods: "33",
							"ephemeral-storage": "8368595456",
							memory: "7250M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "5d418dda-5731-48e9-8b70-9a1ff2849f91",
					discoveryType: "Manual",
					latency: 774000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "a2424385-3f0f-4202-8c66-ad1eb4dca988",
			kubernetesVersion: "v1.21.6"
		},
		timestamp: 1669826222703
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [55.9489, -3.1632],
				area: 20,
				country: "GB",
				city: "Edinburgh",
				timezone: "Europe/London",
				metro: 0,
				range: [3519870208, 3519870464],
				region: "SCT"
			},
			ip: "209.204.245.4"
		},
		clusterID: "3323d3e9-f4f2-47b8-9e31-a2e2da104424",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "2040m",
							"hugepages-2Mi": "0",
							pods: "33",
							"ephemeral-storage": "8368595456",
							memory: "7250M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "1ca540f3-6a68-454d-b81f-490e7f6c92ec",
					discoveryType: "IncomingPeering",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "3323d3e9-f4f2-47b8-9e31-a2e2da104424",
			kubernetesVersion: "v1.21.6"
		},
		timestamp: 1668537842321
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.2872, 127.0116],
				area: 20,
				country: "KR",
				city: "Suwon",
				timezone: "Asia/Seoul",
				metro: 0,
				range: [2093096960, 2093101056],
				region: "41"
			},
			ip: "124.194.34.5"
		},
		clusterID: "1773eff8-6f02-4705-9640-b1d0659377c7",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "3330m",
							"hugepages-2Mi": "0",
							pods: "297",
							"ephemeral-storage": "50129006592",
							memory: "9065M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "e8163d4f-534d-413a-a17a-3fb5af96203b",
					discoveryType: "Manual",
					latency: 630000
				},
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "2233m",
							"hugepages-2Mi": "0",
							pods: "297",
							"ephemeral-storage": "50101309440",
							memory: "8106M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "0a366ac3-63b5-4a3c-87f3-a10ad4e4f8db",
					discoveryType: "Manual",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "1773eff8-6f02-4705-9640-b1d0659377c7",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1667870949829
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [387284992, 387293184],
				region: "VA"
			},
			ip: "23.21.130.22"
		},
		clusterID: "9cad7d20-adef-44ed-8916-22c11872cfcf",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						enabled: false
					},
					method: "InBand",
					remoteClusterID: "cbf00cbc-6dbc-43fc-87e8-8562c0c3cf1f",
					discoveryType: "Manual"
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "9cad7d20-adef-44ed-8916-22c11872cfcf",
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1669632903726
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [751566848, 751828992],
				region: "VA"
			},
			ip: "44.206.221.162"
		},
		clusterID: "aed01585-6b55-4c89-b7c4-0961d3ec2753",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "aed01585-6b55-4c89-b7c4-0961d3ec2753",
			provider: "kind",
			kubernetesVersion: "v1.24.0"
		},
		timestamp: 1667209142975
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [47.2455, 6.0209],
				area: 100,
				country: "FR",
				city: "Besançon",
				timezone: "Europe/Paris",
				metro: 0,
				range: [2962603008, 2962603520],
				region: "BFC"
			},
			ip: "176.149.189.81"
		},
		clusterID: "7be76a34-7c33-428b-a78a-bd9aef627875",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "7be76a34-7c33-428b-a78a-bd9aef627875",
			provider: "kind",
			kubernetesVersion: "v1.23.4"
		},
		timestamp: 1668771637898
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [751828992, 752877568],
				region: "VA"
			},
			ip: "44.213.29.166"
		},
		clusterID: "c27eab08-dd7f-4b96-8bb6-8b4c24c4c6c7",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "c27eab08-dd7f-4b96-8bb6-8b4c24c4c6c7",
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1669629964903
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [40.867, 14.2385],
				area: 200,
				country: "IT",
				city: "Naples",
				timezone: "Europe/Rome",
				metro: 0,
				range: [36557824, 36558336],
				region: "72"
			},
			ip: "2.45.213.161"
		},
		clusterID: "43b6e827-5091-4f78-90b8-42cd7b2bbb24",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "43b6e827-5091-4f78-90b8-42cd7b2bbb24",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666793874917
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [25.2633, 55.3087],
				area: 20,
				country: "AE",
				city: "Dubai",
				timezone: "Asia/Dubai",
				metro: 0,
				range: [85856256, 85860352],
				region: "DU"
			},
			ip: "5.30.23.160"
		},
		clusterID: "711fa547-e96e-4900-8c65-6175e0dad661",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "711fa547-e96e-4900-8c65-6175e0dad661",
			provider: "k3s",
			kubernetesVersion: "v1.25.3+k3s1"
		},
		timestamp: 1667971125580
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [43.7089, 10.4087],
				area: 100,
				country: "IT",
				city: "Pisa",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2205339648, 2205343744],
				region: "52"
			},
			ip: "131.114.208.186"
		},
		clusterID: "1470634a-4494-4dcb-b623-1ba6487c54b6",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "1470634a-4494-4dcb-b623-1ba6487c54b6",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1669893245817
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [51.2993, 9.491],
				area: 200,
				country: "DE",
				city: "",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [1440153600, 1440219136],
				region: ""
			},
			ip: "85.215.160.243"
		},
		clusterID: "edc47a83-cc55-4106-9d26-3411d4dba494",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "edc47a83-cc55-4106-9d26-3411d4dba494",
			provider: "k3s",
			kubernetesVersion: "v1.25.3+k3s1"
		},
		timestamp: 1666862465526
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "dbc6453f-4105-4d28-a4e7-7885edf9a41d",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "80698792Ki",
							memory: "27809M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "9afe42fe-effa-4b59-acb6-c7d13f17bbd1",
					discoveryType: "Manual",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "dbc6453f-4105-4d28-a4e7-7885edf9a41d",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667467869431
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [40.867, 14.2385],
				area: 200,
				country: "IT",
				city: "Naples",
				timezone: "Europe/Rome",
				metro: 0,
				range: [36557824, 36558336],
				region: "72"
			},
			ip: "2.45.213.161"
		},
		clusterID: "c7b849d7-e6c0-4e04-8749-ffa72ef52487",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "c7b849d7-e6c0-4e04-8749-ffa72ef52487",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666799579800
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [19.0748, 72.8856],
				area: 1000,
				country: "IN",
				city: "Mumbai",
				timezone: "Asia/Kolkata",
				metro: 0,
				range: [50724864, 50855936],
				region: "MH"
			},
			ip: "3.6.229.158"
		},
		clusterID: "47828043-c0b8-4fec-8172-b92737967629",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"ephemeral-storage": "7575640064",
							memory: "3748M",
							cpu: "1300m",
							"attachable-volumes-aws-ebs": "35",
							"hugepages-2Mi": "0",
							pods: "52",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						resources: {
							"ephemeral-storage": "7575640064",
							memory: "3748M",
							cpu: "1300m",
							"attachable-volumes-aws-ebs": "35",
							"hugepages-2Mi": "0",
							pods: "52",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "InBand",
					remoteClusterID: "6b4b57a1-768f-432f-9a4f-a05e870be3fb",
					discoveryType: "Manual",
					latency: 627000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "47828043-c0b8-4fec-8172-b92737967629",
			provider: "eks",
			kubernetesVersion: "v1.24.7-eks-fb459a0"
		},
		timestamp: 1669893007407
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [43.7089, 10.4087],
				area: 100,
				country: "IT",
				city: "Pisa",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2205339648, 2205343744],
				region: "52"
			},
			ip: "131.114.208.147"
		},
		clusterID: "3fa2729e-17c2-4939-916b-f36cae93d537",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "3fa2729e-17c2-4939-916b-f36cae93d537",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668771906788
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [51.2993, 9.491],
				area: 200,
				country: "DE",
				city: "",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [88834048, 88866816],
				region: ""
			},
			ip: "5.75.158.125"
		},
		clusterID: "1b20ed42-f806-43b2-9375-82917fc44121",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "92565m",
							"hugepages-2Mi": "0",
							pods: "693",
							"ephemeral-storage": "767236636672",
							memory: "492818M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "595835b8-812a-4689-80be-24c5a55b3ada",
					discoveryType: "Manual",
					latency: 30000000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "1b20ed42-f806-43b2-9375-82917fc44121",
			provider: "k3s",
			kubernetesVersion: "v1.24.6+k3s1"
		},
		timestamp: 1669711743748
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.213.62"
		},
		clusterID: "4ab316a5-6724-4a2f-9c0f-7f71ee194fbd",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "4ab316a5-6724-4a2f-9c0f-7f71ee194fbd",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668156486580
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2394, 21.0362],
				area: 200,
				country: "PL",
				city: "",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [3106990080, 3106991104],
				region: ""
			},
			ip: "185.48.232.43"
		},
		clusterID: "203d207e-227c-4fca-9d70-cdfcf2d4b523",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "85230m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "218979434496",
							memory: "485989M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "c98e2cf0-8a4d-4a3f-8621-4ab1881c1f92",
					discoveryType: "IncomingPeering",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "203d207e-227c-4fca-9d70-cdfcf2d4b523",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.4"
		},
		timestamp: 1669217345265
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.9273, -76.8545],
				area: 1000,
				country: "US",
				city: "Tappahannock",
				timezone: "America/New_York",
				metro: 556,
				range: [343474176, 343539712],
				region: "VA"
			},
			ip: "20.121.90.162"
		},
		clusterID: "b7c61970-869c-407a-9837-f5902eec48fa",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "6445m",
							"hugepages-2Mi": "0",
							pods: "180",
							"ephemeral-storage": "107732746240",
							memory: "25667M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "d4c03806-7b01-4b78-baed-9eaa261c4991",
					discoveryType: "IncomingPeering",
					latency: 2000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "b7c61970-869c-407a-9837-f5902eec48fa",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1668185703357
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1564606464, 1564606976],
				region: "21"
			},
			ip: "93.66.1.85"
		},
		clusterID: "68e042b0-b439-4b56-8de6-e1c16cfb3489",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "9945m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "179964Mi",
							memory: "14605M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "InBand",
					remoteClusterID: "c14bbf78-86cd-44b6-a4ff-097819ab5e06",
					discoveryType: "Manual",
					latency: 484000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "68e042b0-b439-4b56-8de6-e1c16cfb3489",
			provider: "kind",
			kubernetesVersion: "v1.23.0"
		},
		timestamp: 1667050504965
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [387284992, 387293184],
				region: "VA"
			},
			ip: "23.21.130.22"
		},
		clusterID: "feab2d22-5464-4be6-9909-b26dfad0d28b",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "feab2d22-5464-4be6-9909-b26dfad0d28b",
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1669703703419
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2394, 21.0362],
				area: 200,
				country: "PL",
				city: "",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [3106990080, 3106991104],
				region: ""
			},
			ip: "185.48.232.43"
		},
		clusterID: "3c96c67a-b88a-4bd6-a880-7c1cfb19a8a3",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "3c96c67a-b88a-4bd6-a880-7c1cfb19a8a3",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1667234406943
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2394, 21.0362],
				area: 200,
				country: "PL",
				city: "",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [3106990080, 3106991104],
				region: ""
			},
			ip: "185.48.232.43"
		},
		clusterID: "9c7db9e8-bc74-430a-9002-5304c2a11935",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "85455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "218979434496",
							memory: "486111M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "d3884b6a-fd3d-446b-8036-2b104f1d98af",
					discoveryType: "Manual",
					latency: 8000000
				},
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "85455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "218979434496",
							memory: "486111M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "17e50f3b-c4d2-4d9a-939f-9f73cf203872",
					discoveryType: "Manual",
					latency: 714000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "9c7db9e8-bc74-430a-9002-5304c2a11935",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1667993410405
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 20,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [530387968, 530388480],
				region: "21"
			},
			ip: "31.157.21.29"
		},
		clusterID: "f19def77-df32-4097-91cf-d3988d37c6c2",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "f19def77-df32-4097-91cf-d3988d37c6c2",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1669554854547
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [60.1797, 24.9344],
				area: 200,
				country: "FI",
				city: "Helsinki",
				timezone: "Europe/Helsinki",
				metro: 0,
				range: [1431072768, 1431076864],
				region: "18"
			},
			ip: "85.76.112.100"
		},
		clusterID: "cac8c162-6001-4d62-b8c7-2ab8df599023",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "cac8c162-6001-4d62-b8c7-2ab8df599023",
			provider: "k3s",
			kubernetesVersion: "v1.24.4+k3s1"
		},
		timestamp: 1668435524110
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.751, -97.822],
				area: 1000,
				country: "US",
				city: "",
				timezone: "America/Chicago",
				metro: 0,
				range: [79691776, 80216064],
				region: ""
			},
			ip: "4.196.219.202"
		},
		clusterID: "facfefb5-1a98-4dfa-89f5-6da0a5fd334e",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "2407m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "26526658560",
							memory: "12828M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						resources: {
							cpu: "1620m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "26526658560",
							memory: "7371M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "5e81c48c-fb2b-426a-b54d-3ecd1e1e72c1",
					discoveryType: "IncomingPeering",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "facfefb5-1a98-4dfa-89f5-6da0a5fd334e",
			provider: "k3s",
			kubernetesVersion: "v1.24.4+rke2r1"
		},
		timestamp: 1667220483273
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.212.33"
		},
		clusterID: "81bc70e2-7fb3-4b58-b982-ab61607202e2",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "110164040Ki",
							memory: "14499M",
							cpu: "6255m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "5a9e4158-eaa1-4305-8734-32ff0f1ef82e",
					discoveryType: "IncomingPeering",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "81bc70e2-7fb3-4b58-b982-ab61607202e2",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666725426201
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [583860224, 583892992],
				region: "VA"
			},
			ip: "34.205.106.27"
		},
		clusterID: "dd911572-69d5-4571-8074-9c98d970478c",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "dd911572-69d5-4571-8074-9c98d970478c",
			provider: "k3s",
			kubernetesVersion: "v1.23.13+k3s1"
		},
		timestamp: 1668422164471
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2394, 21.0362],
				area: 200,
				country: "PL",
				city: "",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [3106990080, 3106991104],
				region: ""
			},
			ip: "185.48.232.43"
		},
		clusterID: "a6db021e-6e3d-4786-91df-69cf6868a53c",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "85455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "218979450880",
							memory: "486111M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "07b6dd40-1aa3-4e96-a9fe-3156e9f851b2",
					discoveryType: "Manual",
					latency: 6000000
				},
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "85455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "218979434496",
							memory: "486111M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "10a65df6-84b4-4833-ad61-5d4839f8ba51",
					discoveryType: "Manual",
					latency: 6000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "a6db021e-6e3d-4786-91df-69cf6868a53c",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1667817065822
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [41.2591, -95.8517],
				area: 1000,
				country: "US",
				city: "Council Bluffs",
				timezone: "America/Chicago",
				metro: 652,
				range: [574881792, 574947328],
				region: "IA"
			},
			ip: "34.68.56.187"
		},
		clusterID: "c9d2413b-b139-4086-b31c-80c68451adf4",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "2155m",
							"hugepages-2Mi": "0",
							pods: "297",
							"ephemeral-storage": "165160042496",
							memory: "36198M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						resources: {
							cpu: "1939m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "73414336512",
							memory: "25785M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "255030ad-34cf-4116-be29-62ff074b9eab",
					discoveryType: "IncomingPeering",
					latency: 12000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "c9d2413b-b139-4086-b31c-80c68451adf4",
			provider: "k3s",
			kubernetesVersion: "v1.24.4+rke2r1"
		},
		timestamp: 1666926066175
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.9273, -76.8545],
				area: 1000,
				country: "US",
				city: "Tappahannock",
				timezone: "America/New_York",
				metro: 556,
				range: [343867392, 343932928],
				region: "VA"
			},
			ip: "20.127.176.183"
		},
		clusterID: "42589b47-7e2e-4431-badf-9602fdb56bda",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "6445m",
							"hugepages-2Mi": "0",
							pods: "180",
							"ephemeral-storage": "107732746240",
							memory: "25667M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "2f3217d1-63c5-404c-8213-cb8c4abb5bf6",
					discoveryType: "IncomingPeering",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "42589b47-7e2e-4431-badf-9602fdb56bda",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1668577383088
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.751, -97.822],
				area: 1000,
				country: "US",
				city: "",
				timezone: "America/Chicago",
				metro: 0,
				range: [79691776, 80216064],
				region: ""
			},
			ip: "4.196.193.107"
		},
		clusterID: "b1294c0b-3975-4962-b6be-6083b304ede6",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "b1294c0b-3975-4962-b6be-6083b304ede6",
			kubernetesVersion: "v1.24.7+rke2r1"
		},
		timestamp: 1667536989857
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.213.62"
		},
		clusterID: "c5abb2a1-adb0-4a5b-88a1-0b4e257f179f",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "c5abb2a1-adb0-4a5b-88a1-0b4e257f179f",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668584763693
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2394, 21.0362],
				area: 200,
				country: "PL",
				city: "",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [3106990080, 3106991104],
				region: ""
			},
			ip: "185.48.232.43"
		},
		clusterID: "ae8cd975-ee41-4d13-ba65-80c0f4072f84",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "ae8cd975-ee41-4d13-ba65-80c0f4072f84",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1667407864518
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2296, 21.0067],
				area: 20,
				country: "PL",
				city: "Warsaw",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [578158592, 578191360],
				region: "14"
			},
			ip: "34.118.106.186"
		},
		clusterID: "f622d4ad-58de-4318-b6ca-c38711470180",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"attachable-volumes-gce-pd": "114",
							"ephemeral-storage": "42354061312",
							memory: "26236M",
							cpu: "6600m",
							"hugepages-2Mi": "0",
							pods: "99",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "c0875bf8-62f4-4556-b2c1-90ebcdfff9bb",
					discoveryType: "IncomingPeering",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "f622d4ad-58de-4318-b6ca-c38711470180",
			provider: "gke",
			kubernetesVersion: "v1.23.8-gke.1900"
		},
		timestamp: 1666806730006
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "78a4dcb1-9b1c-4dfb-b017-0d0518827212",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "78a4dcb1-9b1c-4dfb-b017-0d0518827212",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667385487838
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.751, -97.822],
				area: 1000,
				country: "US",
				city: "",
				timezone: "America/Chicago",
				metro: 0,
				range: [79691776, 80216064],
				region: ""
			},
			ip: "4.196.193.107"
		},
		clusterID: "687fac8a-0403-447d-991e-37f9fcc5d145",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "2407m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "26526658560",
							memory: "12828M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						resources: {
							cpu: "1620m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "26526658560",
							memory: "7371M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "5e81c48c-fb2b-426a-b54d-3ecd1e1e72c1",
					discoveryType: "IncomingPeering",
					latency: 1000000
				},
				{
					incoming: {
						resources: {
							cpu: "2407m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "26526658560",
							memory: "12828M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						resources: {
							cpu: "2407m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "26526658560",
							memory: "12828M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "facfefb5-1a98-4dfa-89f5-6da0a5fd334e",
					discoveryType: "Manual",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "687fac8a-0403-447d-991e-37f9fcc5d145",
			provider: "k3s",
			kubernetesVersion: "v1.24.4+rke2r1"
		},
		timestamp: 1667220603346
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.751, -97.822],
				area: 1000,
				country: "US",
				city: "",
				timezone: "America/Chicago",
				metro: 0,
				range: [1078558720, 1078575104],
				region: ""
			},
			ip: "64.73.160.102"
		},
		clusterID: "25573068-b5e9-4d90-8c25-df29a39356a5",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "25573068-b5e9-4d90-8c25-df29a39356a5",
			provider: "kubeadm",
			kubernetesVersion: "v1.24.3"
		},
		timestamp: 1670446023466
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "c0c9ca9a-f7c9-4414-adf7-6975d325e3f9",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "c0c9ca9a-f7c9-4414-adf7-6975d325e3f9",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667244847344
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [51.2993, 9.491],
				area: 200,
				country: "DE",
				city: "",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [1440153600, 1440219136],
				region: ""
			},
			ip: "85.215.219.117"
		},
		clusterID: "591d7b84-a340-4394-ba8d-13aaf6a0086a",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "591d7b84-a340-4394-ba8d-13aaf6a0086a",
			provider: "k3s",
			kubernetesVersion: "v1.25.3+k3s1"
		},
		timestamp: 1666952045833
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 10,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [521902592, 521902848],
				region: "21"
			},
			ip: "31.27.154.6"
		},
		clusterID: "0213476e-a400-4ab5-8bb2-1be973325dbe",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "0213476e-a400-4ab5-8bb2-1be973325dbe",
			kubernetesVersion: "v1.23.11"
		},
		timestamp: 1668993431332
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [1.2864, 103.8503],
				area: 1000,
				country: "SG",
				city: "Singapore",
				timezone: "Asia/Singapore",
				metro: 0,
				range: [233046016, 233111552],
				region: ""
			},
			ip: "13.228.173.76"
		},
		clusterID: "31bc9192-e904-4575-abfb-04d365203a56",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"ephemeral-storage": "96815587328",
							memory: "82350M",
							cpu: "20043m",
							"attachable-volumes-aws-ebs": "135",
							"hugepages-2Mi": "0",
							pods: "313",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						resources: {
							"attachable-volumes-gce-pd": "3771",
							"ephemeral-storage": "1397684043776",
							memory: "185675M",
							cpu: "89622m",
							"hugepages-2Mi": "0",
							pods: "3267",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "InBand",
					remoteClusterID: "698c5feb-96d9-40c9-b92c-8d0ce7a7f93e",
					discoveryType: "Manual",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "31bc9192-e904-4575-abfb-04d365203a56",
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1669689907425
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.9273, -76.8545],
				area: 20,
				country: "US",
				city: "Tappahannock",
				timezone: "America/New_York",
				metro: 556,
				range: [351076352, 351109120],
				region: "VA"
			},
			ip: "20.237.16.77"
		},
		clusterID: "6e246a7a-fdd0-4ab3-abfb-155db35e9ae6",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "6445m",
							"hugepages-2Mi": "0",
							pods: "180",
							"ephemeral-storage": "107732746240",
							memory: "25667M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "ad6e0827-443b-4b11-b56b-6bebf37a4ece",
					discoveryType: "IncomingPeering",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "6e246a7a-fdd0-4ab3-abfb-155db35e9ae6",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1669634162858
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [47.3682, 8.5671],
				area: 200,
				country: "CH",
				city: "Zurich",
				timezone: "Europe/Zurich",
				metro: 0,
				range: [531361792, 531362816],
				region: "ZH"
			},
			ip: "31.171.241.213"
		},
		clusterID: "219db5d1-3302-4fd5-b30e-77e330b90b82",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "219db5d1-3302-4fd5-b30e-77e330b90b82",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.4"
		},
		timestamp: 1668515046519
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [751206400, 751239168],
				region: "VA"
			},
			ip: "44.198.240.130"
		},
		clusterID: "a9c3504d-442b-4ce4-b2d3-0fbd4ed35877",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "a9c3504d-442b-4ce4-b2d3-0fbd4ed35877",
			provider: "k3s",
			kubernetesVersion: "v1.23.13+k3s1"
		},
		timestamp: 1669278663669
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [35.3274, 25.1281],
				area: 5,
				country: "GR",
				city: "Heraklion",
				timezone: "Europe/Athens",
				metro: 0,
				range: [2472501248, 2472509440],
				region: "M"
			},
			ip: "147.95.122.133"
		},
		clusterID: "5c9e271c-e16a-4070-91ab-802e59f5c9d6",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "5c9e271c-e16a-4070-91ab-802e59f5c9d6",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.4"
		},
		timestamp: 1670854262359
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [36.6534, -78.375],
				area: 20,
				country: "US",
				city: "Boydton",
				timezone: "America/New_York",
				metro: 560,
				range: [340459520, 340492288],
				region: "VA"
			},
			ip: "20.75.3.158"
		},
		clusterID: "d3f5d830-2e26-4f4a-a1c5-9edffdf88bc0",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "1117m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "107732746240",
							memory: "1546M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "a8ed5219-c796-45d6-b4ea-8edfe31eebc9",
					discoveryType: "IncomingPeering",
					latency: 6000000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "d3f5d830-2e26-4f4a-a1c5-9edffdf88bc0",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1669983003235
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [55.9489, -3.1632],
				area: 20,
				country: "GB",
				city: "Edinburgh",
				timezone: "Europe/London",
				metro: 0,
				range: [3519870208, 3519870464],
				region: "SCT"
			},
			ip: "209.204.245.4"
		},
		clusterID: "a0d23e30-a67e-4887-92c1-2c2b846d55ff",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "a0d23e30-a67e-4887-92c1-2c2b846d55ff",
			provider: "kubeadm",
			kubernetesVersion: "v1.21.6"
		},
		timestamp: 1668428882986
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [35.3274, 25.1281],
				area: 5,
				country: "GR",
				city: "Heraklion",
				timezone: "Europe/Athens",
				metro: 0,
				range: [2472501248, 2472509440],
				region: "M"
			},
			ip: "147.95.122.134"
		},
		clusterID: "742c5b4a-08e1-4030-8857-aee6188bfeff",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "742c5b4a-08e1-4030-8857-aee6188bfeff",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.4"
		},
		timestamp: 1670494802494
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.212.33"
		},
		clusterID: "8c67037c-f07f-44b6-8e8d-68751846af02",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "110164040Ki",
							memory: "14499M",
							cpu: "6255m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "6a5e2d0f-4db4-4396-9f93-997a577894c8",
					discoveryType: "IncomingPeering",
					latency: 992000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "8c67037c-f07f-44b6-8e8d-68751846af02",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667377807134
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [-35.1516, 147.3415],
				area: 100,
				country: "AU",
				city: "Lloyd",
				timezone: "Australia/Sydney",
				metro: 0,
				range: [2043747648, 2043747712],
				region: "NSW"
			},
			ip: "121.209.29.88"
		},
		clusterID: "7349569f-da5c-4ae3-9497-60dd59f1d295",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "7349569f-da5c-4ae3-9497-60dd59f1d295",
			provider: "k3s",
			kubernetesVersion: "v1.24.4+k3s1"
		},
		timestamp: 1666964028916
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [40.867, 14.2385],
				area: 200,
				country: "IT",
				city: "Naples",
				timezone: "Europe/Rome",
				metro: 0,
				range: [36557824, 36558336],
				region: "72"
			},
			ip: "2.45.213.161"
		},
		clusterID: "efa4a296-eceb-4638-b3cc-f89498a66d30",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "473713568Ki",
							memory: "10700M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "dbc6a713-a69e-4cdf-a12a-97118b7f57cb",
					discoveryType: "Manual",
					latency: 2000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "efa4a296-eceb-4638-b3cc-f89498a66d30",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666715288731
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "bb46257d-f1cf-41ad-a41c-b53bcdc133c2",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "bb46257d-f1cf-41ad-a41c-b53bcdc133c2",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667420256468
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.751, -97.822],
				area: 1000,
				country: "US",
				city: "",
				timezone: "America/Chicago",
				metro: 0,
				range: [2691006464, 2691039232],
				region: ""
			},
			ip: "160.101.128.1"
		},
		clusterID: "2592d9df-f3c0-45e7-a8bd-61b27999d41d",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "2592d9df-f3c0-45e7-a8bd-61b27999d41d",
			provider: "kind",
			kubernetesVersion: "v1.23.13"
		},
		timestamp: 1668174303496
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [51.2993, 9.491],
				area: 200,
				country: "DE",
				city: "",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [1440153600, 1440219136],
				region: ""
			},
			ip: "85.215.210.102"
		},
		clusterID: "e4b8d9cb-4a89-4ab2-8c84-2c8e76d4186e",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "e4b8d9cb-4a89-4ab2-8c84-2c8e76d4186e",
			provider: "k3s",
			kubernetesVersion: "v1.22.5+k3s1"
		},
		timestamp: 1666806961242
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [47.3682, 8.5671],
				area: 200,
				country: "CH",
				city: "Zurich",
				timezone: "Europe/Zurich",
				metro: 0,
				range: [531361792, 531362816],
				region: "ZH"
			},
			ip: "31.171.241.208"
		},
		clusterID: "db86a755-ad42-4e47-a876-303c27008435",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "db86a755-ad42-4e47-a876-303c27008435",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.4"
		},
		timestamp: 1668526805240
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [40.867, 14.2385],
				area: 200,
				country: "IT",
				city: "Naples",
				timezone: "Europe/Rome",
				metro: 0,
				range: [36557824, 36558336],
				region: "72"
			},
			ip: "2.45.213.161"
		},
		clusterID: "dbc6a713-a69e-4cdf-a12a-97118b7f57cb",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "473713568Ki",
							memory: "10700M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "efa4a296-eceb-4638-b3cc-f89498a66d30",
					discoveryType: "IncomingPeering",
					latency: 21000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "dbc6a713-a69e-4cdf-a12a-97118b7f57cb",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666715426531
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.751, -97.822],
				area: 1000,
				country: "US",
				city: "",
				timezone: "America/Chicago",
				metro: 0,
				range: [2691006464, 2691039232],
				region: ""
			},
			ip: "160.101.128.1"
		},
		clusterID: "8399c58b-9e16-4c86-be9f-8d9d282c4042",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "13545m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "202197824Ki",
							memory: "37512M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "c08b98cf-3d30-4b4f-baa4-a6befde63e29",
					discoveryType: "IncomingPeering"
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "8399c58b-9e16-4c86-be9f-8d9d282c4042",
			provider: "kind",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1668163562339
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [751042560, 751075328],
				region: "VA"
			},
			ip: "44.196.115.1"
		},
		clusterID: "2a9fdcdf-ec2f-441e-a95b-20f4c5bf1820",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "2a9fdcdf-ec2f-441e-a95b-20f4c5bf1820",
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1670929743445
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [43.7089, 10.4087],
				area: 100,
				country: "IT",
				city: "Pisa",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2205339648, 2205343744],
				region: "52"
			},
			ip: "131.114.208.147"
		},
		clusterID: "a215fc37-e31a-485e-816b-94a02b47b33c",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "a215fc37-e31a-485e-816b-94a02b47b33c",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668773588062
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [35.3274, 25.1281],
				area: 5,
				country: "GR",
				city: "Heraklion",
				timezone: "Europe/Athens",
				metro: 0,
				range: [2472501248, 2472509440],
				region: "M"
			},
			ip: "147.95.122.133"
		},
		clusterID: "44109c9c-db11-444c-adf4-7877940a5eea",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "44109c9c-db11-444c-adf4-7877940a5eea",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.4"
		},
		timestamp: 1670920982538
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [885907456, 885911552],
				region: "VA"
			},
			ip: "52.205.236.211"
		},
		clusterID: "b6ca11a5-706b-4275-8e4f-a497b84a4090",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "b6ca11a5-706b-4275-8e4f-a497b84a4090",
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1668163984274
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [-33.8715, 151.2006],
				area: 20,
				country: "AU",
				city: "Sydney",
				timezone: "Australia/Sydney",
				metro: 0,
				range: [351830016, 351862784],
				region: "NSW"
			},
			ip: "20.248.202.251"
		},
		clusterID: "c0e632f3-2e6b-43bd-a6fd-58cd621b6995",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "c0e632f3-2e6b-43bd-a6fd-58cd621b6995",
			kubernetesVersion: "v1.24.7+rke2r1"
		},
		timestamp: 1667538183659
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 20,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [3262400512, 3262402560],
				region: "21"
			},
			ip: "194.116.77.120"
		},
		clusterID: "23c3604a-8744-4fee-9e9d-8f28f7ff0933",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "23c3604a-8744-4fee-9e9d-8f28f7ff0933",
			kubernetesVersion: "v1.24.7"
		},
		timestamp: 1666775047049
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2394, 21.0362],
				area: 200,
				country: "PL",
				city: "",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [3106990080, 3106991104],
				region: ""
			},
			ip: "185.48.232.43"
		},
		clusterID: "c92b7252-864d-45a3-a860-7e2873781d3b",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "85455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "218979434496",
							memory: "486111M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "1fa2b692-5dca-4d30-a41f-b5f7b3b439c7",
					discoveryType: "Manual",
					latency: 781000
				},
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "85455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "218979434496",
							memory: "486111M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "5dcc74aa-52ce-4455-920d-af8002c1b033",
					discoveryType: "Manual",
					latency: 725000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "c92b7252-864d-45a3-a860-7e2873781d3b",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.4"
		},
		timestamp: 1669298404752
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [43.7089, 10.4087],
				area: 100,
				country: "IT",
				city: "Pisa",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2205339648, 2205343744],
				region: "52"
			},
			ip: "131.114.208.186"
		},
		clusterID: "35f12cf2-dce1-4d6e-92ea-94d0913571a5",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "35f12cf2-dce1-4d6e-92ea-94d0913571a5",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1669894625991
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.9273, -76.8545],
				area: 20,
				country: "US",
				city: "Tappahannock",
				timezone: "America/New_York",
				metro: 556,
				range: [342228992, 342261760],
				region: "VA"
			},
			ip: "20.102.26.169"
		},
		clusterID: "0fb4b1eb-783d-44ac-93f9-99f07a46113b",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "0fb4b1eb-783d-44ac-93f9-99f07a46113b",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1669201205362
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.9273, -76.8545],
				area: 20,
				country: "US",
				city: "Tappahannock",
				timezone: "America/New_York",
				metro: 556,
				range: [351371264, 351404032],
				region: "VA"
			},
			ip: "20.241.226.151"
		},
		clusterID: "3b2a2993-364f-41d7-8168-bea14ef6165d",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "6445m",
							"hugepages-2Mi": "0",
							pods: "180",
							"ephemeral-storage": "107732746240",
							memory: "25667M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "3476ee70-0025-44e3-9666-a80baa242edd",
					discoveryType: "Manual",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "3b2a2993-364f-41d7-8168-bea14ef6165d",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1667399368835
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [915963904, 915980288],
				region: "VA"
			},
			ip: "54.152.155.179"
		},
		clusterID: "f90b0462-8b7e-438e-a753-58ad8a61e777",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"ephemeral-storage": "171993006080",
							memory: "27181M",
							cpu: "6489m",
							"attachable-volumes-aws-ebs": "45",
							"hugepages-2Mi": "0",
							pods: "104",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "b2a71916-6ada-486f-91bd-b180ad3126dc",
					discoveryType: "Manual"
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "f90b0462-8b7e-438e-a753-58ad8a61e777",
			namespacesInfo: [
				{
					uid: "e9fc8db7-c8b0-43fc-a1e1-2ab59171cb56",
					offloadingStrategy: "Remote",
					mappingStrategy: "EnforceSameName",
					hasClusterSelector: true
				},
				{
					uid: "c418cb48-6993-4ca6-b672-0e209257dfd9",
					offloadingStrategy: "LocalAndRemote",
					mappingStrategy: "EnforceSameName",
					hasClusterSelector: true
				}
			],
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1668442084588
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [36.7161, 3.1732],
				area: 10,
				country: "DZ",
				city: "Bab Ezzouar",
				timezone: "Africa/Algiers",
				metro: 0,
				range: [1768116224, 1768117248],
				region: "16"
			},
			ip: "105.99.82.181"
		},
		clusterID: "35b23772-fb4c-48aa-9957-3caab8eba0ed",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "35b23772-fb4c-48aa-9957-3caab8eba0ed",
			provider: "kind",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1668594387379
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [55.9489, -3.1632],
				area: 20,
				country: "GB",
				city: "Edinburgh",
				timezone: "Europe/London",
				metro: 0,
				range: [3519870208, 3519870464],
				region: "SCT"
			},
			ip: "209.204.245.4"
		},
		clusterID: "f985084f-fce8-46dd-92e2-981b447a4eb2",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "f985084f-fce8-46dd-92e2-981b447a4eb2",
			kubernetesVersion: "v1.21.6"
		},
		timestamp: 1668530225743
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "05d23aae-721c-4ed0-98ca-4f5777ff55ce",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "05d23aae-721c-4ed0-98ca-4f5777ff55ce",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667403514896
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [751206400, 751239168],
				region: "VA"
			},
			ip: "44.198.240.130"
		},
		clusterID: "d8b7e8e6-64dc-481b-be88-3584c5d19092",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "d8b7e8e6-64dc-481b-be88-3584c5d19092",
			provider: "k3s",
			kubernetesVersion: "v1.23.13+k3s1"
		},
		timestamp: 1669232227600
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 100,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [3262402560, 3262402816],
				region: "21"
			},
			ip: "194.116.80.85"
		},
		clusterID: "8aa9563e-0dce-4126-9c1b-767ee601bc31",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "8aa9563e-0dce-4126-9c1b-767ee601bc31",
			provider: "kind",
			kubernetesVersion: "v1.23.4"
		},
		timestamp: 1668419466367
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [47.2455, 6.0209],
				area: 100,
				country: "FR",
				city: "Besançon",
				timezone: "Europe/Paris",
				metro: 0,
				range: [2962603008, 2962603520],
				region: "BFC"
			},
			ip: "176.149.189.81"
		},
		clusterID: "191a8cba-14e4-4fde-a60a-6995f812e047",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "191a8cba-14e4-4fde-a60a-6995f812e047",
			provider: "kind",
			kubernetesVersion: "v1.23.4"
		},
		timestamp: 1668771635068
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [43.1479, 12.1097],
				area: 500,
				country: "IT",
				city: "",
				timezone: "Europe/Rome",
				metro: 0,
				range: [631394816, 631395328],
				region: ""
			},
			ip: "37.162.82.102"
		},
		clusterID: "d604a4b3-6b44-4e94-aba5-13176c78f037",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "d604a4b3-6b44-4e94-aba5-13176c78f037",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667731938610
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.9273, -76.8545],
				area: 20,
				country: "US",
				city: "Tappahannock",
				timezone: "America/New_York",
				metro: 556,
				range: [351371264, 351404032],
				region: "VA"
			},
			ip: "20.241.166.7"
		},
		clusterID: "b45c8b83-0291-4a4c-a4fd-08049c0440a6",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "9001m",
							"hugepages-2Mi": "0",
							pods: "297",
							"ephemeral-storage": "252392669184",
							memory: "33107M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						resources: {
							cpu: "9001m",
							"hugepages-2Mi": "0",
							pods: "297",
							"ephemeral-storage": "252392669184",
							memory: "33107M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "db0a005b-1899-46d1-bc57-bfae526694b6",
					discoveryType: "IncomingPeering",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "b45c8b83-0291-4a4c-a4fd-08049c0440a6",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1669192083082
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [51.2993, 9.491],
				area: 200,
				country: "DE",
				city: "",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [1959510016, 1959526400],
				region: ""
			},
			ip: "116.203.250.188"
		},
		clusterID: "81a5b926-ddb2-4b63-8d61-6bf9878fc050",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "81a5b926-ddb2-4b63-8d61-6bf9878fc050",
			provider: "k3s",
			kubernetesVersion: "v1.25.4+k3s1"
		},
		timestamp: 1669683845207
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1564606464, 1564606976],
				region: "21"
			},
			ip: "93.66.1.85"
		},
		clusterID: "71de7196-b792-4ed6-a758-75a3f57dc444",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "2190m",
							"hugepages-2Mi": "0",
							pods: "22",
							"ephemeral-storage": "39992Mi",
							memory: "3203M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						resources: {
							cpu: "1015m",
							"hugepages-2Mi": "0",
							pods: "11",
							"ephemeral-storage": "19996Mi",
							memory: "1395M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "fa5845c9-8b75-4768-865a-7f78abb79c02",
					discoveryType: "Manual",
					latency: 258000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "71de7196-b792-4ed6-a758-75a3f57dc444",
			provider: "kind",
			kubernetesVersion: "v1.25.0"
		},
		timestamp: 1669909744783
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 20,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [3587678976, 3587679040],
				region: "21"
			},
			ip: "213.215.163.27"
		},
		clusterID: "e5ed14a4-5bf8-4244-9e58-456b8c3730be",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "266942304Ki",
							memory: "14499M",
							cpu: "9855m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "74323027-91ea-4d81-b42a-494d9545bf4e",
					discoveryType: "Manual",
					latency: 9000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "e5ed14a4-5bf8-4244-9e58-456b8c3730be",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668510246071
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.4722, 9.1922],
				area: 100,
				country: "IT",
				city: "Milan",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1563033600, 1563034624],
				region: "25"
			},
			ip: "93.42.2.218"
		},
		clusterID: "cbaf7c51-506e-4ccc-8392-a167e9f68bc7",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "cbaf7c51-506e-4ccc-8392-a167e9f68bc7",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1669392308685
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2296, 21.0067],
				area: 20,
				country: "PL",
				city: "Warsaw",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [578158592, 578191360],
				region: "14"
			},
			ip: "34.118.41.211"
		},
		clusterID: "495156f1-ec96-4313-90c6-cfb41d47f6c7",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"attachable-volumes-gce-pd": "114",
							"ephemeral-storage": "42354061312",
							memory: "26236M",
							cpu: "6600m",
							"hugepages-2Mi": "0",
							pods: "99",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "68920e55-86bd-4e77-b7e7-21953d898047",
					discoveryType: "IncomingPeering",
					latency: 863000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "495156f1-ec96-4313-90c6-cfb41d47f6c7",
			provider: "gke",
			kubernetesVersion: "v1.23.8-gke.1900"
		},
		timestamp: 1667314447694
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.213.62"
		},
		clusterID: "92ec2440-0861-4ab5-9646-a61ba787c807",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "110164040Ki",
							memory: "14499M",
							cpu: "6255m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "5fb4e7d4-fec5-4de1-9281-916322e77dc9",
					discoveryType: "Manual",
					latency: 605000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "92ec2440-0861-4ab5-9646-a61ba787c807",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668012847904
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.751, -97.822],
				area: 1000,
				country: "US",
				city: "",
				timezone: "America/Chicago",
				metro: 0,
				range: [79691776, 80216064],
				region: ""
			},
			ip: "4.196.219.202"
		},
		clusterID: "ef932996-457c-49f8-a9af-aa6ec34b1da7",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "ef932996-457c-49f8-a9af-aa6ec34b1da7",
			kubernetesVersion: "v1.24.7+rke2r1"
		},
		timestamp: 1667537050278
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.212.33"
		},
		clusterID: "0a457085-8db5-4b38-aab4-ddd3d9c5902a",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "110164040Ki",
							memory: "14499M",
							cpu: "6255m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "83fdae0b-a11b-4660-8be3-96cb1ae17c4e",
					discoveryType: "IncomingPeering",
					latency: 464000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "0a457085-8db5-4b38-aab4-ddd3d9c5902a",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667808905249
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.751, -97.822],
				area: 1000,
				country: "US",
				city: "",
				timezone: "America/Chicago",
				metro: 0,
				range: [79691776, 80216064],
				region: ""
			},
			ip: "4.196.219.202"
		},
		clusterID: "6dcd3ad0-ac0c-448c-8a22-de5077e06735",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "6dcd3ad0-ac0c-448c-8a22-de5077e06735",
			provider: "k3s",
			kubernetesVersion: "v1.24.4+rke2r1"
		},
		timestamp: 1667217009526
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [57.7486, 13.189],
				area: 100,
				country: "SE",
				city: "AEspered",
				timezone: "Europe/Stockholm",
				metro: 0,
				range: [1374176384, 1374176512],
				region: "O"
			},
			ip: "81.232.68.192"
		},
		clusterID: "94fc3c0f-54f7-4888-ad5b-a11ab308b7c0",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "850845376Ki",
							memory: "59691M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "7c46aee2-4bc0-41ee-8950-bf65f7c382bd",
					discoveryType: "Manual",
					latency: 297000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "94fc3c0f-54f7-4888-ad5b-a11ab308b7c0",
			namespacesInfo: [
				{
					uid: "d1949fb5-839d-4e08-b292-0949fb78f87e",
					offloadingStrategy: "LocalAndRemote",
					mappingStrategy: "DefaultName",
					numOffloadedPods: {
						"7c46aee2-4bc0-41ee-8950-bf65f7c382bd": 1
					}
				}
			],
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1670229484700
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [387284992, 387293184],
				region: "VA"
			},
			ip: "23.21.130.22"
		},
		clusterID: "6ca263e9-168f-4856-8be7-df6552c9ea6b",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "c27eab08-dd7f-4b96-8bb6-8b4c24c4c6c7",
					discoveryType: "Manual"
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "6ca263e9-168f-4856-8be7-df6552c9ea6b",
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1669631044352
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.751, -97.822],
				area: 1000,
				country: "US",
				city: "",
				timezone: "America/Chicago",
				metro: 0,
				range: [79691776, 80216064],
				region: ""
			},
			ip: "4.196.193.107"
		},
		clusterID: "662f42aa-ff75-48eb-8758-e283b6f2c863",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "662f42aa-ff75-48eb-8758-e283b6f2c863",
			provider: "k3s",
			kubernetesVersion: "v1.24.4+rke2r1"
		},
		timestamp: 1667217010530
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [751566848, 751828992],
				region: "VA"
			},
			ip: "44.207.227.188"
		},
		clusterID: "9e17540f-7645-4242-a143-f2b1f690c755",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "9e17540f-7645-4242-a143-f2b1f690c755",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667204703523
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.751, -97.822],
				area: 1000,
				country: "US",
				city: "",
				timezone: "America/Chicago",
				metro: 0,
				range: [81788928, 83886080],
				region: ""
			},
			ip: "4.227.208.182"
		},
		clusterID: "e223e9cf-525b-4edb-880f-22616f26269f",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "e223e9cf-525b-4edb-880f-22616f26269f",
			provider: "k3s",
			kubernetesVersion: "v1.24.6+k3s1"
		},
		timestamp: 1666780383966
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [36.6534, -78.375],
				area: 20,
				country: "US",
				city: "Boydton",
				timezone: "America/New_York",
				metro: 560,
				range: [351404032, 351436800],
				region: "VA"
			},
			ip: "20.242.113.240"
		},
		clusterID: "19a7d27b-8db6-4cc2-99fc-8398ea229ce6",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "19a7d27b-8db6-4cc2-99fc-8398ea229ce6",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1669977723863
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [41.9008, 12.4874],
				area: 200,
				country: "IT",
				city: "",
				timezone: "Europe/Rome",
				metro: 0,
				range: [631455744, 631463936],
				region: "62"
			},
			ip: "37.163.65.225"
		},
		clusterID: "1cf31bde-ba9e-4999-9dc7-869df79223cd",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "13545m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "184782608Ki",
							memory: "14257M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "aa242f65-d88a-429e-89f7-d8b5f8c9abc2",
					discoveryType: "Manual",
					latency: 696000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "1cf31bde-ba9e-4999-9dc7-869df79223cd",
			namespacesInfo: [
				{
					uid: "45b42633-ee17-4209-bd46-2ede8d20192b",
					offloadingStrategy: "LocalAndRemote",
					mappingStrategy: "EnforceSameName",
					hasClusterSelector: true,
					numOffloadedPods: {
						"aa242f65-d88a-429e-89f7-d8b5f8c9abc2": 1
					}
				}
			],
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1670440810905
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [628595904, 628595968],
				region: "21"
			},
			ip: "37.119.156.250"
		},
		clusterID: "216b6027-21a3-4913-b6f6-dc4592f3e033",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "216b6027-21a3-4913-b6f6-dc4592f3e033",
			provider: "kind",
			kubernetesVersion: "v1.23.4"
		},
		timestamp: 1668541308892
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [43.1479, 12.1097],
				area: 200,
				country: "IT",
				city: "",
				timezone: "Europe/Rome",
				metro: 0,
				range: [631406592, 631407616],
				region: ""
			},
			ip: "37.162.130.211"
		},
		clusterID: "6fb4486f-3c82-4916-8f07-5efb089332ac",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "9945m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "179964Mi",
							memory: "14605M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "InBand",
					remoteClusterID: "2539a9e9-8c83-4305-8033-614daf0d106e",
					discoveryType: "Manual",
					latency: 753000
				}
			],
			liqoVersion: "9f345fdfa30653103386f885b9bcf474ca4ef648",
			clusterID: "6fb4486f-3c82-4916-8f07-5efb089332ac",
			provider: "kind",
			kubernetesVersion: "v1.23.0"
		},
		timestamp: 1666911305437
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2394, 21.0362],
				area: 200,
				country: "PL",
				city: "",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [3106990080, 3106991104],
				region: ""
			},
			ip: "185.48.232.43"
		},
		clusterID: "07b6dd40-1aa3-4e96-a9fe-3156e9f851b2",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "10a65df6-84b4-4833-ad61-5d4839f8ba51",
					discoveryType: "Manual"
				},
				{
					incoming: {
						resources: {
							cpu: "85455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "218979450880",
							memory: "486111M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "a6db021e-6e3d-4786-91df-69cf6868a53c",
					discoveryType: "IncomingPeering",
					latency: 856000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "07b6dd40-1aa3-4e96-a9fe-3156e9f851b2",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1667817065647
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [51.2993, 9.491],
				area: 200,
				country: "DE",
				city: "",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [1440153600, 1440219136],
				region: ""
			},
			ip: "85.215.210.102"
		},
		clusterID: "02859606-9ccb-4624-85fa-b0b5d633bb55",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "02859606-9ccb-4624-85fa-b0b5d633bb55",
			provider: "k3s",
			kubernetesVersion: "v1.22.5+k3s1"
		},
		timestamp: 1666796225779
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "5ed1b5b9-e79d-443c-84a0-dc3bf2f4b8bd",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "5ed1b5b9-e79d-443c-84a0-dc3bf2f4b8bd",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667304187339
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.4722, 9.1922],
				area: 1000,
				country: "IT",
				city: "Milan",
				timezone: "Europe/Rome",
				metro: 0,
				range: [308674560, 308740096],
				region: "25"
			},
			ip: "18.102.97.196"
		},
		clusterID: "86690996-5d26-4614-91e2-cb461476bf58",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "86690996-5d26-4614-91e2-cb461476bf58",
			provider: "eks",
			kubernetesVersion: "v1.22.15-eks-fb459a0"
		},
		timestamp: 1667902986545
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [40.867, 14.2385],
				area: 200,
				country: "IT",
				city: "Naples",
				timezone: "Europe/Rome",
				metro: 0,
				range: [36557824, 36558336],
				region: "72"
			},
			ip: "2.45.213.161"
		},
		clusterID: "6e1462da-df0b-4e03-a781-d2810ad862e1",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "473713568Ki",
							memory: "10700M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "600c2b28-155b-4da3-9e5c-db6780faeb95",
					discoveryType: "IncomingPeering",
					latency: 39000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "6e1462da-df0b-4e03-a781-d2810ad862e1",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666866138850
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2394, 21.0362],
				area: 200,
				country: "PL",
				city: "",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [3106990080, 3106991104],
				region: ""
			},
			ip: "185.48.232.43"
		},
		clusterID: "c98e2cf0-8a4d-4a3f-8621-4ab1881c1f92",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "85455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "218979434496",
							memory: "486111M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "ba644bf8-6811-4b2c-be29-b0607b957c36",
					discoveryType: "Manual"
				},
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "85230m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "218979434496",
							memory: "485989M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "203d207e-227c-4fca-9d70-cdfcf2d4b523",
					discoveryType: "Manual",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "c98e2cf0-8a4d-4a3f-8621-4ab1881c1f92",
			namespacesInfo: [
				{
					uid: "a6205a8c-fa52-412f-a31e-f7892f04dd63",
					offloadingStrategy: "LocalAndRemote",
					mappingStrategy: "DefaultName",
					numOffloadedPods: {
						"203d207e-227c-4fca-9d70-cdfcf2d4b523": 0,
						"ba644bf8-6811-4b2c-be29-b0607b957c36": 0
					}
				}
			],
			provider: "kubeadm",
			kubernetesVersion: "v1.25.4"
		},
		timestamp: 1669217345167
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "8cc2cc13-1482-4c3d-8005-614f3f7980d4",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "8cc2cc13-1482-4c3d-8005-614f3f7980d4",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667383327932
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.9273, -76.8545],
				area: 1000,
				country: "US",
				city: "Tappahannock",
				timezone: "America/New_York",
				metro: 556,
				range: [884736000, 884768768],
				region: "VA"
			},
			ip: "52.188.72.197"
		},
		clusterID: "ea67d994-c696-4cec-993c-dd68d3a77397",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "6445m",
							"hugepages-2Mi": "0",
							pods: "180",
							"ephemeral-storage": "107732746240",
							memory: "25667M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "04f48b3d-8a79-4e84-8473-722615551874",
					discoveryType: "Manual",
					latency: 2000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "ea67d994-c696-4cec-993c-dd68d3a77397",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1667977504123
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [35.3274, 25.1281],
				area: 5,
				country: "GR",
				city: "Heraklion",
				timezone: "Europe/Athens",
				metro: 0,
				range: [2472501248, 2472509440],
				region: "M"
			},
			ip: "147.95.122.135"
		},
		clusterID: "f3193658-c301-43a5-91c6-9e0ef85aa3da",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "427955616Ki",
							memory: "29650M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "4526e0fc-e033-4f08-b1e4-c80eaba987d6",
					discoveryType: "Manual",
					latency: 33000000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "f3193658-c301-43a5-91c6-9e0ef85aa3da",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1670245026254
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [387284992, 387293184],
				region: "VA"
			},
			ip: "23.21.130.22"
		},
		clusterID: "4074b40c-becc-43f1-935b-dd2ae8d07adc",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "4074b40c-becc-43f1-935b-dd2ae8d07adc",
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1669711384465
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [19.0748, 72.8856],
				area: 1000,
				country: "IN",
				city: "Mumbai",
				timezone: "Asia/Kolkata",
				metro: 0,
				range: [50724864, 50855936],
				region: "MH"
			},
			ip: "3.6.229.158"
		},
		clusterID: "fbd111f6-3f14-4070-81a7-f1bdc17f0c93",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "fbd111f6-3f14-4070-81a7-f1bdc17f0c93",
			provider: "eks",
			kubernetesVersion: "v1.24.7-eks-fb459a0"
		},
		timestamp: 1669935242566
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [42.9016, -88.0095],
				area: 10,
				country: "US",
				city: "Franklin",
				timezone: "America/Chicago",
				metro: 617,
				range: [3469063680, 3469063936],
				region: "WI"
			},
			ip: "206.197.182.88"
		},
		clusterID: "cc34e304-94d6-461e-9dcd-380fde292ee0",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "27855m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "92115Mi",
							memory: "120915M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "e6e1552a-ed26-4d8b-8f7b-86d6bbcc5df0",
					discoveryType: "IncomingPeering",
					latency: 496000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "cc34e304-94d6-461e-9dcd-380fde292ee0",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667835484982
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2394, 21.0362],
				area: 200,
				country: "PL",
				city: "",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [3106990080, 3106991104],
				region: ""
			},
			ip: "185.48.232.43"
		},
		clusterID: "8c219d43-4ab4-4812-a5d7-d50bd41eadd7",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "85455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "218979434496",
							memory: "486111M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "4acb4c68-ade0-49bd-a24d-de6486c222d9",
					discoveryType: "IncomingPeering",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "8c219d43-4ab4-4812-a5d7-d50bd41eadd7",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.4"
		},
		timestamp: 1669105085691
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [51.2993, 9.491],
				area: 200,
				country: "DE",
				city: "",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [1959510016, 1959526400],
				region: ""
			},
			ip: "116.203.250.188"
		},
		clusterID: "b790de36-4fad-4464-8e4c-fa27350b1a75",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "b790de36-4fad-4464-8e4c-fa27350b1a75",
			provider: "kubeadm",
			kubernetesVersion: "v1.23.14"
		},
		timestamp: 1669554003275
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [45.5999, -121.1871],
				area: 1000,
				country: "US",
				city: "The Dalles",
				timezone: "America/Los_Angeles",
				metro: 820,
				range: [575799296, 575815680],
				region: "OR"
			},
			ip: "34.82.2.215"
		},
		clusterID: "25b39118-8848-4284-a561-17de2b389062",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "25b39118-8848-4284-a561-17de2b389062",
			provider: "gke",
			kubernetesVersion: "v1.22.12-gke.1200"
		},
		timestamp: 1667213766469
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "1b798796-99ce-4945-8f0b-b060b45cf672",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "1b798796-99ce-4945-8f0b-b060b45cf672",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667244847258
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [37.9921, -1.1201],
				area: 10,
				country: "ES",
				city: "Murcia",
				timezone: "Europe/Madrid",
				metro: 0,
				range: [2604056576, 2604064768],
				region: "MC"
			},
			ip: "155.54.210.2"
		},
		clusterID: "ce2fa1ce-9139-46f9-9832-d1be245aced9",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "ce2fa1ce-9139-46f9-9832-d1be245aced9",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.4"
		},
		timestamp: 1670587682600
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [34.7732, 113.722],
				area: 1000,
				country: "CN",
				city: "",
				timezone: "Asia/Shanghai",
				metro: 0,
				range: [1954807808, 1955069952],
				region: ""
			},
			ip: "116.132.250.32"
		},
		clusterID: "89361fb0-d622-46dd-8aaf-333883e00e4f",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "89361fb0-d622-46dd-8aaf-333883e00e4f",
			provider: "kind",
			kubernetesVersion: "v1.24.6"
		},
		timestamp: 1667397408677
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [42.1078, 14.7056],
				area: 500,
				country: "IT",
				city: "Vasto",
				timezone: "Europe/Rome",
				metro: 0,
				range: [48529920, 48530432],
				region: "65"
			},
			ip: "2.228.131.82"
		},
		clusterID: "69a8c33c-c65a-4311-94a9-71e2b886310b",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "69a8c33c-c65a-4311-94a9-71e2b886310b",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1669394769863
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 20,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [3262400512, 3262402560],
				region: "21"
			},
			ip: "194.116.77.120"
		},
		clusterID: "7fa37d51-0ff3-4077-b14d-b66f62863a65",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "7fa37d51-0ff3-4077-b14d-b66f62863a65",
			kubernetesVersion: "v1.21.3+k3s1"
		},
		timestamp: 1669716008998
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [35796992, 35797248],
				region: "21"
			},
			ip: "2.34.56.150"
		},
		clusterID: "16676ea3-5cb5-40b1-b4ae-39e9d3c79a26",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "16676ea3-5cb5-40b1-b4ae-39e9d3c79a26",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668101644744
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [40.867, 14.2385],
				area: 200,
				country: "IT",
				city: "Naples",
				timezone: "Europe/Rome",
				metro: 0,
				range: [36557824, 36558336],
				region: "72"
			},
			ip: "2.45.213.161"
		},
		clusterID: "3d1c1e6c-3aff-4547-82b0-eb25b1c0783b",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "3d1c1e6c-3aff-4547-82b0-eb25b1c0783b",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667245152835
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [36.7295, 3.0905],
				area: 500,
				country: "DZ",
				city: "Algiers",
				timezone: "Africa/Algiers",
				metro: 0,
				range: [1768308736, 1768316928],
				region: "16"
			},
			ip: "105.102.87.81"
		},
		clusterID: "d03228a2-9a5c-44ba-9f4f-95437fda6af5",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "473713568Ki",
							memory: "35015625Ki",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						resources: {
							cpu: "945m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "42704891904",
							memory: "3342M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "InBand",
					remoteClusterID: "db86a755-ad42-4e47-a876-303c27008435",
					discoveryType: "Manual",
					latency: 38000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "d03228a2-9a5c-44ba-9f4f-95437fda6af5",
			provider: "kind",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1669227317762
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "b2651a56-b3e3-41d0-a44d-e5fca9f2e33d",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "80699000Ki",
							memory: "27809M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "InBand",
					remoteClusterID: "2d9dd169-7182-499b-b538-901b9c3b861f",
					discoveryType: "Manual",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "b2651a56-b3e3-41d0-a44d-e5fca9f2e33d",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666713127137
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.4722, 9.1922],
				area: 100,
				country: "IT",
				city: "Milan",
				timezone: "Europe/Rome",
				metro: 0,
				range: [89792512, 89796608],
				region: "25"
			},
			ip: "5.90.37.225"
		},
		clusterID: "2419da14-4b99-4306-b191-9a58995c81e4",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "2419da14-4b99-4306-b191-9a58995c81e4",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668100156081
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [51.2993, 9.491],
				area: 200,
				country: "DE",
				city: "",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [1440153600, 1440219136],
				region: ""
			},
			ip: "85.215.233.167"
		},
		clusterID: "555e71a4-6e79-4673-8604-578e697b3dc3",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "7020m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "26525761536",
							memory: "3549M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "df214e46-9695-4585-a337-c283e39fe465",
					discoveryType: "Manual",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "555e71a4-6e79-4673-8604-578e697b3dc3",
			provider: "k3s",
			kubernetesVersion: "v1.25.3+k3s1"
		},
		timestamp: 1669137724675
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [628595904, 628595968],
				region: "21"
			},
			ip: "37.119.156.250"
		},
		clusterID: "03fa9cd2-c536-4f46-bbf4-87e83f90601d",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "03fa9cd2-c536-4f46-bbf4-87e83f90601d",
			provider: "kind",
			kubernetesVersion: "v1.23.4"
		},
		timestamp: 1668540973973
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [42.9016, -88.0095],
				area: 10,
				country: "US",
				city: "Franklin",
				timezone: "America/Chicago",
				metro: 617,
				range: [3469063680, 3469063936],
				region: "WI"
			},
			ip: "206.197.182.88"
		},
		clusterID: "e6e1552a-ed26-4d8b-8f7b-86d6bbcc5df0",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "27855m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "92115Mi",
							memory: "120915M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "cc34e304-94d6-461e-9dcd-380fde292ee0",
					discoveryType: "Manual",
					latency: 6000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "e6e1552a-ed26-4d8b-8f7b-86d6bbcc5df0",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667835425944
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.9273, -76.8545],
				area: 1000,
				country: "US",
				city: "Tappahannock",
				timezone: "America/New_York",
				metro: 556,
				range: [350748672, 350814208],
				region: "VA"
			},
			ip: "20.232.243.41"
		},
		clusterID: "609a43b9-663a-40a0-adc3-a11ab0487784",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "6445m",
							"hugepages-2Mi": "0",
							pods: "180",
							"ephemeral-storage": "107732746240",
							memory: "25667M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "6eb14848-1408-4b08-99d8-6a0a19ca6984",
					discoveryType: "IncomingPeering",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "609a43b9-663a-40a0-adc3-a11ab0487784",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1668660183822
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.9273, -76.8545],
				area: 20,
				country: "US",
				city: "Tappahannock",
				timezone: "America/New_York",
				metro: 556,
				range: [351371264, 351404032],
				region: "VA"
			},
			ip: "20.241.226.151"
		},
		clusterID: "2bbe51f9-9149-47ef-936b-e84df0a802c2",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "6445m",
							"hugepages-2Mi": "0",
							pods: "180",
							"ephemeral-storage": "107732746240",
							memory: "25667M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "InBand",
					remoteClusterID: "58b61b26-0f87-4af2-ab8a-7b443ff0e3e0",
					discoveryType: "Manual",
					latency: 2000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "2bbe51f9-9149-47ef-936b-e84df0a802c2",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1667488021473
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [751828992, 752877568],
				region: "VA"
			},
			ip: "44.213.29.166"
		},
		clusterID: "e330d131-7983-45ac-97d3-738d110175db",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "e330d131-7983-45ac-97d3-738d110175db",
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1669703584260
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [65093632, 65101824],
				region: "VA"
			},
			ip: "3.225.93.158"
		},
		clusterID: "360e7de3-550e-42b3-b366-136fd6978582",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						enabled: false
					},
					method: "InBand",
					remoteClusterID: "eb7124ce-fdc6-4cb8-8162-0fbe26e7f670",
					discoveryType: "Manual"
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "360e7de3-550e-42b3-b366-136fd6978582",
			provider: "k3s",
			kubernetesVersion: "v1.23.13+k3s1"
		},
		timestamp: 1669319703989
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [1.3036, 103.8554],
				area: 1000,
				country: "SG",
				city: "Singapore",
				timezone: "Asia/Singapore",
				metro: 0,
				range: [231997440, 232259584],
				region: ""
			},
			ip: "13.214.20.65"
		},
		clusterID: "700a1395-3f3a-4312-b314-cbd66c5be0c1",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "700a1395-3f3a-4312-b314-cbd66c5be0c1",
			provider: "aws_liqo_user",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1669639266805
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.213.62"
		},
		clusterID: "555437b6-a84a-4d26-973c-97b4f4d4aaf7",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "110164040Ki",
							memory: "14215M",
							cpu: "5895m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "68d0f5ec-aa8e-4aa3-893f-60a655ba0925",
					discoveryType: "IncomingPeering",
					latency: 829000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "555437b6-a84a-4d26-973c-97b4f4d4aaf7",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668791824553
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [43.1479, 12.1097],
				area: 500,
				country: "IT",
				city: "",
				timezone: "Europe/Rome",
				metro: 0,
				range: [631394816, 631395328],
				region: ""
			},
			ip: "37.162.82.102"
		},
		clusterID: "ca8bcd97-a9ab-4305-864b-2155636127c8",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "ca8bcd97-a9ab-4305-864b-2155636127c8",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667733796820
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [55.9489, -3.1632],
				area: 20,
				country: "GB",
				city: "Edinburgh",
				timezone: "Europe/London",
				metro: 0,
				range: [3519870208, 3519870464],
				region: "SCT"
			},
			ip: "209.204.245.4"
		},
		clusterID: "5d418dda-5731-48e9-8b70-9a1ff2849f91",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "2040m",
							"hugepages-2Mi": "0",
							pods: "33",
							"ephemeral-storage": "8368595456",
							memory: "7250M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "a2424385-3f0f-4202-8c66-ad1eb4dca988",
					discoveryType: "IncomingPeering",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "5d418dda-5731-48e9-8b70-9a1ff2849f91",
			kubernetesVersion: "v1.21.6"
		},
		timestamp: 1669826281582
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.4722, 9.1922],
				area: 20,
				country: "IT",
				city: "Milan",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1383126976, 1383127008],
				region: "25"
			},
			ip: "82.112.215.203"
		},
		clusterID: "9973b9f9-2044-496a-b95d-381b47609a6b",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "55082020Ki",
							memory: "7135M",
							cpu: "3645m",
							"hugepages-2Mi": "0",
							pods: "99",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "55082020Ki",
							memory: "7135M",
							cpu: "3645m",
							"hugepages-2Mi": "0",
							pods: "99",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "48bf54fb-c82a-4e0c-a6c1-e3af2e716a43",
					discoveryType: "IncomingPeering",
					latency: 585000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "9973b9f9-2044-496a-b95d-381b47609a6b",
			namespacesInfo: [
				{
					uid: "9f1081c1-13c0-42b1-a308-cfcaabe0caf6",
					offloadingStrategy: "Remote",
					mappingStrategy: "EnforceSameName",
					numOffloadedPods: {
						"48bf54fb-c82a-4e0c-a6c1-e3af2e716a43": 1
					}
				}
			],
			provider: "kind",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1668874087407
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [42.1078, 14.7056],
				area: 500,
				country: "IT",
				city: "Vasto",
				timezone: "Europe/Rome",
				metro: 0,
				range: [48529920, 48530432],
				region: "65"
			},
			ip: "2.228.131.82"
		},
		clusterID: "081174a5-8e5e-47e0-86fe-9ca0b542a687",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "081174a5-8e5e-47e0-86fe-9ca0b542a687",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1669394888362
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2296, 21.0067],
				area: 20,
				country: "PL",
				city: "Warsaw",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [578060288, 578093056],
				region: "14"
			},
			ip: "34.116.149.47"
		},
		clusterID: "5eaee01d-d1ae-4b7a-a53a-180e03307894",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							"attachable-volumes-gce-pd": "114",
							"ephemeral-storage": "42354061312",
							memory: "54774M",
							cpu: "13782m",
							"hugepages-2Mi": "0",
							pods: "99",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "54ab9213-df1e-4103-9d76-d97e66778969",
					discoveryType: "Manual",
					latency: 1000000
				},
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							"attachable-volumes-gce-pd": "114",
							"ephemeral-storage": "42354061312",
							memory: "54774M",
							cpu: "13782m",
							"hugepages-2Mi": "0",
							pods: "99",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "b855faf3-ae18-4ef8-bcd5-0c924a473da4",
					discoveryType: "Manual",
					latency: 3000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "5eaee01d-d1ae-4b7a-a53a-180e03307894",
			provider: "gke",
			kubernetesVersion: "v1.23.8-gke.1900"
		},
		timestamp: 1666720568003
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [60.1797, 24.9344],
				area: 200,
				country: "FI",
				city: "Helsinki",
				timezone: "Europe/Helsinki",
				metro: 0,
				range: [1431060480, 1431068672],
				region: "18"
			},
			ip: "85.76.77.203"
		},
		clusterID: "cb9b6038-7cbc-4acc-a1f3-4ee7833637a8",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "7020m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "1681192255488",
							memory: "60390M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "711fa547-e96e-4900-8c65-6175e0dad661",
					discoveryType: "IncomingPeering",
					latency: 3000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "cb9b6038-7cbc-4acc-a1f3-4ee7833637a8",
			provider: "k3s",
			kubernetesVersion: "v1.25.3+k3s1"
		},
		timestamp: 1668783192289
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.213.62"
		},
		clusterID: "52068494-804c-4633-bbaf-6c67a8a1fd54",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "973a7647-a4e3-4365-a9b2-eeb325854927",
					discoveryType: "Manual"
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "52068494-804c-4633-bbaf-6c67a8a1fd54",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668187803182
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [19.0748, 72.8856],
				area: 1000,
				country: "IN",
				city: "Mumbai",
				timezone: "Asia/Kolkata",
				metro: 0,
				range: [50724864, 50855936],
				region: "MH"
			},
			ip: "3.6.229.158"
		},
		clusterID: "3e7fbf38-130c-43b1-bb20-1ef56c1f2fc2",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "3e7fbf38-130c-43b1-bb20-1ef56c1f2fc2",
			provider: "eks",
			kubernetesVersion: "v1.24.7-eks-fb459a0"
		},
		timestamp: 1669933382303
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2394, 21.0362],
				area: 200,
				country: "PL",
				city: "",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [3106990080, 3106991104],
				region: ""
			},
			ip: "185.48.232.43"
		},
		clusterID: "668907ec-da19-464d-94a0-b34c9cd8ab3d",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "85455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "184727216Ki",
							memory: "486300M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "e248de54-a202-4d79-941e-1fc51e7deec5",
					discoveryType: "IncomingPeering",
					latency: 729000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "668907ec-da19-464d-94a0-b34c9cd8ab3d",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667390285821
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 100,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [3262402560, 3262402816],
				region: "21"
			},
			ip: "194.116.80.82"
		},
		clusterID: "1648dd7a-29d8-4d26-98db-98569d119468",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "2",
							"ephemeral-storage": "10G",
							memory: "2G",
							pod: "110",
							storate: "10G"
						},
						enabled: true
					},
					outgoing: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "55082020Ki",
							memory: "7135M",
							cpu: "3645m",
							"hugepages-2Mi": "0",
							pods: "99",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "ef56131e-2295-49ff-99e0-76218a9814d7",
					discoveryType: "Manual",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "1648dd7a-29d8-4d26-98db-98569d119468",
			provider: "kind",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1667841673571
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "89ca6aa9-4297-4898-ad5b-044018f28c14",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "80698792Ki",
							memory: "27809M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "1e059627-cee6-4106-8a7f-93978de370dd",
					discoveryType: "IncomingPeering",
					latency: 826000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "89ca6aa9-4297-4898-ad5b-044018f28c14",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667379608360
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [32.8608, -79.9746],
				area: 1000,
				country: "US",
				city: "North Charleston",
				timezone: "America/New_York",
				metro: 519,
				range: [580124672, 580190208],
				region: "SC"
			},
			ip: "34.148.164.31"
		},
		clusterID: "b4f0c0c2-732c-434c-8f5a-a3fcbcd15a4f",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "b4f0c0c2-732c-434c-8f5a-a3fcbcd15a4f",
			provider: "gke",
			kubernetesVersion: "v1.23.13-gke.900"
		},
		timestamp: 1669627206225
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.751, -97.822],
				area: 1000,
				country: "US",
				city: "",
				timezone: "America/Chicago",
				metro: 0,
				range: [2691006464, 2691039232],
				region: ""
			},
			ip: "160.101.128.1"
		},
		clusterID: "a9a9ba62-e8b2-4117-8ae7-a2840fe3a36a",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "13545m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "202197824Ki",
							memory: "37512M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "53467ae9-fe42-4ed4-b53c-91ea367197ad",
					discoveryType: "Manual",
					latency: 603000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "a9a9ba62-e8b2-4117-8ae7-a2840fe3a36a",
			provider: "kind",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1668165603392
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [22.2908, 114.1501],
				area: 20,
				country: "HK",
				city: "Central",
				timezone: "Asia/Hong_Kong",
				metro: 0,
				range: [1433487104, 1433487360],
				region: "HCW"
			},
			ip: "85.113.71.137"
		},
		clusterID: "83a4b877-ee8e-49c3-b4ae-c49961271927",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "83a4b877-ee8e-49c3-b4ae-c49961271927",
			provider: "k3s",
			kubernetesVersion: "v1.24.7+k3s1"
		},
		timestamp: 1668066733314
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [51.2993, 9.491],
				area: 200,
				country: "DE",
				city: "",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [1440153600, 1440219136],
				region: ""
			},
			ip: "85.215.162.189"
		},
		clusterID: "df214e46-9695-4585-a337-c283e39fe465",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "7020m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "26525761536",
							memory: "3549M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "555e71a4-6e79-4673-8604-578e697b3dc3",
					discoveryType: "IncomingPeering",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "df214e46-9695-4585-a337-c283e39fe465",
			provider: "k3s",
			kubernetesVersion: "v1.25.3+k3s1"
		},
		timestamp: 1669137903736
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [19.0748, 72.8856],
				area: 1000,
				country: "IN",
				city: "Mumbai",
				timezone: "Asia/Kolkata",
				metro: 0,
				range: [50724864, 50855936],
				region: "MH"
			},
			ip: "3.6.229.158"
		},
		clusterID: "82541d1e-ab79-4ce1-b560-87c36e5f25b5",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"ephemeral-storage": "7575640064",
							memory: "3748M",
							cpu: "1300m",
							"attachable-volumes-aws-ebs": "35",
							"hugepages-2Mi": "0",
							pods: "52",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "3e7fbf38-130c-43b1-bb20-1ef56c1f2fc2",
					discoveryType: "IncomingPeering"
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "82541d1e-ab79-4ce1-b560-87c36e5f25b5",
			provider: "eks",
			kubernetesVersion: "v1.24.7-eks-fb459a0"
		},
		timestamp: 1669974006709
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.213.62"
		},
		clusterID: "973a7647-a4e3-4365-a9b2-eeb325854927",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "52068494-804c-4633-bbaf-6c67a8a1fd54",
					discoveryType: "IncomingPeering"
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "973a7647-a4e3-4365-a9b2-eeb325854927",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668187861435
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [55.9489, -3.1632],
				area: 20,
				country: "GB",
				city: "Edinburgh",
				timezone: "Europe/London",
				metro: 0,
				range: [3519870208, 3519870464],
				region: "SCT"
			},
			ip: "209.204.245.4"
		},
		clusterID: "1ca540f3-6a68-454d-b81f-490e7f6c92ec",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "1ca540f3-6a68-454d-b81f-490e7f6c92ec",
			kubernetesVersion: "v1.21.6"
		},
		timestamp: 1668537362875
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2394, 21.0362],
				area: 200,
				country: "PL",
				city: "",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [3106990080, 3106991104],
				region: ""
			},
			ip: "185.48.232.43"
		},
		clusterID: "4acb4c68-ade0-49bd-a24d-de6486c222d9",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "85455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "218979434496",
							memory: "486111M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "8c219d43-4ab4-4812-a5d7-d50bd41eadd7",
					discoveryType: "Manual",
					latency: 811000
				},
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "85455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "218979434496",
							memory: "486111M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "a99fc888-99ef-40a8-81fb-e6f4898b5fe7",
					discoveryType: "Manual",
					latency: 813000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "4acb4c68-ade0-49bd-a24d-de6486c222d9",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.4"
		},
		timestamp: 1669105085823
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [1.3036, 103.8554],
				area: 1000,
				country: "SG",
				city: "Singapore",
				timezone: "Asia/Singapore",
				metro: 0,
				range: [231997440, 232259584],
				region: ""
			},
			ip: "13.214.20.65"
		},
		clusterID: "d654a0c7-0e97-48e3-97c6-568900741e2e",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "d654a0c7-0e97-48e3-97c6-568900741e2e",
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1669621747553
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "b455f867-b625-4e7f-b2d2-1130eed80497",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "b455f867-b625-4e7f-b2d2-1130eed80497",
			provider: "kubeadm",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668182282817
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.751, -97.822],
				area: 1000,
				country: "US",
				city: "",
				timezone: "America/Chicago",
				metro: 0,
				range: [2691006464, 2691039232],
				region: ""
			},
			ip: "160.101.128.1"
		},
		clusterID: "51b5b0c6-2af9-47f9-a2e2-04885dbe5319",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "10980m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "202105664Ki",
							memory: "28715M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						resources: {
							cpu: "13545m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "202105664Ki",
							memory: "37512M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "7c28f366-1958-499f-9ee4-8d6738abee90",
					discoveryType: "Manual",
					latency: 967000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "51b5b0c6-2af9-47f9-a2e2-04885dbe5319",
			provider: "kind",
			kubernetesVersion: "v1.21.1"
		},
		timestamp: 1667468343125
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [628595904, 628595968],
				region: "21"
			},
			ip: "37.119.156.250"
		},
		clusterID: "693f8785-03c8-438b-828b-bc49a5ce620e",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "693f8785-03c8-438b-828b-bc49a5ce620e",
			provider: "kind",
			kubernetesVersion: "v1.23.4"
		},
		timestamp: 1668520505277
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.5495, 9.1607],
				area: 200,
				country: "IT",
				city: "Cormano",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680616, 2193680617],
				region: "25"
			},
			ip: "130.192.232.232"
		},
		clusterID: "418dafbe-12e6-4081-bb53-a7857a3d3ab7",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "55082020Ki",
							memory: "6968750Ki",
							cpu: "3645m",
							"hugepages-2Mi": "0",
							pods: "99",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						resources: {
							cpu: "2",
							memory: "2G"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "5995260b-be71-4235-ae26-979c8fab28b9",
					discoveryType: "Manual",
					latency: 491000
				}
			],
			liqoVersion: "1172934f82800e5ad438156239a22a47a84b22b3",
			clusterID: "418dafbe-12e6-4081-bb53-a7857a3d3ab7",
			provider: "kind",
			kubernetesVersion: "v1.25.2"
		},
		timestamp: 1666708505604
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.9273, -76.8545],
				area: 20,
				country: "US",
				city: "Tappahannock",
				timezone: "America/New_York",
				metro: 556,
				range: [340852736, 340885504],
				region: "VA"
			},
			ip: "20.81.67.32"
		},
		clusterID: "914146b3-0c08-4792-a582-545eded7e212",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "914146b3-0c08-4792-a582-545eded7e212",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1670919614029
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [751828992, 752877568],
				region: "VA"
			},
			ip: "44.213.29.166"
		},
		clusterID: "47e2e5d4-1548-4fd9-a1e1-a096e1b05e73",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "47e2e5d4-1548-4fd9-a1e1-a096e1b05e73",
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1669624024131
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 5,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [885977088, 885978112],
				region: "VA"
			},
			ip: "52.206.242.103"
		},
		clusterID: "a2bf7672-eb7d-4597-a433-a559542dbdf4",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "a2bf7672-eb7d-4597-a433-a559542dbdf4",
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1669190043857
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 20,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [530387968, 530388480],
				region: "21"
			},
			ip: "31.157.21.29"
		},
		clusterID: "799ea006-3d38-4dcf-926c-cd8cc70748a6",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "799ea006-3d38-4dcf-926c-cd8cc70748a6",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1669554974109
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.7627, 12.9911],
				area: 100,
				country: "IT",
				city: "San Michele al Tagliamento",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562410496, 1562411008],
				region: "34"
			},
			ip: "93.32.126.165"
		},
		clusterID: "5800063e-5558-4381-856d-a0eb5e165d29",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "5800063e-5558-4381-856d-a0eb5e165d29",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668868772524
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1564606464, 1564606976],
				region: "21"
			},
			ip: "93.66.1.85"
		},
		clusterID: "29f76fe8-4b1a-4eef-a9be-d21e2ae1e043",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "3285m",
							"hugepages-2Mi": "0",
							pods: "33",
							"ephemeral-storage": "61427716Ki",
							memory: "4805M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						resources: {
							cpu: "1015m",
							"hugepages-2Mi": "0",
							pods: "11",
							"ephemeral-storage": "19996Mi",
							memory: "1395M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "fa5845c9-8b75-4768-865a-7f78abb79c02",
					discoveryType: "Manual",
					latency: 273000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "29f76fe8-4b1a-4eef-a9be-d21e2ae1e043",
			provider: "kind",
			kubernetesVersion: "v1.25.0"
		},
		timestamp: 1669909745931
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2394, 21.0362],
				area: 200,
				country: "PL",
				city: "",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [3106990080, 3106991104],
				region: ""
			},
			ip: "185.48.232.43"
		},
		clusterID: "1fa2b692-5dca-4d30-a41f-b5f7b3b439c7",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "85455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "218979434496",
							memory: "486111M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "c92b7252-864d-45a3-a860-7e2873781d3b",
					discoveryType: "IncomingPeering",
					latency: 812000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "1fa2b692-5dca-4d30-a41f-b5f7b3b439c7",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.4"
		},
		timestamp: 1669298404691
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "5925afad-555b-4b66-a807-f6fef0c235cf",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "5925afad-555b-4b66-a807-f6fef0c235cf",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667219407830
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [40.867, 14.2385],
				area: 200,
				country: "IT",
				city: "Naples",
				timezone: "Europe/Rome",
				metro: 0,
				range: [36557824, 36558336],
				region: "72"
			},
			ip: "2.45.213.161"
		},
		clusterID: "7ff0c76e-2b94-4e58-959c-72614f8e8a26",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "7ff0c76e-2b94-4e58-959c-72614f8e8a26",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666793875124
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.9273, -76.8545],
				area: 20,
				country: "US",
				city: "Tappahannock",
				timezone: "America/New_York",
				metro: 556,
				range: [340852736, 340885504],
				region: "VA"
			},
			ip: "20.81.65.139"
		},
		clusterID: "ddf0a27f-01ca-462c-8ba0-93ec5ba85f9c",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "ddf0a27f-01ca-462c-8ba0-93ec5ba85f9c",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1670918404137
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [35796992, 35797248],
				region: "21"
			},
			ip: "2.34.56.150"
		},
		clusterID: "928fec17-ec64-4371-8c47-e5818fbe3a26",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "9945m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "950186560Ki",
							memory: "7139M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "d1d13a14-6cd6-45a0-a8b1-79bad663ce77",
					discoveryType: "IncomingPeering",
					latency: 776000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "928fec17-ec64-4371-8c47-e5818fbe3a26",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668608466464
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [875298816, 875364352],
				region: "VA"
			},
			ip: "52.44.21.175"
		},
		clusterID: "1e4c171a-53a8-40ff-9ca6-ff74c60ad492",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "1e4c171a-53a8-40ff-9ca6-ff74c60ad492",
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1669114383907
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [51.2993, 9.491],
				area: 200,
				country: "DE",
				city: "",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [1440153600, 1440219136],
				region: ""
			},
			ip: "85.215.220.3"
		},
		clusterID: "4a1486b3-e553-4a26-8d39-913fe134731c",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "4a1486b3-e553-4a26-8d39-913fe134731c",
			provider: "k3s",
			kubernetesVersion: "v1.25.3+k3s1"
		},
		timestamp: 1666951985574
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.751, -97.822],
				area: 1000,
				country: "US",
				city: "",
				timezone: "America/Chicago",
				metro: 0,
				range: [2691006464, 2691039232],
				region: ""
			},
			ip: "160.101.128.1"
		},
		clusterID: "a84b003f-e140-4a45-b4ec-c105587b9ced",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "a84b003f-e140-4a45-b4ec-c105587b9ced",
			provider: "kind",
			kubernetesVersion: "v1.23.13"
		},
		timestamp: 1668174362107
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [37.9921, -1.1201],
				area: 10,
				country: "ES",
				city: "Murcia",
				timezone: "Europe/Madrid",
				metro: 0,
				range: [2604056576, 2604064768],
				region: "MC"
			},
			ip: "155.54.210.2"
		},
		clusterID: "3697cf06-bc66-4012-a605-62b1129f8567",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "3697cf06-bc66-4012-a605-62b1129f8567",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.4"
		},
		timestamp: 1670589662999
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.4722, 9.1922],
				area: 100,
				country: "IT",
				city: "Milan",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1563033600, 1563034624],
				region: "25"
			},
			ip: "93.42.2.218"
		},
		clusterID: "9e3db23d-7b05-4c66-93e2-a050ab6ec18c",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "9e3db23d-7b05-4c66-93e2-a050ab6ec18c",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1669392070672
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [59.8983, 30.2618],
				area: 5,
				country: "RU",
				city: "St Petersburg",
				timezone: "Europe/Moscow",
				metro: 0,
				range: [3170082816, 3170091008],
				region: "SPE"
			},
			ip: "188.243.183.199"
		},
		clusterID: "71a05429-7454-4673-bd27-d04fad34ebac",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "505989088Ki",
							memory: "44838M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "d1ae21a7-6178-461b-aa03-50faf237acc3",
					discoveryType: "IncomingPeering",
					latency: 280000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "71a05429-7454-4673-bd27-d04fad34ebac",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667315407212
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "a60b492a-f8ed-4280-899f-9efad08d8c85",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "a60b492a-f8ed-4280-899f-9efad08d8c85",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667462287422
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2296, 21.0067],
				area: 20,
				country: "PL",
				city: "Warsaw",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [578060288, 578093056],
				region: "14"
			},
			ip: "34.116.151.162"
		},
		clusterID: "6226e593-d26f-4944-813f-ccedfa812311",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "6226e593-d26f-4944-813f-ccedfa812311",
			provider: "gke",
			kubernetesVersion: "v1.23.8-gke.1900"
		},
		timestamp: 1667310847323
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [585816064, 585818112],
				region: "VA"
			},
			ip: "34.234.219.87"
		},
		clusterID: "fa724b05-51b6-46f8-84be-dedf4e27e2c7",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "fa724b05-51b6-46f8-84be-dedf4e27e2c7",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666774683771
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 100,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [3262402560, 3262402816],
				region: "21"
			},
			ip: "194.116.80.85"
		},
		clusterID: "230ecda9-465e-4f41-9f83-b370cbac00c8",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "230ecda9-465e-4f41-9f83-b370cbac00c8",
			provider: "kind",
			kubernetesVersion: "v1.23.4"
		},
		timestamp: 1667821567801
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.3161, 9.206],
				area: 20,
				country: "IT",
				city: "Siziano",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2174222336, 2174230528],
				region: "25"
			},
			ip: "129.152.22.80"
		},
		clusterID: "acad359a-20aa-4e10-9d6d-3709f6f522c3",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "acad359a-20aa-4e10-9d6d-3709f6f522c3",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667256607459
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [35796992, 35797248],
				region: "21"
			},
			ip: "2.34.56.150"
		},
		clusterID: "a34f2776-2c12-4ba0-831e-92019dd5b670",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "20655m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "1900373120Ki",
							memory: "14505M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "a3032597-92d9-4ffd-a247-02871e40816d",
					discoveryType: "IncomingPeering",
					latency: 817000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "a34f2776-2c12-4ba0-831e-92019dd5b670",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668526624901
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [55.9489, -3.1632],
				area: 20,
				country: "GB",
				city: "Edinburgh",
				timezone: "Europe/London",
				metro: 0,
				range: [3519870208, 3519870464],
				region: "SCT"
			},
			ip: "209.204.245.4"
		},
		clusterID: "8f735fe0-78a0-4d44-95e9-cb83ec9f98a7",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "8f735fe0-78a0-4d44-95e9-cb83ec9f98a7",
			provider: "kubeadm",
			kubernetesVersion: "v1.21.6"
		},
		timestamp: 1668428227008
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [40.867, 14.2385],
				area: 200,
				country: "IT",
				city: "Naples",
				timezone: "Europe/Rome",
				metro: 0,
				range: [36557824, 36558336],
				region: "72"
			},
			ip: "2.45.213.161"
		},
		clusterID: "edbe2ea7-782a-4c5a-bf3f-49db3b892edf",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "473713568Ki",
							memory: "10700M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "9c7ccef9-7370-457b-aa28-6acc8566ca23",
					discoveryType: "Manual",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "edbe2ea7-782a-4c5a-bf3f-49db3b892edf",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666800569596
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.212.33"
		},
		clusterID: "83fdae0b-a11b-4660-8be3-96cb1ae17c4e",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "110164040Ki",
							memory: "14499M",
							cpu: "6255m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "0a457085-8db5-4b38-aab4-ddd3d9c5902a",
					discoveryType: "Manual",
					latency: 560000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "83fdae0b-a11b-4660-8be3-96cb1ae17c4e",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667808787329
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.751, -97.822],
				area: 1000,
				country: "US",
				city: "",
				timezone: "America/Chicago",
				metro: 0,
				range: [570425344, 574619648],
				region: ""
			},
			ip: "34.23.227.179"
		},
		clusterID: "ebcdf12c-0103-4217-97fd-48ab59e81b4f",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "ebcdf12c-0103-4217-97fd-48ab59e81b4f",
			provider: "gke",
			kubernetesVersion: "v1.23.13-gke.900"
		},
		timestamp: 1669627205059
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2394, 21.0362],
				area: 200,
				country: "PL",
				city: "",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [3106990080, 3106991104],
				region: ""
			},
			ip: "185.48.232.43"
		},
		clusterID: "b3735105-c123-4e68-8e7d-e4d1511c425c",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "b3735105-c123-4e68-8e7d-e4d1511c425c",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1667404110483
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.213.62"
		},
		clusterID: "b231e001-70d3-405d-9544-1f11ae3611bc",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "110164040Ki",
							memory: "14499M",
							cpu: "6255m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "86f033da-39f7-4f5c-b3f9-2d8e70c04739",
					discoveryType: "IncomingPeering",
					latency: 3000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "b231e001-70d3-405d-9544-1f11ae3611bc",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668189732389
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [45.5999, -121.1871],
				area: 20,
				country: "US",
				city: "The Dalles",
				timezone: "America/Los_Angeles",
				metro: 820,
				range: [600113152, 600145920],
				region: "OR"
			},
			ip: "35.197.7.224"
		},
		clusterID: "f9acb80d-5fa8-4111-b04f-567039a87698",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"attachable-volumes-gce-pd": "228",
							"ephemeral-storage": "84708122624",
							memory: "24072M",
							cpu: "6098m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "6226e593-d26f-4944-813f-ccedfa812311",
					discoveryType: "IncomingPeering",
					latency: 156000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "f9acb80d-5fa8-4111-b04f-567039a87698",
			provider: "gke",
			kubernetesVersion: "v1.23.8-gke.1900"
		},
		timestamp: 1667311145964
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 20,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [3262400512, 3262402560],
				region: "21"
			},
			ip: "194.116.77.120"
		},
		clusterID: "e5414dc5-7350-487b-9c22-a82aa92f512f",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "e5414dc5-7350-487b-9c22-a82aa92f512f",
			kubernetesVersion: "v1.21.3+k3s1"
		},
		timestamp: 1669716075418
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2394, 21.0362],
				area: 200,
				country: "PL",
				city: "",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [3106990080, 3106991104],
				region: ""
			},
			ip: "185.48.232.43"
		},
		clusterID: "74a96751-a3a4-48a3-a182-6fd0dbd05799",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "74a96751-a3a4-48a3-a182-6fd0dbd05799",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1667230982427
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.352, 4.9392],
				area: 20,
				country: "NL",
				city: "Amsterdam",
				timezone: "Europe/Amsterdam",
				metro: 0,
				range: [3164995584, 3165011968],
				region: "NH"
			},
			ip: "188.166.55.184"
		},
		clusterID: "98b60386-026e-4cfa-99a4-6248af8e4f13",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "13860m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "569097125888",
							memory: "29783M"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "bb163a93-e223-4430-bf7a-c6dd706a03f4",
					discoveryType: "IncomingPeering",
					latency: 9000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "98b60386-026e-4cfa-99a4-6248af8e4f13",
			provider: "k3s",
			kubernetesVersion: "v1.22.6+k3s1"
		},
		timestamp: 1668203406925
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.9273, -76.8545],
				area: 20,
				country: "US",
				city: "Tappahannock",
				timezone: "America/New_York",
				metro: 556,
				range: [351076352, 351109120],
				region: "VA"
			},
			ip: "20.237.63.70"
		},
		clusterID: "e2391ff5-959b-4720-bd0e-76a143b9c3da",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "6445m",
							"hugepages-2Mi": "0",
							pods: "180",
							"ephemeral-storage": "107732746240",
							memory: "25667M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "7dda0fa1-c215-487f-8817-cd1acf6816cb",
					discoveryType: "Manual",
					latency: 2000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "e2391ff5-959b-4720-bd0e-76a143b9c3da",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1667296803171
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [32.8608, -79.9746],
				area: 1000,
				country: "US",
				city: "North Charleston",
				timezone: "America/New_York",
				metro: 519,
				range: [575275008, 575406080],
				region: "SC"
			},
			ip: "34.74.87.219"
		},
		clusterID: "6ac3a500-5c2d-4a01-9a17-91c1d729a3c5",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "6ac3a500-5c2d-4a01-9a17-91c1d729a3c5",
			provider: "gke",
			kubernetesVersion: "v1.23.13-gke.900"
		},
		timestamp: 1669282685411
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2394, 21.0362],
				area: 200,
				country: "PL",
				city: "",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [3106990080, 3106991104],
				region: ""
			},
			ip: "185.48.232.43"
		},
		clusterID: "7a0fe234-a889-496c-8494-a30f41095d04",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "7a0fe234-a889-496c-8494-a30f41095d04",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1667809201330
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [22.2908, 114.1501],
				area: 50,
				country: "HK",
				city: "",
				timezone: "Asia/Hong_Kong",
				metro: 0,
				range: [822140928, 822149120],
				region: "HCW"
			},
			ip: "49.0.242.161"
		},
		clusterID: "291cafdc-30bc-4796-913d-cb26a79da019",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "6255m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "73837152Ki",
							memory: "14697M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "a249e3d5-a574-4d5b-9b56-93a225e9e1e9",
					discoveryType: "IncomingPeering",
					latency: 281000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "291cafdc-30bc-4796-913d-cb26a79da019",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668025088250
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.9273, -76.8545],
				area: 20,
				country: "US",
				city: "Tappahannock",
				timezone: "America/New_York",
				metro: 556,
				range: [352124928, 352157696],
				region: "VA"
			},
			ip: "20.253.117.202"
		},
		clusterID: "a7c6d8f4-6f91-4f21-98ff-66fd091cff2c",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "a7c6d8f4-6f91-4f21-98ff-66fd091cff2c",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1670916963507
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.212.33"
		},
		clusterID: "4d2f98b7-9c28-41f3-80f5-e69cbb3ea362",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "110164040Ki",
							memory: "14499M",
							cpu: "6255m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "0ef248a6-c6dc-460f-8a13-081b7b291569",
					discoveryType: "Manual",
					latency: 5000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "4d2f98b7-9c28-41f3-80f5-e69cbb3ea362",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666816992230
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [36.6534, -78.375],
				area: 1000,
				country: "US",
				city: "Boydton",
				timezone: "America/New_York",
				metro: 560,
				range: [336986112, 337051648],
				region: "VA"
			},
			ip: "20.22.49.219"
		},
		clusterID: "45f4919e-1e58-4610-aaea-4ffba9e00fe4",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "45f4919e-1e58-4610-aaea-4ffba9e00fe4",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1666960022852
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2394, 21.0362],
				area: 200,
				country: "PL",
				city: "",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [3106990080, 3106991104],
				region: ""
			},
			ip: "185.48.232.43"
		},
		clusterID: "bc2eb4cd-92e1-4861-89b5-4f24862e7a80",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "85455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "218979434496",
							memory: "486111M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "e9bc3516-feae-4419-b70c-bc0dfc134f7f",
					discoveryType: "IncomingPeering",
					latency: 792000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "bc2eb4cd-92e1-4861-89b5-4f24862e7a80",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.4"
		},
		timestamp: 1669648322815
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "b5dd67a5-d76c-4e40-a02f-9f290d32239f",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "b5dd67a5-d76c-4e40-a02f-9f290d32239f",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667403189013
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.3824, 4.8995],
				area: 100,
				country: "NL",
				city: "",
				timezone: "Europe/Amsterdam",
				metro: 0,
				range: [2336186368, 2336194560],
				region: ""
			},
			ip: "139.63.127.186"
		},
		clusterID: "0b2a4cff-0710-49ab-a0f1-0be858128231",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						enabled: false
					},
					method: "InBand",
					remoteClusterID: "596b8ed8-ea13-45fb-9252-d3b485f88817",
					discoveryType: "Manual",
					latency: 32000000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "0b2a4cff-0710-49ab-a0f1-0be858128231",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1669282146502
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "0a2480f0-ad4d-433d-8444-4773c63d6a8b",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "0a2480f0-ad4d-433d-8444-4773c63d6a8b",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667419933027
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [64983040, 64987136],
				region: "VA"
			},
			ip: "3.223.146.22"
		},
		clusterID: "1b850f11-84f6-4052-8f0c-67224b0b2708",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "1b850f11-84f6-4052-8f0c-67224b0b2708",
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1670935144902
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.9273, -76.8545],
				area: 20,
				country: "US",
				city: "Tappahannock",
				timezone: "America/New_York",
				metro: 556,
				range: [351371264, 351404032],
				region: "VA"
			},
			ip: "20.241.241.147"
		},
		clusterID: "506670f0-70ef-4d07-b0fb-3bebe4c5029d",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "506670f0-70ef-4d07-b0fb-3bebe4c5029d",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1670916483694
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [41.2591, -95.8517],
				area: 1000,
				country: "US",
				city: "Council Bluffs",
				timezone: "America/Chicago",
				metro: 652,
				range: [574750720, 574816256],
				region: "IA"
			},
			ip: "34.66.68.92"
		},
		clusterID: "eb0cd482-c7ad-4dea-999c-286e3bdc0907",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "2407m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "55053352960",
							memory: "12817M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						resources: {
							cpu: "274m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "55053352960",
							memory: "11064M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "556b53aa-5e5c-405d-9b97-05724644282e",
					discoveryType: "IncomingPeering",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "eb0cd482-c7ad-4dea-999c-286e3bdc0907",
			kubernetesVersion: "v1.24.7+rke2r1"
		},
		timestamp: 1669262703596
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 50,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [89784320, 89788416],
				region: "21"
			},
			ip: "5.90.4.127"
		},
		clusterID: "7d0f04e6-83c4-43f5-8594-9dc4afe31c55",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "2",
							"ephemeral-storage": "10G",
							memory: "2G",
							pod: "110",
							storate: "10G"
						},
						enabled: true
					},
					outgoing: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "55082020Ki",
							memory: "7135M",
							cpu: "3645m",
							"hugepages-2Mi": "0",
							pods: "99",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "8b6db7aa-95c6-4516-9e43-d97077bcb70d",
					discoveryType: "Manual",
					latency: 550000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "7d0f04e6-83c4-43f5-8594-9dc4afe31c55",
			provider: "kind",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1667907914228
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.4722, 9.1922],
				area: 20,
				country: "IT",
				city: "Milan",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1383126976, 1383127008],
				region: "25"
			},
			ip: "82.112.215.203"
		},
		clusterID: "dd35f62a-68e6-49de-b931-6739a15c5c33",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "dd35f62a-68e6-49de-b931-6739a15c5c33",
			provider: "kind",
			kubernetesVersion: "v1.24.7"
		},
		timestamp: 1666987566845
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2394, 21.0362],
				area: 200,
				country: "PL",
				city: "",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [3106990080, 3106991104],
				region: ""
			},
			ip: "185.48.232.43"
		},
		clusterID: "e248de54-a202-4d79-941e-1fc51e7deec5",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "85455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "184727216Ki",
							memory: "486300M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "668907ec-da19-464d-94a0-b34c9cd8ab3d",
					discoveryType: "Manual",
					latency: 10000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "e248de54-a202-4d79-941e-1fc51e7deec5",
			namespacesInfo: [
				{
					uid: "a39993cc-afea-44c4-9bc3-85a9d07dfa65",
					offloadingStrategy: "LocalAndRemote",
					mappingStrategy: "DefaultName",
					numOffloadedPods: {
						"668907ec-da19-464d-94a0-b34c9cd8ab3d": 0
					}
				},
				{
					uid: "5ae08f18-48d0-4539-b621-17c10574121d",
					offloadingStrategy: "LocalAndRemote",
					mappingStrategy: "DefaultName",
					numOffloadedPods: {
						"668907ec-da19-464d-94a0-b34c9cd8ab3d": 1
					}
				}
			],
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667390166821
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 100,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [3262402560, 3262402816],
				region: "21"
			},
			ip: "194.116.80.82"
		},
		clusterID: "739e3741-8d50-4c0c-a19a-e95335502046",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "739e3741-8d50-4c0c-a19a-e95335502046",
			provider: "kind",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1667817245540
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [751828992, 752877568],
				region: "VA"
			},
			ip: "44.209.149.9"
		},
		clusterID: "1c03a48e-11fe-4b2b-a7a3-78ed3eb7411b",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "1c03a48e-11fe-4b2b-a7a3-78ed3eb7411b",
			provider: "k3s",
			kubernetesVersion: "v1.23.13+k3s1"
		},
		timestamp: 1668608224084
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.352, 4.9392],
				area: 20,
				country: "NL",
				city: "Amsterdam",
				timezone: "Europe/Amsterdam",
				metro: 0,
				range: [3164995584, 3165011968],
				region: "NH"
			},
			ip: "188.166.55.184"
		},
		clusterID: "bb163a93-e223-4430-bf7a-c6dd706a03f4",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "13860m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "569097125888",
							memory: "29783M"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "98b60386-026e-4cfa-99a4-6248af8e4f13",
					discoveryType: "Manual",
					latency: 866000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "bb163a93-e223-4430-bf7a-c6dd706a03f4",
			namespacesInfo: [
				{
					uid: "3c2c9ac5-5717-479c-853c-0da99d7ae2dd",
					offloadingStrategy: "LocalAndRemote",
					mappingStrategy: "EnforceSameName",
					numOffloadedPods: {
						"98b60386-026e-4cfa-99a4-6248af8e4f13": 1
					}
				}
			],
			provider: "k3s",
			kubernetesVersion: "v1.22.6+k3s1"
		},
		timestamp: 1668203346246
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 10,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1326451712, 1326452224],
				region: "21"
			},
			ip: "79.16.12.165"
		},
		clusterID: "ef93060c-6630-4469-bfbd-efa2f0e73a41",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "ef93060c-6630-4469-bfbd-efa2f0e73a41",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668625932274
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [51.2993, 9.491],
				area: 200,
				country: "DE",
				city: "",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [1959510016, 1959526400],
				region: ""
			},
			ip: "116.203.250.188"
		},
		clusterID: "fb077bfc-3760-4988-b0ea-b95de9c87ad4",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "fb077bfc-3760-4988-b0ea-b95de9c87ad4",
			provider: "kubeadm",
			kubernetesVersion: "v1.23.14"
		},
		timestamp: 1669398125394
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.8087, 9.0872],
				area: 200,
				country: "IT",
				city: "Como",
				timezone: "Europe/Rome",
				metro: 0,
				range: [3286720512, 3286721024],
				region: "25"
			},
			ip: "195.231.96.134"
		},
		clusterID: "8cbf8a13-061f-45e9-b82e-b5577534cbcb",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "31365m",
							"hugepages-2Mi": "0",
							pods: "297",
							"ephemeral-storage": "710570368Ki",
							memory: "44823M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "2e5fe8c5-a3c5-46c9-a13e-1a6423e5bf0c",
					discoveryType: "Manual",
					latency: 531000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "8cbf8a13-061f-45e9-b82e-b5577534cbcb",
			provider: "kind",
			kubernetesVersion: "v1.25.2"
		},
		timestamp: 1667406762882
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.7612, 8.7974],
				area: 5,
				country: "IT",
				city: "Brunello",
				timezone: "Europe/Rome",
				metro: 0,
				range: [3259971584, 3259972096],
				region: "25"
			},
			ip: "194.79.57.5"
		},
		clusterID: "b05cab44-c356-4305-93b5-68da3b291e1b",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "1620m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "14677133312",
							memory: "3571M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "3c3e13f9-4553-4a4d-97da-094ae4cb615b",
					discoveryType: "IncomingPeering",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "b05cab44-c356-4305-93b5-68da3b291e1b",
			provider: "k3s",
			kubernetesVersion: "v1.24.6+k3s1"
		},
		timestamp: 1666879925792
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [51.2993, 9.491],
				area: 200,
				country: "DE",
				city: "",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [1959510016, 1959526400],
				region: ""
			},
			ip: "116.203.250.188"
		},
		clusterID: "4320ad98-855c-4a90-867b-ae7871312c6c",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "3a1dbbba-79d2-42d1-8349-e5493b5742e5",
					discoveryType: "Manual"
				},
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "84c1d1e4-4ec5-49e5-8f6d-86c2bb97c1de",
					discoveryType: "Manual"
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "4320ad98-855c-4a90-867b-ae7871312c6c",
			provider: "kubeadm",
			kubernetesVersion: "v1.23.14"
		},
		timestamp: 1669664464769
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.213.62"
		},
		clusterID: "6d6e837d-7185-4d07-9611-de4c06a20283",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "6d6e837d-7185-4d07-9611-de4c06a20283",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668534604613
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 50,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [89784320, 89788416],
				region: "21"
			},
			ip: "5.90.4.127"
		},
		clusterID: "8b6db7aa-95c6-4516-9e43-d97077bcb70d",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "55082020Ki",
							memory: "7135M",
							cpu: "3645m",
							"hugepages-2Mi": "0",
							pods: "99",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						resources: {
							cpu: "2",
							"ephemeral-storage": "10G",
							memory: "2G",
							pod: "110",
							storate: "10G"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "7d0f04e6-83c4-43f5-8594-9dc4afe31c55",
					discoveryType: "IncomingPeering",
					latency: 596000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "8b6db7aa-95c6-4516-9e43-d97077bcb70d",
			provider: "kind",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1667907915119
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [1.3036, 103.8554],
				area: 20,
				country: "SG",
				city: "Singapore",
				timezone: "Asia/Singapore",
				metro: 0,
				range: [579829760, 579862528],
				region: ""
			},
			ip: "34.143.153.242"
		},
		clusterID: "db73d9d7-b8cb-4e84-ac94-d445fcdc0ccc",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "db73d9d7-b8cb-4e84-ac94-d445fcdc0ccc",
			provider: "gke",
			kubernetesVersion: "v1.23.11-gke.300"
		},
		timestamp: 1669639266457
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [60.1797, 24.9344],
				area: 200,
				country: "FI",
				city: "Helsinki",
				timezone: "Europe/Helsinki",
				metro: 0,
				range: [1431060480, 1431068672],
				region: "18"
			},
			ip: "85.76.74.222"
		},
		clusterID: "9dcbdc8c-d8e9-4ab5-8ae3-cbe590887a12",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "9dcbdc8c-d8e9-4ab5-8ae3-cbe590887a12",
			provider: "k3s",
			kubernetesVersion: "v1.24.4+k3s1"
		},
		timestamp: 1669126926022
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "1e059627-cee6-4106-8a7f-93978de370dd",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "80698792Ki",
							memory: "27809M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "89ca6aa9-4297-4898-ad5b-044018f28c14",
					discoveryType: "Manual",
					latency: 352000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "1e059627-cee6-4106-8a7f-93978de370dd",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667379608037
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [47.2455, 6.0209],
				area: 100,
				country: "FR",
				city: "Besançon",
				timezone: "Europe/Paris",
				metro: 0,
				range: [2962603008, 2962603520],
				region: "BFC"
			},
			ip: "176.149.189.81"
		},
		clusterID: "ab5764bd-5403-4de4-b1e8-9b0f4cb0b798",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "ab5764bd-5403-4de4-b1e8-9b0f4cb0b798",
			provider: "kind",
			kubernetesVersion: "v1.23.4"
		},
		timestamp: 1668771636627
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 10,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1326451712, 1326452224],
				region: "21"
			},
			ip: "79.16.12.165"
		},
		clusterID: "8c1f3e10-0ca5-49b0-b730-c4de008d28a0",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "8c1f3e10-0ca5-49b0-b730-c4de008d28a0",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668625875497
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [40.867, 14.2385],
				area: 200,
				country: "IT",
				city: "Naples",
				timezone: "Europe/Rome",
				metro: 0,
				range: [36557824, 36558336],
				region: "72"
			},
			ip: "2.45.213.161"
		},
		clusterID: "3dc29a77-ddf4-47b2-8fa9-dc0d4f7aa4e5",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "3dc29a77-ddf4-47b2-8fa9-dc0d4f7aa4e5",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667245147095
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [35.6897, 139.6895],
				area: 500,
				country: "JP",
				city: "",
				timezone: "Asia/Tokyo",
				metro: 0,
				range: [2130116608, 2130149376],
				region: ""
			},
			ip: "126.247.84.169"
		},
		clusterID: "ede0ac68-8088-40e2-b2ac-7f8f78c49003",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "ede0ac68-8088-40e2-b2ac-7f8f78c49003",
			provider: "kind",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1667890271139
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 20,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [3587678976, 3587679040],
				region: "21"
			},
			ip: "213.215.163.27"
		},
		clusterID: "74323027-91ea-4d81-b42a-494d9545bf4e",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "266942304Ki",
							memory: "14499M",
							cpu: "9855m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "e5ed14a4-5bf8-4244-9e58-456b8c3730be",
					discoveryType: "IncomingPeering",
					latency: 4000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "74323027-91ea-4d81-b42a-494d9545bf4e",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668510545351
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [35.3274, 25.1281],
				area: 5,
				country: "GR",
				city: "Heraklion",
				timezone: "Europe/Athens",
				metro: 0,
				range: [2472501248, 2472509440],
				region: "M"
			},
			ip: "147.95.122.134"
		},
		clusterID: "ed81e955-dc5b-45cf-9348-df2eeaeec907",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "ed81e955-dc5b-45cf-9348-df2eeaeec907",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.4"
		},
		timestamp: 1670507282391
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.751, -97.822],
				area: 1000,
				country: "US",
				city: "",
				timezone: "America/Chicago",
				metro: 0,
				range: [79691776, 80216064],
				region: ""
			},
			ip: "4.196.193.107"
		},
		clusterID: "a31eb659-580d-4400-a47b-6a5973364749",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "1543m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "26526658560",
							memory: "12828M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "607971fb-0a28-4786-9325-cf1e03422a1c",
					discoveryType: "IncomingPeering",
					latency: 2000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "a31eb659-580d-4400-a47b-6a5973364749",
			provider: "k3s",
			kubernetesVersion: "v1.24.4+rke2r1"
		},
		timestamp: 1667178430532
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1564606464, 1564606976],
				region: "21"
			},
			ip: "93.66.1.85"
		},
		clusterID: "c14bbf78-86cd-44b6-a4ff-097819ab5e06",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "9945m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "179964Mi",
							memory: "14605M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "InBand",
					remoteClusterID: "68e042b0-b439-4b56-8de6-e1c16cfb3489",
					discoveryType: "Manual",
					latency: 814000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "c14bbf78-86cd-44b6-a4ff-097819ab5e06",
			provider: "kind",
			kubernetesVersion: "v1.23.0"
		},
		timestamp: 1667050505867
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [751828992, 752877568],
				region: "VA"
			},
			ip: "44.212.227.28"
		},
		clusterID: "73418df3-1d08-4646-9be3-65e0b20607dc",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "73418df3-1d08-4646-9be3-65e0b20607dc",
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1670929564422
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 100,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [3262402560, 3262402816],
				region: "21"
			},
			ip: "194.116.80.85"
		},
		clusterID: "76e32a91-b41b-4fcd-803a-03e4a73952ee",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "76e32a91-b41b-4fcd-803a-03e4a73952ee",
			provider: "kind",
			kubernetesVersion: "v1.23.4"
		},
		timestamp: 1668423877503
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [43.7089, 10.4087],
				area: 100,
				country: "IT",
				city: "Pisa",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2205339648, 2205343744],
				region: "52"
			},
			ip: "131.114.208.147"
		},
		clusterID: "68f3954d-5092-49ab-ad46-c15e9b23e88c",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "882067520Ki",
							memory: "59793M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "d3aa1158-6428-4877-a4a8-94feedadecb4",
					discoveryType: "IncomingPeering",
					latency: 8000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "68f3954d-5092-49ab-ad46-c15e9b23e88c",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1669106106962
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [43.1479, 12.1097],
				area: 200,
				country: "IT",
				city: "",
				timezone: "Europe/Rome",
				metro: 0,
				range: [631406592, 631407616],
				region: ""
			},
			ip: "37.162.130.211"
		},
		clusterID: "4664aae5-3870-4b51-ac12-a5ce5700928d",
		telemetry: {
			liqoVersion: "9f345fdfa30653103386f885b9bcf474ca4ef648",
			clusterID: "4664aae5-3870-4b51-ac12-a5ce5700928d",
			provider: "kind",
			kubernetesVersion: "v1.23.0"
		},
		timestamp: 1666909984702
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 50,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1460001536, 1460001792],
				region: "21"
			},
			ip: "87.5.219.162"
		},
		clusterID: "7e7cd8cc-c0f8-47aa-aa9f-5d8af9007417",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "7e7cd8cc-c0f8-47aa-aa9f-5d8af9007417",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1669736224788
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [751206400, 751239168],
				region: "VA"
			},
			ip: "44.198.240.130"
		},
		clusterID: "be033f8d-a8fd-4436-af1e-58b3233a57c3",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "be033f8d-a8fd-4436-af1e-58b3233a57c3",
			provider: "k3s",
			kubernetesVersion: "v1.23.13+k3s1"
		},
		timestamp: 1669274884450
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [59.8983, 30.2618],
				area: 5,
				country: "RU",
				city: "St Petersburg",
				timezone: "Europe/Moscow",
				metro: 0,
				range: [3170082816, 3170091008],
				region: "SPE"
			},
			ip: "188.243.183.199"
		},
		clusterID: "5b2bedb4-05b7-4b2d-bc04-5c7057fe0365",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "5b2bedb4-05b7-4b2d-bc04-5c7057fe0365",
			provider: "k3s",
			kubernetesVersion: "v1.22.6+k3s1"
		},
		timestamp: 1667666950075
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [875298816, 875364352],
				region: "VA"
			},
			ip: "52.44.21.175"
		},
		clusterID: "ad7c6aaf-140e-47f8-a072-3791b8662e82",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "ad7c6aaf-140e-47f8-a072-3791b8662e82",
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1669199883924
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2394, 21.0362],
				area: 200,
				country: "PL",
				city: "",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [3106990080, 3106991104],
				region: ""
			},
			ip: "185.48.232.43"
		},
		clusterID: "0c0be438-c125-4d70-9435-7d1c8771a6d2",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "0c0be438-c125-4d70-9435-7d1c8771a6d2",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1667810822181
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [911409152, 911425536],
				region: "VA"
			},
			ip: "54.83.0.106"
		},
		clusterID: "15a6303d-69e5-408a-8141-b6b2ea714d96",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "5cdeebb7-8136-4998-bbbc-cad3d5431652",
					discoveryType: "Manual"
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "15a6303d-69e5-408a-8141-b6b2ea714d96",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666784523793
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.3161, 9.206],
				area: 20,
				country: "IT",
				city: "Siziano",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2174222336, 2174230528],
				region: "25"
			},
			ip: "129.152.28.115"
		},
		clusterID: "247ee254-5e47-48ed-91e2-fedf806df4e5",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "247ee254-5e47-48ed-91e2-fedf806df4e5",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667328856192
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [42.1078, 14.7056],
				area: 500,
				country: "IT",
				city: "Vasto",
				timezone: "Europe/Rome",
				metro: 0,
				range: [48529920, 48530432],
				region: "65"
			},
			ip: "2.228.131.82"
		},
		clusterID: "170048c3-31e0-49c6-844c-e7e21f324365",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "170048c3-31e0-49c6-844c-e7e21f324365",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1669394828362
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.212.33"
		},
		clusterID: "3f0b8985-47f4-4515-a817-7c5e07a2aecd",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "110164040Ki",
							memory: "14499M",
							cpu: "6255m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "e6ea0ea9-170c-41fb-b3b6-9cfd286d3cf7",
					discoveryType: "Manual",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "3f0b8985-47f4-4515-a817-7c5e07a2aecd",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667462894291
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.212.33"
		},
		clusterID: "35e10743-2f5e-49fb-b99d-002f5eb28efc",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "35e10743-2f5e-49fb-b99d-002f5eb28efc",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666941966041
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.213.62"
		},
		clusterID: "577b59fc-d809-4d3f-8d1f-1be86b837a3f",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "110164040Ki",
							memory: "14215M",
							cpu: "5895m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "82d53b19-2677-4297-bdd8-d636f0ca7b1a",
					discoveryType: "IncomingPeering",
					latency: 539000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "577b59fc-d809-4d3f-8d1f-1be86b837a3f",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668702068898
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [42.1078, 14.7056],
				area: 500,
				country: "IT",
				city: "Vasto",
				timezone: "Europe/Rome",
				metro: 0,
				range: [48529920, 48530432],
				region: "65"
			},
			ip: "2.228.131.82"
		},
		clusterID: "8736f3fe-6f02-48d1-87e1-d921fa26f0b9",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "8736f3fe-6f02-48d1-87e1-d921fa26f0b9",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1669392188983
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [51.2993, 9.491],
				area: 200,
				country: "DE",
				city: "",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [1959510016, 1959526400],
				region: ""
			},
			ip: "116.203.250.188"
		},
		clusterID: "f2094db3-3d2b-47ee-8a96-d41cc3edd082",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "f2094db3-3d2b-47ee-8a96-d41cc3edd082",
			provider: "k3s",
			kubernetesVersion: "v1.25.4+k3s1"
		},
		timestamp: 1669385825015
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [22.2578, 114.1657],
				area: 50,
				country: "HK",
				city: "",
				timezone: "Asia/Hong_Kong",
				metro: 0,
				range: [1735746560, 1735747584],
				region: ""
			},
			ip: "103.117.102.138"
		},
		clusterID: "4b514da1-ba6b-4cd0-b857-f375fdcbe56f",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "7020m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "230414286848",
							memory: "7252M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "InBand",
					remoteClusterID: "83a4b877-ee8e-49c3-b4ae-c49961271927",
					discoveryType: "Manual",
					latency: 72000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "4b514da1-ba6b-4cd0-b857-f375fdcbe56f",
			provider: "k3s",
			kubernetesVersion: "v1.24.7+k3s1"
		},
		timestamp: 1668067698516
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [35796992, 35797248],
				region: "21"
			},
			ip: "2.34.56.150"
		},
		clusterID: "a3032597-92d9-4ffd-a247-02871e40816d",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "a3032597-92d9-4ffd-a247-02871e40816d",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668526325204
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [41.2591, -95.8517],
				area: 1000,
				country: "US",
				city: "Council Bluffs",
				timezone: "America/Chicago",
				metro: 652,
				range: [575012864, 575143936],
				region: "IA"
			},
			ip: "34.71.90.79"
		},
		clusterID: "255030ad-34cf-4116-be29-62ff074b9eab",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "255030ad-34cf-4116-be29-62ff074b9eab",
			provider: "k3s",
			kubernetesVersion: "v1.24.4+rke2r1"
		},
		timestamp: 1666919644672
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [19.0748, 72.8856],
				area: 1000,
				country: "IN",
				city: "Mumbai",
				timezone: "Asia/Kolkata",
				metro: 0,
				range: [50724864, 50855936],
				region: "MH"
			},
			ip: "3.6.229.158"
		},
		clusterID: "6b4b57a1-768f-432f-9a4f-a05e870be3fb",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "6b4b57a1-768f-432f-9a4f-a05e870be3fb",
			provider: "eks",
			kubernetesVersion: "v1.24.7-eks-fb459a0"
		},
		timestamp: 1669890967967
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [51.2993, 9.491],
				area: 200,
				country: "DE",
				city: "",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [1959510016, 1959526400],
				region: ""
			},
			ip: "116.203.250.188"
		},
		clusterID: "e0a06464-a651-4087-b048-78f7c7e1964a",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "e0a06464-a651-4087-b048-78f7c7e1964a",
			provider: "kubeadm",
			kubernetesVersion: "v1.23.14"
		},
		timestamp: 1669553405425
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.213.62"
		},
		clusterID: "fcc3084a-3b0e-4233-80c0-85ae0c8c11b7",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "110164040Ki",
							memory: "14215M",
							cpu: "5895m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "0e307eb2-1c6e-43f3-b0c2-59c68636da22",
					discoveryType: "Manual",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "fcc3084a-3b0e-4233-80c0-85ae0c8c11b7",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1669020308496
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.9273, -76.8545],
				area: 1000,
				country: "US",
				city: "Tappahannock",
				timezone: "America/New_York",
				metro: 556,
				range: [343474176, 343539712],
				region: "VA"
			},
			ip: "20.121.102.11"
		},
		clusterID: "58b61b26-0f87-4af2-ab8a-7b443ff0e3e0",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "6445m",
							"hugepages-2Mi": "0",
							pods: "180",
							"ephemeral-storage": "107732746240",
							memory: "25667M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "2bbe51f9-9149-47ef-936b-e84df0a802c2",
					discoveryType: "IncomingPeering",
					latency: 2000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "58b61b26-0f87-4af2-ab8a-7b443ff0e3e0",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1667487842246
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.9273, -76.8545],
				area: 50,
				country: "US",
				city: "Tappahannock",
				timezone: "America/New_York",
				metro: 556,
				range: [676102144, 676110336],
				region: "VA"
			},
			ip: "40.76.153.193"
		},
		clusterID: "2f3217d1-63c5-404c-8213-cb8c4abb5bf6",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "6445m",
							"hugepages-2Mi": "0",
							pods: "180",
							"ephemeral-storage": "107732746240",
							memory: "25667M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "42589b47-7e2e-4431-badf-9602fdb56bda",
					discoveryType: "Manual",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "2f3217d1-63c5-404c-8213-cb8c4abb5bf6",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1668577263798
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2296, 21.0067],
				area: 20,
				country: "PL",
				city: "Warsaw",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [578158592, 578191360],
				region: "14"
			},
			ip: "34.118.103.29"
		},
		clusterID: "505f47aa-572b-4b4e-9c70-2b5a0e6f9a61",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"attachable-volumes-gce-pd": "114",
							"ephemeral-storage": "42354061312",
							memory: "26236M",
							cpu: "6600m",
							"hugepages-2Mi": "0",
							pods: "99",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "68920e55-86bd-4e77-b7e7-21953d898047",
					discoveryType: "IncomingPeering",
					latency: 850000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "505f47aa-572b-4b4e-9c70-2b5a0e6f9a61",
			provider: "gke",
			kubernetesVersion: "v1.23.8-gke.1900"
		},
		timestamp: 1667314327435
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [12.9634, 77.5855],
				area: 200,
				country: "IN",
				city: "Bengaluru",
				timezone: "Asia/Kolkata",
				metro: 0,
				range: [824549632, 824549760],
				region: "KA"
			},
			ip: "49.37.161.78"
		},
		clusterID: "a0c98b03-d9dc-4e79-a9e2-19aaad55ab2c",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "a0c98b03-d9dc-4e79-a9e2-19aaad55ab2c",
			provider: "k3s",
			kubernetesVersion: "v1.25.0+k3s1"
		},
		timestamp: 1669933748909
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.751, -97.822],
				area: 1000,
				country: "US",
				city: "",
				timezone: "America/Chicago",
				metro: 0,
				range: [79691776, 80216064],
				region: ""
			},
			ip: "4.196.193.107"
		},
		clusterID: "0072daa9-8b50-4154-9169-b3dd2d78590d",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "0072daa9-8b50-4154-9169-b3dd2d78590d",
			kubernetesVersion: "v1.24.7+rke2r1"
		},
		timestamp: 1667538242800
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.3161, 9.206],
				area: 20,
				country: "IT",
				city: "Siziano",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2174222336, 2174230528],
				region: "25"
			},
			ip: "129.152.28.115"
		},
		clusterID: "654ae1b1-8445-4f49-a3cd-b07996701770",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "654ae1b1-8445-4f49-a3cd-b07996701770",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667328858664
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "c5be23d3-1e3d-410a-afee-3c93120b84b1",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "26814830Ki",
							memory: "27809M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "7b56db6a-32d5-4708-895c-3fd005200a10",
					discoveryType: "Manual",
					latency: 21000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "c5be23d3-1e3d-410a-afee-3c93120b84b1",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667150827904
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [45.5999, -121.1871],
				area: 20,
				country: "US",
				city: "The Dalles",
				timezone: "America/Los_Angeles",
				metro: 820,
				range: [1757806592, 1757810688],
				region: "OR"
			},
			ip: "104.198.8.60"
		},
		clusterID: "555ceabe-f138-4063-a821-b707d40ed8a4",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "555ceabe-f138-4063-a821-b707d40ed8a4",
			provider: "gke",
			kubernetesVersion: "v1.23.12-gke.100"
		},
		timestamp: 1669408462857
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [51.2993, 9.491],
				area: 200,
				country: "DE",
				city: "",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [1440153600, 1440219136],
				region: ""
			},
			ip: "85.215.194.22"
		},
		clusterID: "d94454d8-6724-4b0b-a674-25f6090585dd",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "d94454d8-6724-4b0b-a674-25f6090585dd",
			provider: "k3s",
			kubernetesVersion: "v1.25.3+k3s1"
		},
		timestamp: 1666884365929
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.751, -97.822],
				area: 1000,
				country: "US",
				city: "",
				timezone: "America/Chicago",
				metro: 0,
				range: [1078558720, 1078575104],
				region: ""
			},
			ip: "64.73.160.102"
		},
		clusterID: "1b3f7d77-8105-41d4-9f7d-5db463eb5973",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "1b3f7d77-8105-41d4-9f7d-5db463eb5973",
			provider: "kubeadm",
			kubernetesVersion: "v1.24.3"
		},
		timestamp: 1670425324057
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [43.7089, 10.4087],
				area: 100,
				country: "IT",
				city: "Pisa",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2205339648, 2205343744],
				region: "52"
			},
			ip: "131.114.208.147"
		},
		clusterID: "d3aa1158-6428-4877-a4a8-94feedadecb4",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "882067520Ki",
							memory: "59793M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "68f3954d-5092-49ab-ad46-c15e9b23e88c",
					discoveryType: "Manual",
					latency: 693000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "d3aa1158-6428-4877-a4a8-94feedadecb4",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1669105867623
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [-33.8715, 151.2006],
				area: 20,
				country: "AU",
				city: "Sydney",
				timezone: "Australia/Sydney",
				metro: 0,
				range: [351830016, 351862784],
				region: "NSW"
			},
			ip: "20.248.202.251"
		},
		clusterID: "607971fb-0a28-4786-9325-cf1e03422a1c",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "1543m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "26526658560",
							memory: "12828M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "a31eb659-580d-4400-a47b-6a5973364749",
					discoveryType: "Manual",
					latency: 1000000
				},
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "1543m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "26526658560",
							memory: "12828M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "08e3e7b4-ae54-496b-a53b-9eb78925aeb5",
					discoveryType: "Manual",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "607971fb-0a28-4786-9325-cf1e03422a1c",
			provider: "k3s",
			kubernetesVersion: "v1.24.4+k3s1"
		},
		timestamp: 1667178431484
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.213.62"
		},
		clusterID: "812d6950-014a-499d-b27f-66c5658b6bd4",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "110164040Ki",
							memory: "14215M",
							cpu: "5895m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "29fa1a08-aeca-4a2e-abd9-b664a7c4a796",
					discoveryType: "IncomingPeering",
					latency: 590000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "812d6950-014a-499d-b27f-66c5658b6bd4",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668165668811
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [43.7089, 10.4087],
				area: 100,
				country: "IT",
				city: "Pisa",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2205339648, 2205343744],
				region: "52"
			},
			ip: "131.114.208.186"
		},
		clusterID: "22ea4a3e-aebe-49b4-87e4-7f2fc5057114",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "882067520Ki",
							memory: "59793M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "35f12cf2-dce1-4d6e-92ea-94d0913571a5",
					discoveryType: "Manual",
					latency: 315000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "22ea4a3e-aebe-49b4-87e4-7f2fc5057114",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1669894684911
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [51.2993, 9.491],
				area: 200,
				country: "DE",
				city: "",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [88834048, 88866816],
				region: ""
			},
			ip: "5.75.158.125"
		},
		clusterID: "b2e224cb-eb65-43e2-9f63-c372e77f683d",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "23c3604a-8744-4fee-9e9d-8f28f7ff0933",
					discoveryType: "IncomingPeering"
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "b2e224cb-eb65-43e2-9f63-c372e77f683d",
			provider: "k3s",
			kubernetesVersion: "v1.24.6+k3s1"
		},
		timestamp: 1666775345712
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2296, 21.0067],
				area: 20,
				country: "PL",
				city: "Warsaw",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [578060288, 578093056],
				region: "14"
			},
			ip: "34.116.202.195"
		},
		clusterID: "c5890b4e-6796-49a5-b959-a8faa597f355",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"attachable-volumes-gce-pd": "228",
							"ephemeral-storage": "84708122624",
							memory: "24072M",
							cpu: "6098m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "68920e55-86bd-4e77-b7e7-21953d898047",
					discoveryType: "IncomingPeering",
					latency: 839000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "c5890b4e-6796-49a5-b959-a8faa597f355",
			provider: "gke",
			kubernetesVersion: "v1.23.8-gke.1900"
		},
		timestamp: 1667317447536
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [41.2591, -95.8517],
				area: 20,
				country: "US",
				city: "Council Bluffs",
				timezone: "America/Chicago",
				metro: 652,
				range: [2194894848, 2194898944],
				region: "IA"
			},
			ip: "130.211.121.60"
		},
		clusterID: "980b5d56-3b90-49dd-97fc-e4f8a93be9de",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "2407m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "55053352960",
							memory: "12817M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						resources: {
							cpu: "1435m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "55053352960",
							memory: "14569M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "556b53aa-5e5c-405d-9b97-05724644282e",
					discoveryType: "IncomingPeering",
					latency: 996000
				},
				{
					incoming: {
						resources: {
							cpu: "2407m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "55053352960",
							memory: "12817M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						resources: {
							cpu: "1543m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "55053352960",
							memory: "12817M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "eb0cd482-c7ad-4dea-999c-286e3bdc0907",
					discoveryType: "IncomingPeering",
					latency: 823000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "980b5d56-3b90-49dd-97fc-e4f8a93be9de",
			kubernetesVersion: "v1.24.7+rke2r1"
		},
		timestamp: 1669277344831
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "85ac6cf7-cab2-4c45-bcad-365ed176b5a0",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "80698792Ki",
							memory: "27809M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "00ea18bc-9dd1-4e3d-acfe-1a39ec95b661",
					discoveryType: "IncomingPeering",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "85ac6cf7-cab2-4c45-bcad-365ed176b5a0",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667378887649
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [50.1188, 8.6843],
				area: 20,
				country: "DE",
				city: "Frankfurt am Main",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [579665920, 579698688],
				region: "HE"
			},
			ip: "34.141.91.226"
		},
		clusterID: "cd103483-26f3-4c8d-83d7-ed5d85e9e253",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "cd103483-26f3-4c8d-83d7-ed5d85e9e253",
			provider: "gke",
			kubernetesVersion: "v1.23.8-gke.1900"
		},
		timestamp: 1667993586150
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [51.2993, 9.491],
				area: 200,
				country: "DE",
				city: "",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [1959510016, 1959526400],
				region: ""
			},
			ip: "116.203.250.188"
		},
		clusterID: "656559b4-1fe5-44b4-a154-ca5a1a3c4c3d",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "f2094db3-3d2b-47ee-8a96-d41cc3edd082",
					discoveryType: "Manual"
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "656559b4-1fe5-44b4-a154-ca5a1a3c4c3d",
			provider: "kubeadm",
			kubernetesVersion: "v1.23.14"
		},
		timestamp: 1669640943212
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [59.8983, 30.2618],
				area: 5,
				country: "RU",
				city: "St Petersburg",
				timezone: "Europe/Moscow",
				metro: 0,
				range: [3170082816, 3170091008],
				region: "SPE"
			},
			ip: "188.243.183.199"
		},
		clusterID: "5c86dd1d-a117-49d1-a971-5061683fb6c6",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "13860m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "492226183168",
							memory: "44742M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "5b2bedb4-05b7-4b2d-bc04-5c7057fe0365",
					discoveryType: "IncomingPeering",
					latency: 329000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "5c86dd1d-a117-49d1-a971-5061683fb6c6",
			provider: "k3s",
			kubernetesVersion: "v1.22.6+k3s1"
		},
		timestamp: 1667667066097
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [41.9008, 12.4874],
				area: 200,
				country: "IT",
				city: "",
				timezone: "Europe/Rome",
				metro: 0,
				range: [631455744, 631463936],
				region: "62"
			},
			ip: "37.163.65.225"
		},
		clusterID: "75fdd9a6-5930-4888-8592-6ba1b8ec11cf",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "75fdd9a6-5930-4888-8592-6ba1b8ec11cf",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1670440930957
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [51.2993, 9.491],
				area: 200,
				country: "DE",
				city: "",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [1959510016, 1959526400],
				region: ""
			},
			ip: "116.203.250.188"
		},
		clusterID: "ac44a996-d1e8-4759-ab3e-979753e8b306",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "ac44a996-d1e8-4759-ab3e-979753e8b306",
			provider: "kubeadm",
			kubernetesVersion: "v1.23.14"
		},
		timestamp: 1669399565137
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.212.33"
		},
		clusterID: "109e304a-10cc-464a-8567-85acbc72a6d4",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "109e304a-10cc-464a-8567-85acbc72a6d4",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666941912641
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.9273, -76.8545],
				area: 20,
				country: "US",
				city: "Tappahannock",
				timezone: "America/New_York",
				metro: 556,
				range: [351698944, 351731712],
				region: "VA"
			},
			ip: "20.246.230.136"
		},
		clusterID: "db0a005b-1899-46d1-bc57-bfae526694b6",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "db0a005b-1899-46d1-bc57-bfae526694b6",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1669188483988
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.213.62"
		},
		clusterID: "ba16b045-3db4-45e3-a955-f0a46995e945",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "110164040Ki",
							memory: "14215M",
							cpu: "5895m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "c8089def-7f00-4d37-ac0f-5929f40494fc",
					discoveryType: "IncomingPeering",
					latency: 730000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "ba16b045-3db4-45e3-a955-f0a46995e945",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668759964811
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [47.3682, 8.5671],
				area: 200,
				country: "CH",
				city: "Zurich",
				timezone: "Europe/Zurich",
				metro: 0,
				range: [531361792, 531362816],
				region: "ZH"
			},
			ip: "31.171.241.213"
		},
		clusterID: "e0142f36-3a1f-4cbb-bcf5-879ba29be344",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "e0142f36-3a1f-4cbb-bcf5-879ba29be344",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.4"
		},
		timestamp: 1668513488084
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [51.2993, 9.491],
				area: 200,
				country: "DE",
				city: "",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [3107492864, 3107493888],
				region: ""
			},
			ip: "185.56.150.157"
		},
		clusterID: "bb84d9dd-2c1d-468b-8129-cadb95eb5ebe",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "bb84d9dd-2c1d-468b-8129-cadb95eb5ebe",
			provider: "k3s",
			kubernetesVersion: "v1.24.6+k3s1"
		},
		timestamp: 1666717441756
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.213.62"
		},
		clusterID: "ca36b620-ba4d-4897-b793-828d068cb466",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "110164040Ki",
							memory: "14499M",
							cpu: "6255m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "6d6e837d-7185-4d07-9611-de4c06a20283",
					discoveryType: "Manual",
					latency: 431000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "ca36b620-ba4d-4897-b793-828d068cb466",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668535086181
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.212.33"
		},
		clusterID: "d14e38e2-ea49-452c-8afe-8641e04643a6",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "110164040Ki",
							memory: "14499M",
							cpu: "6255m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "c666409c-f173-42f0-b995-94868b39882b",
					discoveryType: "Manual",
					latency: 756000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "d14e38e2-ea49-452c-8afe-8641e04643a6",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666891326373
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [35.3274, 25.1281],
				area: 5,
				country: "GR",
				city: "Heraklion",
				timezone: "Europe/Athens",
				metro: 0,
				range: [2472501248, 2472509440],
				region: "M"
			},
			ip: "147.95.122.134"
		},
		clusterID: "cc9b6177-f1f2-4480-8378-a89040e07a1b",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "cc9b6177-f1f2-4480-8378-a89040e07a1b",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.4"
		},
		timestamp: 1670493362891
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [36.7161, 3.1732],
				area: 10,
				country: "DZ",
				city: "Bab Ezzouar",
				timezone: "Africa/Algiers",
				metro: 0,
				range: [1768116224, 1768117248],
				region: "16"
			},
			ip: "105.99.82.181"
		},
		clusterID: "11f72d4d-1dbf-4906-a72c-aacedbd5c709",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "11f72d4d-1dbf-4906-a72c-aacedbd5c709",
			provider: "kind",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1668514054354
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.751, -97.822],
				area: 1000,
				country: "US",
				city: "",
				timezone: "America/Chicago",
				metro: 0,
				range: [79691776, 80216064],
				region: ""
			},
			ip: "4.196.219.202"
		},
		clusterID: "08e3e7b4-ae54-496b-a53b-9eb78925aeb5",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "1543m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "26526658560",
							memory: "12828M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "607971fb-0a28-4786-9325-cf1e03422a1c",
					discoveryType: "IncomingPeering",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "08e3e7b4-ae54-496b-a53b-9eb78925aeb5",
			provider: "k3s",
			kubernetesVersion: "v1.24.4+rke2r1"
		},
		timestamp: 1667178430478
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.213.62"
		},
		clusterID: "8f492e8b-edfc-4e18-887a-00c16d3b0977",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "8f492e8b-edfc-4e18-887a-00c16d3b0977",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668156428125
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [64782336, 64790528],
				region: "VA"
			},
			ip: "3.220.146.167"
		},
		clusterID: "c2106935-97c3-4223-956d-93e1cb7dc06b",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "c2106935-97c3-4223-956d-93e1cb7dc06b",
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1669207864471
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [43.1479, 12.1097],
				area: 200,
				country: "IT",
				city: "",
				timezone: "Europe/Rome",
				metro: 0,
				range: [631406592, 631407616],
				region: ""
			},
			ip: "37.162.130.211"
		},
		clusterID: "2539a9e9-8c83-4305-8033-614daf0d106e",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "9945m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "179964Mi",
							memory: "14605M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "InBand",
					remoteClusterID: "6fb4486f-3c82-4916-8f07-5efb089332ac",
					discoveryType: "Manual",
					latency: 9000000
				}
			],
			liqoVersion: "9f345fdfa30653103386f885b9bcf474ca4ef648",
			clusterID: "2539a9e9-8c83-4305-8033-614daf0d106e",
			provider: "kind",
			kubernetesVersion: "v1.23.0"
		},
		timestamp: 1666911305489
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2296, 21.0067],
				area: 20,
				country: "PL",
				city: "Warsaw",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [578060288, 578093056],
				region: "14"
			},
			ip: "34.116.149.47"
		},
		clusterID: "d311afca-3b46-40e5-969a-42a7f1b49dee",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"attachable-volumes-gce-pd": "114",
							"ephemeral-storage": "42354061312",
							memory: "26236M",
							cpu: "6600m",
							"hugepages-2Mi": "0",
							pods: "99",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "c0875bf8-62f4-4556-b2c1-90ebcdfff9bb",
					discoveryType: "IncomingPeering",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "d311afca-3b46-40e5-969a-42a7f1b49dee",
			provider: "gke",
			kubernetesVersion: "v1.23.8-gke.1900"
		},
		timestamp: 1666807026802
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [35.6897, 139.6895],
				area: 500,
				country: "JP",
				city: "",
				timezone: "Asia/Tokyo",
				metro: 0,
				range: [2130116608, 2130149376],
				region: ""
			},
			ip: "126.247.84.169"
		},
		clusterID: "b723e179-45c8-41b6-a5e7-92ec81e29ecd",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "b723e179-45c8-41b6-a5e7-92ec81e29ecd",
			provider: "kind",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1667890215680
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [51.2993, 9.491],
				area: 200,
				country: "DE",
				city: "",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [1959510016, 1959526400],
				region: ""
			},
			ip: "116.203.250.188"
		},
		clusterID: "3a1dbbba-79d2-42d1-8349-e5493b5742e5",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "3a1dbbba-79d2-42d1-8349-e5493b5742e5",
			provider: "k3s",
			kubernetesVersion: "v1.25.4+k3s1"
		},
		timestamp: 1669662001427
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [40.867, 14.2385],
				area: 200,
				country: "IT",
				city: "Naples",
				timezone: "Europe/Rome",
				metro: 0,
				range: [36557824, 36558336],
				region: "72"
			},
			ip: "2.45.213.161"
		},
		clusterID: "0c717468-26dc-412a-8952-4b4d3acc2386",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "473713568Ki",
							memory: "10700M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "5623d766-692c-4767-8b6f-2f9b4d65d1c4",
					discoveryType: "Manual",
					latency: 30000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "0c717468-26dc-412a-8952-4b4d3acc2386",
			namespacesInfo: [
				{
					uid: "8bffa6a2-4a06-427e-9f2a-7a4b2dd58280",
					offloadingStrategy: "LocalAndRemote",
					mappingStrategy: "DefaultName",
					numOffloadedPods: {
						"5623d766-692c-4767-8b6f-2f9b4d65d1c4": 0
					}
				}
			],
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666777099374
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [598276096, 598278144],
				region: "VA"
			},
			ip: "35.168.249.34"
		},
		clusterID: "84f1456c-cd85-4889-9757-a0beba3288cf",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "84f1456c-cd85-4889-9757-a0beba3288cf",
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1669636684136
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [37.2872, 127.0116],
				area: 20,
				country: "KR",
				city: "Suwon",
				timezone: "Asia/Seoul",
				metro: 0,
				range: [2093096960, 2093101056],
				region: "41"
			},
			ip: "124.194.34.5"
		},
		clusterID: "2e9f7787-c40a-45a6-bf76-4445e7b67a3e",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "2e9f7787-c40a-45a6-bf76-4445e7b67a3e",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.3"
		},
		timestamp: 1667984829813
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.8087, 9.0872],
				area: 200,
				country: "IT",
				city: "Como",
				timezone: "Europe/Rome",
				metro: 0,
				range: [3286720512, 3286721024],
				region: "25"
			},
			ip: "195.231.96.134"
		},
		clusterID: "2e5fe8c5-a3c5-46c9-a13e-1a6423e5bf0c",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "31365m",
							"hugepages-2Mi": "0",
							pods: "297",
							"ephemeral-storage": "710570368Ki",
							memory: "44823M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "8cbf8a13-061f-45e9-b82e-b5577534cbcb",
					discoveryType: "IncomingPeering",
					latency: 606000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "2e5fe8c5-a3c5-46c9-a13e-1a6423e5bf0c",
			provider: "kind",
			kubernetesVersion: "v1.25.2"
		},
		timestamp: 1667406615774
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2296, 21.0067],
				area: 20,
				country: "PL",
				city: "Warsaw",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [578158592, 578191360],
				region: "14"
			},
			ip: "34.118.18.164"
		},
		clusterID: "c0875bf8-62f4-4556-b2c1-90ebcdfff9bb",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							"attachable-volumes-gce-pd": "114",
							"ephemeral-storage": "42354061312",
							memory: "26236M",
							cpu: "6600m",
							"hugepages-2Mi": "0",
							pods: "99",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "f622d4ad-58de-4318-b6ca-c38711470180",
					discoveryType: "Manual",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "c0875bf8-62f4-4556-b2c1-90ebcdfff9bb",
			provider: "gke",
			kubernetesVersion: "v1.23.8-gke.1900"
		},
		timestamp: 1666806730064
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [387284992, 387293184],
				region: "VA"
			},
			ip: "23.21.130.22"
		},
		clusterID: "1e2357fa-04cb-4c33-abe2-a87c858003f1",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "1e2357fa-04cb-4c33-abe2-a87c858003f1",
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1669619644079
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [46.0682, 11.114],
				area: 100,
				country: "IT",
				city: "Trento",
				timezone: "Europe/Rome",
				metro: 0,
				range: [3645722624, 3645726720],
				region: "32"
			},
			ip: "217.77.82.232"
		},
		clusterID: "c5a18fc1-f99d-4dec-8123-1d3ef4c2c738",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "c5a18fc1-f99d-4dec-8123-1d3ef4c2c738",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667378768643
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2394, 21.0362],
				area: 200,
				country: "PL",
				city: "",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [3106990080, 3106991104],
				region: ""
			},
			ip: "185.48.232.43"
		},
		clusterID: "a99fc888-99ef-40a8-81fb-e6f4898b5fe7",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "85455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "218979434496",
							memory: "486111M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "4acb4c68-ade0-49bd-a24d-de6486c222d9",
					discoveryType: "IncomingPeering",
					latency: 1000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "a99fc888-99ef-40a8-81fb-e6f4898b5fe7",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.4"
		},
		timestamp: 1669105085752
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.3161, 9.206],
				area: 20,
				country: "IT",
				city: "Siziano",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2174222336, 2174230528],
				region: "25"
			},
			ip: "129.152.22.80"
		},
		clusterID: "4dc4d363-8718-4091-bca4-35960c6e055d",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "4dc4d363-8718-4091-bca4-35960c6e055d",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667258765602
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [40.867, 14.2385],
				area: 200,
				country: "IT",
				city: "Naples",
				timezone: "Europe/Rome",
				metro: 0,
				range: [36557824, 36558336],
				region: "72"
			},
			ip: "2.45.213.161"
		},
		clusterID: "266dd9b4-fe85-43e6-afcb-28ffa764a2d1",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "473713568Ki",
							memory: "10700M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "2875d68b-c47b-4867-83c8-c7bc7f122a5e",
					discoveryType: "IncomingPeering",
					latency: 3000000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "266dd9b4-fe85-43e6-afcb-28ffa764a2d1",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666870457254
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2394, 21.0362],
				area: 200,
				country: "PL",
				city: "",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [3106990080, 3106991104],
				region: ""
			},
			ip: "185.48.232.43"
		},
		clusterID: "5dcc74aa-52ce-4455-920d-af8002c1b033",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "85455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "218979434496",
							memory: "486111M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "c92b7252-864d-45a3-a860-7e2873781d3b",
					discoveryType: "IncomingPeering",
					latency: 701000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "5dcc74aa-52ce-4455-920d-af8002c1b033",
			provider: "kubeadm",
			kubernetesVersion: "v1.25.4"
		},
		timestamp: 1669298405097
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [751828992, 752877568],
				region: "VA"
			},
			ip: "44.212.227.28"
		},
		clusterID: "fdc1481e-ce32-4d1a-a874-0fb24162f559",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "fdc1481e-ce32-4d1a-a874-0fb24162f559",
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1670918704205
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "29f94b9e-a41a-42d9-9495-852068d63540",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "29f94b9e-a41a-42d9-9495-852068d63540",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667383326942
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [19.0748, 72.8856],
				area: 1000,
				country: "IN",
				city: "Mumbai",
				timezone: "Asia/Kolkata",
				metro: 0,
				range: [50724864, 50855936],
				region: "MH"
			},
			ip: "3.6.229.158"
		},
		clusterID: "b6ad7932-e5f9-438a-8f98-8970469a2528",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "b6ad7932-e5f9-438a-8f98-8970469a2528",
			provider: "eks",
			kubernetesVersion: "v1.24.7-eks-fb459a0"
		},
		timestamp: 1669934282411
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.212.33"
		},
		clusterID: "c666409c-f173-42f0-b995-94868b39882b",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "110164040Ki",
							memory: "14499M",
							cpu: "6255m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "d14e38e2-ea49-452c-8afe-8641e04643a6",
					discoveryType: "IncomingPeering",
					latency: 402000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "c666409c-f173-42f0-b995-94868b39882b",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666891445013
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [35.3274, 25.1281],
				area: 5,
				country: "GR",
				city: "Heraklion",
				timezone: "Europe/Athens",
				metro: 0,
				range: [2472501248, 2472509440],
				region: "M"
			},
			ip: "147.95.122.135"
		},
		clusterID: "07727549-cca5-4c56-9341-3912673f2f2c",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "07727549-cca5-4c56-9341-3912673f2f2c",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1670240766057
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [50.1188, 8.6843],
				area: 1000,
				country: "DE",
				city: "Frankfurt am Main",
				timezone: "Europe/Berlin",
				metro: 0,
				range: [54525952, 55574528],
				region: "HE"
			},
			ip: "3.71.110.193"
		},
		clusterID: "70abc289-f22a-4892-a799-a39a4e07aeb8",
		telemetry: {
			liqoVersion: "v0.6.1",
			clusterID: "70abc289-f22a-4892-a799-a39a4e07aeb8",
			provider: "k3s",
			kubernetesVersion: "v1.24.7+rke2r1"
		},
		timestamp: 1669726925221
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.2394, 21.0362],
				area: 200,
				country: "PL",
				city: "",
				timezone: "Europe/Warsaw",
				metro: 0,
				range: [3106990080, 3106991104],
				region: ""
			},
			ip: "185.48.232.43"
		},
		clusterID: "cc8ac7c5-bfba-4f9b-84b9-340af1a51ee1",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "85455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "184727216Ki",
							memory: "486300M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "c54e72c9-b7ca-44d6-8b37-d39a711a3c5f",
					discoveryType: "IncomingPeering",
					latency: 887000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "cc8ac7c5-bfba-4f9b-84b9-340af1a51ee1",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667391486598
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [583155712, 583163904],
				region: "VA"
			},
			ip: "34.194.86.98"
		},
		clusterID: "5cdeebb7-8136-4998-bbbc-cad3d5431652",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "5cdeebb7-8136-4998-bbbc-cad3d5431652",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666784523643
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [-33.8715, 151.2006],
				area: 20,
				country: "AU",
				city: "Sydney",
				timezone: "Australia/Sydney",
				metro: 0,
				range: [599588864, 599597056],
				region: "NSW"
			},
			ip: "35.189.29.24"
		},
		clusterID: "44680c30-d120-4259-a519-c3c02bc08721",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "44680c30-d120-4259-a519-c3c02bc08721",
			provider: "gke",
			kubernetesVersion: "v1.22.12-gke.1200"
		},
		timestamp: 1667213231452
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [52.3759, 4.8975],
				area: 20,
				country: "NL",
				city: "Amsterdam",
				timezone: "Europe/Amsterdam",
				metro: 0,
				range: [678592512, 678608896],
				region: "NH"
			},
			ip: "40.114.190.106"
		},
		clusterID: "b403466e-07bb-4a0c-9855-69e5127d0e8f",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "b403466e-07bb-4a0c-9855-69e5127d0e8f",
			provider: "aks",
			kubernetesVersion: "v1.23.12"
		},
		timestamp: 1666959726091
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 10,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [521902592, 521902848],
				region: "21"
			},
			ip: "31.27.154.6"
		},
		clusterID: "58d8bfc8-6ba1-4c42-af15-f920912b255e",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "58d8bfc8-6ba1-4c42-af15-f920912b255e",
			provider: "kind",
			kubernetesVersion: "v1.25.2"
		},
		timestamp: 1667344927886
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [43.7089, 10.4087],
				area: 100,
				country: "IT",
				city: "Pisa",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2205339648, 2205343744],
				region: "52"
			},
			ip: "131.114.208.147"
		},
		clusterID: "15eb1748-a85d-42c4-80c6-197df85b2d1e",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "15eb1748-a85d-42c4-80c6-197df85b2d1e",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1668771731527
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [39.0469, -77.4903],
				area: 1000,
				country: "US",
				city: "Ashburn",
				timezone: "America/New_York",
				metro: 511,
				range: [751828992, 752877568],
				region: "VA"
			},
			ip: "44.213.29.166"
		},
		clusterID: "cbf00cbc-6dbc-43fc-87e8-8562c0c3cf1f",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						enabled: false
					},
					method: "InBand",
					remoteClusterID: "9cad7d20-adef-44ed-8916-22c11872cfcf",
					discoveryType: "Manual"
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "cbf00cbc-6dbc-43fc-87e8-8562c0c3cf1f",
			provider: "eks",
			kubernetesVersion: "v1.23.13-eks-fb459a0"
		},
		timestamp: 1669633083386
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 200,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2193680576, 2193680608],
				region: "21"
			},
			ip: "130.192.232.215"
		},
		clusterID: "2c75d0dc-ec14-4d9c-8149-f4c6260906e4",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "2c75d0dc-ec14-4d9c-8149-f4c6260906e4",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667297227436
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 10,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [521902592, 521902848],
				region: "21"
			},
			ip: "31.27.154.6"
		},
		clusterID: "9ce11aef-7408-4be2-86cf-2ce851c982d7",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "9ce11aef-7408-4be2-86cf-2ce851c982d7",
			provider: "kind",
			kubernetesVersion: "v1.25.2"
		},
		timestamp: 1667324409083
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [47.2455, 6.0209],
				area: 100,
				country: "FR",
				city: "Besançon",
				timezone: "Europe/Paris",
				metro: 0,
				range: [2962603008, 2962603520],
				region: "BFC"
			},
			ip: "176.149.189.81"
		},
		clusterID: "2da067ae-ef57-411e-81d1-758deda8ddf4",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "2da067ae-ef57-411e-81d1-758deda8ddf4",
			provider: "kind",
			kubernetesVersion: "v1.23.4"
		},
		timestamp: 1668771636427
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 5,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1562760192, 1562761216],
				region: "21"
			},
			ip: "93.37.212.33"
		},
		clusterID: "6a5e2d0f-4db4-4396-9f93-997a577894c8",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							"hugepages-32Mi": "0",
							"ephemeral-storage": "110164040Ki",
							memory: "14499M",
							cpu: "6255m",
							"hugepages-2Mi": "0",
							pods: "198",
							"hugepages-64Ki": "0",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "8c67037c-f07f-44b6-8e8d-68751846af02",
					discoveryType: "Manual",
					latency: 522000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "6a5e2d0f-4db4-4396-9f93-997a577894c8",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667377568154
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [59.8983, 30.2618],
				area: 5,
				country: "RU",
				city: "St Petersburg",
				timezone: "Europe/Moscow",
				metro: 0,
				range: [3170082816, 3170091008],
				region: "SPE"
			},
			ip: "188.243.183.199"
		},
		clusterID: "d1ae21a7-6178-461b-aa03-50faf237acc3",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "13455m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "505989088Ki",
							memory: "44838M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "71a05429-7454-4673-bd27-d04fad34ebac",
					discoveryType: "Manual",
					latency: 298000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "d1ae21a7-6178-461b-aa03-50faf237acc3",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1667315290974
	},
	{
		ip: {
			geo: {
				eu: "0",
				ll: [-33.8715, 151.2006],
				area: 1000,
				country: "AU",
				city: "Sydney",
				timezone: "Australia/Sydney",
				metro: 0,
				range: [335872000, 335937536],
				region: "NSW"
			},
			ip: "20.5.91.75"
		},
		clusterID: "d7d44dbe-f1aa-491f-8e7a-0b860724259b",
		telemetry: {
			liqoVersion: "v0.6.0",
			clusterID: "d7d44dbe-f1aa-491f-8e7a-0b860724259b",
			kubernetesVersion: "v1.24.6+rke2r1"
		},
		timestamp: 1666870390780
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.4722, 9.1922],
				area: 5,
				country: "IT",
				city: "Milan",
				timezone: "Europe/Rome",
				metro: 0,
				range: [2182727168, 2182727680],
				region: "25"
			},
			ip: "130.25.199.252"
		},
		clusterID: "96a26e36-2a15-440c-8aac-1f87d7194305",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						enabled: false
					},
					outgoing: {
						resources: {
							cpu: "6255m",
							"hugepages-2Mi": "0",
							pods: "198",
							"ephemeral-storage": "110259880Ki",
							memory: "14515M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					method: "OutOfBand",
					remoteClusterID: "4c97d91b-6eb5-466e-b434-630d140ca6a2",
					discoveryType: "Manual",
					latency: 690000
				}
			],
			liqoVersion: "v0.6.0",
			clusterID: "96a26e36-2a15-440c-8aac-1f87d7194305",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1666715405771
	},
	{
		ip: {
			geo: {
				eu: "1",
				ll: [45.0914, 7.6639],
				area: 50,
				country: "IT",
				city: "Turin",
				timezone: "Europe/Rome",
				metro: 0,
				range: [1460001536, 1460001792],
				region: "21"
			},
			ip: "87.5.219.162"
		},
		clusterID: "1d071f78-217b-4fab-905f-99e075f43f6b",
		telemetry: {
			peeringInfo: [
				{
					incoming: {
						resources: {
							cpu: "13545m",
							"hugepages-2Mi": "0",
							pods: "99",
							"ephemeral-storage": "184782608Ki",
							memory: "14257M",
							"hugepages-1Gi": "0"
						},
						enabled: true
					},
					outgoing: {
						enabled: false
					},
					method: "OutOfBand",
					remoteClusterID: "fd75e192-404e-401f-993f-9f3e920432d4",
					discoveryType: "IncomingPeering",
					latency: 561000
				}
			],
			liqoVersion: "v0.6.1",
			clusterID: "1d071f78-217b-4fab-905f-99e075f43f6b",
			provider: "kind",
			kubernetesVersion: "v1.23.6"
		},
		timestamp: 1670351418467
	}
];

export default value;
