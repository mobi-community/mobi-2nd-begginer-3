import { weatherConfig } from "../third-party/weather.config";

export const LIMIT = {
  PAGE: 10,
  TAKE: 20,
};

export const DIALOG_STATE = {
  ALERT: "ALERT",
  CONFIRM: "CONFIRM",
};

export const ROUTES = {
  HOME: "/",
  POST: "/post",
  POSTS: "/posts",
  COMMENTS: "/comments",
  POST_DETAIL: "/post-detail/:postId",
  WEATHER_API: `${weatherConfig.api}/getUltraSrtNcst`,
  MOVE_POST_DETAIL: (postId) => `/post-detail/${postId}`,
  API_URL: (endPoint) => `/api/${endPoint}`,
};

export const HTTP_METHOD = {
  GET: "get",
};
