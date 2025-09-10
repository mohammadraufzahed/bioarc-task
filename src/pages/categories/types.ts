export interface CategoryFlat {
    id: string;
    name: {
        fa: string;
        en: string;
    };
    createdAt: Date;
    parentId: string | null;
}

export interface CategoryTree extends Omit<CategoryFlat, "createdAt"> {
    children: CategoryTree[];
}
