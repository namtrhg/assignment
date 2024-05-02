import classNames from "classnames";

interface ICard {
	children?: React.ReactNode;
	className?: string;
}

export const Card: React.FC<ICard> = ({ className = "", children }) => {
	return (
		<div className={classNames("rounded-[2.25rem] bg-white", className)}>
			{children}
		</div>
	);
};
