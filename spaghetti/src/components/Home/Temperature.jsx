import useAxios from "../../hooks/useAxios";
import { weatherAPI } from "../../apis/weather.api";
import { weatherConfig } from "../../third-party/weather.config";

const Temperature = () => {
  const params = {
    serviceKey: weatherConfig.secret_key,
    dataType: "JSON",
    base_date: new Date().toISOString().substring(0, 10).replace(/-/g, ""),
    nx: 60,
    ny: 127,
  };

  const paramsWithBaseTime = {
    ...params,
    base_time: "0600",
  };

  const { data } = useAxios([
    weatherAPI.getWeather(params),
    paramsWithBaseTime,
  ]);

  console.log("data", data);

  const weather = data?.response?.body?.items?.item;

  return (
    <>
      <p>오늘의 기온</p>
      <p>{weather?.find((el) => el.category === "T1H").obsrValue}도</p>
    </>
  );
};

export default Temperature;
