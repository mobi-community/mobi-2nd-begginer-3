import axios from "axios";
import { weatherConfig } from "../third-party/weather.config";

export const getPostDetailApi = async () => {
  const response = await axios.get("/api/post");
  return response.data;
};

export const getCommentsApi = async (params, limit) => {
  const response = await axios.get("/api/comments", {
    params: {
      take: params.get("take") ?? limit,
    },
  });
  return response.data;
};

export const getPostListApi = async (params, limit) => {
  const response = await axios.get("/api/posts", {
    params: {
      take: params.get("take") ?? limit,
    },
  });
  return response.data;
};

export const getPagenationCommentList = async (
  params,
  limit_take,
  limit_page
) => {
  const response = await axios.get("/api/comments", {
    params: {
      page: params.get("page") ?? 1,
      take: params.get("take") ?? limit_take,
      limit: params.get("limit") ?? limit_page,
    },
  });
  return response.data;
};

// export const getPagenationPostList = async () => {
//   const response = await axios.get("/api/posts", {
//     params: {
//       page: params.get("page") ?? 1,
//       take: params.get("take") ?? LIMIT_TAKE,
//       limit: params.get("limit") ?? LIMIT_PAGE,
//     },
//   });
//   return response.data;
// };

export const getWeatherApi = async () => {
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
