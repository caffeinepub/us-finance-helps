import { useParams, useNavigate } from '@tanstack/react-router';
import {
    PiggyBank,
    TrendingUp,
    Receipt,
    CreditCard,
    Landmark,
    Wallet,
    Umbrella,
    ArrowLeft,
    Search,
    Lock,
} from 'lucide-react';
import { ResourceCard } from '../components/ResourceCard';
import { DiscussionSection } from '../components/DiscussionSection';
import { LoanOffersSection } from '../components/LoanOffersSection';
import { LeadCaptureModal } from '../components/LeadCaptureModal';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';
import { useGetResourcesByCategory } from '../hooks/useQueries';
import { ResourceCategory } from '../backend';
import { useLeadCapture } from '../context/LeadCaptureContext';
import { useState, useMemo } from 'react';

const categoryMeta: Record<string, {
    label: string;
    description: string;
    icon: React.ReactNode;
    tips: string[];
    heroBg: string;
}> = {
    [ResourceCategory.budgeting]: {
        label: 'Budgeting',
        description: 'Learn how to create and stick to a budget that helps you reach your financial goals.',
        icon: <Wallet className="w-8 h-8" />,
        tips: ['Track every dollar you spend', 'Use the 50/30/20 rule as a starting point', 'Review your budget monthly'],
        heroBg: 'bg-brand-deep',
    },
    [ResourceCategory.saving]: {
        label: 'Saving',
        description: 'Discover strategies to build your savings and create a financial safety net.',
        icon: <PiggyBank className="w-8 h-8" />,
        tips: ['Aim for 3–6 months of expenses in emergency fund', 'Automate your savings transfers', 'Compare high-yield savings accounts'],
        heroBg: 'bg-brand-deep',
    },
    [ResourceCategory.investing]: {
        label: 'Investing',
        description: 'Grow your wealth through smart, long-term investment strategies.',
        icon: <TrendingUp className="w-8 h-8" />,
        tips: ['Start investing early to benefit from compounding', 'Diversify your portfolio', 'Consider low-cost index funds'],
        heroBg: 'bg-brand-deep',
    },
    [ResourceCategory.taxes]: {
        label: 'Taxes',
        description: 'Navigate the US tax system and maximize your deductions legally.',
        icon: <Receipt className="w-8 h-8" />,
        tips: ['Contribute to tax-advantaged accounts', 'Keep records of deductible expenses', 'File on time to avoid penalties'],
        heroBg: 'bg-brand-deep',
    },
    [ResourceCategory.credit]: {
        label: 'Credit',
        description: 'Build and maintain excellent credit to unlock better financial opportunities.',
        icon: <CreditCard className="w-8 h-8" />,
        tips: ['Pay bills on time — it\'s 35% of your score', 'Keep credit utilization below 30%', 'Check your credit report annually for free'],
        heroBg: 'bg-brand-deep',
    },
    [ResourceCategory.loans]: {
        label: 'Loans',
        description: 'Understand your borrowing options and make informed loan decisions.',
        icon: <Landmark className="w-8 h-8" />,
        tips: ['Compare APR, not just interest rates', 'Understand the total cost of borrowing', 'Pay extra toward principal when possible'],
        heroBg: 'bg-brand-deep',
    },
    [ResourceCategory.retirement]: {
        label: 'Retirement',
        description: 'Plan for a financially secure retirement with the right accounts and strategies.',
        icon: <Umbrella className="w-8 h-8" />,
        tips: ['Contribute enough to get your employer 401(k) match', 'Consider a Roth IRA for tax-free growth', 'Increase contributions by 1% each year'],
        heroBg: 'bg-brand-deep',
    },
};

