import { Landmark, Lock } from 'lucide-react';
import { LoanOfferCard } from './LoanOfferCard';
import { loanOffersData } from '../data/loanOffersData';
import { ResourceCategory } from '../backend';
import { useLeadCapture } from '../context/LeadCaptureContext';

interface LoanOffersSectionProps {
    category: ResourceCategory;
}

export function LoanOffersSection({ category }: LoanOffersSectionProps) {
    const offers = loanOffersData[category];
    const { isLeadCaptured } = useLeadCapture();

    if (!offers || offers.length === 0) return null;

    return (
        <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-pastel-peach flex items-center justify-center">
                    <Landmark className="w-4 h-4 text-accent-foreground" />
                </div>
                <div>
                    <h3 className="font-serif font-bold text-foreground text-lg leading-tight">
                        Featured Offers
                    </h3>
                    <p className="text-xs text-muted-foreground">Sponsored partner offers — compare and apply</p>
                </div>
            </div>

            {!isLeadCaptured && (
                <div className="mb-4 flex items-center gap-3 bg-pastel-lavender/40 border border-pastel-lavender rounded-xl px-4 py-3">
                    <Lock className="w-4 h-4 text-primary flex-shrink-0" />
                    <p className="text-sm text-foreground/80">
                        <strong>Unlock exclusive offers</strong> — fill in your details at the top of the page to reveal today's best loan rates.
                    </p>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {offers.map((offer) => (
                    <LoanOfferCard key={offer.id} offer={offer} />
                ))}
            </div>
        </section>
    );
}
