import { css } from "@/styled-system/css";
import { Avatar, HamburgerButton, MobileSidebar } from "./components";
import { Icons } from "../Icons";

// Images
import LogoUrl from "@/assets/logo.svg?url";
import { DASHBOARD_ITEMS, USER_INFORMATIONS } from "./constants";
import { NavbarContextProvider } from "./context";

export default function Navbar() {
  return (
    <NavbarContextProvider>
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
            alignItems: { base: "center", lg: "flex-start" },
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
          <div
            className={css({
              display: { base: "none", lg: "flex" },
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "16px",
            })}
          >
            <div
              className={css({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              })}
            >
              <span
                className={css({
                  color: "#606367",
                  fontFamily: "vazirmatn",
                  fontWeight: 700,
                  fontSize: "15px",
                })}
              >
                EN
              </span>
              <Icons.Notification
                className={css({
                  cursor: "pointer",
                })}
              />
              <Icons.Settings
                className={css({
                  cursor: "pointer",
                })}
              />
              <Icons.Messages
                className={css({
                  cursor: "pointer",
                })}
              />
            </div>
            <UserInformationBox />
            <Avatar />
          </div>
          <HamburgerButton />
        </div>
        <div
          className={css({
            display: {
              base: "none",
              lg: "flex",
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
        <MobileSidebar />
      </div>
    </NavbarContextProvider>
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
  const Wrapper = link ? "a" : "div";

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

const UserInformationBox = () => {
  return (
    <div
      className={css({
        height: "max-content",
        backgroundColor: "#EBF1FA",
        display: "flex",
        gap: "6px",
        p: "12px 10px",
        borderRadius: "50px",
        border: "1px solid #D9D9D9",
      })}
    >
      {USER_INFORMATIONS.map(({ value, title }, i) => (
        <div
          key={`user_information_${i}`}
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          })}
        >
          <div
            className={css({
              width: "max-content",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "8px",
            })}
          >
            <span
              className={css({
                fontFamily: "vazirmatn",
                fontWeight: 400,
                fontSize: "11px",
                color: "#071C33",
              })}
            >
              {title}:
            </span>
            <span
              className={css({
                fontFamily: "vazirmatn",
                fontWeight: 400,
                fontSize: "11px",
                color: "#071C33",
              })}
            >
              {value}
            </span>
          </div>
          <Icons.ArrowDown width={6} height={6} />
        </div>
      ))}
    </div>
  );
};
