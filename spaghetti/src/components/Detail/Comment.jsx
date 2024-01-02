import useAxios from "../../hooks/useAxios";
import { useSearchParams } from "react-router-dom";
import { HTTP_METHOD, LIMIT, ROUTES } from "../../constants/Constant";
import { axiosInstance } from "../../apis/_common";
import PagiNation from "../_common/PagiNation";

const Comment = () => {
  const [params] = useSearchParams();

  const commentParams = {
    page: params.get("page") ?? 1,
    take: params.get("take") ?? LIMIT.TAKE,
    limit: params.get("limit") ?? LIMIT.PAGE,
  };

  const { data: commentData, isLoading } = useAxios({
    axiosInstance: axiosInstance,
    method: HTTP_METHOD.GET,
    url: ROUTES.COMMENTS,
    rerenderArr: params,
    params: commentParams,
  });

  const commentList = commentData?.Comments;
  const pagination = commentData?.PageNation;

  return (
    !isLoading && (
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
        <PagiNation pagination={pagination} limitPage={LIMIT.PAGE} />
      </>
    )
  );
};

export default Comment;
