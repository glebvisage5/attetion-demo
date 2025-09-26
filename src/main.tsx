import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App";
import AttentionProvider from "./AttentionProvider";
import Left from "./pages/Left"
import Right from "./pages/Right";
import Center from "./pages/Center";
import CenterStats from "./pages/CenterStats";
import CenterStatsMessage from "./pages/CenterStatsMessage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <Left />},
      {path: "left", element: <Left />},
      {path: "center", element: <Center />},
      {path: "center/:id", element: <CenterStats />},
      {path: "center/:id/message", element: <CenterStatsMessage />},
      {path: "right", element: <Right />},
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AttentionProvider>
      <RouterProvider router={router} />
    </AttentionProvider>
  </React.StrictMode>
);