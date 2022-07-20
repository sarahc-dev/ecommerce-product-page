import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ModalProvider } from "./contexts/ModalContext";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </StrictMode>
);
