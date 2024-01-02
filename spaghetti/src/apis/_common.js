import axios from "axios";
import { weatherConfig } from "../third-party/weather.config";

export const axiosInstance = axios.create({
  baseURL: "/api",
});

export const weatherInstance = axios.create({
  baseURL: weatherConfig.api,
});
