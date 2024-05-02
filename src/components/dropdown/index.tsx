import { useState, useEffect, useRef } from "react";
import Button from "../button";
import { Card } from "../card";
import classNames from "classnames";
import Image from "next/image";

type TDropDownType = "default" | "primary";

interface IDropDown {
	text?: string | React.ReactNode;
	children?: React.ReactNode;
	className?: string;
	type?: TDropDownType;
}

export const DropDown: React.FC<IDropDown> = ({
	children,
	text = "",
	className = "",
	type = "default",
}) => {
	const [isShow, setIsShow] = useState<boolean>(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const handleClickDropDown = () => {
		setIsShow(!isShow);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target as Node)
		) {
			setIsShow(false);
		}
	};

	useEffect(() => {
		if (isShow) {
			document.addEventListener("click", handleClickOutside);
		} else {
			document.removeEventListener("click", handleClickOutside);
		}

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [isShow]);

	return (
		<div className="relative" ref={dropdownRef}>
			<Button
				size="md"
				className={classNames(
					className,
					"text-disabled text-sm leading-[1.125rem] font-light !p-4 rounded-2xl flex justify-between items-center h-[3.25rem] w-[20rem]",
					type === "default" ? "bg-[#FBFAFB]" : "bg-primary",
				)}
				onClick={handleClickDropDown}
			>
				{text}
				<Image
					className={classNames(isShow ? "rotate-180" : "")}
					width={24}
					height={24}
					src={
						type === "default"
							? "/svg/arrow-icon.svg"
							: "/svg/arrow-white-icon.svg"
					}
					alt="arrow icon"
				/>
			</Button>
			<div onClick={handleClickDropDown}>
				<Card
					className={classNames(
						"absolute py-4 px-3 top-[115%] min-w-[16.25rem] max-w-[20rem] z-10",
						isShow ? "block" : "hidden",
					)}
				>
					{children}
				</Card>
			</div>
		</div>
	);
};
