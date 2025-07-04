"use client";

import { motion } from "framer-motion";
import { AiOutlineLaptop, AiOutlineTablet, AiOutlineMobile } from "react-icons/ai";
import { BsHeadphones, BsSmartwatch, BsCpu, BsController, BsCamera } from "react-icons/bs";
import { Card, CardContent } from "@/components/ui/card";

// Product categories - Clean and minimal
const categories = [
	{
		id: 1,
		name: "Smartphones",
		icon: <AiOutlineMobile className="w-8 h-8" />,
		color: "bg-blue-500",
	},
	{
		id: 2,
		name: "Laptops",
		icon: <AiOutlineLaptop className="w-8 h-8" />,
		color: "bg-purple-500",
	},
	{
		id: 3,
		name: "Tablets",
		icon: <AiOutlineTablet className="w-8 h-8" />,
		color: "bg-green-500",
	},
	{
		id: 4,
		name: "Audio",
		icon: <BsHeadphones className="w-8 h-8" />,
		color: "bg-red-500",
	},
	{
		id: 5,
		name: "Wearables",
		icon: <BsSmartwatch className="w-8 h-8" />,
		color: "bg-yellow-500",
	},
	{
		id: 6,
		name: "Gaming",
		icon: <BsController className="w-8 h-8" />,
		color: "bg-indigo-500",
	},
	{
		id: 7,
		name: "Cameras",
		icon: <BsCamera className="w-8 h-8" />,
		color: "bg-pink-500",
	},
	{
		id: 8,
		name: "Computers",
		icon: <BsCpu className="w-8 h-8" />,
		color: "bg-teal-500",
	},
];

