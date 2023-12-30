import { createBrowserRouter } from "react-router-dom";
import SearchPage from "../Three/page/SearchPage";
import ImagePage from "../Three/page/ImagePage";

const router = createBrowserRouter([
  //쿼리스트링 => url에 영향을 안줌 ?query=검색어
  //파라미터 => url의 한 요소 => route 표시 :query
  {
    path: "/",
    element: <SearchPage />,
  },
  {
    path: "/image",
    element: <ImagePage />,
  },
]);

export default router;
