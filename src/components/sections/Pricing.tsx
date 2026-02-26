"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
    const plans = [
        {
            name: "Entry",
            price: "$1,000 - $5,000",
            description: "Perfect for businesses starting their automation journey.",
            features: [
                "Custom Site Design",
                "P.A.G.E.S Framework",
                "Sales Funnel Setup",
                "Customer Relationship Automations",
                "Basic AI Integration"
            ],
            highlighted: false,
            buttonText: "Book a call"
        },
        {
            name: "Premium",
            price: "$5,000 - $12,000",
            description: "Advanced infrastructure for scaling operations.",
            features: [
                "Everything in Entry",
                "WebApp Infrastructure",
                "Medium-High Level AI Integration",
                "Custom Dashboard",
                "Priority Support"
            ],
            highlighted: true,
            buttonText: "Book a call"
        },
        {
            name: "Enterprise",
            price: "$15,000+",
            description: "Full-scale partnership for industry leaders.",
            features: [
                "Everything in Premium",
                "Full Automation Agency Partnership",
                "Highest Level AI Implementation",
                "Dedicated Account Manager",
                "24/7 Monitoring & Maintenance"
            ],
            highlighted: false,
            buttonText: "Book a call"
        }
    ];

    return (
        <section id="pricing" className="py-32 bg-white relative overflow-hidden">
            <div className="container px-6 mx-auto max-w-7xl">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-mine-shaft mb-6">
                        We understand you have a budget.
                    </h2>
                    <p className="text-xl text-neutral-500 max-w-2xl mx-auto font-medium">
                        Transparent pricing for every stage of growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center lg:items-stretch">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`rounded-[2rem] p-8 md:p-10 flex flex-col relative h-full bg-[#1a1a1a] border border-white/5 text-white hover:bg-[#222] hover:border-white/10 transition-colors ${plan.highlighted ? "lg:-mt-4 lg:mb-4 shadow-[0_20px_40px_rgba(0,0,0,0.15)]" : ""
                                }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute top-0 right-8 -translate-y-1/2">
                                    <span className="bg-gradient-to-r from-[#ff3300] to-[#ff9900] text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-md">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="mb-8 border-b border-white/10 pb-8">
                                <h3 className="text-2xl md:text-3xl font-bold mb-2">{plan.name}</h3>
                                <div className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff3300] to-[#ff9900] mb-4">
                                    {plan.price}
                                </div>
                                <p className="font-medium text-neutral-400">
                                    {plan.description}
                                </p>
                            </div>

                            <ul className="flex-1 space-y-5 mb-10">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <div className="mt-0.5 shrink-0 text-brand-orange">
                                            <Check size={20} strokeWidth={2.5} />
                                        </div>
                                        <span className="text-neutral-300 font-medium">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <a href="#contact" className={`block text-center w-full py-4 rounded-full font-bold transition-colors ${plan.highlighted
                                ? "bg-brand-orange hover:bg-brand-orange-dark text-white shadow-lg shadow-brand-orange/20"
                                : "bg-white/10 text-white hover:bg-white/20"
                                }`}>
                                {plan.buttonText}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
