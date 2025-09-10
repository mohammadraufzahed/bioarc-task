import { Icons } from "@/components/Icons";
import type { CategoryTree } from "../types";
import { css } from "@/styled-system/css";
import { useCallback, useMemo, useState } from "react";
import { useCategoriesContext } from "../context";
import Modal from "@/components/Modal";

interface CategoryTreeItemProps {
  node: CategoryTree;
}
export const CategoryTreeItem = ({ node }: CategoryTreeItemProps) => {
  // States
  const [open, setOpen] = useState<boolean>(true);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // Context
  const { remove } = useCategoriesContext();

  // Callbacks
  const toggleOpen = useCallback(() => setOpen((open) => !open), [setOpen]);
  const openModal = useCallback(() => setModalOpen(true), [setModalOpen]);
  const closeModal = useCallback(() => setModalOpen(false), [setModalOpen]);
  // Memos
  const hasChildren = useMemo(() => node.children.length > 0, [node]);
  const isChild = useMemo(() => !!node.parentId, [node]);

  return (
    <div
      className={css({
        display: "flex",
        flexDir: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "25px",
        position: "relative",
        pb: "10px",
      })}
    >
      {hasChildren && open ? (
        <div
          className={css({
            width: "1px",
            height: "85%",
            backgroundColor: "#CCD4E1",
            position: "absolute",
            bottom: isChild ? "-6px" : "-20px",
            borderTopRightRadius: isChild ? "7px" : "unset",
            right: isChild ? "42px" : "12px",
          })}
          data-line
        />
      ) : null}
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "7px",
        })}
      >
        {isChild ? (
          <div
            className={css({
              width: "42px",
              height: "10px",
              borderBottomRightRadius: "7px",
              borderBottom: "1px solid #CCD4E1",
            })}
          />
        ) : null}
        <div
          className={css({
            width: "24px",
            height: "24px",
            backgroundColor: "#ADB3D6",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            _disabled: {
              opacity: 0.7,
              cursor: "default",
            },
          })}
          aria-disabled={!hasChildren}
          onClick={() => hasChildren && toggleOpen()}
        >
          {open ? (
            <Icons.Minus width={10.29} height={1.5} />
          ) : (
            <Icons.Plus
              width={10.29}
              height={9.5}
              className={css({
                "& > path": {
                  fill: "#36459B",
                },
              })}
            />
          )}
        </div>
        <div
          className={css({
            width: {
              base: "250px",
              md: "305px",
            },
            border: "1px solid #F1F5FC",
            borderRadius: "4px",
            backgroundColor: "#FFF",

            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: "10px 8px",
            cursor: "pointer",
            transition: "all 200ms ease",
            _hover: {
              backgroundColor: "#E5E5E5",
            },
          })}
          onClick={openModal}
        >
          <span
            className={css({
              fontFamily: "vazirmatn",
              fontWeight: 500,
              fontSize: "14px",
              color: "#424242",
            })}
          >
            {node.name.fa}
          </span>
          <div
            className={css({
              width: "20px",
              height: "20px",
              position: "relative",
            })}
          >
            <Icons.Trash
              className={css({
                position: "absolute",
                inset: 0,
                margin: "auto",
              })}
              onClick={(e) => {
                e.stopPropagation();
                remove(node.id);
              }}
            />
          </div>
        </div>
      </div>
      {hasChildren && open ? (
        <div
          className={css({
            width: "max-content",
            height: "max-content",
            display: "flex",
            flexDir: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "16px",
            marginRight: isChild ? "42px" : "12px",
          })}
        >
          {node.children.map((node) => (
            <CategoryTreeItem key={`category-node-${node.id}`} node={node} />
          ))}
        </div>
      ) : null}
      <Modal open={modalOpen} onClose={closeModal}></Modal>
    </div>
  );
};
