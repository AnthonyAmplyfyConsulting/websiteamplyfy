"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

const faqs = [
    {
        question: "How long does it take to deploy a custom AI agent?",
        answer: "Most custom agents and workflow automations can be built, tested, and deployed within 2 to 4 weeks depending on the complexity of your existing infrastructure and requirements."
    },
    {
        question: "Do I need technical knowledge to manage these systems?",
        answer: "No. We build our solutions to be entirely plug-and-play. We provide comprehensive training for your team and handle all the complex backend monitoring."
    },
    {
        question: "Are my company's data and documents secure?",
        answer: "Absolutely. We utilize enterprise-grade vector databases and ensure that any LLM integrations (like OpenAI or Azure) use strict zero-data-retention policies via API."
    },
    {
        question: "What if the automations break or need updating?",
        answer: "Our Premium and Enterprise tiers include ongoing monitoring and maintenance. If an API changes or a workflow stalls, our team is immediately alerted and resolves it."
    }
];

export default function Contact() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", {
                styles: { branding: { brandColor: "#ff5500" } },
                hideEventTypeDetails: false,
                layout: "month_view"
            });
        })();
    }, []);

    return (
        <section id="contact" className="py-24 bg-[#1a1a1a] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <div className="container px-6 mx-auto max-w-7xl">

                {/* Header */}
                <div className="text-center mb-16 lg:mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                        Ready to stop doing the manual work?
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-medium">
                        Let&apos;s find out exactly how much time and money AI can save your business.
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Left Column: Cal.com Embed */}
                    <div className="bg-mine-shaft border border-white/5 rounded-3xl p-4 md:p-8 shadow-xl flex flex-col h-[700px] overflow-hidden">
                        <h3 className="text-2xl font-bold text-white mb-6 pl-2">Schedule Your Discovery Call</h3>
                        <div className="flex-1 w-full relative">
                            <iframe
                                src="https://cal.com/anthonyamplyfy/30min?embed=true"
                                className="w-full h-full border-0 absolute inset-0"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Column: Static FAQ */}
                    <div className="flex flex-col justify-center">
                        <h3 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3300] to-[#ff9900]">Questions</span>
                        </h3>

                        <div className="space-y-8">
                            {faqs.map((faq, index) => (
                                <div key={index} className="flex flex-col">
                                    <h4 className="text-xl font-bold text-white mb-3">
                                        {faq.question}
                                    </h4>
                                    <p className="text-neutral-400 font-medium leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
