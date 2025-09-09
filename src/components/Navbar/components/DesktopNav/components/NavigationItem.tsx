import { css } from "@/styled-system/css";

interface NavigationItemProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  link?: string;
  isBold?: boolean;
}

export const NavigationItem = ({
  Icon,
  link,
  title,
  isBold = false,
}: NavigationItemProps) => {
  const Wrapper = link ? "a" : "div";

  return (
    <Wrapper
      className={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        cursor: "pointer",
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
