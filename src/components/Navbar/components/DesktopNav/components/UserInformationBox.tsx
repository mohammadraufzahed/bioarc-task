import { css } from "@/styled-system/css";
import { USER_INFORMATIONS } from "../../../constants";
import { Icons } from "@/components/Icons";

export const UserInformationBox = () => {
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
