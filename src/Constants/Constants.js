export const polygonContractAddress= ""
export const ShardeumContractAddress= ""
// export const ETHContractAddress= "0x055B6FF659Ea52f5d99fcc7A9827d7f2DCC39372" // Goerli TestNet
export const ETHContractAddress= "0x47bEe0Ef49213b1427f2C3be0920C0A14EFF8387" // Goerli TestNet

export const contractABI =[
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "_tokens",
				"type": "address[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "nativeTokenDeposite",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tokenDeposite",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			}
		],
		"name": "deposite",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "depositeNative",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			}
		],
		"name": "receivedAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "receivedNative",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tokens",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawNative",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
export const contractByteCode = {
	"functionDebugData": {
		"@_224": {
			"entryPoint": null,
			"id": 224,
			"parameterSlots": 1,
			"returnSlots": 0
		},
		"@_23": {
			"entryPoint": null,
			"id": 23,
			"parameterSlots": 0,
			"returnSlots": 0
		},
		"@_msgSender_194": {
			"entryPoint": 119,
			"id": 194,
			"parameterSlots": 0,
			"returnSlots": 1
		},
		"@_transferOwnership_103": {
			"entryPoint": 127,
			"id": 103,
			"parameterSlots": 1,
			"returnSlots": 0
		},
		"abi_decode_available_length_t_array$_t_address_$dyn_memory_ptr_fromMemory": {
			"entryPoint": 824,
			"id": null,
			"parameterSlots": 3,
			"returnSlots": 1
		},
		"abi_decode_t_address_fromMemory": {
			"entryPoint": 801,
			"id": null,
			"parameterSlots": 2,
			"returnSlots": 1
		},
		"abi_decode_t_array$_t_address_$dyn_memory_ptr_fromMemory": {
			"entryPoint": 940,
			"id": null,
			"parameterSlots": 2,
			"returnSlots": 1
		},
		"abi_decode_tuple_t_array$_t_address_$dyn_memory_ptr_fromMemory": {
			"entryPoint": 991,
			"id": null,
			"parameterSlots": 2,
			"returnSlots": 1
		},
		"allocate_memory": {
			"entryPoint": 640,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 1
		},
		"allocate_unbounded": {
			"entryPoint": 497,
			"id": null,
			"parameterSlots": 0,
			"returnSlots": 1
		},
		"array_allocation_size_t_array$_t_address_$dyn_memory_ptr": {
			"entryPoint": 671,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 1
		},
		"cleanup_t_address": {
			"entryPoint": 755,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 1
		},
		"cleanup_t_uint160": {
			"entryPoint": 723,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 1
		},
		"finalize_allocation": {
			"entryPoint": 586,
			"id": null,
			"parameterSlots": 2,
			"returnSlots": 0
		},
		"panic_error_0x41": {
			"entryPoint": 539,
			"id": null,
			"parameterSlots": 0,
			"returnSlots": 0
		},
		"revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d": {
			"entryPoint": 517,
			"id": null,
			"parameterSlots": 0,
			"returnSlots": 0
		},
		"revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef": {
			"entryPoint": 718,
			"id": null,
			"parameterSlots": 0,
			"returnSlots": 0
		},
		"revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db": {
			"entryPoint": 512,
			"id": null,
			"parameterSlots": 0,
			"returnSlots": 0
		},
		"revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b": {
			"entryPoint": 507,
			"id": null,
			"parameterSlots": 0,
			"returnSlots": 0
		},
		"round_up_to_mul_of_32": {
			"entryPoint": 522,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 1
		},
		"validator_revert_t_address": {
			"entryPoint": 775,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 0
		}
	},
	"generatedSources": [
		{
			"ast": {
				"nodeType": "YulBlock",
				"src": "0:3844:4",
				"statements": [
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "47:35:4",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "57:19:4",
									"value": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "73:2:4",
												"type": "",
												"value": "64"
											}
										],
										"functionName": {
											"name": "mload",
											"nodeType": "YulIdentifier",
											"src": "67:5:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "67:9:4"
									},
									"variableNames": [
										{
											"name": "memPtr",
											"nodeType": "YulIdentifier",
											"src": "57:6:4"
										}
									]
								}
							]
						},
						"name": "allocate_unbounded",
						"nodeType": "YulFunctionDefinition",
						"returnVariables": [
							{
								"name": "memPtr",
								"nodeType": "YulTypedName",
								"src": "40:6:4",
								"type": ""
							}
						],
						"src": "7:75:4"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "177:28:4",
							"statements": [
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "194:1:4",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "197:1:4",
												"type": "",
												"value": "0"
											}
										],
										"functionName": {
											"name": "revert",
											"nodeType": "YulIdentifier",
											"src": "187:6:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "187:12:4"
									},
									"nodeType": "YulExpressionStatement",
									"src": "187:12:4"
								}
							]
						},
						"name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
						"nodeType": "YulFunctionDefinition",
						"src": "88:117:4"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "300:28:4",
							"statements": [
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "317:1:4",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "320:1:4",
												"type": "",
												"value": "0"
											}
										],
										"functionName": {
											"name": "revert",
											"nodeType": "YulIdentifier",
											"src": "310:6:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "310:12:4"
									},
									"nodeType": "YulExpressionStatement",
									"src": "310:12:4"
								}
							]
						},
						"name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
						"nodeType": "YulFunctionDefinition",
						"src": "211:117:4"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "423:28:4",
							"statements": [
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "440:1:4",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "443:1:4",
												"type": "",
												"value": "0"
											}
										],
										"functionName": {
											"name": "revert",
											"nodeType": "YulIdentifier",
											"src": "433:6:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "433:12:4"
									},
									"nodeType": "YulExpressionStatement",
									"src": "433:12:4"
								}
							]
						},
						"name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
						"nodeType": "YulFunctionDefinition",
						"src": "334:117:4"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "505:54:4",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "515:38:4",
									"value": {
										"arguments": [
											{
												"arguments": [
													{
														"name": "value",
														"nodeType": "YulIdentifier",
														"src": "533:5:4"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "540:2:4",
														"type": "",
														"value": "31"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "529:3:4"
												},
												"nodeType": "YulFunctionCall",
												"src": "529:14:4"
											},
											{
												"arguments": [
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "549:2:4",
														"type": "",
														"value": "31"
													}
												],
												"functionName": {
													"name": "not",
													"nodeType": "YulIdentifier",
													"src": "545:3:4"
												},
												"nodeType": "YulFunctionCall",
												"src": "545:7:4"
											}
										],
										"functionName": {
											"name": "and",
											"nodeType": "YulIdentifier",
											"src": "525:3:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "525:28:4"
									},
									"variableNames": [
										{
											"name": "result",
											"nodeType": "YulIdentifier",
											"src": "515:6:4"
										}
									]
								}
							]
						},
						"name": "round_up_to_mul_of_32",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "value",
								"nodeType": "YulTypedName",
								"src": "488:5:4",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "result",
								"nodeType": "YulTypedName",
								"src": "498:6:4",
								"type": ""
							}
						],
						"src": "457:102:4"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "593:152:4",
							"statements": [
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "610:1:4",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "613:77:4",
												"type": "",
												"value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "603:6:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "603:88:4"
									},
									"nodeType": "YulExpressionStatement",
									"src": "603:88:4"
								},
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "707:1:4",
												"type": "",
												"value": "4"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "710:4:4",
												"type": "",
												"value": "0x41"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "700:6:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "700:15:4"
									},
									"nodeType": "YulExpressionStatement",
									"src": "700:15:4"
								},
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "731:1:4",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "734:4:4",
												"type": "",
												"value": "0x24"
											}
										],
										"functionName": {
											"name": "revert",
											"nodeType": "YulIdentifier",
											"src": "724:6:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "724:15:4"
									},
									"nodeType": "YulExpressionStatement",
									"src": "724:15:4"
								}
							]
						},
						"name": "panic_error_0x41",
						"nodeType": "YulFunctionDefinition",
						"src": "565:180:4"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "794:238:4",
							"statements": [
								{
									"nodeType": "YulVariableDeclaration",
									"src": "804:58:4",
									"value": {
										"arguments": [
											{
												"name": "memPtr",
												"nodeType": "YulIdentifier",
												"src": "826:6:4"
											},
											{
												"arguments": [
													{
														"name": "size",
														"nodeType": "YulIdentifier",
														"src": "856:4:4"
													}
												],
												"functionName": {
													"name": "round_up_to_mul_of_32",
													"nodeType": "YulIdentifier",
													"src": "834:21:4"
												},
												"nodeType": "YulFunctionCall",
												"src": "834:27:4"
											}
										],
										"functionName": {
											"name": "add",
											"nodeType": "YulIdentifier",
											"src": "822:3:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "822:40:4"
									},
									"variables": [
										{
											"name": "newFreePtr",
											"nodeType": "YulTypedName",
											"src": "808:10:4",
											"type": ""
										}
									]
								},
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "973:22:4",
										"statements": [
											{
												"expression": {
													"arguments": [],
													"functionName": {
														"name": "panic_error_0x41",
														"nodeType": "YulIdentifier",
														"src": "975:16:4"
													},
													"nodeType": "YulFunctionCall",
													"src": "975:18:4"
												},
												"nodeType": "YulExpressionStatement",
												"src": "975:18:4"
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"arguments": [
													{
														"name": "newFreePtr",
														"nodeType": "YulIdentifier",
														"src": "916:10:4"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "928:18:4",
														"type": "",
														"value": "0xffffffffffffffff"
													}
												],
												"functionName": {
													"name": "gt",
													"nodeType": "YulIdentifier",
													"src": "913:2:4"
												},
												"nodeType": "YulFunctionCall",
												"src": "913:34:4"
											},
											{
												"arguments": [
													{
														"name": "newFreePtr",
														"nodeType": "YulIdentifier",
														"src": "952:10:4"
													},
													{
														"name": "memPtr",
														"nodeType": "YulIdentifier",
														"src": "964:6:4"
													}
												],
												"functionName": {
													"name": "lt",
													"nodeType": "YulIdentifier",
													"src": "949:2:4"
												},
												"nodeType": "YulFunctionCall",
												"src": "949:22:4"
											}
										],
										"functionName": {
											"name": "or",
											"nodeType": "YulIdentifier",
											"src": "910:2:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "910:62:4"
									},
									"nodeType": "YulIf",
									"src": "907:88:4"
								},
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "1011:2:4",
												"type": "",
												"value": "64"
											},
											{
												"name": "newFreePtr",
												"nodeType": "YulIdentifier",
												"src": "1015:10:4"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "1004:6:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "1004:22:4"
									},
									"nodeType": "YulExpressionStatement",
									"src": "1004:22:4"
								}
							]
						},
						"name": "finalize_allocation",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "memPtr",
								"nodeType": "YulTypedName",
								"src": "780:6:4",
								"type": ""
							},
							{
								"name": "size",
								"nodeType": "YulTypedName",
								"src": "788:4:4",
								"type": ""
							}
						],
						"src": "751:281:4"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "1079:88:4",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "1089:30:4",
									"value": {
										"arguments": [],
										"functionName": {
											"name": "allocate_unbounded",
											"nodeType": "YulIdentifier",
											"src": "1099:18:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "1099:20:4"
									},
									"variableNames": [
										{
											"name": "memPtr",
											"nodeType": "YulIdentifier",
											"src": "1089:6:4"
										}
									]
								},
								{
									"expression": {
										"arguments": [
											{
												"name": "memPtr",
												"nodeType": "YulIdentifier",
												"src": "1148:6:4"
											},
											{
												"name": "size",
												"nodeType": "YulIdentifier",
												"src": "1156:4:4"
											}
										],
										"functionName": {
											"name": "finalize_allocation",
											"nodeType": "YulIdentifier",
											"src": "1128:19:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "1128:33:4"
									},
									"nodeType": "YulExpressionStatement",
									"src": "1128:33:4"
								}
							]
						},
						"name": "allocate_memory",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "size",
								"nodeType": "YulTypedName",
								"src": "1063:4:4",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "memPtr",
								"nodeType": "YulTypedName",
								"src": "1072:6:4",
								"type": ""
							}
						],
						"src": "1038:129:4"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "1255:229:4",
							"statements": [
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "1360:22:4",
										"statements": [
											{
												"expression": {
													"arguments": [],
													"functionName": {
														"name": "panic_error_0x41",
														"nodeType": "YulIdentifier",
														"src": "1362:16:4"
													},
													"nodeType": "YulFunctionCall",
													"src": "1362:18:4"
												},
												"nodeType": "YulExpressionStatement",
												"src": "1362:18:4"
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"name": "length",
												"nodeType": "YulIdentifier",
												"src": "1332:6:4"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "1340:18:4",
												"type": "",
												"value": "0xffffffffffffffff"
											}
										],
										"functionName": {
											"name": "gt",
											"nodeType": "YulIdentifier",
											"src": "1329:2:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "1329:30:4"
									},
									"nodeType": "YulIf",
									"src": "1326:56:4"
								},
								{
									"nodeType": "YulAssignment",
									"src": "1392:25:4",
									"value": {
										"arguments": [
											{
												"name": "length",
												"nodeType": "YulIdentifier",
												"src": "1404:6:4"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "1412:4:4",
												"type": "",
												"value": "0x20"
											}
										],
										"functionName": {
											"name": "mul",
											"nodeType": "YulIdentifier",
											"src": "1400:3:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "1400:17:4"
									},
									"variableNames": [
										{
											"name": "size",
											"nodeType": "YulIdentifier",
											"src": "1392:4:4"
										}
									]
								},
								{
									"nodeType": "YulAssignment",
									"src": "1454:23:4",
									"value": {
										"arguments": [
											{
												"name": "size",
												"nodeType": "YulIdentifier",
												"src": "1466:4:4"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "1472:4:4",
												"type": "",
												"value": "0x20"
											}
										],
										"functionName": {
											"name": "add",
											"nodeType": "YulIdentifier",
											"src": "1462:3:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "1462:15:4"
									},
									"variableNames": [
										{
											"name": "size",
											"nodeType": "YulIdentifier",
											"src": "1454:4:4"
										}
									]
								}
							]
						},
						"name": "array_allocation_size_t_array$_t_address_$dyn_memory_ptr",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "length",
								"nodeType": "YulTypedName",
								"src": "1239:6:4",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "size",
								"nodeType": "YulTypedName",
								"src": "1250:4:4",
								"type": ""
							}
						],
						"src": "1173:311:4"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "1579:28:4",
							"statements": [
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "1596:1:4",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "1599:1:4",
												"type": "",
												"value": "0"
											}
										],
										"functionName": {
											"name": "revert",
											"nodeType": "YulIdentifier",
											"src": "1589:6:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "1589:12:4"
									},
									"nodeType": "YulExpressionStatement",
									"src": "1589:12:4"
								}
							]
						},
						"name": "revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef",
						"nodeType": "YulFunctionDefinition",
						"src": "1490:117:4"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "1658:81:4",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "1668:65:4",
									"value": {
										"arguments": [
											{
												"name": "value",
												"nodeType": "YulIdentifier",
												"src": "1683:5:4"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "1690:42:4",
												"type": "",
												"value": "0xffffffffffffffffffffffffffffffffffffffff"
											}
										],
										"functionName": {
											"name": "and",
											"nodeType": "YulIdentifier",
											"src": "1679:3:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "1679:54:4"
									},
									"variableNames": [
										{
											"name": "cleaned",
											"nodeType": "YulIdentifier",
											"src": "1668:7:4"
										}
									]
								}
							]
						},
						"name": "cleanup_t_uint160",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "value",
								"nodeType": "YulTypedName",
								"src": "1640:5:4",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "cleaned",
								"nodeType": "YulTypedName",
								"src": "1650:7:4",
								"type": ""
							}
						],
						"src": "1613:126:4"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "1790:51:4",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "1800:35:4",
									"value": {
										"arguments": [
											{
												"name": "value",
												"nodeType": "YulIdentifier",
												"src": "1829:5:4"
											}
										],
										"functionName": {
											"name": "cleanup_t_uint160",
											"nodeType": "YulIdentifier",
											"src": "1811:17:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "1811:24:4"
									},
									"variableNames": [
										{
											"name": "cleaned",
											"nodeType": "YulIdentifier",
											"src": "1800:7:4"
										}
									]
								}
							]
						},
						"name": "cleanup_t_address",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "value",
								"nodeType": "YulTypedName",
								"src": "1772:5:4",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "cleaned",
								"nodeType": "YulTypedName",
								"src": "1782:7:4",
								"type": ""
							}
						],
						"src": "1745:96:4"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "1890:79:4",
							"statements": [
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "1947:16:4",
										"statements": [
											{
												"expression": {
													"arguments": [
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "1956:1:4",
															"type": "",
															"value": "0"
														},
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "1959:1:4",
															"type": "",
															"value": "0"
														}
													],
													"functionName": {
														"name": "revert",
														"nodeType": "YulIdentifier",
														"src": "1949:6:4"
													},
													"nodeType": "YulFunctionCall",
													"src": "1949:12:4"
												},
												"nodeType": "YulExpressionStatement",
												"src": "1949:12:4"
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"arguments": [
													{
														"name": "value",
														"nodeType": "YulIdentifier",
														"src": "1913:5:4"
													},
													{
														"arguments": [
															{
																"name": "value",
																"nodeType": "YulIdentifier",
																"src": "1938:5:4"
															}
														],
														"functionName": {
															"name": "cleanup_t_address",
															"nodeType": "YulIdentifier",
															"src": "1920:17:4"
														},
														"nodeType": "YulFunctionCall",
														"src": "1920:24:4"
													}
												],
												"functionName": {
													"name": "eq",
													"nodeType": "YulIdentifier",
													"src": "1910:2:4"
												},
												"nodeType": "YulFunctionCall",
												"src": "1910:35:4"
											}
										],
										"functionName": {
											"name": "iszero",
											"nodeType": "YulIdentifier",
											"src": "1903:6:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "1903:43:4"
									},
									"nodeType": "YulIf",
									"src": "1900:63:4"
								}
							]
						},
						"name": "validator_revert_t_address",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "value",
								"nodeType": "YulTypedName",
								"src": "1883:5:4",
								"type": ""
							}
						],
						"src": "1847:122:4"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "2038:80:4",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "2048:22:4",
									"value": {
										"arguments": [
											{
												"name": "offset",
												"nodeType": "YulIdentifier",
												"src": "2063:6:4"
											}
										],
										"functionName": {
											"name": "mload",
											"nodeType": "YulIdentifier",
											"src": "2057:5:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "2057:13:4"
									},
									"variableNames": [
										{
											"name": "value",
											"nodeType": "YulIdentifier",
											"src": "2048:5:4"
										}
									]
								},
								{
									"expression": {
										"arguments": [
											{
												"name": "value",
												"nodeType": "YulIdentifier",
												"src": "2106:5:4"
											}
										],
										"functionName": {
											"name": "validator_revert_t_address",
											"nodeType": "YulIdentifier",
											"src": "2079:26:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "2079:33:4"
									},
									"nodeType": "YulExpressionStatement",
									"src": "2079:33:4"
								}
							]
						},
						"name": "abi_decode_t_address_fromMemory",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "offset",
								"nodeType": "YulTypedName",
								"src": "2016:6:4",
								"type": ""
							},
							{
								"name": "end",
								"nodeType": "YulTypedName",
								"src": "2024:3:4",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "value",
								"nodeType": "YulTypedName",
								"src": "2032:5:4",
								"type": ""
							}
						],
						"src": "1975:143:4"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "2254:619:4",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "2264:90:4",
									"value": {
										"arguments": [
											{
												"arguments": [
													{
														"name": "length",
														"nodeType": "YulIdentifier",
														"src": "2346:6:4"
													}
												],
												"functionName": {
													"name": "array_allocation_size_t_array$_t_address_$dyn_memory_ptr",
													"nodeType": "YulIdentifier",
													"src": "2289:56:4"
												},
												"nodeType": "YulFunctionCall",
												"src": "2289:64:4"
											}
										],
										"functionName": {
											"name": "allocate_memory",
											"nodeType": "YulIdentifier",
											"src": "2273:15:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "2273:81:4"
									},
									"variableNames": [
										{
											"name": "array",
											"nodeType": "YulIdentifier",
											"src": "2264:5:4"
										}
									]
								},
								{
									"nodeType": "YulVariableDeclaration",
									"src": "2363:16:4",
									"value": {
										"name": "array",
										"nodeType": "YulIdentifier",
										"src": "2374:5:4"
									},
									"variables": [
										{
											"name": "dst",
											"nodeType": "YulTypedName",
											"src": "2367:3:4",
											"type": ""
										}
									]
								},
								{
									"expression": {
										"arguments": [
											{
												"name": "array",
												"nodeType": "YulIdentifier",
												"src": "2396:5:4"
											},
											{
												"name": "length",
												"nodeType": "YulIdentifier",
												"src": "2403:6:4"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "2389:6:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "2389:21:4"
									},
									"nodeType": "YulExpressionStatement",
									"src": "2389:21:4"
								},
								{
									"nodeType": "YulAssignment",
									"src": "2419:23:4",
									"value": {
										"arguments": [
											{
												"name": "array",
												"nodeType": "YulIdentifier",
												"src": "2430:5:4"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2437:4:4",
												"type": "",
												"value": "0x20"
											}
										],
										"functionName": {
											"name": "add",
											"nodeType": "YulIdentifier",
											"src": "2426:3:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "2426:16:4"
									},
									"variableNames": [
										{
											"name": "dst",
											"nodeType": "YulIdentifier",
											"src": "2419:3:4"
										}
									]
								},
								{
									"nodeType": "YulVariableDeclaration",
									"src": "2452:44:4",
									"value": {
										"arguments": [
											{
												"name": "offset",
												"nodeType": "YulIdentifier",
												"src": "2470:6:4"
											},
											{
												"arguments": [
													{
														"name": "length",
														"nodeType": "YulIdentifier",
														"src": "2482:6:4"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "2490:4:4",
														"type": "",
														"value": "0x20"
													}
												],
												"functionName": {
													"name": "mul",
													"nodeType": "YulIdentifier",
													"src": "2478:3:4"
												},
												"nodeType": "YulFunctionCall",
												"src": "2478:17:4"
											}
										],
										"functionName": {
											"name": "add",
											"nodeType": "YulIdentifier",
											"src": "2466:3:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "2466:30:4"
									},
									"variables": [
										{
											"name": "srcEnd",
											"nodeType": "YulTypedName",
											"src": "2456:6:4",
											"type": ""
										}
									]
								},
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "2524:103:4",
										"statements": [
											{
												"expression": {
													"arguments": [],
													"functionName": {
														"name": "revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef",
														"nodeType": "YulIdentifier",
														"src": "2538:77:4"
													},
													"nodeType": "YulFunctionCall",
													"src": "2538:79:4"
												},
												"nodeType": "YulExpressionStatement",
												"src": "2538:79:4"
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"name": "srcEnd",
												"nodeType": "YulIdentifier",
												"src": "2511:6:4"
											},
											{
												"name": "end",
												"nodeType": "YulIdentifier",
												"src": "2519:3:4"
											}
										],
										"functionName": {
											"name": "gt",
											"nodeType": "YulIdentifier",
											"src": "2508:2:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "2508:15:4"
									},
									"nodeType": "YulIf",
									"src": "2505:122:4"
								},
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "2712:155:4",
										"statements": [
											{
												"nodeType": "YulVariableDeclaration",
												"src": "2727:21:4",
												"value": {
													"name": "src",
													"nodeType": "YulIdentifier",
													"src": "2745:3:4"
												},
												"variables": [
													{
														"name": "elementPos",
														"nodeType": "YulTypedName",
														"src": "2731:10:4",
														"type": ""
													}
												]
											},
											{
												"expression": {
													"arguments": [
														{
															"name": "dst",
															"nodeType": "YulIdentifier",
															"src": "2769:3:4"
														},
														{
															"arguments": [
																{
																	"name": "elementPos",
																	"nodeType": "YulIdentifier",
																	"src": "2806:10:4"
																},
																{
																	"name": "end",
																	"nodeType": "YulIdentifier",
																	"src": "2818:3:4"
																}
															],
															"functionName": {
																"name": "abi_decode_t_address_fromMemory",
																"nodeType": "YulIdentifier",
																"src": "2774:31:4"
															},
															"nodeType": "YulFunctionCall",
															"src": "2774:48:4"
														}
													],
													"functionName": {
														"name": "mstore",
														"nodeType": "YulIdentifier",
														"src": "2762:6:4"
													},
													"nodeType": "YulFunctionCall",
													"src": "2762:61:4"
												},
												"nodeType": "YulExpressionStatement",
												"src": "2762:61:4"
											},
											{
												"nodeType": "YulAssignment",
												"src": "2836:21:4",
												"value": {
													"arguments": [
														{
															"name": "dst",
															"nodeType": "YulIdentifier",
															"src": "2847:3:4"
														},
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "2852:4:4",
															"type": "",
															"value": "0x20"
														}
													],
													"functionName": {
														"name": "add",
														"nodeType": "YulIdentifier",
														"src": "2843:3:4"
													},
													"nodeType": "YulFunctionCall",
													"src": "2843:14:4"
												},
												"variableNames": [
													{
														"name": "dst",
														"nodeType": "YulIdentifier",
														"src": "2836:3:4"
													}
												]
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"name": "src",
												"nodeType": "YulIdentifier",
												"src": "2665:3:4"
											},
											{
												"name": "srcEnd",
												"nodeType": "YulIdentifier",
												"src": "2670:6:4"
											}
										],
										"functionName": {
											"name": "lt",
											"nodeType": "YulIdentifier",
											"src": "2662:2:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "2662:15:4"
									},
									"nodeType": "YulForLoop",
									"post": {
										"nodeType": "YulBlock",
										"src": "2678:25:4",
										"statements": [
											{
												"nodeType": "YulAssignment",
												"src": "2680:21:4",
												"value": {
													"arguments": [
														{
															"name": "src",
															"nodeType": "YulIdentifier",
															"src": "2691:3:4"
														},
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "2696:4:4",
															"type": "",
															"value": "0x20"
														}
													],
													"functionName": {
														"name": "add",
														"nodeType": "YulIdentifier",
														"src": "2687:3:4"
													},
													"nodeType": "YulFunctionCall",
													"src": "2687:14:4"
												},
												"variableNames": [
													{
														"name": "src",
														"nodeType": "YulIdentifier",
														"src": "2680:3:4"
													}
												]
											}
										]
									},
									"pre": {
										"nodeType": "YulBlock",
										"src": "2640:21:4",
										"statements": [
											{
												"nodeType": "YulVariableDeclaration",
												"src": "2642:17:4",
												"value": {
													"name": "offset",
													"nodeType": "YulIdentifier",
													"src": "2653:6:4"
												},
												"variables": [
													{
														"name": "src",
														"nodeType": "YulTypedName",
														"src": "2646:3:4",
														"type": ""
													}
												]
											}
										]
									},
									"src": "2636:231:4"
								}
							]
						},
						"name": "abi_decode_available_length_t_array$_t_address_$dyn_memory_ptr_fromMemory",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "offset",
								"nodeType": "YulTypedName",
								"src": "2224:6:4",
								"type": ""
							},
							{
								"name": "length",
								"nodeType": "YulTypedName",
								"src": "2232:6:4",
								"type": ""
							},
							{
								"name": "end",
								"nodeType": "YulTypedName",
								"src": "2240:3:4",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "array",
								"nodeType": "YulTypedName",
								"src": "2248:5:4",
								"type": ""
							}
						],
						"src": "2141:732:4"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "2984:297:4",
							"statements": [
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "3033:83:4",
										"statements": [
											{
												"expression": {
													"arguments": [],
													"functionName": {
														"name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
														"nodeType": "YulIdentifier",
														"src": "3035:77:4"
													},
													"nodeType": "YulFunctionCall",
													"src": "3035:79:4"
												},
												"nodeType": "YulExpressionStatement",
												"src": "3035:79:4"
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"arguments": [
													{
														"arguments": [
															{
																"name": "offset",
																"nodeType": "YulIdentifier",
																"src": "3012:6:4"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "3020:4:4",
																"type": "",
																"value": "0x1f"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "3008:3:4"
														},
														"nodeType": "YulFunctionCall",
														"src": "3008:17:4"
													},
													{
														"name": "end",
														"nodeType": "YulIdentifier",
														"src": "3027:3:4"
													}
												],
												"functionName": {
													"name": "slt",
													"nodeType": "YulIdentifier",
													"src": "3004:3:4"
												},
												"nodeType": "YulFunctionCall",
												"src": "3004:27:4"
											}
										],
										"functionName": {
											"name": "iszero",
											"nodeType": "YulIdentifier",
											"src": "2997:6:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "2997:35:4"
									},
									"nodeType": "YulIf",
									"src": "2994:122:4"
								},
								{
									"nodeType": "YulVariableDeclaration",
									"src": "3125:27:4",
									"value": {
										"arguments": [
											{
												"name": "offset",
												"nodeType": "YulIdentifier",
												"src": "3145:6:4"
											}
										],
										"functionName": {
											"name": "mload",
											"nodeType": "YulIdentifier",
											"src": "3139:5:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "3139:13:4"
									},
									"variables": [
										{
											"name": "length",
											"nodeType": "YulTypedName",
											"src": "3129:6:4",
											"type": ""
										}
									]
								},
								{
									"nodeType": "YulAssignment",
									"src": "3161:114:4",
									"value": {
										"arguments": [
											{
												"arguments": [
													{
														"name": "offset",
														"nodeType": "YulIdentifier",
														"src": "3248:6:4"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "3256:4:4",
														"type": "",
														"value": "0x20"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "3244:3:4"
												},
												"nodeType": "YulFunctionCall",
												"src": "3244:17:4"
											},
											{
												"name": "length",
												"nodeType": "YulIdentifier",
												"src": "3263:6:4"
											},
											{
												"name": "end",
												"nodeType": "YulIdentifier",
												"src": "3271:3:4"
											}
										],
										"functionName": {
											"name": "abi_decode_available_length_t_array$_t_address_$dyn_memory_ptr_fromMemory",
											"nodeType": "YulIdentifier",
											"src": "3170:73:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "3170:105:4"
									},
									"variableNames": [
										{
											"name": "array",
											"nodeType": "YulIdentifier",
											"src": "3161:5:4"
										}
									]
								}
							]
						},
						"name": "abi_decode_t_array$_t_address_$dyn_memory_ptr_fromMemory",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "offset",
								"nodeType": "YulTypedName",
								"src": "2962:6:4",
								"type": ""
							},
							{
								"name": "end",
								"nodeType": "YulTypedName",
								"src": "2970:3:4",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "array",
								"nodeType": "YulTypedName",
								"src": "2978:5:4",
								"type": ""
							}
						],
						"src": "2896:385:4"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "3389:452:4",
							"statements": [
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "3435:83:4",
										"statements": [
											{
												"expression": {
													"arguments": [],
													"functionName": {
														"name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
														"nodeType": "YulIdentifier",
														"src": "3437:77:4"
													},
													"nodeType": "YulFunctionCall",
													"src": "3437:79:4"
												},
												"nodeType": "YulExpressionStatement",
												"src": "3437:79:4"
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"arguments": [
													{
														"name": "dataEnd",
														"nodeType": "YulIdentifier",
														"src": "3410:7:4"
													},
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "3419:9:4"
													}
												],
												"functionName": {
													"name": "sub",
													"nodeType": "YulIdentifier",
													"src": "3406:3:4"
												},
												"nodeType": "YulFunctionCall",
												"src": "3406:23:4"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "3431:2:4",
												"type": "",
												"value": "32"
											}
										],
										"functionName": {
											"name": "slt",
											"nodeType": "YulIdentifier",
											"src": "3402:3:4"
										},
										"nodeType": "YulFunctionCall",
										"src": "3402:32:4"
									},
									"nodeType": "YulIf",
									"src": "3399:119:4"
								},
								{
									"nodeType": "YulBlock",
									"src": "3528:306:4",
									"statements": [
										{
											"nodeType": "YulVariableDeclaration",
											"src": "3543:38:4",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "3567:9:4"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "3578:1:4",
																"type": "",
																"value": "0"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "3563:3:4"
														},
														"nodeType": "YulFunctionCall",
														"src": "3563:17:4"
													}
												],
												"functionName": {
													"name": "mload",
													"nodeType": "YulIdentifier",
													"src": "3557:5:4"
												},
												"nodeType": "YulFunctionCall",
												"src": "3557:24:4"
											},
											"variables": [
												{
													"name": "offset",
													"nodeType": "YulTypedName",
													"src": "3547:6:4",
													"type": ""
												}
											]
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "3628:83:4",
												"statements": [
													{
														"expression": {
															"arguments": [],
															"functionName": {
																"name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
																"nodeType": "YulIdentifier",
																"src": "3630:77:4"
															},
															"nodeType": "YulFunctionCall",
															"src": "3630:79:4"
														},
														"nodeType": "YulExpressionStatement",
														"src": "3630:79:4"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "offset",
														"nodeType": "YulIdentifier",
														"src": "3600:6:4"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "3608:18:4",
														"type": "",
														"value": "0xffffffffffffffff"
													}
												],
												"functionName": {
													"name": "gt",
													"nodeType": "YulIdentifier",
													"src": "3597:2:4"
												},
												"nodeType": "YulFunctionCall",
												"src": "3597:30:4"
											},
											"nodeType": "YulIf",
											"src": "3594:117:4"
										},
										{
											"nodeType": "YulAssignment",
											"src": "3725:99:4",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "3796:9:4"
															},
															{
																"name": "offset",
																"nodeType": "YulIdentifier",
																"src": "3807:6:4"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "3792:3:4"
														},
														"nodeType": "YulFunctionCall",
														"src": "3792:22:4"
													},
													{
														"name": "dataEnd",
														"nodeType": "YulIdentifier",
														"src": "3816:7:4"
													}
												],
												"functionName": {
													"name": "abi_decode_t_array$_t_address_$dyn_memory_ptr_fromMemory",
													"nodeType": "YulIdentifier",
													"src": "3735:56:4"
												},
												"nodeType": "YulFunctionCall",
												"src": "3735:89:4"
											},
											"variableNames": [
												{
													"name": "value0",
													"nodeType": "YulIdentifier",
													"src": "3725:6:4"
												}
											]
										}
									]
								}
							]
						},
						"name": "abi_decode_tuple_t_array$_t_address_$dyn_memory_ptr_fromMemory",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "headStart",
								"nodeType": "YulTypedName",
								"src": "3359:9:4",
								"type": ""
							},
							{
								"name": "dataEnd",
								"nodeType": "YulTypedName",
								"src": "3370:7:4",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "value0",
								"nodeType": "YulTypedName",
								"src": "3382:6:4",
								"type": ""
							}
						],
						"src": "3287:554:4"
					}
				]
			},
			"contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function array_allocation_size_t_array$_t_address_$dyn_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := mul(length, 0x20)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_address(value)\n    }\n\n    // address[]\n    function abi_decode_available_length_t_array$_t_address_$dyn_memory_ptr_fromMemory(offset, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_array$_t_address_$dyn_memory_ptr(length))\n        let dst := array\n\n        mstore(array, length)\n        dst := add(array, 0x20)\n\n        let srcEnd := add(offset, mul(length, 0x20))\n        if gt(srcEnd, end) {\n            revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef()\n        }\n        for { let src := offset } lt(src, srcEnd) { src := add(src, 0x20) }\n        {\n\n            let elementPos := src\n\n            mstore(dst, abi_decode_t_address_fromMemory(elementPos, end))\n            dst := add(dst, 0x20)\n        }\n    }\n\n    // address[]\n    function abi_decode_t_array$_t_address_$dyn_memory_ptr_fromMemory(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := mload(offset)\n        array := abi_decode_available_length_t_array$_t_address_$dyn_memory_ptr_fromMemory(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_array$_t_address_$dyn_memory_ptr_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := mload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value0 := abi_decode_t_array$_t_address_$dyn_memory_ptr_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n}\n",
			"id": 4,
			"language": "Yul",
			"name": "#utility.yul"
		}
	],
	"linkReferences": {},
	"object": "60806040523480156200001157600080fd5b5060405162001325380380620013258339818101604052810190620000379190620003df565b620000576200004b6200007760201b60201c565b6200007f60201b60201c565b80600190805190602001906200006f92919062000143565b505062000430565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054828255906000526020600020908101928215620001bf579160200282015b82811115620001be5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509160200191906001019062000164565b5b509050620001ce9190620001d2565b5090565b5b80821115620001ed576000816000905550600101620001d3565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000255826200020a565b810181811067ffffffffffffffff821117156200027757620002766200021b565b5b80604052505050565b60006200028c620001f1565b90506200029a82826200024a565b919050565b600067ffffffffffffffff821115620002bd57620002bc6200021b565b5b602082029050602081019050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200030082620002d3565b9050919050565b6200031281620002f3565b81146200031e57600080fd5b50565b600081519050620003328162000307565b92915050565b60006200034f62000349846200029f565b62000280565b90508083825260208201905060208402830185811115620003755762000374620002ce565b5b835b81811015620003a257806200038d888262000321565b84526020840193505060208101905062000377565b5050509392505050565b600082601f830112620003c457620003c362000205565b5b8151620003d684826020860162000338565b91505092915050565b600060208284031215620003f857620003f7620001fb565b5b600082015167ffffffffffffffff81111562000419576200041862000200565b5b6200042784828501620003ac565b91505092915050565b610ee580620004406000396000f3fe6080604052600436106100915760003560e01c8063715018a611610059578063715018a61461016c5780638da5cb5b1461018357806396de7734146101ae578063d1c6ef92146101ca578063f2fde38b146101f557610091565b80630cb1d0ee146100965780633b51a8b0146100d35780634f64b2be146100ef57806350431ce41461012c57806351cff8d914610143575b600080fd5b3480156100a257600080fd5b506100bd60048036038101906100b891906109c5565b61021e565b6040516100ca9190610a0b565b60405180910390f35b6100ed60048036038101906100e89190610a52565b6102a6565b005b3480156100fb57600080fd5b5061011660048036038101906101119190610a92565b6103aa565b6040516101239190610ace565b60405180910390f35b34801561013857600080fd5b506101416103e9565b005b34801561014f57600080fd5b5061016a600480360381019061016591906109c5565b6104e5565b005b34801561017857600080fd5b506101816106a0565b005b34801561018f57600080fd5b50610198610728565b6040516101a59190610ace565b60405180910390f35b6101c860048036038101906101c39190610a92565b610751565b005b3480156101d657600080fd5b506101df610797565b6040516101ec9190610a0b565b60405180910390f35b34801561020157600080fd5b5061021c600480360381019061021791906109c5565b61079f565b005b6000808290508073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161025d9190610ace565b602060405180830381865afa15801561027a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061029e9190610afe565b915050919050565b60008190508073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b81526004016102e893929190610b2b565b6020604051808303816000875af1158015610307573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061032b9190610b9a565b61036a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036190610c24565b60405180910390fd5b7ffb408329ab46b89fe59d3d1f7de52a8b62f0c22c2dea3f9b91c11164343a393d33838560405161039d93929190610b2b565b60405180910390a1505050565b600181815481106103ba57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6103f1610896565b73ffffffffffffffffffffffffffffffffffffffff1661040f610728565b73ffffffffffffffffffffffffffffffffffffffff1614610465576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045c90610c90565b60405180910390fd5b600061046f610728565b73ffffffffffffffffffffffffffffffffffffffff164760405161049290610d07565b60006040518083038185875af1925050503d80600081146104cf576040519150601f19603f3d011682016040523d82523d6000602084013e6104d4565b606091505b50509050806104e257600080fd5b50565b6104ed610896565b73ffffffffffffffffffffffffffffffffffffffff1661050b610728565b73ffffffffffffffffffffffffffffffffffffffff1614610561576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055890610c90565b60405180910390fd5b60008190508073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb338373ffffffffffffffffffffffffffffffffffffffff166370a08231866040518263ffffffff1660e01b81526004016105bc9190610ace565b602060405180830381865afa1580156105d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105fd9190610afe565b6040518363ffffffff1660e01b815260040161061a929190610d1c565b6020604051808303816000875af1158015610639573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065d9190610b9a565b61069c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069390610d91565b60405180910390fd5b5050565b6106a8610896565b73ffffffffffffffffffffffffffffffffffffffff166106c6610728565b73ffffffffffffffffffffffffffffffffffffffff161461071c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071390610c90565b60405180910390fd5b610726600061089e565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b80341015610794576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078b90610dfd565b60405180910390fd5b50565b600047905090565b6107a7610896565b73ffffffffffffffffffffffffffffffffffffffff166107c5610728565b73ffffffffffffffffffffffffffffffffffffffff161461081b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081290610c90565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361088a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088190610e8f565b60405180910390fd5b6108938161089e565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061099282610967565b9050919050565b6109a281610987565b81146109ad57600080fd5b50565b6000813590506109bf81610999565b92915050565b6000602082840312156109db576109da610962565b5b60006109e9848285016109b0565b91505092915050565b6000819050919050565b610a05816109f2565b82525050565b6000602082019050610a2060008301846109fc565b92915050565b610a2f816109f2565b8114610a3a57600080fd5b50565b600081359050610a4c81610a26565b92915050565b60008060408385031215610a6957610a68610962565b5b6000610a7785828601610a3d565b9250506020610a88858286016109b0565b9150509250929050565b600060208284031215610aa857610aa7610962565b5b6000610ab684828501610a3d565b91505092915050565b610ac881610987565b82525050565b6000602082019050610ae36000830184610abf565b92915050565b600081519050610af881610a26565b92915050565b600060208284031215610b1457610b13610962565b5b6000610b2284828501610ae9565b91505092915050565b6000606082019050610b406000830186610abf565b610b4d6020830185610abf565b610b5a60408301846109fc565b949350505050565b60008115159050919050565b610b7781610b62565b8114610b8257600080fd5b50565b600081519050610b9481610b6e565b92915050565b600060208284031215610bb057610baf610962565b5b6000610bbe84828501610b85565b91505092915050565b600082825260208201905092915050565b7f556e61626c6520746f204465706f736974650000000000000000000000000000600082015250565b6000610c0e601283610bc7565b9150610c1982610bd8565b602082019050919050565b60006020820190508181036000830152610c3d81610c01565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000610c7a602083610bc7565b9150610c8582610c44565b602082019050919050565b60006020820190508181036000830152610ca981610c6d565b9050919050565b600081905092915050565b7f4f6e6c79206f776e657220697320616c6c6f7765640000000000000000000000600082015250565b6000610cf1601583610cb0565b9150610cfc82610cbb565b601582019050919050565b6000610d1282610ce4565b9150819050919050565b6000604082019050610d316000830185610abf565b610d3e60208301846109fc565b9392505050565b7f4e6f20746f6b656e7320617661696c61626c6521000000000000000000000000600082015250565b6000610d7b601483610bc7565b9150610d8682610d45565b602082019050919050565b60006020820190508181036000830152610daa81610d6e565b9050919050565b7f506c65617365204465706f7369746520436f6d706c65746520616d6f756e7400600082015250565b6000610de7601f83610bc7565b9150610df282610db1565b602082019050919050565b60006020820190508181036000830152610e1681610dda565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000610e79602683610bc7565b9150610e8482610e1d565b604082019050919050565b60006020820190508181036000830152610ea881610e6c565b905091905056fea2646970667358221220fc0e775b62e727ee34526471b8671c59624dfdd3f64585761597ce0bd0b3916264736f6c63430008110033",
	"opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH3 0x11 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH3 0x1325 CODESIZE SUB DUP1 PUSH3 0x1325 DUP4 CODECOPY DUP2 DUP2 ADD PUSH1 0x40 MSTORE DUP2 ADD SWAP1 PUSH3 0x37 SWAP2 SWAP1 PUSH3 0x3DF JUMP JUMPDEST PUSH3 0x57 PUSH3 0x4B PUSH3 0x77 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST PUSH3 0x7F PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST DUP1 PUSH1 0x1 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH3 0x6F SWAP3 SWAP2 SWAP1 PUSH3 0x143 JUMP JUMPDEST POP POP PUSH3 0x430 JUMP JUMPDEST PUSH1 0x0 CALLER SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP DUP2 PUSH1 0x0 DUP1 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST DUP3 DUP1 SLOAD DUP3 DUP3 SSTORE SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 DUP2 ADD SWAP3 DUP3 ISZERO PUSH3 0x1BF JUMPI SWAP2 PUSH1 0x20 MUL DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH3 0x1BE JUMPI DUP3 MLOAD DUP3 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH3 0x164 JUMP JUMPDEST JUMPDEST POP SWAP1 POP PUSH3 0x1CE SWAP2 SWAP1 PUSH3 0x1D2 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST JUMPDEST DUP1 DUP3 GT ISZERO PUSH3 0x1ED JUMPI PUSH1 0x0 DUP2 PUSH1 0x0 SWAP1 SSTORE POP PUSH1 0x1 ADD PUSH3 0x1D3 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH3 0x255 DUP3 PUSH3 0x20A JUMP JUMPDEST DUP2 ADD DUP2 DUP2 LT PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT OR ISZERO PUSH3 0x277 JUMPI PUSH3 0x276 PUSH3 0x21B JUMP JUMPDEST JUMPDEST DUP1 PUSH1 0x40 MSTORE POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x28C PUSH3 0x1F1 JUMP JUMPDEST SWAP1 POP PUSH3 0x29A DUP3 DUP3 PUSH3 0x24A JUMP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH3 0x2BD JUMPI PUSH3 0x2BC PUSH3 0x21B JUMP JUMPDEST JUMPDEST PUSH1 0x20 DUP3 MUL SWAP1 POP PUSH1 0x20 DUP2 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x300 DUP3 PUSH3 0x2D3 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH3 0x312 DUP2 PUSH3 0x2F3 JUMP JUMPDEST DUP2 EQ PUSH3 0x31E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP PUSH3 0x332 DUP2 PUSH3 0x307 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x34F PUSH3 0x349 DUP5 PUSH3 0x29F JUMP JUMPDEST PUSH3 0x280 JUMP JUMPDEST SWAP1 POP DUP1 DUP4 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH1 0x20 DUP5 MUL DUP4 ADD DUP6 DUP2 GT ISZERO PUSH3 0x375 JUMPI PUSH3 0x374 PUSH3 0x2CE JUMP JUMPDEST JUMPDEST DUP4 JUMPDEST DUP2 DUP2 LT ISZERO PUSH3 0x3A2 JUMPI DUP1 PUSH3 0x38D DUP9 DUP3 PUSH3 0x321 JUMP JUMPDEST DUP5 MSTORE PUSH1 0x20 DUP5 ADD SWAP4 POP POP PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH3 0x377 JUMP JUMPDEST POP POP POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH3 0x3C4 JUMPI PUSH3 0x3C3 PUSH3 0x205 JUMP JUMPDEST JUMPDEST DUP2 MLOAD PUSH3 0x3D6 DUP5 DUP3 PUSH1 0x20 DUP7 ADD PUSH3 0x338 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH3 0x3F8 JUMPI PUSH3 0x3F7 PUSH3 0x1FB JUMP JUMPDEST JUMPDEST PUSH1 0x0 DUP3 ADD MLOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH3 0x419 JUMPI PUSH3 0x418 PUSH3 0x200 JUMP JUMPDEST JUMPDEST PUSH3 0x427 DUP5 DUP3 DUP6 ADD PUSH3 0x3AC JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0xEE5 DUP1 PUSH3 0x440 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x91 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x715018A6 GT PUSH2 0x59 JUMPI DUP1 PUSH4 0x715018A6 EQ PUSH2 0x16C JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x183 JUMPI DUP1 PUSH4 0x96DE7734 EQ PUSH2 0x1AE JUMPI DUP1 PUSH4 0xD1C6EF92 EQ PUSH2 0x1CA JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x1F5 JUMPI PUSH2 0x91 JUMP JUMPDEST DUP1 PUSH4 0xCB1D0EE EQ PUSH2 0x96 JUMPI DUP1 PUSH4 0x3B51A8B0 EQ PUSH2 0xD3 JUMPI DUP1 PUSH4 0x4F64B2BE EQ PUSH2 0xEF JUMPI DUP1 PUSH4 0x50431CE4 EQ PUSH2 0x12C JUMPI DUP1 PUSH4 0x51CFF8D9 EQ PUSH2 0x143 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xA2 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xBD PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xB8 SWAP2 SWAP1 PUSH2 0x9C5 JUMP JUMPDEST PUSH2 0x21E JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xCA SWAP2 SWAP1 PUSH2 0xA0B JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0xED PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xE8 SWAP2 SWAP1 PUSH2 0xA52 JUMP JUMPDEST PUSH2 0x2A6 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xFB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x116 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x111 SWAP2 SWAP1 PUSH2 0xA92 JUMP JUMPDEST PUSH2 0x3AA JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x123 SWAP2 SWAP1 PUSH2 0xACE JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x138 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x141 PUSH2 0x3E9 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x14F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x16A PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x165 SWAP2 SWAP1 PUSH2 0x9C5 JUMP JUMPDEST PUSH2 0x4E5 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x178 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x181 PUSH2 0x6A0 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x18F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x198 PUSH2 0x728 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1A5 SWAP2 SWAP1 PUSH2 0xACE JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x1C8 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x1C3 SWAP2 SWAP1 PUSH2 0xA92 JUMP JUMPDEST PUSH2 0x751 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1D6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1DF PUSH2 0x797 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1EC SWAP2 SWAP1 PUSH2 0xA0B JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x201 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x21C PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x217 SWAP2 SWAP1 PUSH2 0x9C5 JUMP JUMPDEST PUSH2 0x79F JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 DUP1 DUP3 SWAP1 POP DUP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH4 0x70A08231 ADDRESS PUSH1 0x40 MLOAD DUP3 PUSH4 0xFFFFFFFF AND PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x25D SWAP2 SWAP1 PUSH2 0xACE JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP7 GAS STATICCALL ISZERO DUP1 ISZERO PUSH2 0x27A JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x29E SWAP2 SWAP1 PUSH2 0xAFE JUMP JUMPDEST SWAP2 POP POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP DUP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH4 0x23B872DD CALLER ADDRESS DUP7 PUSH1 0x40 MLOAD DUP5 PUSH4 0xFFFFFFFF AND PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x2E8 SWAP4 SWAP3 SWAP2 SWAP1 PUSH2 0xB2B JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 GAS CALL ISZERO DUP1 ISZERO PUSH2 0x307 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x32B SWAP2 SWAP1 PUSH2 0xB9A JUMP JUMPDEST PUSH2 0x36A JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x361 SWAP1 PUSH2 0xC24 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH32 0xFB408329AB46B89FE59D3D1F7DE52A8B62F0C22C2DEA3F9B91C11164343A393D CALLER DUP4 DUP6 PUSH1 0x40 MLOAD PUSH2 0x39D SWAP4 SWAP3 SWAP2 SWAP1 PUSH2 0xB2B JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 POP POP POP JUMP JUMPDEST PUSH1 0x1 DUP2 DUP2 SLOAD DUP2 LT PUSH2 0x3BA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 ADD PUSH1 0x0 SWAP2 POP SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH2 0x3F1 PUSH2 0x896 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x40F PUSH2 0x728 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x465 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x45C SWAP1 PUSH2 0xC90 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x46F PUSH2 0x728 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SELFBALANCE PUSH1 0x40 MLOAD PUSH2 0x492 SWAP1 PUSH2 0xD07 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP8 GAS CALL SWAP3 POP POP POP RETURNDATASIZE DUP1 PUSH1 0x0 DUP2 EQ PUSH2 0x4CF JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH1 0x0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x4D4 JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP POP SWAP1 POP DUP1 PUSH2 0x4E2 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH2 0x4ED PUSH2 0x896 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x50B PUSH2 0x728 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x561 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x558 SWAP1 PUSH2 0xC90 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP DUP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH4 0xA9059CBB CALLER DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH4 0x70A08231 DUP7 PUSH1 0x40 MLOAD DUP3 PUSH4 0xFFFFFFFF AND PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x5BC SWAP2 SWAP1 PUSH2 0xACE JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP7 GAS STATICCALL ISZERO DUP1 ISZERO PUSH2 0x5D9 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x5FD SWAP2 SWAP1 PUSH2 0xAFE JUMP JUMPDEST PUSH1 0x40 MLOAD DUP4 PUSH4 0xFFFFFFFF AND PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x61A SWAP3 SWAP2 SWAP1 PUSH2 0xD1C JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 GAS CALL ISZERO DUP1 ISZERO PUSH2 0x639 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x65D SWAP2 SWAP1 PUSH2 0xB9A JUMP JUMPDEST PUSH2 0x69C JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x693 SWAP1 PUSH2 0xD91 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST POP POP JUMP JUMPDEST PUSH2 0x6A8 PUSH2 0x896 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x6C6 PUSH2 0x728 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x71C JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x713 SWAP1 PUSH2 0xC90 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x726 PUSH1 0x0 PUSH2 0x89E JUMP JUMPDEST JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP SWAP1 JUMP JUMPDEST DUP1 CALLVALUE LT ISZERO PUSH2 0x794 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x78B SWAP1 PUSH2 0xDFD JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 SELFBALANCE SWAP1 POP SWAP1 JUMP JUMPDEST PUSH2 0x7A7 PUSH2 0x896 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x7C5 PUSH2 0x728 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x81B JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x812 SWAP1 PUSH2 0xC90 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SUB PUSH2 0x88A JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x881 SWAP1 PUSH2 0xE8F JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x893 DUP2 PUSH2 0x89E JUMP JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 CALLER SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP DUP2 PUSH1 0x0 DUP1 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x992 DUP3 PUSH2 0x967 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x9A2 DUP2 PUSH2 0x987 JUMP JUMPDEST DUP2 EQ PUSH2 0x9AD JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x9BF DUP2 PUSH2 0x999 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x9DB JUMPI PUSH2 0x9DA PUSH2 0x962 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x9E9 DUP5 DUP3 DUP6 ADD PUSH2 0x9B0 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0xA05 DUP2 PUSH2 0x9F2 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0xA20 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x9FC JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0xA2F DUP2 PUSH2 0x9F2 JUMP JUMPDEST DUP2 EQ PUSH2 0xA3A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0xA4C DUP2 PUSH2 0xA26 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0xA69 JUMPI PUSH2 0xA68 PUSH2 0x962 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0xA77 DUP6 DUP3 DUP7 ADD PUSH2 0xA3D JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH2 0xA88 DUP6 DUP3 DUP7 ADD PUSH2 0x9B0 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xAA8 JUMPI PUSH2 0xAA7 PUSH2 0x962 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0xAB6 DUP5 DUP3 DUP6 ADD PUSH2 0xA3D JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0xAC8 DUP2 PUSH2 0x987 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0xAE3 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0xABF JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP PUSH2 0xAF8 DUP2 PUSH2 0xA26 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xB14 JUMPI PUSH2 0xB13 PUSH2 0x962 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0xB22 DUP5 DUP3 DUP6 ADD PUSH2 0xAE9 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x60 DUP3 ADD SWAP1 POP PUSH2 0xB40 PUSH1 0x0 DUP4 ADD DUP7 PUSH2 0xABF JUMP JUMPDEST PUSH2 0xB4D PUSH1 0x20 DUP4 ADD DUP6 PUSH2 0xABF JUMP JUMPDEST PUSH2 0xB5A PUSH1 0x40 DUP4 ADD DUP5 PUSH2 0x9FC JUMP JUMPDEST SWAP5 SWAP4 POP POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 ISZERO ISZERO SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0xB77 DUP2 PUSH2 0xB62 JUMP JUMPDEST DUP2 EQ PUSH2 0xB82 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP PUSH2 0xB94 DUP2 PUSH2 0xB6E JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xBB0 JUMPI PUSH2 0xBAF PUSH2 0x962 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0xBBE DUP5 DUP3 DUP6 ADD PUSH2 0xB85 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x556E61626C6520746F204465706F736974650000000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xC0E PUSH1 0x12 DUP4 PUSH2 0xBC7 JUMP JUMPDEST SWAP2 POP PUSH2 0xC19 DUP3 PUSH2 0xBD8 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0xC3D DUP2 PUSH2 0xC01 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4F776E61626C653A2063616C6C6572206973206E6F7420746865206F776E6572 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xC7A PUSH1 0x20 DUP4 PUSH2 0xBC7 JUMP JUMPDEST SWAP2 POP PUSH2 0xC85 DUP3 PUSH2 0xC44 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0xCA9 DUP2 PUSH2 0xC6D JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x4F6E6C79206F776E657220697320616C6C6F7765640000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xCF1 PUSH1 0x15 DUP4 PUSH2 0xCB0 JUMP JUMPDEST SWAP2 POP PUSH2 0xCFC DUP3 PUSH2 0xCBB JUMP JUMPDEST PUSH1 0x15 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xD12 DUP3 PUSH2 0xCE4 JUMP JUMPDEST SWAP2 POP DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 DUP3 ADD SWAP1 POP PUSH2 0xD31 PUSH1 0x0 DUP4 ADD DUP6 PUSH2 0xABF JUMP JUMPDEST PUSH2 0xD3E PUSH1 0x20 DUP4 ADD DUP5 PUSH2 0x9FC JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH32 0x4E6F20746F6B656E7320617661696C61626C6521000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xD7B PUSH1 0x14 DUP4 PUSH2 0xBC7 JUMP JUMPDEST SWAP2 POP PUSH2 0xD86 DUP3 PUSH2 0xD45 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0xDAA DUP2 PUSH2 0xD6E JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x506C65617365204465706F7369746520436F6D706C65746520616D6F756E7400 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xDE7 PUSH1 0x1F DUP4 PUSH2 0xBC7 JUMP JUMPDEST SWAP2 POP PUSH2 0xDF2 DUP3 PUSH2 0xDB1 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0xE16 DUP2 PUSH2 0xDDA JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4F776E61626C653A206E6577206F776E657220697320746865207A65726F2061 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x6464726573730000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xE79 PUSH1 0x26 DUP4 PUSH2 0xBC7 JUMP JUMPDEST SWAP2 POP PUSH2 0xE84 DUP3 PUSH2 0xE1D JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0xEA8 DUP2 PUSH2 0xE6C JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xFC 0xE PUSH24 0x5B62E727EE34526471B8671C59624DFDD3F64585761597CE SIGNEXTEND 0xD0 0xB3 SWAP2 PUSH3 0x64736F PUSH13 0x63430008110033000000000000 ",
	"sourceMap": "171:1945:3:-:0;;;501:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;921:32:0;940:12;:10;;;:12;;:::i;:::-;921:18;;;:32;;:::i;:::-;559:7:3;550:6;:16;;;;;;;;;;;;:::i;:::-;;501:72;171:1945;;640:96:2;693:7;719:10;712:17;;640:96;:::o;2270:187:0:-;2343:16;2362:6;;;;;;;;;;;2343:25;;2387:8;2378:6;;:17;;;;;;;;;;;;;;;;;;2441:8;2410:40;;2431:8;2410:40;;;;;;;;;;;;2333:124;2270:187;:::o;171:1945:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:75:4:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:117;443:1;440;433:12;457:102;498:6;549:2;545:7;540:2;533:5;529:14;525:28;515:38;;457:102;;;:::o;565:180::-;613:77;610:1;603:88;710:4;707:1;700:15;734:4;731:1;724:15;751:281;834:27;856:4;834:27;:::i;:::-;826:6;822:40;964:6;952:10;949:22;928:18;916:10;913:34;910:62;907:88;;;975:18;;:::i;:::-;907:88;1015:10;1011:2;1004:22;794:238;751:281;;:::o;1038:129::-;1072:6;1099:20;;:::i;:::-;1089:30;;1128:33;1156:4;1148:6;1128:33;:::i;:::-;1038:129;;;:::o;1173:311::-;1250:4;1340:18;1332:6;1329:30;1326:56;;;1362:18;;:::i;:::-;1326:56;1412:4;1404:6;1400:17;1392:25;;1472:4;1466;1462:15;1454:23;;1173:311;;;:::o;1490:117::-;1599:1;1596;1589:12;1613:126;1650:7;1690:42;1683:5;1679:54;1668:65;;1613:126;;;:::o;1745:96::-;1782:7;1811:24;1829:5;1811:24;:::i;:::-;1800:35;;1745:96;;;:::o;1847:122::-;1920:24;1938:5;1920:24;:::i;:::-;1913:5;1910:35;1900:63;;1959:1;1956;1949:12;1900:63;1847:122;:::o;1975:143::-;2032:5;2063:6;2057:13;2048:22;;2079:33;2106:5;2079:33;:::i;:::-;1975:143;;;;:::o;2141:732::-;2248:5;2273:81;2289:64;2346:6;2289:64;:::i;:::-;2273:81;:::i;:::-;2264:90;;2374:5;2403:6;2396:5;2389:21;2437:4;2430:5;2426:16;2419:23;;2490:4;2482:6;2478:17;2470:6;2466:30;2519:3;2511:6;2508:15;2505:122;;;2538:79;;:::i;:::-;2505:122;2653:6;2636:231;2670:6;2665:3;2662:15;2636:231;;;2745:3;2774:48;2818:3;2806:10;2774:48;:::i;:::-;2769:3;2762:61;2852:4;2847:3;2843:14;2836:21;;2712:155;2696:4;2691:3;2687:14;2680:21;;2636:231;;;2640:21;2254:619;;2141:732;;;;;:::o;2896:385::-;2978:5;3027:3;3020:4;3012:6;3008:17;3004:27;2994:122;;3035:79;;:::i;:::-;2994:122;3145:6;3139:13;3170:105;3271:3;3263:6;3256:4;3248:6;3244:17;3170:105;:::i;:::-;3161:114;;2984:297;2896:385;;;;:::o;3287:554::-;3382:6;3431:2;3419:9;3410:7;3406:23;3402:32;3399:119;;;3437:79;;:::i;:::-;3399:119;3578:1;3567:9;3563:17;3557:24;3608:18;3600:6;3597:30;3594:117;;;3630:79;;:::i;:::-;3594:117;3735:89;3816:7;3807:6;3796:9;3792:22;3735:89;:::i;:::-;3725:99;;3528:306;3287:554;;;;:::o;171:1945:3:-;;;;;;;"
}

export const ERC20ABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    }
  ]