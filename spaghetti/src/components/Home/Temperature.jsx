import useAxios from "../../hooks/useAxios";
import {
  weatherAxiosInfo,
  weatherAxiosInfoWithoutBaseDate,
} from "../../store/AxiosInfo";

const Temperature = () => {
  const { data } = useAxios([
    weatherAxiosInfo,
    weatherAxiosInfoWithoutBaseDate,
  ]);

  const weather = data?.response?.body?.items?.item;

  return (
    <>
      <p>오늘의 기온</p>
      <p>{weather?.find((el) => el.category === "T1H").obsrValue}도</p>
    </>
  );
};

export default Temperature;
