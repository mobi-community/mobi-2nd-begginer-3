import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { worker } from "./__mock__/browser";
import HomePage from "./pages/Home";
import PostListPage from "./pages/Post.list";
import PostDetailPage from "./pages/Post.detail";
import DiaLogProvider from "./contexts/DiaLogProvider";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/posts", element: <PostListPage /> },
    { path: "/post-detail/:postId", element: <PostDetailPage /> },
  ]);
  worker.start();

  return (
    <DiaLogProvider>
      <RouterProvider router={router} />
    </DiaLogProvider>
  );
}

export default App;
