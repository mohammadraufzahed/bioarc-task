import Button from "@/components/Button";
import { Icons } from "@/components/Icons";
import { Field, Input, Label, SelectInput } from "@/components/Form";
import Modal from "@/components/Modal";
import { css } from "@/styled-system/css";
import { useCallback, useState } from "react";

export const CreateModal = () => {
  // Stats
  const [open, setOpen] = useState<boolean>(false);

  // Callbacks
  const toggleOpen = useCallback(() => setOpen((open) => !open), []);
  return (
    <>
      <Button onClick={toggleOpen}>
        <Icons.Plus width={14} height={14} /> دسته‌بندی جدید
      </Button>
      <Modal open={open} onClose={toggleOpen} maxWidth={"553px"}>
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
                افزودن دسته‌بندی جدید
              </span>
            </div>
            <Icons.X
              cursor="pointer"
              width={15.46}
              height={15.46}
              onClick={toggleOpen}
            />
          </div>
          <div
            className={css({
              width: "100%",
              backgroundColor: "#FAFAFA",
              borderRadius: "7px",
              padding: "22px 19px",
              display: "flex",
              flexDir: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: 21,
            })}
          >
            <Field>
              <Label htmlFor="#name_fa" required>
                نام دسته‌بندی(فارسی):
              </Label>
              <Input
                id="name_fa"
                outline
                placeholder="نام دسته بندی را وارد کنید"
              />
            </Field>
            <Field>
              <Label htmlFor="#name_en" required>
                نام دسته‌بندی(انگلیسی):
              </Label>
              <Input
                id="name_en"
                outline
                placeholder="نام دسته بندی را به انگلیسی وارد کنید"
              />
            </Field>
            <Field>
              <Label htmlFor="#parent_id">دسته بندی والد:</Label>
              <SelectInput id="parent_id" outline>
                <option>بدون دسته‌بندی</option>
              </SelectInput>
            </Field>
          </div>
        </div>
      </Modal>
    </>
  );
};
