import { Star } from 'lucide-react';

interface ReviewCardProps {
    name: string;
    initial: string;
    rating: number;
    text: string;
}

export function ReviewCard({ name, initial, rating, text }: ReviewCardProps) {
    return (
        <article className="bg-card border border-border rounded-xl p-5 shadow-card flex flex-col gap-3">
            <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${i < rating ? 'fill-pastel-gold text-pastel-gold' : 'text-muted-foreground/30'}`}
                    />
                ))}
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed flex-1">"{text}"</p>
            <div className="flex items-center gap-2.5 mt-1">
                <div className="w-8 h-8 rounded-full bg-pastel-lavender flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                    {initial}
                </div>
                <span className="text-sm font-medium text-foreground">{name}</span>
            </div>
        </article>
    );
}
