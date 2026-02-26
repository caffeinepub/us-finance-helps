import { useNavigate } from '@tanstack/react-router';
import {
    PiggyBank,
    TrendingUp,
    Receipt,
    CreditCard,
    Landmark,
    Wallet,
    Umbrella,
    ChevronRight,
    BookOpen,
    Shield,
    BarChart3,
    Star,
} from 'lucide-react';
import { TopicCard } from '../components/TopicCard';
import { ResourceCard } from '../components/ResourceCard';
import { TopLoanOffersBanner } from '../components/TopLoanOffersBanner';
import { LeadCaptureModal } from '../components/LeadCaptureModal';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetAllResources } from '../hooks/useQueries';
import { ResourceCategory } from '../backend';
import { reviewsData } from '../data/reviewsData';
import { useLeadCapture } from '../context/LeadCaptureContext';

const topics = [
    {
        category: ResourceCategory.budgeting,
        label: 'Budgeting',
        description: 'Master your monthly spending, track expenses, and build a budget that actually works for your lifestyle.',
        icon: <Wallet className="w-6 h-6" />,
    },
    {
        category: ResourceCategory.saving,
        label: 'Saving',
        description: 'Build your emergency fund, set savings goals, and discover high-yield accounts to grow your money faster.',
        icon: <PiggyBank className="w-6 h-6" />,
    },
    {
        category: ResourceCategory.investing,
        label: 'Investing',
        description: 'Learn about stocks, ETFs, index funds, and strategies to grow your wealth over the long term.',
        icon: <TrendingUp className="w-6 h-6" />,
    },
    {
        category: ResourceCategory.taxes,
        label: 'Taxes',
        description: 'Navigate US tax laws, maximize deductions, and file confidently with expert guidance and tips.',
        icon: <Receipt className="w-6 h-6" />,
    },
    {
        category: ResourceCategory.credit,
        label: 'Credit',
        description: 'Understand your credit score, improve your credit history, and use credit cards strategically.',
        icon: <CreditCard className="w-6 h-6" />,
    },
    {
        category: ResourceCategory.loans,
        label: 'Loans',
        description: 'Compare mortgage, auto, student, and personal loan options to make informed borrowing decisions.',
        icon: <Landmark className="w-6 h-6" />,
    },
    {
        category: ResourceCategory.retirement,
        label: 'Retirement',
        description: 'Plan for a secure retirement with 401(k), IRA, Social Security, and long-term investment strategies.',
        icon: <Umbrella className="w-6 h-6" />,
    },
];

const stats = [
    { label: 'Finance Topics', value: '7', icon: <BookOpen className="w-5 h-5" /> },
    { label: 'Trusted Guidance', value: '100%', icon: <Shield className="w-5 h-5" /> },
    { label: 'US-Focused', value: 'Always', icon: <BarChart3 className="w-5 h-5" /> },
];

// Pick one highlight review per category for the homepage
const highlightReviews = topics.map((topic) => {
    const data = reviewsData[topic.category];
    return {
        category: topic.category,
        label: topic.label,
        review: data?.reviews[0] ?? null,
    };
}).filter((r) => r.review !== null);

