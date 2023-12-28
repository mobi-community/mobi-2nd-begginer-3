import { creatBrowserRouter } from "react-router-dom";
import HomePage from "../pages";

const router = creatBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default router;
