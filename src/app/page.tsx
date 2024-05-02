"use client";

import Button from "@/components/button";
import { Card } from "@/components/card";
import { Chip } from "@/components/chip";
import { DropDown } from "@/components/dropdown";
import { cryptos, ICrypto } from "@/data/cryptos";
import { IUser, users } from "@/data/users";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const [currentReceiver, setCurrentReceiver] = useState<IUser | null>(null);
	const [currentCrypto, setCurrentCrypto] = useState<ICrypto>(cryptos[0]);
	const [currentAmount, setCurrentAmount] = useState<number>(0);

	return (
		<main className="flex justify-center pt-4 bg-purple-200 h-screen">
			<Card className="w-[48.75rem] h-[25.625rem] p-6 space-y-6">
				<div className="flex justify-between items-center">
					<p className="text-primary text-xl font-semibold leading-[1.375rem]">
						Send to
					</p>
					<img className="p-1" src="/svg/delete-icon.svg" alt="delete-icon" />
				</div>
				<div className="flex space-x-8">
					<div className="w-[23.75rem]">
						<p className="text-xs font-light leading-3 text-disabled pt-1">
							To
						</p>
						<div className="flex space-x-2 items-center mt-2">
							<DropDown
								text={
									currentReceiver
										? currentReceiver.name
										: "Paste, scan or select recipient"
								}
								children={
									<div className="space-y-2 w-[20rem]">
										{users.map((user) => {
											return (
												<div
													className="flex items-center space-x-4 py-2.5 px-3 hover:bg-[#F1F1FF] cursor-pointer rounded-2xl"
													onClick={() => setCurrentReceiver(user)}
													key={user.id}
												>
													<img
														className="w-8 h-8"
														src={user.image}
														alt={user.name}
													/>
													<div className="space-y-1">
														<p className="text-primary font-light text-sm leading-[1.125rem]">
															{user.name}
														</p>
														<p className="text-disabled font-light text-xs leading-[0.875rem]">
															{user.account}
														</p>
													</div>
												</div>
											);
										})}
									</div>
								}
							/>
							<div className="rounded-2xl bg-[#FBFAFB] p-[0.875rem]">
								<img src="/svg/qr-icon.svg" />
							</div>
						</div>
						<div className="flex space-x-2 items-center mt-2 overflow-auto">
							{users.map((user) => {
								return (
									<Chip key={user.id} image={user.image} name={user.name} />
								);
							})}
						</div>
						<p className="text-xs font-light leading-3 text-disabled mt-6">
							Token & Amount
						</p>
						<div className="flex space-x-2 items-center mt-2.5">
							<DropDown
								text={
									<div className="flex space-x-2 items-center">
										<Image
											className="w-6 h-6"
											width={24}
											height={24}
											src={currentCrypto.image}
											alt={currentCrypto.name}
										/>
										<p className="text-white font-semibold text-sm leading-4">
											{currentCrypto.name}
										</p>
									</div>
								}
								className="w-[8.875rem]"
								type="primary"
								children={
									<div className="space-y-2">
										{cryptos.map((crypto) => {
											return (
												<div
													className="flex justify-between items-center space-x-4 py-2.5 px-3 hover:bg-[#F1F1FF] cursor-pointer rounded-2xl"
													onClick={() => setCurrentCrypto(crypto)}
													key={crypto.id}
												>
													<div className="flex space-x-4 items-center">
														<Image
															className="w-6 h-6"
															width={24}
															height={24}
															src={crypto.image}
															alt={crypto.name}
														/>
														<p className="text-primary font-light text-sm leading-[1.125rem]">
															{crypto.name}
														</p>
													</div>
													<p className="text-disabled font-light text-sm leading-[1.125rem]">
														{crypto.value}
													</p>
												</div>
											);
										})}
									</div>
								}
							/>
							<div className="flex justify-end items-center bg-[#FBFAFB] rounded-2xl w-[14.375rem] h-[3.25rem] px-4">
								<input
									type="number"
									className="bg-[#FBFAFB] rounded-2xl text-right font-light text-sm leading-[1.125rem] py-4 focus:outline-none focus-visible:outline-none"
									placeholder="0.0"
									onChange={(e) => setCurrentAmount(Number(e.target.value))}
								/>
								<p className="text-[0.625rem] leading-3 text-disabled">$0.0</p>
							</div>
						</div>
						<div className="flex space-x-1 items-center mt-2 justify-end">
							<p className="text-disabled text-[0.625rem] leading-3">
								Balance:
							</p>
							<p className="text-[#5682F4] text-[0.625rem] leading-3 font-semibold">
								23,341.0 ETH
							</p>
						</div>
						<Button
							className="mt-6 w-full h-[3.25rem]"
							size="md"
							type={currentAmount ? "primary" : "disabled"}
						>
							Send
						</Button>
					</div>
					<div className="w-[23.75rem] border border-[#F5F4F7] p-6 rounded-3xl">
						<p className="text-primary font-semibold text-base leading-[1.125rem] pt-0.5">
							Summary
						</p>
						<div className="flex justify-between items-center mt-4">
							<p className="text-disabled text-sm font-light leading-[1.125rem]">
								From
							</p>
							<p className="text-primary text-sm font-light leading-[1.125rem]">
								John Smith
							</p>
						</div>
						<p className="text-disabled text-[0.625rem] leading-3 text-right mt-2">
							@john.smith1
						</p>
						<div className="flex justify-between items-center mt-4">
							<p className="text-disabled text-sm font-light leading-[1.125rem]">
								To
							</p>
							<p className="text-primary text-sm font-light leading-[1.125rem]">
								{currentReceiver ? currentReceiver.name : "-"}
							</p>
						</div>
						<div className="flex space-x-2 items-center justify-end mt-2">
							<p className="text-disabled text-[0.625rem] leading-3">
								{currentReceiver ? currentReceiver.account : "@-"}
							</p>
							<Image
								className="w-4 h-4"
								width={16}
								height={16}
								src="/svg/copy-icon.svg"
								alt="copy-icon"
							/>
						</div>
						<div className="flex justify-between items-center mt-4">
							<p className="text-disabled text-sm font-light leading-[1.125rem]">
								Network Fee
							</p>
							<p className="text-primary text-sm font-light leading-[1.125rem]">
								$0.0
							</p>
						</div>
						<div className="flex justify-between items-center mt-4">
							<p className="text-disabled text-sm font-light leading-[1.125rem]">
								Amount
							</p>
							<p className="text-primary text-sm font-light leading-[1.125rem]">
								{currentAmount} {currentCrypto.name}
							</p>
						</div>
						<div className="flex justify-between items-center mt-8">
							<p className="text-disabled text-sm font-light leading-[1.125rem]">
								Total
							</p>
							<div className="flex space-x-2 items-center justify-end">
								<Image
									className="w-4 h-4"
									width={16}
									height={16}
									src="/svg/eth-icon.svg"
									alt="eth"
								/>
								<p className="text-primary text-sm font-semibold leading-4">
									0.0
								</p>
							</div>
						</div>
						<p className="text-disabled text-[0.625rem] leading-3 text-right mt-2">
							$0.0 USD
						</p>
					</div>
				</div>
			</Card>
		</main>
	);
}
