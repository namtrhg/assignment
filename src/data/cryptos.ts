export interface ICrypto {
	id: string;
	image: string;
	name: string;
	value: number;
}

export const cryptos: ICrypto[] = [
	{
		id: "1",
		image: "/svg/eth-icon.svg",
		name: "ETH",
		value: 23341,
	},
	{
		id: "2",
		image: "/svg/bnb-icon.svg",
		name: "BNB",
		value: 5.03,
	},
];
