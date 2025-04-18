import { useCallback } from "react";
import Modal from "react-modal";
import {
  useAppDispatch,
  useAppSelector,
} from "@/src/state/redux-hooks/reduxHooks";
import { removeModal, selectModal } from "@/src/state/shared/modals";
import { ModalEnum } from "@/src/enum";
import AddBook from "@/src/components/modal/books/AddBook";

export type ModalVariant = "new" | "old";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    border: "1px solid #E2E8F0",
    maxWidth: "800px",
    minWidth: 354,
    zIndex: "999",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.30)",
    zIndex: "999",
  },
};

const ModalContainer = () => {
  const dispatch = useAppDispatch();
  const { modal } = useAppSelector(selectModal);

  const handleClose = useCallback(() => {
    dispatch(removeModal());
  }, []);

  const modalContext = () => {
    switch (modal) {
      case ModalEnum.ADD_TODO:
        return <AddBook />;
    }
  };

  Modal.setAppElement("#root");

  return (
    <Modal isOpen={!!modal} onRequestClose={handleClose} style={customStyles}>
      {modalContext()}
    </Modal>
  );
};

export default ModalContainer;
