//axiosInstace
import { api } from "apis/core";
import { makeCreatePost } from "./makeCreatePost";

//makeCreatePost안에 api를 import 해서 연결하는 container
export const container = {
  createPost: makeCreatePost({ api }),
};