export function CategoryPage() {
    const { category } = useParams({ from: '/category/$category' });
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const { isLeadCaptured } = useLeadCapture();

    const categoryEnum = category as ResourceCategory;
    const meta = categoryMeta[categoryEnum] ?? {
        label: category,
        description: 'Browse resources for this finance topic.',
        icon: <Wallet className="w-8 h-8" />,
        tips: [],
        heroBg: 'bg-brand-deep',
    };

    const { data: resources, isLoading, isError } = useGetResourcesByCategory(categoryEnum);

    const filtered = useMemo(() => {
        if (!resources) return [];
        if (!search.trim()) return resources;
        const q = search.toLowerCase();
        return resources.filter(
            (r) =>
                r.title.toLowerCase().includes(q) ||
                r.description.toLowerCase().includes(q)
        );
    }, [resources, search]);

    return (
        <div className="animate-fade-in">
            {/* Lead Capture Modal — shown until form is submitted */}
            {!isLeadCaptured && <LeadCaptureModal />}

            {/* Category Hero */}
            <section className={`${meta.heroBg} text-white py-12 md:py-16`}>
                <div className="container mx-auto px-4">
                    <button
                        onClick={() => navigate({ to: '/' })}
                        className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-medium mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </button>
                    <div className="flex items-start gap-5">
                        <div className="w-16 h-16 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                            {meta.icon}
                        </div>
                        <div>
                            <h1 className="font-serif font-black text-3xl md:text-4xl mb-2">
                                {meta.label}
                            </h1>
                            <p className="text-white/75 text-lg max-w-2xl leading-relaxed">
                                {meta.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main content */}
                    <div className="lg:col-span-3 space-y-8">

                        {/* Discussion & Reviews */}
                        <DiscussionSection category={categoryEnum} />

                        {/* Loan Offers */}
                        <LoanOffersSection category={categoryEnum} />

                        {/* Search */}
                        <div>
                            <h3 className="font-serif font-bold text-foreground text-xl mb-4">Resources</h3>
                            <div className="relative mb-4">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <Input
                                    placeholder={`Search ${meta.label} resources...`}
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="pl-9"
                                />
                            </div>

                            {/* Results count */}
                            {!isLoading && !isError && (
                                <p className="text-sm text-muted-foreground mb-5">
                                    {filtered.length === 0
                                        ? 'No resources found.'
                                        : `${filtered.length} resource${filtered.length !== 1 ? 's' : ''} found`}
                                </p>
                            )}

                            {/* Loading */}
                            {isLoading && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {Array.from({ length: 4 }).map((_, i) => (
                                        <Skeleton key={i} className="h-44 rounded-xl" />
                                    ))}
                                </div>
                            )}

                            {/* Error */}
                            {isError && (
                                <div className="text-center py-16 text-muted-foreground">
                                    <p className="text-lg font-medium mb-2">Failed to load resources</p>
                                    <p className="text-sm">Please try again later.</p>
                                </div>
                            )}

                            {/* Resources grid */}
                            {!isLoading && !isError && filtered.length > 0 && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {filtered.map((resource, i) => (
                                        <ResourceCard key={i} resource={resource} />
                                    ))}
                                </div>
                            )}

                            {/* Empty state */}
                            {!isLoading && !isError && filtered.length === 0 && (
                                <div className="text-center py-20 text-muted-foreground">
                                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                                        {meta.icon}
                                    </div>
                                    <p className="text-lg font-medium mb-2">
                                        {search ? 'No matching resources' : `No ${meta.label} resources yet`}
                                    </p>
                                    <p className="text-sm max-w-xs mx-auto">
                                        {search
                                            ? 'Try a different search term.'
                                            : 'Check back soon — we\'re adding new resources regularly.'}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar tips */}
                    <aside className="lg:col-span-1">
                        <div className="bg-pastel-lavender/30 rounded-xl p-5 border border-pastel-lavender sticky top-24">
                            <h3 className="font-serif font-bold text-foreground text-lg mb-4">
                                Quick Tips
                            </h3>
                            <ul className="space-y-3">
                                {meta.tips.map((tip, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/80">
                                        <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                            {i + 1}
                                        </span>
                                        {tip}
                                    </li>
                                ))}
                            </ul>

                            {!isLeadCaptured && (
                                <div className="mt-5 pt-4 border-t border-pastel-lavender">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Lock className="w-4 h-4 text-primary" />
                                        <p className="text-xs font-semibold text-foreground">Unlock Loan Offers</p>
                                    </div>
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        Fill in your details to reveal today's best loan rates from our trusted partners.
                                    </p>
                                </div>
                            )}

                            <div className="mt-6 pt-5 border-t border-pastel-lavender">
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    <strong>Disclaimer:</strong> This information is for educational purposes only and does not constitute financial advice. Sponsored offers are partner content.
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
