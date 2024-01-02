import useAxios from "../../hooks/useAxios";
import { commentsAxiosInfo, paginationAxiosInfo } from "../../store/AxiosInfo";
import { useSearchParams } from "react-router-dom";
import PagiNation from "../_common/Pagination";

const Comment = () => {
  const [params] = useSearchParams();
  const { data: commentData } = useAxios([commentsAxiosInfo(params), params]);
  const commentList = commentData?.Comments;

  return (
    <>
      {commentList?.map((comment) => {
        const { id, content, User } = comment;
        return (
          <div key={id}>
            <p>{content}</p>
            <p>{User.nickName}</p>
          </div>
        );
      })}
      <PagiNation
        axiosInfo={paginationAxiosInfo({
          params: params,
          endPoint: "comments",
        })}
      />
    </>
  );
};

export default Comment;
