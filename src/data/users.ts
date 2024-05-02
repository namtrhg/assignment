export interface IUser {
  id: string;
	name: string;
	image: string;
	account: string;
}

export const users: IUser[] = [
	{
    id: "1",
		name: "Marvin McKinney",
		image: "/images/person1.png",
		account: "@bigbear444",
	},
	{
    id:"2",
		name: "Leslie Alexander",
		image: "/images/person2.png",
		account: "@tinypanda866",
	},
  {
    id:"3",
		name: "Guy Hawkins",
		image: "/images/person3.png",
		account: "@hawkins1001",
	},
  {
    id:"4",
		name: "Darrell Steward",
		image: "/images/person1.png",
		account: "@silverlion355",
	},
];
