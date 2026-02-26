import { ExternalLink, BookOpen } from 'lucide-react';
import { Resource } from '../backend';
import { Badge } from '@/components/ui/badge';

interface ResourceCardProps {
    resource: Resource;
}

const categoryLabels: Record<string, string> = {
    budgeting: 'Budgeting',
    saving: 'Saving',
    investing: 'Investing',
    taxes: 'Taxes',
    credit: 'Credit',
    loans: 'Loans',
    retirement: 'Retirement',
};

export function ResourceCard({ resource }: ResourceCardProps) {
    const categoryKey = Object.keys(resource.category)[0] as string;
    const categoryLabel = categoryLabels[categoryKey] ?? categoryKey;

    const hasUrl = resource.url && resource.url.trim() !== '';

    return (
        <article className="bg-card border border-border rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col gap-3">
            <div className="flex items-start justify-between gap-3">
                <div className="w-9 h-9 rounded-lg bg-pastel-mint flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-4 h-4 text-secondary-foreground" />
                </div>
                <Badge variant="secondary" className="text-xs flex-shrink-0">
                    {categoryLabel}
                </Badge>
            </div>
            <div className="flex-1">
                <h3 className="font-semibold text-foreground text-base mb-1.5 leading-snug">
                    {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    {resource.description}
                </p>
            </div>
            {hasUrl && (
                <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline mt-1"
                >
                    Learn more
                    <ExternalLink className="w-3.5 h-3.5" />
                </a>
            )}
        </article>
    );
}
