import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AxiosInterceptor } from "./axios";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AxiosInterceptor>
      <App />
    </AxiosInterceptor>
  </StrictMode>
);
