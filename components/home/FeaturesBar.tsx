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
		<section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
			<div className="container mx-auto px-4 sm:px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-10 sm:mb-12 md:mb-16"
				>
					<div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-3 sm:px-4 py-2 rounded-full mb-6">
						<FiStar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
						<span className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium uppercase tracking-wider">
							Nos Avantages
						</span>
					</div>

					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
						Pourquoi Choisir TechStore
					</h2>

					<p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
						Des services professionnels qui font la différence dans votre
						expérience d'achat
					</p>
				</motion.div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.6,
								delay: index * 0.1,
							}}
							className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
						>
							<div
								className={`inline-flex w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.color} rounded-xl items-center justify-center text-white mb-4 sm:mb-6`}
							>
								{feature.icon}
							</div>

							<div
								className={`inline-block px-2 sm:px-3 py-1 bg-gradient-to-r ${feature.color} text-white text-xs font-semibold rounded-full mb-3 sm:mb-4`}
							>
								{feature.highlight}
							</div>

							<h3 className="font-bold text-gray-900 dark:text-white text-lg sm:text-xl mb-2 sm:mb-3">
								{feature.title}
							</h3>

							<p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
								{feature.desc}
							</p>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="text-center"
				>
					<div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 bg-white dark:bg-gray-800 rounded-2xl px-4 sm:px-8 py-4 sm:py-6 shadow-lg border border-gray-100 dark:border-gray-700">
						<div className="flex items-center space-x-2 sm:space-x-3">
							<BsCheck2Circle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
							<div>
								<div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
									15,000+
								</div>
								<div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
									Clients satisfaits
								</div>
							</div>
						</div>

						<div className="w-px h-8 sm:h-12 bg-gray-200 dark:bg-gray-600 hidden sm:block"></div>

						<div className="flex items-center space-x-2 sm:space-x-3">
							<FiStar className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
							<div>
								<div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
									4.9/5
								</div>
								<div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
									Note moyenne
								</div>
							</div>
						</div>

						<div className="w-px h-8 sm:h-12 bg-gray-200 dark:bg-gray-600 hidden sm:block"></div>

						<div className="flex items-center space-x-2 sm:space-x-3">
							<FiShield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
							<div>
								<div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
									100%
								</div>
								<div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
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
