import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { paginationAxiosInfo, postListAxiosInfo } from "../store/AxiosInfo";
import PagiNation from "../components/_common/Pagination";
import useDialog from "../hooks/useDialog";
import StorageHandler from "../repository/StorageHandler";

const PostListPage = () => {
  const [params] = useSearchParams();
  const { onClickPost } = useDialog();

  const { data: postData } = useAxios([postListAxiosInfo(params), params]);
  const postList = postData?.Posts;

  useEffect(() => {
    const userName = StorageHandler.getLocalStorage("userName");
    if (!userName) {
      alert("로그인이 필요합니다");
      window.location.href = "/";
    }
  }, []);

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
