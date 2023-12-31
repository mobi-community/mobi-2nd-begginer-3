//api를 props로 받아서 포스트 생성 요청을 보내고, 결과를 반환하는 함수.
const makeCreatePost =
  ({ api }) =>
  async (postData) => {
    const result = await api.post("/post", postData);
    if (!result) {
      throw new Error("포스트를 생성할 수 없습니다.");
    }
    return result;
  };

export { makeCreatePost };

//makeCreatePost(axios)
