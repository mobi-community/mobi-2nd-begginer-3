import { weatherConfig } from "../third-party/weather.config";
export const weatherAxiosInfo = {
  url: `${weatherConfig.api}/getUltraSrtNcst`,
  params: {
    serviceKey: weatherConfig.secret_key,
    dataType: "JSON",
    base_date: new Date().toISOString().substring(0, 10).replace(/-/g, ""),
    base_time: "0600",
    nx: 60,
    ny: 127,
  },
  method: "get",
};

const { base_date, ...paramsWithoutBaseDate } = weatherAxiosInfo.params;

// 새로운 axiosInfo 생성
export const weatherAxiosInfoWithoutBaseDate = {
  ...weatherAxiosInfo,
  params: paramsWithoutBaseDate,
};

export const postAxiosInfo = {
  url: "/api/post",
  params: "",
  method: "get",
};

const LIMIT_TAKE = 20;

export const commentsAxiosInfo = (params) => {
  return {
    url: "/api/comments",
    params: {
      take: params.get("take") ?? LIMIT_TAKE,
    },
    method: "get",
  };
};

export const postListAxiosInfo = (params) => {
  return {
    url: "/api/posts",
    params: {
      take: params.get("take") ?? LIMIT_TAKE,
    },
    method: "get",
  };
};
