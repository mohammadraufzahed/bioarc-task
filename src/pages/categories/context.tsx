import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface CategoryFlat {
  id: string;
  name: {
    fa: string;
    en: string;
  };
  createdAt: Date;
  parentId: string | null;
}

interface CategoryTree extends Omit<CategoryFlat, "parentId" | "createdAt"> {
  children: CategoryTree[];
}

interface CategoriesContextType {
  tree: CategoryTree[];
  raw: CategoryFlat[];
  add: (payload: {
    name: { fa: string; en: string };
    parentId?: string | null;
  }) => CategoryFlat;
  remove: (id: string) => void;
}

const CategoriesContext = createContext<CategoriesContextType | undefined>(
  undefined
);

export const CategoriesContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  // Stats
  const [rawList, setRawList] = useState<CategoryFlat[]>([]);

  // Memos
  const tree = useMemo<CategoryTree[]>(() => {
    const byParent = rawList.reduce((acc, node) => {
      const list = acc.get(node.parentId) ?? [];
      acc.set(node.parentId, [...list, node]);
      return acc;
    }, new Map<string | null, CategoryFlat[]>());

    const sortByDate = (r1: CategoryFlat, r2: CategoryFlat) =>
      r1.createdAt.getTime() - r2.createdAt.getTime();

    const buildTree = (raw: CategoryFlat): CategoryTree => ({
      id: raw.id,
      name: raw.name,
      children: byParent.get(raw.id)?.sort(sortByDate).map(buildTree) ?? [],
    });

    return (byParent.get(null) ?? []).sort(sortByDate).map(buildTree);
  }, [rawList]);

  // Callbacks
  const add = useCallback(
    (payload: {
      name: { fa: string; en: string };
      parentId?: string | null;
    }) => {
      const raw: CategoryFlat = {
        id: crypto.randomUUID(),
        name: payload.name,
        parentId: payload.parentId ?? null,
        createdAt: new Date(),
      };
      setRawList((list) => [...list, raw]);
      return raw;
    },
    []
  );
  const remove = useCallback((id: string) => {
    setRawList((prev) => {
      const collectIdsToRemove = (targetId: string, acc: Set<string>) => {
        acc.add(targetId);

        for (const node of prev) {
          if (node.parentId == targetId) {
            collectIdsToRemove(node.id, acc);
          }
        }
        return acc;
      };
      const idsToRemove = collectIdsToRemove(id, new Set());
      return prev.filter((node) => !idsToRemove.has(node.id));
    });
  }, []);

  return (
    <CategoriesContext.Provider value={{ raw: rawList, tree, add, remove }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategoriesContext = () => {
  const context = useContext(CategoriesContext);
  if (!context)
    throw new Error(
      "useCategoriesContext must be used within CategoriesProvider"
    );
  return context;
};
