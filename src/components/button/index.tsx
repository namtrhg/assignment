import classNames from "classnames";

type TButtonType = "default" | "primary" | "secondary" | "disabled";

type TButtonSize = "sm" | "md";

interface IButton {
	onClick?: () => void;
	type?: TButtonType;
	size?: TButtonSize;
	className?: string;
	children?: React.ReactNode;
}

const Button: React.FC<IButton> = ({
	onClick,
	type = "default",
	size = "sm",
	children,
	className,
}) => {
	const handleButtonType = (type: TButtonType) => {
		switch (type) {
			case "default":
				return "";
			case "primary":
				return "bg-primary text-white hover:bg-[#846DA3] hover:text-white ring-[#846DA3] ring-inset focus:ring-2";
			case "secondary":
				return "bg-secondary text-primary hover:bg-[#846DA3] hover:text-white ring-[#B4AFC2] ring-inset focus:ring-2";
			case "disabled":
				return "bg-disabled text-white cursor cursor-not-allowed";
			default:
				break;
		}
	};

	const handleButtonSize = (size: TButtonSize) => {
		switch (size) {
			case "sm":
				return "min-h-8 text-xs font-semibold leading-[0.875rem] px-6 py-1.5";
			case "md":
				return "min-h-[3.25rem] text-lg font-medium leading-6 px-6 py-4";
			default:
				break;
		}
	};

	return (
		<button
			disabled={type === "disabled"}
			onClick={onClick}
			className={classNames(
				className,
				handleButtonSize(size),
				handleButtonType(type),
				"rounded-3xl",
			)}
		>
			{children}
		</button>
	);
};

export default Button;
