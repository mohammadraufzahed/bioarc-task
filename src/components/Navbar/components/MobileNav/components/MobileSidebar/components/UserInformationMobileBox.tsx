import { USER_INFORMATIONS } from "@/components/Navbar/constants";
import { css } from "@/styled-system/css";

export const UserInformationMobileBox = () => {
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
