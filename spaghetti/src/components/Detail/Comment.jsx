import useAxios from "../../hooks/useAxios";
import { useSearchParams } from "react-router-dom";
//import PagiNation from "../_common/Pagination";
import { postAPI } from "../../apis/post.api";
import { LIMIT } from "../../constants/Constant";

const Comment = () => {
  const [params] = useSearchParams();

  const commentParam = {
    take: params.get("take") ?? LIMIT.TAKE,
  };
  const { data: commentData } = useAxios([
    postAPI.getPost(commentParam, "commnets"),
    params,
  ]);
  const commentList = commentData?.Comments;

  // 댓글 정보를 불러오는 api
  // const commentsAxiosInfo = (params) => {
  //   return {
  //     url: ROUTES.API_URL("commnets"),
  //     params: {
  //       ,
  //     },
  //     method: HTTP_METHOD.GET,
  //   };
  // };

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
      {/* <PagiNation endPoint={"commnets"} /> */}
    </>
  );
};

export default Comment;
