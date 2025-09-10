import Button from "@/components/Button";
import { Icons } from "@/components/Icons";
import Modal from "@/components/Modal";
import { css } from "@/styled-system/css";
import { useCallback, useMemo, useState } from "react";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInputField, SelectField } from "@/components/Form";
import { useCategoriesContext } from "../context";

const schema = z.object({
  name: z.object({
    fa: z.string().min(1, "نام دسته بندی باید وارد شود"),
    en: z.string().regex(/^[a-zA-Z\s]+$/, "باید فقط حروف انگلیسی باشد"),
  }),
  parentId: z.string().optional(),
});

interface FormType extends z.infer<typeof schema> {}

export const CreateModal = () => {
  // Stats
  const [open, setOpen] = useState<boolean>(false);

  // Context
  const { raw, add } = useCategoriesContext();

  // Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid, errors },
  } = useForm<FormType>({
    resolver: zodResolver(schema),
    mode: "all",
  });

  // Memos
  const parentOptions = useMemo(
    () => raw.map((node) => ({ label: node.name.fa, value: node.id })),
    [raw]
  );

  // Callbacks
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => {
    setOpen(false);
    reset();
  }, []);
  const onSubmit = useCallback(
    (payload: FormType) => {
      add(payload);
      closeModal();
    },
    [closeModal, add]
  );
  return (
    <>
      <Button onClick={openModal}>
        <Icons.Plus width={14} height={14} /> دسته‌بندی جدید
      </Button>
      <Modal open={open} onClose={closeModal} maxWidth={"553px"}>
        <form
          className={css({
            display: "flex",
            flexDir: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "18px",
          })}
          onSubmit={handleSubmit(onSubmit)}
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
              onClick={closeModal}
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
            <TextInputField
              label="نام دسته‌بندی(فارسی):"
              error={errors.name?.fa?.message}
              labelProps={{
                htmlFor: "name_fa",
                required: true,
              }}
              inputProps={{
                id: "name_fa",
                outline: true,
                placeholder: "نام دسته بندی را وارد کنید",
                ...register("name.fa", { required: true }),
              }}
            />
            <TextInputField
              label="نام دسته‌بندی(انگلیسی):"
              error={errors.name?.en?.message}
              labelProps={{
                htmlFor: "name_en",
                required: true,
              }}
              inputProps={{
                id: "name_en",
                outline: true,
                placeholder: "نام دسته بندی را به انگلیسی وارد کنید",
                ...register("name.en", { required: true }),
              }}
            />
            <SelectField
              label="دسته بندی والد:"
              error={errors.parentId?.message}
              labelProps={{
                htmlFor: "parent_id",
              }}
              selectProps={{
                id: "parent_id",
                outline: true,
                ...register("parentId"),
              }}
            >
              <option value={""}>بدون دسته‌بندی</option>
              {parentOptions.map((option) => (
                <option
                  key={`parent_option_${option.value}`}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </SelectField>
          </div>
          <div
            className={css({
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "29px",
            })}
          >
            <Button
              disabled={isSubmitting}
              type="button"
              onClick={closeModal}
              width={104}
              outline
            >
              انصراف
            </Button>
            <Button disabled={isSubmitting || !isValid} width={104}>
              ثبت
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};
