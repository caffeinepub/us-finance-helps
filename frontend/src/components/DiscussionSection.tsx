import { MessageSquare } from 'lucide-react';
import { ReviewCard } from './ReviewCard';
import { reviewsData } from '../data/reviewsData';
import { ResourceCategory } from '../backend';

interface DiscussionSectionProps {
    category: ResourceCategory;
}

export function DiscussionSection({ category }: DiscussionSectionProps) {
    const data = reviewsData[category];
    if (!data) return null;

    return (
        <section className="mb-8">
            {/* Discussion */}
            <div className="bg-pastel-lavender/30 border border-pastel-lavender rounded-xl p-6 mb-6">
                <div className="flex items-center gap-2 mb-3">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <h3 className="font-serif font-bold text-foreground text-lg">Expert Discussion</h3>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">{data.discussion}</p>
            </div>

            {/* Reviews */}
            <div>
                <h3 className="font-serif font-bold text-foreground text-lg mb-4">What Our Readers Say</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data.reviews.map((review, i) => (
                        <ReviewCard key={i} {...review} />
                    ))}
                </div>
            </div>
        </section>
    );
}
