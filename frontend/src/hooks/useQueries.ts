import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { Resource, ResourceCategory } from '../backend';

export function useGetAllResources() {
    const { actor, isFetching } = useActor();

    return useQuery<Resource[]>({
        queryKey: ['resources'],
        queryFn: async () => {
            if (!actor) return [];
            return actor.getAllResources();
        },
        enabled: !!actor && !isFetching,
    });
}

export function useGetResourcesByCategory(category: ResourceCategory) {
    const { actor, isFetching } = useActor();

    return useQuery<Resource[]>({
        queryKey: ['resources', 'category', category],
        queryFn: async () => {
            if (!actor) return [];
            return actor.getResourcesByCategory(category);
        },
        enabled: !!actor && !isFetching,
    });
}

export function useGetResource(id: string) {
    const { actor, isFetching } = useActor();

    return useQuery<Resource>({
        queryKey: ['resources', id],
        queryFn: async () => {
            if (!actor) throw new Error('Actor not available');
            return actor.getResource(id);
        },
        enabled: !!actor && !isFetching && !!id,
    });
}

export function useAddResource() {
    const { actor } = useActor();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({
            id,
            title,
            description,
            url,
            category,
        }: {
            id: string;
            title: string;
            description: string;
            url: string;
            category: ResourceCategory;
        }) => {
            if (!actor) throw new Error('Actor not available');
            return actor.addResource(id, title, description, url, category);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['resources'] });
        },
    });
}

export function useDeleteResource() {
    const { actor } = useActor();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id: string) => {
            if (!actor) throw new Error('Actor not available');
            return actor.deleteResource(id);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['resources'] });
        },
    });
}
