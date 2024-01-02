import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import Comment from "../components/Detail/Comment";
import { axiosInstance } from "../apis/_common";
import { HTTP_METHOD, ROUTES } from "../constants/Constant";

const PostDetailPage = () => {
  const [params] = useSearchParams();
  const [isOpenCommentList, setIsOpenCommentList] = useState(false);

  //포스트 정보를 불러오는 api 정보
  const { data: postDetail, isLoading } = useAxios({
    axiosInstance: axiosInstance,
    method: HTTP_METHOD.GET,
    url: ROUTES.POST,
    rerenderArr: params,
    params: "",
  });

  const onClickShowComments = () => {
    setIsOpenCommentList((prev) => !prev);
  };

  useEffect(() => {
    if (!isOpenCommentList) return;
  }, [params]);

  return (
    !isLoading && (
      <div>
        <h1>Post Detail Page</h1>
        <div>
          <p>제목: {postDetail?.title}</p>
          <p>내용: {postDetail?.content}</p>

          <button onClick={onClickShowComments}>댓글 보기</button>
          <button onClick={onClickShowComments}>댓글 숨기기</button>
          {isOpenCommentList && <Comment />}
        </div>
      </div>
    )
  );
};
export default PostDetailPage;
