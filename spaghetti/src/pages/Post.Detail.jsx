import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import Comment from "../components/Detail/Comment";
import { postAPI } from "../apis/post.api";

const PostDetailPage = () => {
  const [params] = useSearchParams();
  const [isOpenCommentList, setIsOpenCommentList] = useState(false);

  //포스트 정보를 불러오는 api 정보
  const { data: postDetail } = useAxios([
    postAPI.getPost({ endPoint: "post" }),
    params,
  ]);

  //불러온 포스트 디데일 데이터
  const { title, content } = postDetail;

  const onClickShowComments = () => {
    setIsOpenCommentList((prev) => !prev);
  };

  useEffect(() => {
    if (!isOpenCommentList) return;
  }, [params]);

  return (
    <div>
      <h1>Post Detail Page</h1>
      <div>
        <p>제목: {title}</p>
        <p>내용: {content}</p>

        <button onClick={onClickShowComments}>댓글 보기</button>
        <button onClick={onClickShowComments}>댓글 숨기기</button>
        {isOpenCommentList && <Comment />}
      </div>
    </div>
  );
};
export default PostDetailPage;
