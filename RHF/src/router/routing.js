import { createBrowserRouter } from "react-router-dom";
import AuthPage from "../page/AuthPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />,
  },
]);
