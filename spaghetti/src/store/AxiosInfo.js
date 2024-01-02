//import { HTTP_METHOD, LIMIT, ROUTES } from "../constants/Constant";

//포스트 정보를 불러오는 api 정보
// export const postAxiosInfo = {
//   url: ROUTES.API_URL("post"),
//   params: "",
//   method: HTTP_METHOD.GET,
// };

// 댓글 정보를 불러오는 api
// export const commentsAxiosInfo = (params) => {
//   return {
//     url: ROUTES.API_URL("commnets"),
//     params: {
//       take: params.get("take") ?? LIMIT.TAKE,
//     },
//     method: HTTP_METHOD.GET,
//   };
// };

//포스트 리스트 정보를 불러오는 api 정보
// export const postListAxiosInfo = (params) => {
//   return {
//     url: ROUTES.API_URL("posts"),
//     params: {
//       take: params.get("take") ?? LIMIT.TAKE,
//     },
//     method: HTTP_METHOD.GET,
//   };

//페이지네이션 정보를 불러오는 api 정보
// export const paginationAxiosInfo = ({ params, endPoint }) => {
//   return {
//     url: ROUTES.API_URL(endPoint),
//     params: {
//       page: params.get("page") ?? 1,
//       take: params.get("take") ?? LIMIT.TAKE,
//       limit: params.get("limit") ?? LIMIT.PAGE,
//     },
//     method: HTTP_METHOD.GET,
//   };
// };
