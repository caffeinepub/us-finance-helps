import { ExternalLink, Tag, Lock } from 'lucide-react';
import { LoanOffer } from '../data/loanOffersData';
import { useLeadCapture } from '../context/LeadCaptureContext';
import { buildAffiliateUrl } from '../utils/affiliateUrlBuilder';

interface LoanOfferCardProps {
    offer: LoanOffer;
    compact?: boolean;
}

export function LoanOfferCard({ offer, compact = false }: LoanOfferCardProps) {
    const { isLeadCaptured, leadData } = useLeadCapture();

    if (!isLeadCaptured) {
        return (
            <article
                className={`relative bg-card border border-border rounded-xl flex flex-col gap-3 overflow-hidden ${compact ? 'p-4' : 'p-5'}`}
            >
                {/* Blurred content */}
                <div className="blur-sm pointer-events-none select-none opacity-60" aria-hidden="true">
                    <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold bg-pastel-peach text-accent-foreground px-2.5 py-0.5 rounded-full">
                            <Tag className="w-3 h-3" />
                            {offer.badge}
                        </span>
                    </div>
                    <div className="h-5 bg-muted rounded w-3/4 mb-2" />
                    <div className="h-4 bg-muted rounded w-1/2 mb-3" />
                    <div className="h-3 bg-muted rounded w-full mb-1" />
                    <div className="h-3 bg-muted rounded w-5/6 mb-4" />
                    <div className="h-10 bg-muted rounded-lg w-full" />
                </div>

                {/* Lock overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-card/70 backdrop-blur-[2px]">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Lock className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-xs font-semibold text-foreground text-center px-4">
                        Fill in your details above to unlock this offer
                    </p>
                </div>
            </article>
        );
    }

    const resolvedUrl = buildAffiliateUrl(offer.ctaUrl, leadData);

    return (
        <article
            className={`relative bg-card border rounded-xl shadow-card flex flex-col gap-3 transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5 ${
                offer.highlight
                    ? 'border-primary/40 ring-1 ring-primary/20'
                    : 'border-border'
            } ${compact ? 'p-4' : 'p-5'}`}
        >
            {/* Badge */}
            <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1 text-xs font-semibold bg-pastel-peach text-accent-foreground px-2.5 py-0.5 rounded-full">
                    <Tag className="w-3 h-3" />
                    {offer.badge}
                </span>
                {offer.highlight && (
                    <span className="text-xs font-bold text-primary bg-pastel-lavender px-2 py-0.5 rounded-full">
                        ★ Top Pick
                    </span>
                )}
            </div>

            {/* Lender & APR */}
            <div>
                <h4 className={`font-serif font-bold text-foreground ${compact ? 'text-base' : 'text-lg'} mb-1`}>
                    {offer.lenderName}
                </h4>
                <p className="text-sm font-semibold text-primary">{offer.apr}</p>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {offer.offerDescription}
            </p>

            {/* CTA */}
            <a
                href={resolvedUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity mt-1"
            >
                {offer.ctaText}
                <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <p className="text-xs text-muted-foreground/60 text-center">
                *Rates and terms subject to lender approval. See site for details.
            </p>
        </article>
    );
}
