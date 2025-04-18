import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/src/App";
import { Provider } from "react-redux";
import { store } from "@/src/state/store.ts";
import "reset-css";
import "react-toastify/dist/ReactToastify.css";
import "@/src/styles/index.scss";
import { ToastContainer } from "react-toastify";
import ModalContainer from "@/src/components/modal/ModalContainer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer autoClose={3000} position="top-center" hideProgressBar />
      <ModalContainer />
    </Provider>
  </StrictMode>
);