export default function CategoriesGrid() {
	return (
		<section className="relative py-20 sm:py-28 md:py-36 overflow-hidden">
			{/* Enhanced background with subtle gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900"></div>
			
			{/* Subtle floating decorative elements */}
			<div className="absolute top-32 left-20 w-64 h-64 bg-blue-200/10 dark:bg-blue-400/5 rounded-full blur-3xl"></div>
			<div className="absolute bottom-32 right-20 w-80 h-80 bg-purple-200/10 dark:bg-purple-400/5 rounded-full blur-3xl"></div>
			
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Enhanced header section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="text-center mb-16 sm:mb-20 md:mb-24"
				>
					{/* Enhanced professional badge */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="inline-flex items-center space-x-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-200/60 dark:border-gray-600/60 px-6 py-3 rounded-2xl mb-8 shadow-lg dark:shadow-gray-900/20"
					>
						<div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div>
						<span className="text-gray-700 dark:text-gray-300 text-sm font-medium tracking-wide">
							Catégories Premium
						</span>
						<span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
							8 Collections
						</span>
					</motion.div>

					{/* Enhanced professional title */}
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6 tracking-tight leading-tight"
					>
						Explorez Nos
						<br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
							Technologies Premium
						</span>
					</motion.h2>

					{/* Enhanced professional description */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
					>
						Découvrez notre sélection soigneusement organisée de produits technologiques
						de dernière génération, conçus pour répondre à tous vos besoins professionnels et personnels.
					</motion.p>
				</motion.div>
				{/* Enhanced infinite scroll container */}
				<div className="relative">
					{/* Enhanced scrolling container */}
					<motion.div 
						className="flex space-x-6 py-8"
						animate={{ x: [0, -1728] }}
						transition={{
							duration: 25,
							repeat: Infinity,
							ease: "linear"
						}}
					>
						{/* First set of categories */}
						{categories.map((category, index) => (
							<motion.div
								key={`first-${category.id}`}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
								whileHover={{ 
									y: -8, 
									scale: 1.05,
									transition: { duration: 0.2, ease: "easeOut" }
								}}
								className="group cursor-pointer flex-shrink-0 w-48"
							>
								<Card className="h-40 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-600/60 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group-hover:border-gray-300/80 dark:group-hover:border-gray-500/80 overflow-hidden group-hover:-translate-y-1 dark:shadow-gray-900/20">
									<CardContent className="p-6 relative h-full flex flex-col items-center justify-center">
										{/* Enhanced animated background */}
										<div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-gray-50/40 group-hover:via-white/30 group-hover:to-gray-50/40 dark:group-hover:from-gray-800/30 dark:group-hover:via-gray-700/20 dark:group-hover:to-gray-800/30 transition-all duration-500 rounded-2xl"></div>
										
										{/* Enhanced particles effect */}
										<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
											<div className="absolute top-4 left-4 w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse delay-100"></div>
											<div className="absolute top-8 right-6 w-1 h-1 bg-gray-500 dark:bg-gray-400 rounded-full animate-pulse delay-300"></div>
											<div className="absolute bottom-6 left-8 w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse delay-500"></div>
										</div>
										
										<div className="relative z-10 text-center">
											{/* Enhanced icon container with category color */}
											<motion.div
												whileHover={{ 
													scale: 1.15,
													rotate: [0, -3, 3, 0]
												}}
												transition={{ duration: 0.4, ease: "easeInOut" }}
												className={`${category.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:shadow-xl transition-all duration-500 relative overflow-hidden`}
											>
												<div className="relative z-10">
													{category.icon}
												</div>
												{/* Enhanced shine effect */}
												<div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-full group-hover:translate-x-0"></div>
											</motion.div>

											{/* Enhanced title */}
											<h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-all duration-300 tracking-wide">
												{category.name}
											</h3>

											{/* Enhanced status indicator */}
											<div className="absolute top-4 right-4">
												<div className="relative">
													<div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
														<div className="absolute inset-0 bg-gray-400 dark:bg-gray-500 rounded-full animate-ping opacity-50"></div>
													</div>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
						
						{/* Second set for seamless loop */}
						{categories.map((category, index) => (
							<motion.div
								key={`second-${category.id}`}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
								whileHover={{ 
									y: -8, 
									scale: 1.05,
								transition: { duration: 0.2, ease: "easeOut" }
								}}
								className="group cursor-pointer flex-shrink-0 w-48"
							>
								<Card className="h-40 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-600/60 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group-hover:border-gray-300/80 dark:group-hover:border-gray-500/80 overflow-hidden group-hover:-translate-y-1 dark:shadow-gray-900/20">
									<CardContent className="p-6 relative h-full flex flex-col items-center justify-center">
										{/* Enhanced animated background */}
										<div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-gray-50/40 group-hover:via-white/30 group-hover:to-gray-50/40 dark:group-hover:from-gray-800/30 dark:group-hover:via-gray-700/20 dark:group-hover:to-gray-800/30 transition-all duration-500 rounded-2xl"></div>
										
										{/* Enhanced particles effect */}
										<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
											<div className="absolute top-4 left-4 w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse delay-100"></div>
											<div className="absolute top-8 right-6 w-1 h-1 bg-gray-500 dark:bg-gray-400 rounded-full animate-pulse delay-300"></div>
											<div className="absolute bottom-6 left-8 w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse delay-500"></div>
										</div>
										
										<div className="relative z-10 text-center">
											{/* Enhanced icon container with category color */}
											<motion.div
												whileHover={{ 
													scale: 1.15,
													rotate: [0, -3, 3, 0]
												}}
												transition={{ duration: 0.4, ease: "easeInOut" }}
												className={`${category.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:shadow-xl transition-all duration-500 relative overflow-hidden`}
											>
												<div className="relative z-10">
													{category.icon}
												</div>
												{/* Enhanced shine effect */}
												<div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-full group-hover:translate-x-0"></div>
											</motion.div>

											{/* Enhanced title */}
											<h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-all duration-300 tracking-wide">
												{category.name}
											</h3>

											{/* Enhanced status indicator */}
											<div className="absolute top-4 right-4">
												<div className="relative">
													<div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
														<div className="absolute inset-0 bg-gray-400 dark:bg-gray-500 rounded-full animate-ping opacity-50"></div>
													</div>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
