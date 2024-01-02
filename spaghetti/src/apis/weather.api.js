import { HTTP_METHOD, ROUTES } from "../constants/Constant";

//날씨 정보를 불러오는 api 정보
export const weatherAPI = {
  getWeather: (params) => ({
    url: ROUTES.WEATHER_API,
    params: params,
    method: HTTP_METHOD.GET,
  }),
};
