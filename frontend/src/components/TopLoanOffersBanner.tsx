import { Sparkles, ExternalLink, Tag, Lock } from 'lucide-react';
import { topLoanOffers } from '../data/loanOffersData';
import { useLeadCapture } from '../context/LeadCaptureContext';
import { buildAffiliateUrl } from '../utils/affiliateUrlBuilder';

export function TopLoanOffersBanner() {
    const { isLeadCaptured, leadData } = useLeadCapture();

    return (
        <section className="bg-gradient-to-br from-pastel-lavender via-pastel-sky to-pastel-mint py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-white/60 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5" />
                        Exclusive Partner Offers
                    </div>
                    <h2 className="font-serif font-bold text-foreground text-3xl md:text-4xl mb-2">
                        Top Loan Offers
                    </h2>
                    <p className="text-muted-foreground text-base max-w-xl mx-auto">
                        Compare today's best rates from trusted lenders. Pre-qualify in minutes with no impact to your credit score.
                    </p>
                </div>

                {!isLeadCaptured ? (
                    /* Teaser / locked state */
                    <div className="relative">
                        {/* Blurred cards behind the overlay */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 blur-sm pointer-events-none select-none opacity-70" aria-hidden="true">
                            {topLoanOffers.map((offer) => (
                                <div
                                    key={offer.id}
                                    className="bg-white/80 border border-white/60 rounded-xl p-5 flex flex-col gap-3"
                                >
                                    <div className="flex items-center gap-1 text-xs font-semibold bg-pastel-peach text-accent-foreground px-2.5 py-0.5 rounded-full w-fit">
                                        <Tag className="w-3 h-3" />
                                        {offer.badge}
                                    </div>
                                    <div>
                                        <div className="h-5 bg-muted rounded w-3/4 mb-2" />
                                        <div className="h-4 bg-muted rounded w-1/2" />
                                    </div>
                                    <div className="h-3 bg-muted rounded w-full mb-1" />
                                    <div className="h-3 bg-muted rounded w-5/6" />
                                    <div className="h-10 bg-muted rounded-lg w-full mt-2" />
                                </div>
                            ))}
                        </div>

                        {/* Lock overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white/30 backdrop-blur-[2px] rounded-xl">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                <Lock className="w-8 h-8 text-primary" />
                            </div>
                            <div className="text-center max-w-sm px-4">
                                <p className="font-serif font-bold text-foreground text-xl mb-1">
                                    Unlock Your Personalized Offers
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Enter your details in the form below to instantly reveal today's best loan rates from our trusted partners.
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Unlocked — show all 6 real cards */
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {topLoanOffers.map((offer) => {
                            const resolvedUrl = buildAffiliateUrl(offer.ctaUrl, leadData);
                            return (
                                <article
                                    key={offer.id}
                                    className={`bg-white/80 backdrop-blur-sm border rounded-xl p-5 flex flex-col gap-3 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 ${
                                        offer.highlight ? 'border-primary/40 ring-1 ring-primary/20' : 'border-white/60'
                                    }`}
                                >
                                    <div className="flex items-center justify-between gap-2">
                                        <span className="inline-flex items-center gap-1 text-xs font-semibold bg-pastel-peach text-accent-foreground px-2.5 py-0.5 rounded-full">
                                            <Tag className="w-3 h-3" />
                                            {offer.badge}
                                        </span>
                                        {offer.highlight && (
                                            <span className="text-xs font-bold text-primary">★ Top Pick</span>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="font-serif font-bold text-foreground text-base mb-0.5">{offer.lenderName}</h3>
                                        <p className="text-sm font-semibold text-primary">{offer.apr}</p>
                                    </div>
                                    <p className="text-xs text-muted-foreground leading-relaxed flex-1">{offer.offerDescription}</p>
                                    <a
                                        href={resolvedUrl}
                                        target="_blank"
                                        rel="noopener noreferrer sponsored"
                                        className="inline-flex items-center justify-center gap-1.5 bg-primary text-primary-foreground font-semibold text-sm px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                                    >
                                        {offer.ctaText}
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                </article>
                            );
                        })}
                    </div>
                )}

                <p className="text-center text-xs text-muted-foreground mt-6">
                    Sponsored content. Rates shown are for illustrative purposes. Actual rates depend on creditworthiness and lender terms.
                </p>
            </div>
        </section>
    );
}
