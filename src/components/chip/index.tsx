interface IChip {
	image: string;
	name: string;
}

export const Chip: React.FC<IChip> = ({ image, name }) => {
	return (
		<div className="bg-[#F1F1FF] rounded-2xl inline-flex space-x-2 items-center p-1 w-full min-w-32">
			<img className="h-6 w-6" src={image} alt={name} />
			<p className="text-primary text-[0.625rem] leading-3">{name}</p>
		</div>
	);
};
