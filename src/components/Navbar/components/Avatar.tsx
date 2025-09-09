import { css } from "@/styled-system/css";

// Images
import AvatarUrl from "@/assets/avatar.png?url";

export const Avatar = () => {
  return (
    <div
      className={css({
        position: "relative",
        _before: {
          content: '" "',
          width: "9px",
          height: "9px",
          position: "absolute",
          backgroundColor: "green.400",
          borderRadius: "50%",
          zIndex: 10,
          bottom: "1px",
          right: "1px",
          border: "2px solid #F6F8FC",
        },
      })}
    >
      <figure
        className={css({
          width: "40px",
          height: "40px",
          overflow: "hidden",
          margin: 0,
          borderRadius: "50%",
          border: "2px solid #D9D9D9",
          position: "relative",
        })}
      >
        <img
          src={AvatarUrl}
          className={css({
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          })}
        />
      </figure>
    </div>
  );
};
