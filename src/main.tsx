import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import ParcelSelectionPage from "./pages/ParcelSelectionPage";
import QrCodePage from "./pages/QrCodePage";
import { ValueInfosProvider } from "./providers/ValueInfosProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ParcelSelectionPage />,
  },
  {
    path: "entry",
    element: <QrCodePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ValueInfosProvider>
      <RouterProvider router={router} />
    </ValueInfosProvider>
  </React.StrictMode>
);
