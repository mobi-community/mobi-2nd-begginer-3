import axios from "axios";
import { useEffect, useState } from "react";
import CommentPageNation from "../components/pagenation/Pagenation.Comment";
import { useSearchParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { commentsAxiosInfo, postAxiosInfo } from "../store/AxiosInfo";

const LIMIT_TAKE = 20;
const PostDetailPage = () => {
  const [params] = useSearchParams();
  const [isOpenCommentList, setIsOpenCommentList] = useState(false);

  const { data: postDetail } = useAxios([postAxiosInfo, params]);
  const { data: commentData } = useAxios([commentsAxiosInfo(params), params]);
  const commentList = commentData?.Comments;

  const onClickMoreComments = async () => {
    setIsOpenCommentList(true);
    fetchComments();
  };

  const onClickHiddenComments = () => {
    setIsOpenCommentList(false);
  };

  useEffect(() => {
    const userName = localStorage.getItem("userName");
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
        <p>제목: {postDetail?.title}</p>
        <p>내용: {postDetail?.content}</p>
        {!isOpenCommentList && (
          <button onClick={onClickMoreComments}>댓글 보기</button>
        )}
        {isOpenCommentList && (
          <button onClick={onClickHiddenComments}>댓글 숨기기</button>
        )}
        {isOpenCommentList && (
          <>
            {commentList?.map((comment) => (
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
