import { HTTP_METHOD } from "../constants/Constant";
import { ROUTES } from "../constants/Constant";

export const postAPI = {
  getPost: ({ params, endPoint }) => ({
    url: ROUTES.API_URL(endPoint),
    params: params,
    method: HTTP_METHOD.GET,
  }),
};
