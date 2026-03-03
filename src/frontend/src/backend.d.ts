import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Resource {
    url: string;
    title: string;
    description: string;
    category: ResourceCategory;
}
export enum ResourceCategory {
    taxes = "taxes",
    saving = "saving",
    investing = "investing",
    loans = "loans",
    credit = "credit",
    budgeting = "budgeting",
    retirement = "retirement"
}
export interface backendInterface {
    addResource(id: string, title: string, description: string, url: string, category: ResourceCategory): Promise<void>;
    deleteResource(id: string): Promise<void>;
    getAllResources(): Promise<Array<Resource>>;
    getResource(id: string): Promise<Resource>;
    getResourcesByCategory(category: ResourceCategory): Promise<Array<Resource>>;
    updateResource(id: string, title: string, description: string, url: string, category: ResourceCategory): Promise<void>;
}
