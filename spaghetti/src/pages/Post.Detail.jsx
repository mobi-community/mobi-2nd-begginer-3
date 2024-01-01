import { useEffect, useState } from "react";
import CommentPageNation from "../components/pagenation/Pagenation.Comment";
import { useSearchParams } from "react-router-dom";
import UserNameRepository from "../repository/repository";
import { useQuery } from "react-query";
import { QUERY_KEY } from "../consts/queryKey";
import { getCommentsApi, getPostDetailApi } from "../apis/api";
import { LIMIT_TAKE } from "../consts/const";

const PostDetailPage = () => {
  const [params] = useSearchParams();
  const [isOpenCommentList, setIsOpenCommentList] = useState(false);

  const { data: postData } = useQuery([QUERY_KEY.PostDetail], () =>
    getPostDetailApi()
  );

  const { data: commentsData } = useQuery([QUERY_KEY.Comment], () =>
    getCommentsApi(params, LIMIT_TAKE.TWENTY)
  );

  const onClickMoreComments = async () => {
    setIsOpenCommentList(true);
  };

  const onClickHiddenComments = () => {
    setIsOpenCommentList(false);
  };

  useEffect(() => {
    const userName = UserNameRepository.getUserName();
    if (!userName) {
      alert("로그인이 필요합니다");
      window.location.href = "/";
    }
  }, []);

  useEffect(() => {
    if (!isOpenCommentList) return;
  }, [params]);

  return (
    <div>
      <h1>Post Detail Page</h1>
      <div>
        <p>제목: {postData?.title}</p>
        <p>내용: {postData?.content}</p>
        {!isOpenCommentList && (
          <button onClick={onClickMoreComments}>댓글 보기</button>
        )}
        {isOpenCommentList && (
          <button onClick={onClickHiddenComments}>댓글 숨기기</button>
        )}
        {isOpenCommentList && (
          <>
            {commentsData?.Comments.map((comment) => (
              <div key={comment.id}>
                <p>{comment.content}</p>
                <p>{comment.User.nickName}</p>
              </div>
            ))}
            <CommentPageNation />
          </>
        )}
      </div>
    </div>
  );
};
export default PostDetailPage;
