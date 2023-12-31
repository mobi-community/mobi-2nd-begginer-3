import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { postAxiosInfo } from "../store/AxiosInfo";
import StorageHandler from "../repository/StorageHandler";

const PostDetailPage = () => {
  const [params] = useSearchParams();
  const [isOpenCommentList, setIsOpenCommentList] = useState(false);
  const { data: postDetail } = useAxios([postAxiosInfo, params]);

  const onClickMoreComments = async () => {
    setIsOpenCommentList(true);
  };

  const onClickHiddenComments = () => {
    setIsOpenCommentList(false);
  };

  useEffect(() => {
    const userName = StorageHandler.getLocalStorage("userName");
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

        <button onClick={onClickMoreComments}>댓글 보기</button>
        <button onClick={onClickHiddenComments}>댓글 숨기기</button>
        {isOpenCommentList && <Comment />}
      </div>
    </div>
  );
};
export default PostDetailPage;
