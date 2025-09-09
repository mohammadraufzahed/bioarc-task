import { Icons } from "../Icons";

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

interface UserInformation {
    title: string;
    value: string;
}

export const USER_INFORMATIONS: UserInformation[] = [
    {
        title: "مرکز",
        value: "بیمارستان چشم پزشکی نور",
    },
    {
        title: "بخش",
        value: "قرنیه",
    },
    {
        title: "دکتر راما پورمتین - از طرف",
        value: "دکتر سید حسن هاشمی",
    },
] as const;
