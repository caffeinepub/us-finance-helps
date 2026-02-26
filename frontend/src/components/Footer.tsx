import { TrendingUp, Heart } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { ResourceCategory } from '../backend';

const categories = [
    { label: 'Budgeting', category: ResourceCategory.budgeting },
    { label: 'Saving', category: ResourceCategory.saving },
    { label: 'Investing', category: ResourceCategory.investing },
    { label: 'Taxes', category: ResourceCategory.taxes },
    { label: 'Credit', category: ResourceCategory.credit },
    { label: 'Loans', category: ResourceCategory.loans },
    { label: 'Retirement', category: ResourceCategory.retirement },
];

export function Footer() {
    const navigate = useNavigate();
    const year = new Date().getFullYear();
    const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'us-finance-helps');

    return (
        <footer className="bg-brand-deep text-white/80 mt-16">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
                                <TrendingUp className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-serif font-bold text-white text-base">US Finance Helps</span>
                        </div>
                        <p className="text-sm leading-relaxed text-white/65">
                            Your trusted hub for US personal finance guidance. Empowering Americans to make smarter financial decisions.
                        </p>
                    </div>

                    {/* Topics */}
                    <div>
                        <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">Finance Topics</h4>
                        <ul className="space-y-2">
                            {categories.map((c) => (
                                <li key={c.category}>
                                    <button
                                        onClick={() => navigate({ to: '/category/$category', params: { category: c.category } })}
                                        className="text-sm text-white/65 hover:text-white transition-colors"
                                    >
                                        {c.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Disclaimer */}
                    <div>
                        <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">Disclaimer</h4>
                        <p className="text-sm text-white/65 leading-relaxed">
                            The information provided on US Finance Helps is for educational purposes only and does not constitute financial advice. Sponsored offers are partner content. Always consult a qualified financial professional.
                        </p>
                    </div>
                </div>

                <div className="border-t border-white/15 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
                    <span>© {year} US Finance Helps. All rights reserved.</span>
                    <span className="flex items-center gap-1">
                        Built with <Heart className="w-3 h-3 text-pastel-rose fill-current" /> using{' '}
                        <a
                            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-white underline underline-offset-2 transition-colors"
                        >
                            caffeine.ai
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}
