import AparatEmbed from "@/components/AparatEmbed";
import { Icons } from "@/components/Icons";
import Modal from "@/components/Modal";
import { css } from "@/styled-system/css";
import { Divider, styled } from "@/styled-system/jsx";
import { useMemo } from "react";

// Images
import PdfImage from "@/assets/extra/pdf.png?url";
import ImageImage from "@/assets/extra/image.png?url";
import WordImage from "@/assets/extra/word.png?url";

const ContentContainer = styled("div", {
  base: {
    width: "100%",
    height: "max-content",
    display: "flex",
    flexDir: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: "15px",
    p: "14px 20px",
    backgroundColor: "#F4F6FB",
    border: "1px solid rgba(209, 217, 235, 0.5)",
    borderRadius: "7px",
    "& > .content": {
      width: "100%",
      height: "max-content",
      borderRadius: "7px",
      backgroundColor: "#fff",
      p: "16px",
    },
  },
});

const Information = styled("span", {
  base: {
    fontFamily: "vazirmatn",
    fontWeight: 500,
    fontSize: "14px",
    color: "#424242",
    "& > span": {
      fontWeight: 400,
      color: "#858588",
    },
  },
});

const ContentTitle = styled("span", {
  base: {
    fontFamily: "vazirmatn",
    fontWeight: 500,
    fontSize: "16px",
    color: "#36459B",
  },
});

interface CategoryModalProps {
  open?: boolean;
  onClose?: () => void;
}
export const CategoryModal = ({ open, onClose }: CategoryModalProps) => {
  const files = useMemo(
    () => [
      {
        title: "آمادگی",
        size: "1.2 MB",
        image: PdfImage,
      },
      {
        title: "آمادگی",
        size: "1.2 MB",
        image: WordImage,
      },
      {
        title: "آمادگی",
        size: "1.2 MB",
        image: ImageImage,
      },
      {
        title: "آمادگی",
        size: "1.2 MB",
        image: WordImage,
      },
    ],
    []
  );
  return (
    <Modal open={open} onClose={onClose} maxWidth={"1085px"}>
      <div
        className={css({
          display: "flex",
          flexDir: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "18px",
        })}
      >
        <div
          className={css({
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          })}
        >
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "14px",
            })}
          >
            <div
              className={css({
                width: "15px",
                height: "15px",
                backgroundColor: "#36459B",
                borderRadius: "50%",
              })}
            />
            <span
              className={css({
                fontFamily: "vazirmatn",
                fontWeight: 700,
                fontSize: {
                  base: "15px",
                  md: "18px",
                },
                color: "#36459B",
              })}
            >
              اطلاعات تکمیلی
            </span>
          </div>
          <Icons.X
            cursor="pointer"
            width={15.46}
            height={15.46}
            onClick={onClose}
          />
        </div>
        <ContentContainer>
          <Information>
            <span>عنوان:</span> راهنمای کامل تنظیمات امضا در بایوآرک
          </Information>
          <Divider
            orientation="horizontal"
            thickness="1px"
            color="rgba(188, 195, 237, 0.35)"
          />
          <Information>
            <span>لینک ویدیو در آپارات:</span>{" "}
            https://www.aparat.com/video/video/embed/videohash/hfwc1f3/vt/frame
          </Information>
        </ContentContainer>
        <ContentContainer>
          <Information>
            <span>توضیحات:‌</span> توضیحات توضیحات توضیحات توضیحات توضیحات
            توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات
            توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات
            توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات
            توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات
            توضیحات توضیحات توضیحات توضیحات توضیحات
          </Information>
        </ContentContainer>
        <ContentContainer>
          <ContentTitle>فایل‌‌ها:</ContentTitle>
          <div
            className={
              css({
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                columnGap: "16px",
                rowGap: "11px",
              }) + " content"
            }
          >
            {files.map((file, index) => (
              <div
                key={`file_${index}`}
                className={css({
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#F3F5F7",
                  borderRadius: "4px",
                  p: "24px 25px",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "51px",
                })}
              >
                <img
                  src={file.image}
                  alt={file.title}
                  className={css({
                    width: "40.59px",
                    height: "33px",
                    borderRadius: "2px",
                  })}
                />
                <div
                  className={css({
                    display: "flex",
                    flexDir: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "7.5px",
                  })}
                >
                  <span
                    className={css({
                      fontFamily: "vazirmatn",
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "#424242",
                    })}
                  >
                    {file.title}
                  </span>
                  <span
                    className={css({
                      fontFamily: "vazirmatn",
                      fontWeight: 500,
                      fontSize: "12px",
                      color: "#8C8C8C",
                    })}
                  >
                    {file.size}
                  </span>
                </div>
                <Icons.ReceiveSquare
                  width={28}
                  height={24}
                  className={css({
                    mx: "auto 0",
                    cursor: "pointer",
                  })}
                />
              </div>
            ))}
          </div>
        </ContentContainer>
        <ContentContainer>
          <ContentTitle>ویدیوها:</ContentTitle>
          <div
            className={
              css({
                display: "flex",
                flexDir: {
                  base: "column",
                  md: "row",
                },
                alignItems: "center",
                justifyContent: "center",
                gap: "18px",
              }) + " content"
            }
          >
            <div
              className={css({
                width: "100%",
                flex: "1",
                height: "209px",
                minHeight: "209px",
                overflow: "hidden",
                borderRadius: "7px",
                position: "relative",
              })}
            >
              <AparatEmbed videohash="hfwc1f3" />
            </div>
            <div
              className={css({
                width: "100%",
                flex: "1",
                height: "209px",
                minHeight: "209px",
                overflow: "hidden",
                borderRadius: "7px",
                position: "relative",
              })}
            >
              <AparatEmbed videohash="kyh16xh" />
            </div>
          </div>
        </ContentContainer>
      </div>
    </Modal>
  );
};
