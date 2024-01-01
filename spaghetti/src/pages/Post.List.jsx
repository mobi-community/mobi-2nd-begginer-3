import { useEffect } from "react";
import { DialLogState, useDiaLogStore } from "../contexts/DialogProvider";
import PostPageNation from "../components/pagenation/Pagenation.Post";
import { useSearchParams } from "react-router-dom";
import UserNameRepository from "../repository/repository";
import { LIMIT_TAKE } from "../consts/const";
import { useQuery } from "react-query";
import { getPostListApi } from "../apis/api";
import { QUERY_KEY } from "../consts/queryKey";

const PostListPage = () => {
  const [params] = useSearchParams();
  const [, setDiaLogAttribute] = useDiaLogStore();

  const { data: postListData } = useQuery([QUERY_KEY.PostList], () =>
    getPostListApi(params, LIMIT_TAKE.TEN)
  );

  useEffect(() => {
    const userName = UserNameRepository.getUserName();
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
      {postListData?.Posts.map((post) => (
        <tr key={post.id} onClick={() => onClickPost(post.id)}>
          <td>{post.title}</td>
          <td>{post.content}</td>
          <td>{post.User.nickName}</td>
        </tr>
      ))}
      <PostPageNation />
    </table>
  );
};
export default PostListPage;
