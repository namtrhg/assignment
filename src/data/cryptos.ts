interface ICrypto {
	id: string;
	image: string;
	name: string;
	value: string;
}

export const cryptos: ICrypto[] = [
	{
		id: "1",
		image: "/svg/eth-icon.svg",
		name: "ETH",
		value: "23,341.0",
	},
	{
		id: "2",
		image: "/svg/bnb-icon.svg",
		name: "BNB",
		value: "5.03",
	},
];
