"use client";

import { motion } from "framer-motion";
import { FiTruck, FiShield, FiHeadphones, FiStar } from "react-icons/fi";
import { BsCheck2Circle } from "react-icons/bs";

const features = [
	{
		icon: <FiTruck className="w-6 h-6" />,
		title: "Livraison Express",
		desc: "Expédition gratuite sous 24h pour toute commande supérieure à 50€",
		highlight: "Gratuit dès 50€",
		color: "from-blue-600 to-blue-700",
	},
	{
		icon: <FiShield className="w-6 h-6" />,
		title: "Garantie Étendue",
		desc: "Protection complète avec service après-vente professionnel pendant 3 ans",
		highlight: "3 ans inclus",
		color: "from-green-600 to-green-700",
	},
	{
		icon: <FiHeadphones className="w-6 h-6" />,
		title: "Support Expert",
		desc: "Assistance technique spécialisée disponible du lundi au samedi",
		highlight: "Support 6j/7",
		color: "from-purple-600 to-purple-700",
	},
	{
		icon: <FiStar className="w-6 h-6" />,
		title: "Qualité Certifiée",
		desc: "Produits testés et certifiés par nos experts techniques",
		highlight: "100% testé",
		color: "from-orange-600 to-orange-700",
	},
];

export default function FeaturesBar() {
	return (
		<section className="relative py-16 sm:py-24 md:py-32 px-2 sm:px-4 md:px-6 overflow-hidden pb-0">
			{/* Enhanced background with subtle gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900"></div>
			
			{/* Subtle floating decorative elements */}
			<div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 dark:bg-blue-400/10 rounded-full blur-3xl"></div>
			<div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/20 dark:bg-purple-400/10 rounded-full blur-3xl"></div>
			
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
						className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-cyan-500/15 dark:from-blue-400/20 dark:via-purple-400/20 dark:to-cyan-400/20 backdrop-blur-xl border border-blue-200/40 dark:border-blue-400/30 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 shadow-lg dark:shadow-blue-400/10"
					>
						<motion.div
							animate={{ rotate: [0, 360] }}
							transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
						>
							<FiStar className="w-5 h-5 text-blue-600 dark:text-blue-300" />
						</motion.div>
						<span className="text-blue-600 dark:text-blue-300 text-xs sm:text-sm font-semibold tracking-wider uppercase">
							Nos Avantages Premium
						</span>
						<div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse shadow-sm"></div>
					</motion.div>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="text-3xl sm:text-4xl lg:text-7xl font-black text-gray-900 dark:text-gray-100 mb-4 sm:mb-8 tracking-tight"
					>
						Pourquoi Choisir
						<br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400">
							TechStore
						</span>
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="text-base sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl sm:max-w-4xl mx-auto leading-relaxed font-light"
					>
						Des services professionnels qui font la différence dans votre
						<br className="hidden lg:block" />
						expérience d&apos;achat technologique premium
					</motion.p>
				</motion.div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							whileHover={{ y: -8, scale: 1.02 }}
							className="group cursor-pointer"
						>
							<div className="h-full text-center hover:shadow-xl transition-all duration-500 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/60 dark:border-gray-600/60 p-6 shadow-lg dark:shadow-gray-900/20 group-hover:border-gray-300/80 dark:group-hover:border-gray-500/80">
								<div className="relative">
									<div
										className={`inline-flex w-16 h-16 bg-gradient-to-br ${feature.color} dark:shadow-lg rounded-lg items-center justify-center text-white mb-4 shadow-md mx-auto group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}
									>
										{feature.icon}
										{/* Enhanced shine effect for dark mode */}
										<div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
									</div>

									<div className={`inline-block px-3 py-1 bg-gradient-to-r ${feature.color} text-white text-xs font-medium rounded-full mb-3 shadow-sm`}>
										{feature.highlight}
									</div>

									<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">
										{feature.title}
									</h3>

									<p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
										{feature.desc}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="text-center mt-12"
				>
					<div className="inline-flex flex-wrap items-center justify-center gap-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl px-6 py-4 border border-gray-200/60 dark:border-gray-600/60 shadow-lg dark:shadow-gray-900/20">
						<div className="flex items-center space-x-2">
							<BsCheck2Circle className="w-5 h-5 text-green-600 dark:text-green-400" />
							<div>
								<div className="text-xl font-bold text-gray-900 dark:text-gray-100">
									15,000+
								</div>
								<div className="text-sm text-gray-600 dark:text-gray-400">
									Clients satisfaits
								</div>
							</div>
						</div>

						<div className="w-px h-10 bg-gray-200 dark:bg-gray-600 hidden sm:block"></div>

						<div className="flex items-center space-x-2">
							<FiStar className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />
							<div>
								<div className="text-xl font-bold text-gray-900 dark:text-gray-100">
									4.9/5
								</div>
								<div className="text-sm text-gray-600 dark:text-gray-400">
									Note moyenne
								</div>
							</div>
						</div>

						<div className="w-px h-10 bg-gray-200 dark:bg-gray-600 hidden sm:block"></div>

						<div className="flex items-center space-x-2">
							<FiShield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
							<div>
								<div className="text-xl font-bold text-gray-900 dark:text-gray-100">
									100%
								</div>
								<div className="text-sm text-gray-600 dark:text-gray-400">
									Sécurisé
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