export function HomePage() {
    const navigate = useNavigate();
    const { data: resources, isLoading } = useGetAllResources();
    const { isLeadCaptured } = useLeadCapture();

    const resourceCountByCategory = (resources ?? []).reduce<Record<string, number>>((acc, r) => {
        const key = Object.keys(r.category)[0];
        acc[key] = (acc[key] ?? 0) + 1;
        return acc;
    }, {});

    const recentResources = (resources ?? []).slice(0, 6);

    return (
        <div className="animate-fade-in">
            {/* Lead Capture Modal — shown until form is submitted */}
            {!isLeadCaptured && <LeadCaptureModal />}

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-brand-deep">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="/assets/generated/hero-banner.dim_1200x400.png"
                        alt=""
                        className="w-full h-full object-cover"
                        aria-hidden="true"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                </div>
                <div className="relative container mx-auto px-4 py-20 md:py-28 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                        <Shield className="w-3.5 h-3.5" />
                        Trusted US Personal Finance Guidance
                    </div>
                    <h1 className="font-serif font-black text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-5 max-w-3xl mx-auto">
                        Take Control of Your Financial Future
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
                        US Finance Helps provides clear, actionable guidance on budgeting, saving, investing, taxes, credit, loans, and more — all tailored for Americans.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button
                            onClick={() => {
                                document.getElementById('topics')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-flex items-center gap-2 bg-white text-brand-deep font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors shadow-md"
                        >
                            Explore Topics
                            <ChevronRight className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => navigate({ to: '/category/$category', params: { category: ResourceCategory.loans } })}
                            className="inline-flex items-center gap-2 bg-white/15 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/25 transition-colors border border-white/25"
                        >
                            View Loan Offers
                        </button>
                    </div>
                </div>

                {/* Stats bar */}
                <div className="relative border-t border-white/15 bg-black/10">
                    <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex items-center gap-2.5 text-white">
                                <div className="text-white/70">{stat.icon}</div>
                                <div>
                                    <span className="font-bold text-lg leading-none">{stat.value}</span>
                                    <span className="text-white/70 text-sm ml-1.5">{stat.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Loan Offers Banner */}
            <TopLoanOffersBanner />

            {/* Topics Grid */}
            <section id="topics" className="container mx-auto px-4 py-16">
                <div className="text-center mb-10">
                    <h2 className="font-serif font-bold text-foreground text-3xl md:text-4xl mb-3">
                        Finance Topics
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        Explore our curated resources across all major personal finance categories.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {topics.map((topic) => (
                        <TopicCard
                            key={topic.category}
                            category={topic.category}
                            label={topic.label}
                            description={topic.description}
                            icon={topic.icon}
                            resourceCount={resourceCountByCategory[topic.category]}
                        />
                    ))}
                </div>
            </section>

            {/* Reader Reviews Highlights */}
            <section className="bg-pastel-lavender/20 py-14">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="font-serif font-bold text-foreground text-3xl md:text-4xl mb-3">
                            What Our Readers Say
                        </h2>
                        <p className="text-muted-foreground text-base max-w-xl mx-auto">
                            Real experiences from Americans who improved their finances with our guidance.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {highlightReviews.slice(0, 7).map(({ category, label, review }) => (
                            review && (
                                <button
                                    key={category}
                                    onClick={() => navigate({ to: '/category/$category', params: { category } })}
                                    className="text-left bg-card border border-border rounded-xl p-5 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-3"
                                >
                                    <div className="flex items-center justify-between gap-2">
                                        <span className="text-xs font-semibold text-primary bg-pastel-lavender px-2.5 py-0.5 rounded-full">
                                            {label}
                                        </span>
                                        <div className="flex items-center gap-0.5">
                                            {Array.from({ length: review.rating }).map((_, i) => (
                                                <Star key={i} className="w-3.5 h-3.5 fill-pastel-gold text-pastel-gold" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-sm text-foreground/80 leading-relaxed flex-1">"{review.text}"</p>
                                    <div className="flex items-center gap-2">
                                        <div className="w-7 h-7 rounded-full bg-pastel-mint flex items-center justify-center text-secondary-foreground font-bold text-xs">
                                            {review.initial}
                                        </div>
                                        <span className="text-xs font-medium text-muted-foreground">{review.name}</span>
                                    </div>
                                </button>
                            )
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Resources */}
            {(isLoading || recentResources.length > 0) && (
                <section className="bg-secondary/30 py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-10">
                            <h2 className="font-serif font-bold text-foreground text-3xl md:text-4xl mb-3">
                                Featured Resources
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                                Hand-picked articles, guides, and tools to help you on your financial journey.
                            </p>
                        </div>
                        {isLoading ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <Skeleton key={i} className="h-44 rounded-xl" />
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {recentResources.map((resource, i) => (
                                    <ResourceCard key={i} resource={resource} />
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* CTA Banner */}
            <section className="container mx-auto px-4 py-16">
                <div className="bg-brand-deep rounded-2xl p-10 md:p-14 text-center text-white">
                    <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">
                        Ready to Improve Your Finances?
                    </h2>
                    <p className="text-white/75 text-lg max-w-xl mx-auto mb-8">
                        Browse our comprehensive library of US personal finance resources and start making smarter money decisions today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        {topics.slice(0, 3).map((topic) => (
                            <button
                                key={topic.category}
                                onClick={() => navigate({ to: '/category/$category', params: { category: topic.category } })}
                                className="inline-flex items-center gap-2 bg-white/15 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-white/25 transition-colors border border-white/20 text-sm"
                            >
                                {topic.label}
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
