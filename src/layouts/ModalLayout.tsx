import { Outlet, useNavigate } from "react-router-dom";
import { Modal } from "@/components";

export const ModalLayout = () => {
  const navigate = useNavigate();

  return (
    <Modal onClose={() => navigate(-1)}>
      <Outlet />
    </Modal>
  );
};
