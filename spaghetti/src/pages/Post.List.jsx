import { useSearchParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import PagiNation from "../components/_common/PagiNation";
import useDialog from "../hooks/useDialog";
import { HTTP_METHOD, LIMIT, ROUTES } from "../constants/Constant";
import { axiosInstance } from "../apis/_common";

const PostListPage = () => {
  const [params] = useSearchParams();
  const { onClickPost } = useDialog();

  //포스트 리스트 api의 params
  const postParam = {
    page: params.get("page") ?? 1,
    take: params.get("take") ?? LIMIT.TAKE,
    limit: params.get("limit") ?? LIMIT.PAGE,
  };

  //포스트 리스트 정보를 불러오는 api
  const { data: postData, isLoading } = useAxios({
    axiosInstance: axiosInstance,
    method: HTTP_METHOD.GET,
    url: ROUTES.POSTS,
    rerenderArr: params,
    params: postParam,
  });

  const pagination = postData?.PageNation;

  return (
    !isLoading && (
      <table>
        <caption>Post List Page</caption>
        <tr>
          <th>제목</th>
          <th>내용</th>
          <th>작성자</th>
        </tr>
        {postData.Posts.map((post) => {
          const { title, content, User, id } = post;
          return (
            <tr key={id} onClick={() => onClickPost(id)}>
              <td>{title}</td>
              <td>{content}</td>
              <td>{User.nickName}</td>
            </tr>
          );
        })}

        {pagination && (
          <PagiNation pagination={pagination} limitPage={LIMIT.PAGE} />
        )}
      </table>
    )
  );
};
export default PostListPage;
