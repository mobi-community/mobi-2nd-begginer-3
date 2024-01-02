# 💻 Spaghetti Code Refactor
---

## 📌 router 분리
### router/router.jsx
 ```javascript
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import PostListPage from "../pages/Post.List";
import PostDetailPage from "../pages/Post.detail";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/posts", element: <PostListPage /> },
  { path: "/post-detail/:postId", element: <PostDetailPage /> },
]);
```
### 💡리팩토링 내용
+ App.jsx에서 관리하고 있던 router 로직을 분리하여 App.jsx에서 import해서 사용했습니다.

## 📌 재사용되는 값은 consts로 관리
### consts/pageNation.jsx
 ```javascript
export const LIMIT_TAKE = 10;
export const LIMIT_PAGE = 10;
```
### consts/queryKey.jsx
 ```javascript
export const QUERY_KEY = {
  post: "post",
  posts: "posts",
  comments: "comments",
  weather: "weather",
};
```
### 💡리팩토링 내용
+ LIMIT_PAGE, LIMIT_TAKE 값은 pageNation에서 자주 재사용되는 값이므로 consts 폴더로 관리했습니다.
+ react-query를 사용하여 msw 데이터를 호출할때 사용되는 query-key값 또한 자주 재사용되므로 consts 폴더로 관리했습니다.

## 📌 페이지네이션 파일은 하나로 관리

### 💡리팩토링 내용
+ components/pagenation/Pagenation.Comments.jsx, components/pagenation/Pagenation.Posts.jsx 로직이 동일하므로 components/Pagenation.jsx와 같이 하나의 파일로 관리했습니다.

## 📌 msw 데이터 관리
### apis/api.jsx
 ```javascript
import axios from "axios";
import { weatherConfig } from "../third-party/weather.config";
import { LIMIT_PAGE, LIMIT_TAKE } from "../consts/pageNation";

export const getPostDetailPost = async () => {
  const response = await axios.get("/api/post");
  return response.data;
};

export const getPaginationPost = async (params) => {
  const response = await axios.get("/api/posts", {
    params: {
      page: params.get("page") ?? 1,
      take: params.get("take") ?? LIMIT_TAKE,
      limit: params.get("limit") ?? LIMIT_PAGE,
    },
  });
  return response.data;
};

export const getPaginationComment = async (params) => {
  const response = await axios.get("/api/comments", {
    params: {
      page: params.get("page") ?? 1,
      take: params.get("take") ?? LIMIT_TAKE,
      limit: params.get("limit") ?? LIMIT_PAGE,
    },
  });
  return response.data;
};

export const getWeather = async () => {
  try {
    const response = await axios.get("/getUltraSrtNcst", {
      baseURL: weatherConfig.api,
      params: {
        serviceKey: weatherConfig.secret_key,
        dataType: "JSON",
        base_date: new Date().toISOString().substring(0, 10).replace(/-/g, ""),
        base_time: "0600",
        nx: 60,
        ny: 127,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error("failed load weather api");
  }
};

```
### components/Pagenation.jsx
 ```javascript
  const { data: postData } = useQuery([QUERY_KEY.posts, params.get("page")], () => getPaginationPost(params));
  const pageNationData = postData?.PageNation;
```
### pages/Home.jsx
 ```javascript
  const { data: weatherData } = useQuery([QUERY_KEY.weather], () => getWeather());
```
### pages/Post.Detail.jsx
 ```javascript
  const { data: postDetailData } = useQuery([QUERY_KEY.post], () => getPostDetailPost());
  const { data: commentData } = useQuery([QUERY_KEY.comments, params.get("page")], () => getPaginationComment(params));
  const paginationCommentData = commentData?.Comments;
```
### pages/Post.List.jsx
 ```javascript
  const { data: postData } = useQuery([QUERY_KEY.posts, params.get("page")], () => getPaginationPost(params));
  const paginationPostData = postData?.Posts;
```
### 💡리팩토링 내용
+ api와 관련된 로직은 api폴더에서 관리했습니다.
+ api 호출 함수(Post 로직)에 params 값을 전달하여 데이터를 호출하면 {PageNation:,Posts:} 형식으로 나오는데 이때 PageNation 값은 pagenation 폴더에서 Posts 값은 pages 폴더에서 사용했습니다.
+ api 호출 함수(Comment 로직)에 params 값을 전달하여 데이터를 호출하면 {PageNation:,Comments:} 형식으로 나오는데 이때 PageNation 값은 pagenation 폴더에서 Comments 값은 pages 폴더에서 사용했습니다.
## 📌 state를 이용한 자주 사용하는 로직은 hooks로 관리
### hooks/useDiaLog.jsx
 ```javascript
import { DialLogState, useDiaLogStore } from "../contexts/DialogProvider";

const useDiaLog = () => {
  const [, setDiaLogAttribute] = useDiaLogStore();

  // home page
  const onPressNavigateBlog = () => {
    setDiaLogAttribute({
      type: DialLogState.ALERT,
      text: "정말로 페이지를 이동하겠습니까",
      isOpen: true,
      onConfirm: async () => {
        await setDiaLogAttribute({ isOpen: false });
        window.location.href = "/posts";
      },
    });
  };

  // postList page
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
  return { onPressNavigateBlog, onClickPost };
};

export default useDiaLog;
```
### hooks/useShowModal.jsx
 ```javascript
import { useState } from "react";

const useShowModal = () => {
  const [isOpenCommentList, setIsOpenCommentList] = useState(false);

  const onClickCommentsBtn = async () => {
    setIsOpenCommentList((prev) => !prev);
  };

  return { isOpenCommentList, onClickCommentsBtn };
};

export default useShowModal;
```
### 💡리팩토링 내용
+ context를 통해 dialog와 관련된 상태를 전역적으로 관리하고 있지만 이 상태를 사용하는 함수는 여러 파일에서 사용되고 있습니다.
+ 전역적으로 관리되고 있는 dialog와 관련된 상태를 사용하는 함수를 useDiaLog custom hook으로 만들어 필요할때 import 해서 사용할 수 있도록 추가했습니다.
+ 댓글창을 열고 닫을 수 있는 로직인 useShowModal은 해당 코드에서는 재사용되고 있지 않지만 단순히 모달창을 열고 닫는 로직은 자주 재사용될수 있다고 생각하여 custom hook으로 분리했습니다.
## 📌 localStorage와 관련된 로직은 묶어서 관리
### repository/userNameRepository.jsx
 ```javascript
const USER_NAME = "useName";

export const userNameRepository = {
  getUserName() {
    return localStorage.getItem(USER_NAME);
  },

  setUserName(userName) {
    localStorage.setItem(USER_NAME, userName);
  },
};
```
### 💡리팩토링 내용
+ localStorage를 통해 데이터 값을 가져오는 로직이나 localStorage에 있는 값을 변경하는 로직은 자주 재사용되므로 repository 폴더에서 하나의 객체로 관리했습니다.
## 📌 private router에 관련된 로직은 util 함수로 관리
### utils/privateRouter.jsx
 ```javascript
import { userNameRepository } from "../repository/userNameRepository";

const privateRouter = () => {
  const userName = userNameRepository.getUserName();
  if (!userName) {
    alert("로그인이 필요합니다");
    window.location.href = "/";
  }
};

export default privateRouter;
```
### 💡리팩토링 내용
+ localStorage에 데이터가 없을때 홈페이지로 되돌아가는 private Router와 관련된 함수는 로그인 페이지가 아닌 모든 페이지에서 재사용되지만 state를 사용하고 있지 않기 때문에 utils 폴더에서 관리했습니다.
## 📌 style은 한 곳에서 관리
### pages/style.jsx
 ```javascript
import styled from "styled-components";

const BlurBackGround = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  backdrop-filter: blur(10px);
`;

const UserNameForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Button = styled.button``;

export const S = {
  BlurBackGround,
  UserNameForm,
  Button,
};
```
### components/style.jsx
 ```javascript
import styled from "styled-components";

const Wrapper = styled.dialog`
  width: 400px;
  position: absolute;
  left: ${({ $position }) => $position.x}%;
  top: ${({ $position }) => $position.y}%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  border: 1px solid #888;
  ::backdrop {
    background: rgba(0, 0, 0, 0.6);
  }
`;

const Button = styled.button`
  padding: 8px;
`;

const BackDrop = styled.div`
  width: 100%;
`;

export const S = {
  Wrapper,
  Button,
  BackDrop,
};
```
### 💡리팩토링 내용
+ style 관련 로직을 page 혹은 components에서 같이 사용하게 되면 코드가 길어지고 가독성이 떨어지므로 style 폴더를 만들어서 관리했습니다.

## 📌 불필요한 함수 최소화

### pages/post.Detail.jsx
 ```javascript
<button onClick={onClickCommentsBtn}>{isOpenCommentList ? '댓글 숨기기' : '댓글 보기'}</button>
```
### 💡리팩토링 내용
+ 기존 로직은 버튼 2개에 댓글을 숨기고 보여주는 로직을 작성했지만 가독성이 좋지 않아 prev를 사용해서 하나의 함수로 관리하고 state에 따라 button에 children 값만 바뀔 수 있도록 수정했습니다.




--------
### 💬 회고

이번 과제를 진행하면서 관심사 분리와 전역상태관리의 중요성을 깨닫게 되었습니다.
특히 react-query를 사용하면서 코드가 간결해지는 것이 눈에 보였고,
일단 저희는 2번 과제인 보일러 템플릿 만들기부터 시작했습니다.
이유는 먼저 자주 사용되는 로직이나 컴포넌트들을 분리하고 들어가면
공용으로 쓰이는 버튼이나 인풋을 1번과제에 사용할 수 있을 거라고 생각했습니다.
4번과제를 하면서 아쉬움을 느꼈었던 3번과제의 의존성주입이나 전역상태관리에 대한 것들을
조금 더 보충하면서 진행했습니다.
보일러 템플릿을 만들어놓으니 다른 과제들을 진행할 때, 
폴더 구조가 정리되어있으니 더 수월하게 진행할 수 있었던 것 같습니다.
<br/>
<br/>
<br/>
