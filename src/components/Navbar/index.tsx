import { css } from "@/styled-system/css";
import { HamburgerButton, MobileSidebar } from "./components";
import { useCallback, useMemo, useState } from "react";
import { Icons } from "../Icons";

// Images
import LogoUrl from "@/assets/logo.svg?url";

interface DashoardItem {
  id: string;
  link: string;
  title: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const DASHBOARD_ITEMS: DashoardItem[] = [
  {
    id: "my_panel",
    title: "پنل من",
    link: "#",
    Icon: Icons.PersonalCard,
  },
  {
    id: "treatment",
    title: "درمان",
    link: "#",
    Icon: Icons.HomePlus,
  },
  {
    id: "my_patients",
    title: "بیماران من",
    link: "#",
    Icon: Icons.Users,
  },
  {
    id: "finance",
    title: "مالی",
    link: "#",
    Icon: Icons.DollarSign,
  },
  {
    id: "inventory",
    title: "انبار",
    link: "#",
    Icon: Icons.Layer,
  },
  {
    id: "biovisit",
    title: "بایوویزیت",
    link: "#",
    Icon: Icons.Calendar,
  },
] as const;

export default function Navbar() {
  // Stats
  const [open, setOpen] = useState(false);
  //  Callbacks
  const toggleOpen = useCallback(() => setOpen((open) => !open), []);

  return (
    <div
      className={css({
        width: "100%",
        height: "max-content",
        padding: {
          base: "24px 12px",
          sm: "15px  24px",
        },
        backgroundColor: "#F6F8FC",
        boxShadow: "0px 4px 6px 0px #D1D3DA40",
        border: "1px solid #EBF1FA",
        display: "flex",
        flexDir: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "8px",
      })}
    >
      <div
        className={css({
          width: { base: "100%" },
          display: "flex",
          flexDir: { base: "row" },
          alignItems: { base: "center", md: "flex-start" },
          justifyContent: { base: "space-between" },
        })}
      >
        <img
          src={LogoUrl}
          className={css({
            width: "150px",
            height: "35px",
          })}
        />
        <HamburgerButton open={open} toggleOpen={toggleOpen} />
      </div>
      <div
        className={css({
          display: {
            base: "none",
            md: "flex",
          },
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "16px",
          pr: "20px",
        })}
      >
        <NavigationItem Icon={Icons.Settings3} title="مدیریت" isBold />
        <div
          className={css({
            width: "1px",
            height: "19px",
            backgroundColor: "#E6ECF6",
          })}
        />
        {DASHBOARD_ITEMS.map(({ id, link, title, Icon }) => (
          <NavigationItem
            key={`navigation_item_${id}_desktop`}
            link={link}
            title={title}
            Icon={Icon}
          />
        ))}
      </div>
      <MobileSidebar open={open} toggleOpen={toggleOpen} />
    </div>
  );
}

interface NavigationItemProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  link?: string;
  isBold?: boolean;
}

const NavigationItem = ({
  Icon,
  link,
  title,
  isBold = false,
}: NavigationItemProps) => {
  const Wrapper = useMemo(() => (link ? "a" : "div"), [link]);

  return (
    <Wrapper
      className={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      })}
    >
      <Icon />
      <span
        className={css({
          fontFamily: "vazirmatn",
          fontWeight: isBold ? 700 : 500,
          fontSize: {
            base: "16px",
            lg: "18px",
          },
          color: "#606367",
        })}
      >
        {title}
      </span>
    </Wrapper>
  );
};
