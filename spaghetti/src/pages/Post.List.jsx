import axios from "axios";
import { useEffect, useState } from "react";
import { DialLogState, useDiaLogStore } from "../contexts/DialogProvider";
import PostPageNation from "../components/pagenation/Pagenation.Post";
import { useSearchParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { paginationAxiosInfo, postListAxiosInfo } from "../store/AxiosInfo";
import PagiNation from "../components/pagenation/pagination";

const PostListPage = () => {
  const [params] = useSearchParams();
  const [, setDiaLogAttribute] = useDiaLogStore();

  const { data: postData } = useAxios([postListAxiosInfo(params), params]);
  const postList = postData?.Posts;

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    if (!userName) {
      alert("로그인이 필요합니다");
      window.location.href = "/";
    }
  }, []);

  const onClickPost = async (postId) => {
    await setDiaLogAttribute({
      type: DialLogState.CONFIRM,
      text: "정말로 페이지를 이동하겠습니까",
      isOpen: true,
      onConfirm: async () => {
        await setDiaLogAttribute({
          text: "정말로 이동해버린다요!",
          onConfirm: async () => {
            window.location.href = `/post-detail/${postId}`;
          },
        });
      },
      onCancel: () => {
        setDiaLogAttribute({ isOpen: false });
      },
    });
  };

  return (
    <table>
      <caption>Post List Page</caption>
      <tr>
        <th>제목</th>
        <th>내용</th>
        <th>작성자</th>
      </tr>
      {postList?.map((post) => (
        <tr key={post.id} onClick={() => onClickPost(post.id)}>
          <td>{post.title}</td>
          <td>{post.content}</td>
          <td>{post.User.nickName}</td>
        </tr>
      ))}
      <PagiNation
        axiosInfo={paginationAxiosInfo({ params: params, endPoint: "posts" })}
      />
    </table>
  );
};
export default PostListPage;
