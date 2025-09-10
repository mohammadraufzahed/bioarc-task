import { TextInput } from "@/components/Form";
import { css } from "@/styled-system/css";
import { CategoriesContextProvider, useCategoriesContext } from "./context";
import { CategoryTreeItem, CreateModal } from "./components";

export default function CategoriesPage() {
  const { tree, setSearchQuery } = useCategoriesContext();
  return (
    <div
      className={css({
        width: "100%",
        flex: 1,
        backgroundColor: "rgba(244,246,251,0.38)",
        borderRadius: "4px",
        p: "18px 29px",
        display: "flex",
        flexDir: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "24px",
      })}
    >
      <div
        className={css({
          width: "100%",
          display: "flex",
          flexDir: {
            base: "column-reverse",
            sm: "row",
          },
          alignItems: {
            base: "flex-start",
            sm: "center",
          },
          justifyContent: "space-between",
          gap: "24px",
        })}
      >
        <span
          className={css({
            fontFamily: "vazirmatn",
            fontWeight: 700,
            fontSize: {
              base: "15px",
              md: "18px",
            },
            textAlign: "right",
            color: "#36459B",
          })}
        >
          مدیریت دسته بندی اسناد و ویدیو های بایوآرک
        </span>
        <CreateModal />
      </div>
      <TextInput
        placeholder="نام دسته‌بندی را جستجو کنید..."
        onChange={(e) => setSearchQuery(e.currentTarget.value)}
      />

      <div
        className={css({
          width: "100%",
          flexGrow: 1,
          flexShrink: 0,
          height: "max-content",
          overflowX: "auto",
          overflowY: "visible",
          display: "flex",
          flexDir: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "20px",
        })}
      >
        {tree.map((node) => (
          <CategoryTreeItem key={`category-node-${node.id}`} node={node} />
        ))}
      </div>
    </div>
  );
}

CategoriesPage.WithContext = () => (
  <CategoriesContextProvider>
    <CategoriesPage />
  </CategoriesContextProvider>
);
