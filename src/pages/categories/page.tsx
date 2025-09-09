import Button from "@/components/Button";
import { Icons } from "@/components/Icons";
import Input from "@/components/Input";
import { css } from "@/styled-system/css";

export default function CategoriesPage() {
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
          alignItems: "center",
          justifyContent: "space-between",
        })}
      >
        <span
          className={css({
            fontFamily: "vazirmatn",
            fontWeight: 700,
            fontSize: "18px",
            color: "#36459B",
          })}
        >
          مدیریت دسته بندی اسناد و ویدیو های بایوآرک
        </span>
        <Button>
          <Icons.Plus width={14} height={14} /> دسته‌بندی جدید
        </Button>
      </div>
      <Input placeholder="نام دسته‌بندی را جستجو کنید..." />
    </div>
  );
}
