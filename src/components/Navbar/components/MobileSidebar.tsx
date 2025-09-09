import { useClickOutside } from "@/hooks";
import { css } from "@/styled-system/css";
import { useEffect, useState } from "react";
import { DASHBOARD_ITEMS, USER_INFORMATIONS } from "../constants";
import { Icons } from "@/components/Icons";
import { Avatar } from "./Avatar";

interface MobileSidebarProps {
  open: boolean;
  toggleOpen: () => void;
}

export function MobileSidebar({ open, toggleOpen }: MobileSidebarProps) {
  const [visible, setVisible] = useState(open);
  const [_animating, setAnimating] = useState(false);

  useEffect(() => {
    if (open) {
      setVisible(true);
      setAnimating(true);
    } else if (visible) {
      setAnimating(true);
      const timeout = setTimeout(() => {
        setVisible(false);
        setAnimating(false);
      }, 500);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [open]);

  const containerRef = useClickOutside<HTMLDivElement>(() =>
    open ? toggleOpen() : null
  );

  if (!visible) return;

  return (
    <div
      className={css({
        width: "screen",
        height: "screen",
        backgroundColor: "rgba(0,0,0,.3)",
        position: "fixed",
        inset: 0,
        zIndex: 100,
        transition: "opacity 500ms ease",
        opacity: open ? 1 : 0,
        lg: {
          display: "none",
        },
      })}
    >
      <div
        ref={containerRef}
        className={css({
          width: "240px",
          height: "screen",
          p: "12px",
          display: "flex",
          flexDir: "column",
          alignItems: "center",
          justifyContent: "space-between",
          position: "absolute",
          right: "0px",
          top: "0px",
          bg: "#F6F8FC",
          zIndex: 110,
          animation: open
            ? "slide-in-from-right 500ms ease forwards"
            : "slide-out-to-right 500ms ease forwards",
        })}
      >
        <div
          className={css({
            width: "100%",
            display: "flex",
            flexDir: "column",
            alignItems: "flex-start",
            flex: 1,
            gap: "24px",
          })}
        >
          <div
            className={css({
              width: "100%",
              height: "max-content",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            })}
          >
            <Avatar />
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
          </div>
          <div
            className={css({
              width: "100%",
              height: "max-content",
              display: "flex",
              flexDir: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "16px",
            })}
          >
            {DASHBOARD_ITEMS.map(({ id, title, Icon, link }) => (
              <a
                className={css({
                  width: "100%",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "12px",
                  px: "16px",
                  backgroundColor: "#EBF1FA",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "all 200ms ease",
                  textDecoration: "none",
                  "&:hover, &:active": {
                    backgroundColor: "#D4D9E1",
                  },
                })}
                key={`sidebar_link_${id}_mobile`}
                href={link}
              >
                <Icon
                  className={css({
                    "& path": {
                      stroke: "black",
                    },
                  })}
                />
                <span
                  className={css({
                    fontFamily: "vazirmatn",
                    fontWeight: 400,
                    fontSize: "14px",
                  })}
                >
                  {title}
                </span>
              </a>
            ))}
          </div>
        </div>
        <UserInformationMobileBox />
      </div>
    </div>
  );
}

const UserInformationMobileBox = () => {
  return (
    <div
      className={css({
        height: "max-content",
        backgroundColor: "#EBF1FA",
        display: "flex",
        flexDir: "column",
        gap: "6px",
        p: "6px 4px",
        borderRadius: "4px",
        border: "1px solid #D9D9D9",
      })}
    >
      {USER_INFORMATIONS.map(({ value, title }, i) => (
        <div
          key={`user_information_${i}`}
          className={css({
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "8px",
          })}
        >
          <span
            className={css({
              fontFamily: "vazirmatn",
              fontWeight: 700,
              fontSize: "10px",
            })}
          >
            {title}:
          </span>
          <span
            className={css({
              fontFamily: "vazirmatn",
              fontWeight: 400,
              fontSize: "8px",
            })}
          >
            {value}
          </span>
        </div>
      ))}
    </div>
  );
};
