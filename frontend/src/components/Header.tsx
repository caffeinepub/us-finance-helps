import { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { Menu, X, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ResourceCategory } from '../backend';

const navLinks = [
    { label: 'Budgeting', category: ResourceCategory.budgeting },
    { label: 'Saving', category: ResourceCategory.saving },
    { label: 'Investing', category: ResourceCategory.investing },
    { label: 'Taxes', category: ResourceCategory.taxes },
    { label: 'Credit', category: ResourceCategory.credit },
    { label: 'Loans', category: ResourceCategory.loans },
    { label: 'Retirement', category: ResourceCategory.retirement },
];

export function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <header className="sticky top-0 z-50 bg-brand-deep shadow-md">
            <div className="container mx-auto px-4 flex items-center justify-between h-16">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-2.5 group"
                    onClick={() => setMobileOpen(false)}
                >
                    <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                        <img
                            src="/assets/generated/logo-icon.dim_256x256.png"
                            alt="US Finance Helps Logo"
                            className="w-7 h-7 object-contain"
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                                const next = (e.target as HTMLImageElement).nextElementSibling as HTMLElement | null;
                                if (next) next.classList.remove('hidden');
                            }}
                        />
                        <TrendingUp className="w-5 h-5 text-white hidden" aria-hidden />
                    </div>
                    <span className="font-serif font-bold text-white text-lg leading-tight tracking-tight">
                        US Finance Helps
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <button
                            key={link.category}
                            onClick={() => navigate({ to: '/category/$category', params: { category: link.category } })}
                            className="px-3 py-1.5 text-sm font-medium text-white/85 hover:text-white hover:bg-white/15 rounded-md transition-colors"
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>

                {/* Mobile toggle */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden text-white hover:bg-white/15"
                    onClick={() => setMobileOpen((v) => !v)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
            </div>

            {/* Mobile Nav */}
            {mobileOpen && (
                <nav className="lg:hidden bg-brand-deep border-t border-white/10 px-4 pb-4 pt-2 flex flex-col gap-1 animate-fade-in">
                    {navLinks.map((link) => (
                        <button
                            key={link.category}
                            onClick={() => {
                                setMobileOpen(false);
                                navigate({ to: '/category/$category', params: { category: link.category } });
                            }}
                            className="w-full text-left px-3 py-2.5 text-sm font-medium text-white/85 hover:text-white hover:bg-white/15 rounded-md transition-colors"
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>
            )}
        </header>
    );
}
