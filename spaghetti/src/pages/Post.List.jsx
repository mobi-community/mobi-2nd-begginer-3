import { useSearchParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { paginationAxiosInfo, postListAxiosInfo } from "../store/AxiosInfo";
import PagiNation from "../components/_common/Pagination";
import useDialog from "../hooks/useDialog";

const PostListPage = () => {
  const [params] = useSearchParams();
  const { onClickPost } = useDialog();

  const { data: postData } = useAxios([postListAxiosInfo(params), params]);
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
      <PagiNation
        axiosInfo={paginationAxiosInfo({ params: params, endPoint: "posts" })}
      />
    </table>
  );
};
export default PostListPage;
