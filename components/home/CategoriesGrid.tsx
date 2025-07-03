"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { AiOutlineLaptop, AiOutlineTablet, AiOutlineMobile } from "react-icons/ai";
import { BsHeadphones, BsSmartwatch, BsCpu, BsController, BsCamera } from "react-icons/bs";
import { Card, CardContent } from "@/components/ui/card";

// Product categories
const categories = [
	{
		id: 1,
		name: "Smartphones",
		icon: <AiOutlineMobile className="w-8 h-8" />,
		count: 45,
		color: "bg-blue-500",
	},
	{
		id: 2,
		name: "Laptops",
		icon: <AiOutlineLaptop className="w-8 h-8" />,
		count: 32,
		color: "bg-purple-500",
	},
	{
		id: 3,
		name: "Tablets",
		icon: <AiOutlineTablet className="w-8 h-8" />,
		count: 28,
		color: "bg-green-500",
	},
	{
		id: 4,
		name: "Audio",
		icon: <BsHeadphones className="w-8 h-8" />,
		count: 56,
		color: "bg-red-500",
	},
	{
		id: 5,
		name: "Wearables",
		icon: <BsSmartwatch className="w-8 h-8" />,
		count: 23,
		color: "bg-yellow-500",
	},
	{
		id: 6,
		name: "Gaming",
		icon: <BsController className="w-8 h-8" />,
		count: 34,
		color: "bg-indigo-500",
	},
	{
		id: 7,
		name: "Cameras",
		icon: <BsCamera className="w-8 h-8" />,
		count: 19,
		color: "bg-pink-500",
	},
	{
		id: 8,
		name: "Computers",
		icon: <BsCpu className="w-8 h-8" />,
		count: 27,
		color: "bg-teal-500",
	},
];

export default function CategoriesGrid() {
	return (
		<section className="relative py-16 sm:py-24 md:py-32 px-2 sm:px-4 md:px-6 overflow-hidden">
			{/* Enhanced background with gradient mesh */}
			<div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800"></div>
			{/* Animated floating elements */}
			<motion.div
				animate={{
					rotate: [0, 360],
					scale: [1, 1.1, 1],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: "linear",
				}}
				className="hidden md:block absolute top-20 right-20 w-72 h-72 border border-blue-200/30 dark:border-blue-500/20 rounded-full"
			/>
			<motion.div
				animate={{
					rotate: [360, 0],
					scale: [1.1, 1, 1.1],
				}}
				transition={{
					duration: 25,
					repeat: Infinity,
					ease: "linear",
				}}
				className="hidden md:block absolute bottom-20 left-20 w-64 h-64 border border-purple-200/30 dark:border-purple-500/20 rounded-full"
			/>
			{/* Subtle grid pattern */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
			<div className="container mx-auto relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-10 sm:mb-16 md:mb-20"
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-xl border border-blue-200/30 dark:border-blue-500/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8"
					>
						<motion.div
							animate={{ rotate: [0, 360] }}
							transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
						>
							<BsCpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />
						</motion.div>
						<span className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
							Nos Catégories Premium
						</span>
						<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
					</motion.div>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="text-3xl sm:text-4xl lg:text-7xl font-black text-gray-900 dark:text-white mb-4 sm:mb-8 tracking-tight"
					>
						Technologies
						<br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
							d'Excellence
						</span>
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="text-base sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl sm:max-w-4xl mx-auto leading-relaxed font-light"
					>
						Découvrez notre sélection premium de produits technologiques de pointe,
						<br className="hidden lg:block" />
						choisis pour leur innovation révolutionnaire et leur qualité exceptionnelle
					</motion.p>
				</motion.div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
					{categories.map((category, index) => (
						<motion.div
							key={category.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							whileHover={{ y: -12, scale: 1.03 }}
							className="group cursor-pointer relative"
						>
							<Card className="h-full text-center hover:shadow-2xl transition-all duration-700 border-0 shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-2xl rounded-3xl overflow-hidden relative">
								{/* Gradient border effect */}
								<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
								<CardContent className="p-6 sm:p-8 md:p-10 relative z-10">
									{/* Enhanced background gradient */}
									<div
										className={`absolute inset-0 ${category.color}/5 group-hover:${category.color}/15 transition-all duration-500 rounded-3xl`}
									></div>
									{/* Animated particles */}
									<motion.div
										animate={{
											scale: [1, 1.2, 1],
											rotate: [0, 180, 360],
										}}
										transition={{
											duration: 4,
											repeat: Infinity,
											ease: "easeInOut",
										}}
										className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
									/>
									<div className="relative z-10">
										<motion.div
											whileHover={{
												scale: 1.15,
												rotate: [0, -5, 5, 0],
											}}
											transition={{ duration: 0.3 }}
											className={`${category.color} w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 text-white shadow-2xl relative overflow-hidden`}
										>
											{/* Icon shine effect */}
											<motion.div
												animate={{
													x: ["-100%", "100%"],
												}}
												transition={{
													duration: 2,
													repeat: Infinity,
													ease: "easeInOut",
												}}
												className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:opacity-100 opacity-0 transition-opacity duration-300"
											/>
											<div className="relative z-10">{category.icon}</div>
										</motion.div>

										<motion.h3
											className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
											whileHover={{ scale: 1.05 }}
										>
											{category.name}
										</motion.h3>

										<div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-4 sm:mb-6">
											<span className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 dark:text-white">
												{category.count}
											</span>
											<span className="text-gray-500 dark:text-gray-400 font-medium text-xs sm:text-sm">
												produits premium
											</span>
										</div>
										{/* Enhanced progress bar */}
										<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2 mb-4 sm:mb-6 overflow-hidden">
											<motion.div
												initial={{ width: 0 }}
												whileInView={{
													width: `${Math.min((category.count / 60) * 100, 100)}%`,
												}}
												transition={{ duration: 1.5, delay: index * 0.1 }}
												className={`h-full ${category.color} rounded-full relative`}
											>
												<motion.div
													animate={{
														x: ["-100%", "100%"],
													}}
													transition={{
														duration: 2,
														repeat: Infinity,
														ease: "easeInOut",
													}}
													className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
												/>
											</motion.div>
										</div>
										{/* Premium badge */}
										<motion.div
											initial={{ opacity: 0, scale: 0.8 }}
											whileInView={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
											className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 sm:mb-4"
										>
											<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
											<span>En Stock</span>
										</motion.div>
										{/* Hover action */}
										<motion.div
											className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0"
											whileHover={{ scale: 1.05 }}
										>
											<div className="flex items-center justify-center space-x-1 sm:space-x-2 text-blue-600 dark:text-blue-400 font-semibold">
												<span>Explorer</span>
												<motion.div
													animate={{
														x: [0, 5, 0],
													}}
													transition={{
														duration: 1.5,
														repeat: Infinity,
														ease: "easeInOut",
													}}
												>
													<FiArrowRight className="w-5 h-5" />
												</motion.div>
											</div>
										</motion.div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
