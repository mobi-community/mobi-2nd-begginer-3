import { useSearchParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import PagiNation from "../components/_common/Pagination";
import useDialog from "../hooks/useDialog";
import { postAPI } from "../apis/post.api";
import { LIMIT } from "../constants/Constant";

const PostListPage = () => {
  const [params] = useSearchParams();
  const { onClickPost } = useDialog();

  //포스트 리스트 api의 params
  const postParam = {
    take: params.get("take") ?? LIMIT.TAKE,
  };

  //포스트 리스트 정보를 불러오는 api
  const { data: postData } = useAxios([
    postAPI.getPost(postParam, "posts"),
    params,
  ]);

  //불러온 포스트 리스트 데이터
  const postList = postData?.Posts;

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
      <PagiNation endPoint={"posts"} />
    </table>
  );
};
export default PostListPage;
