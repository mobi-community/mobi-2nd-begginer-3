import styled from "styled-components";
import useDialog from "../hooks/useDialog";
import Temperature from "../components/Home/Temperature";
import { HTTP_METHOD } from "../constants/Constant";
import { weatherConfig } from "../third-party/weather.config";
import useAxios from "../hooks/useAxios";
import { weatherInstance } from "../apis/_common";

const HomePage = () => {
  const { onPressNavigateBlog } = useDialog();

  const params = {
    serviceKey: weatherConfig.secret_key,
    dataType: "JSON",
    base_date: new Date().toISOString().substring(0, 10).replace(/-/g, ""),
    nx: 60,
    ny: 127,
  };

  const { data, isLoading } = useAxios({
    axiosInstance: weatherInstance,
    method: HTTP_METHOD.GET,
    rerenderArr: params,
    url: "/getUltraSrtNcst",
    params: params,
  });

  const weather = data?.response?.body?.items?.item;

  return (
    !isLoading && (
      <>
        <div>
          <h1>Home Page</h1>
          {weather && <Temperature weather={weather} />}
          <S.Button onClick={onPressNavigateBlog}>블로그 보러가기</S.Button>
        </div>
      </>
    )
  );
};
export default HomePage;

const BlurBackGround = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  backdrop-filter: blur(10px);
`;

const UserNameForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Button = styled.button``;

const S = {
  BlurBackGround,
  UserNameForm,
  Button,
};
