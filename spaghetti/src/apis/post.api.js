import { HTTP_METHOD } from "../constants/Constant";
import { ROUTES } from "../constants/Constant";
import { axiosInstance } from "./_common";

export const postAPI = {
  getPost: async ({ params, endPoint }) => {
    const res = await axiosInstance.get(`/${endPoint}`, {
      params,
    });
    return res;
  },
};
