import { HTTP_METHOD } from "../constants/Constant";
import { ROUTES } from "../constants/Constant";

const postAPI = {
  getPost: ({ params, endPoint }) => ({
    url: ROUTES.API_URL(endPoint),
    params: params,
    method: HTTP_METHOD.GET,
  }),
};

export default postAPI;
