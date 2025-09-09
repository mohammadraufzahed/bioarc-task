import { css } from "@/styled-system/css";
import { Icons } from "@/components/Icons";
import { NavigationItem, UserInformationBox } from "./components";
import { Avatar } from "../Avatar";
import { DASHBOARD_ITEMS } from "../../constants";

// Images
import LogoUrl from "@/assets/logo.svg?url";

export const DesktopNav = () => {
  return (
    <>
      <div
        className={css({
          width: { base: "100%" },
          display: { base: "none", lg: "flex" },
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
    </>
  );
};
