import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import PostListPage from "../pages/Post.List";
import PostDetailPage from "../pages/Post.Detail";
import PrivateRouter from "./PrivateRouter";
import BlurPrivateRouter from "./BlurPrivateRouter";
import { ROUTES } from "../constants/Constant";

const router = createBrowserRouter([
  {
    element: <BlurPrivateRouter />,
    children: [
      {
        path: ROUTES.HOME,
        element: <HomePage />,
      },
      {
        element: <PrivateRouter />,
        children: [
          { path: ROUTES.POST, element: <PostListPage /> },
          { path: ROUTES.POST_DETAIL, element: <PostDetailPage /> },
        ],
      },
    ],
  },
]);

export default router;
