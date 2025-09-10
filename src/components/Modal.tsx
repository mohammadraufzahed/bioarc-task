import { useClickOutside } from "@/hooks";
import { css } from "@/styled-system/css";
import { createPortal } from "react-dom";

interface ModalProps {
  maxWidth?: `${string}px` | `${string}%` | number;
  open?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

const Modal = ({ onClose, maxWidth, children, open = false }: ModalProps) => {
  // Hooks
  const dialogRef = useClickOutside<HTMLDivElement>(() => onClose?.(), open);

  if (!open) {
    return;
  }

  return createPortal(
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
      })}
    >
      <div
        ref={dialogRef}
        className={css({
          minWidth: "320px",
          width: "90%",
          maxWidth: maxWidth ?? "320px",
          height: "max-content",
          maxHeight: "90dvh",
          overflowY: "auto",
          p: "20px 32px",
          border: "1px solid #EBF1F8",
          borderRadius: "15px",
          boxShadow: "0px 4px 20px 0px #D1D9EB",
          backgroundColor: "#fff",
          position: "absolute",
          zIndex: 110,
          inset: 0,
          margin: "auto",
        })}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
