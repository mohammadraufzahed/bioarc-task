import Modal from "@/components/Modal";

interface CategoryModalProps {
  open?: boolean;
  onClose?: () => void;
}
export const CategoryModal = ({ open, onClose }: CategoryModalProps) => {
  return <Modal open={open} onClose={onClose}></Modal>;
};
