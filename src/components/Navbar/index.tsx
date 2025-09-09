import { css } from "@/styled-system/css";
import { HamburgerButton, MobileSidebar } from "./components";
import { useCallback, useState } from "react";
import { Icons } from "../Icons";

// Images
import LogoUrl from "@/assets/logo.svg?url";

export const DashboardItems = [
  {
    id: "my_panel",
    title: "پنل من",
    Icon: Icons.PersonalCard,
  },
  {
    id: "treatment",
    title: "درمان",
    Icon: Icons.HomePlus,
  },
  {
    id: "my_patients",
    title: "بیماران من",
    Icon: Icons.Users,
  },
  {
    id: "finance",
    title: "مالی",
    Icon: Icons.DollarSign,
  },
  {
    id: "inventory",
    title: "انبار",
    Icon: Icons.Layer,
  },
  {
    id: "biovisit",
    title: "بایوویزیت",
    Icon: Icons.Calendar,
  },
] satisfies {
  id: string;
  title: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}[];

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
          sm: "24px",
        },
        backgroundColor: "#EBF1FA",
        boxShadow: "0px 4px 6px 0px #D1D3DA40",
        border: "1px solid #EBF1FA",
      })}
    >
      <div
        className={css({
          width: { base: "100%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
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
      <MobileSidebar open={open} toggleOpen={toggleOpen} />
    </div>
  );
}
