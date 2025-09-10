import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import type { CategoryFlat, CategoryTree } from "./types";

interface CategoriesContextType {
  tree: CategoryTree[];
  raw: CategoryFlat[];
  add: (payload: {
    name: { fa: string; en: string };
    parentId?: string | null;
  }) => CategoryFlat;
  remove: (id: string) => void;
  setSearchQuery: (value: string | ((prev: string) => string)) => void;
}

const CategoriesContext = createContext<CategoriesContextType | undefined>(
  undefined
);

export const CategoriesContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  // Stats
  const [rawList, setRawList] = useState<CategoryFlat[]>(() => [
    {
      id: "1",
      name: {
        fa: "اولین دسته بندی",
        en: "First category",
      },
      parentId: null,
      createdAt: new Date(),
    },
    {
      id: "2",
      name: {
        fa: "دومین دسته بندی",
        en: "Second category",
      },
      parentId: "1",
      createdAt: new Date(),
    },
    {
      id: "3",
      name: {
        fa: "سومی دسته بندی",
        en: "Third category",
      },
      parentId: "2",
      createdAt: new Date(),
    },
    {
      id: "4",
      name: {
        fa: "چهارمین دسته بندی",
        en: "Fourth category",
      },
      parentId: null,
      createdAt: new Date(),
    },
  ]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Memos
  const filteredRawList = useMemo(() => {
    if (searchQuery === "") return rawList;

    const matchedNodes = rawList.filter((node) =>
      Object.values(node.name).some((name) =>
        name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

    const resultIds = new Set(matchedNodes.map((n) => n.id));

    const addParents = (node: CategoryFlat) => {
      if (node.parentId && !resultIds.has(node.parentId)) {
        resultIds.add(node.parentId);
        const parent = rawList.find((n) => n.id === node.parentId);
        if (parent) addParents(parent);
      }
    };

    matchedNodes.forEach(addParents);

    return rawList.filter((node) => resultIds.has(node.id));
  }, [rawList, searchQuery]);
  const tree = useMemo<CategoryTree[]>(() => {
    const byParent = filteredRawList.reduce((acc, node) => {
      const list = acc.get(node.parentId) ?? [];
      acc.set(node.parentId, [...list, node]);
      return acc;
    }, new Map<string | null, CategoryFlat[]>());

    const sortByDate = (r1: CategoryFlat, r2: CategoryFlat) =>
      r1.createdAt.getTime() - r2.createdAt.getTime();

    const buildTree = (raw: CategoryFlat): CategoryTree => ({
      id: raw.id,
      name: raw.name,
      parentId: raw.parentId,
      children: byParent.get(raw.id)?.sort(sortByDate).map(buildTree) ?? [],
    });

    return (byParent.get(null) ?? []).sort(sortByDate).map(buildTree);
  }, [filteredRawList]);

  // Callbacks
  const add = useCallback(
    (payload: {
      name: { fa: string; en: string };
      parentId?: string | null;
    }) => {
      const raw: CategoryFlat = {
        id: crypto.randomUUID(),
        name: payload.name,
        parentId:
          rawList.find((node) => node.id === payload.parentId)?.id ?? null,
        createdAt: new Date(),
      };
      setRawList((list) => [...list, raw]);
      return raw;
    },
    [rawList, setRawList]
  );
  const remove = useCallback(
    (id: string) => {
      setRawList((prev) => {
        const map = new Map<string | null, CategoryFlat[]>();
        prev.forEach((node) => {
          if (!map.has(node.parentId)) map.set(node.parentId, []);
          map.get(node.parentId)!.push(node);
        });

        const collectIdsToRemove = (targetId: string, acc: Set<string>) => {
          acc.add(targetId);
          const children = map.get(targetId) ?? [];
          for (const child of children) {
            collectIdsToRemove(child.id, acc);
          }
          return acc;
        };

        const idsToRemove = collectIdsToRemove(id, new Set<string>());

        return prev.filter((node) => !idsToRemove.has(node.id));
      });
    },
    [setRawList]
  );

  return (
    <CategoriesContext.Provider
      value={{ raw: rawList, tree, add, remove, setSearchQuery }}
    >
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
