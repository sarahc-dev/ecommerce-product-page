import { createContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [clickedImage, setImage] = useState(0);

  function toggleModal(active) {
    if (active >= 0) {
      setImage(active);
    }

    setShowModal(!showModal);
  }

  return <ModalContext.Provider value={{ showModal, toggleModal, clickedImage }}>{children}</ModalContext.Provider>;
}

export default ModalContext;
