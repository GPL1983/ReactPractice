import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./root.css";
import "./global.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Routes";

createRoot(document.getElementById("root")).render(
  //<StrictMode>
  <RouterProvider router={router} />
  //</StrictMode>
);
