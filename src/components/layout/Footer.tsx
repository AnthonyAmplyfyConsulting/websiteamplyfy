import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black pt-16 pb-8">
            <div className="container px-6 mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <Link href="/" className="text-2xl font-bold text-white mb-4 block flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-orange to-brand-orange-dark flex items-center justify-center">
                                <span className="text-white font-bold text-sm">A</span>
                            </div>
                            Amplyfy
                        </Link>
                        <p className="text-neutral-400 max-w-sm">
                            We build custom AI solutions and workflow automations that directly impact your bottom line.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Solutions</h4>
                        <ul className="space-y-3">
                            <li><Link href="#services" className="text-neutral-500 hover:text-white transition-colors">AI Agents</Link></li>
                            <li><Link href="#services" className="text-neutral-500 hover:text-white transition-colors">Workflow Automation</Link></li>
                            <li><Link href="#services" className="text-neutral-500 hover:text-white transition-colors">Predictive Analytics</Link></li>
                            <li><Link href="#contact" className="text-neutral-500 hover:text-white transition-colors">Consulting</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-3">
                            <li><Link href="#about" className="text-neutral-500 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#roi" className="text-neutral-500 hover:text-white transition-colors">Impact</Link></li>
                            <li><Link href="#contact" className="text-neutral-500 hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="#" className="text-neutral-500 hover:text-white transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-600">
                    <p>© {new Date().getFullYear()} Amplyfy Consulting. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
