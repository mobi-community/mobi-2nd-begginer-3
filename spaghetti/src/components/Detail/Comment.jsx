import useAxios from "../../hooks/useAxios";
import { useSearchParams } from "react-router-dom";
import PagiNation from "../_common/Pagination";
import { LIMIT } from "../../constants/Constant";
import postAPI from "../../apis/post.api";

const Comment = () => {
  const [params] = useSearchParams();

  const commentParams = {
    take: params.get("take") ?? LIMIT.TAKE,
    page: params.get("page") ?? 1,
    limit: params.get("limit") ?? LIMIT.PAGE,
  };

  const { data: commentData } = useAxios([
    postAPI.getPost({ params: commentParams, endPoint: "comments" }),
    params,
  ]);
  const commentList = commentData?.Comments;
  const pagination = commentData?.PageNation;

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
      {pagination && <PagiNation pagination={pagination} />}
    </>
  );
};

export default Comment;
