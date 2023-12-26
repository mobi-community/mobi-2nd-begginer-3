import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    // token 종류 명시 필수 (json web token(JWT) => Bearer)
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
  },
  withCredentials: true,
});
