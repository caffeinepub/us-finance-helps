import { useNavigate } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { ResourceCategory } from '../backend';

interface TopicCardProps {
    category: ResourceCategory;
    label: string;
    description: string;
    icon: React.ReactNode;
    resourceCount?: number;
}

export function TopicCard({ category, label, description, icon, resourceCount }: TopicCardProps) {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate({ to: '/category/$category', params: { category } })}
            className="group text-left bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-4 w-full"
        >
            <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-lg bg-pastel-lavender flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                    {icon}
                </div>
                {resourceCount !== undefined && resourceCount > 0 && (
                    <span className="text-xs font-medium bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
                        {resourceCount} {resourceCount === 1 ? 'resource' : 'resources'}
                    </span>
                )}
            </div>
            <div>
                <h3 className="font-serif font-bold text-foreground text-lg mb-1.5 group-hover:text-primary transition-colors">
                    {label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-primary mt-auto">
                Explore resources
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
        </button>
    );
}
