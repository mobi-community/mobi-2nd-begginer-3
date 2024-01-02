import { useSearchParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import useDialog from "../hooks/useDialog";
import postAPI from "../apis/post.api";
import { LIMIT } from "../constants/Constant";
import PagiNation from "../components/_common/Pagination";

const PostListPage = () => {
  const [params] = useSearchParams();
  const { onClickPost } = useDialog();

  const postParam = {
    take: params.get("take") ?? LIMIT.TAKE,
    page: params.get("page") ?? 1,
    limit: params.get("limit") ?? LIMIT.PAGE,
  };

  //포스트 리스트 정보를 불러오는 api
  const { data: postData } = useAxios([
    postAPI.getPost({ params: postParam, endPoint: "posts" }),
    params,
  ]);

  const postList = postData?.Posts;
  const pagination = postData?.PageNation;

  return (
    <table>
      <caption>Post List Page</caption>
      <tr>
        <th>제목</th>
        <th>내용</th>
        <th>작성자</th>
      </tr>
      {postList?.map((post) => {
        const { title, content, User, id } = post;
        return (
          <tr key={id} onClick={() => onClickPost(id)}>
            <td>{title}</td>
            <td>{content}</td>
            <td>{User.nickName}</td>
          </tr>
        );
      })}
      {pagination && <PagiNation pagination={pagination} />}
    </table>
  );
};
export default PostListPage;
