import { useEffect, useState } from "react";
import styled from "styled-components";
import useDialog from "../hooks/useDialog";
import StorageHandler from "../repository/StorageHandler";
import Temperature from "../components/Home/Temperature";

const HomePage = () => {
  const [isBackGroundBlur, setIsBackGroundBlur] = useState(true);
  const { onPressNavigateBlog } = useDialog();

  useEffect(() => {
    const userName = StorageHandler.getLocalStorage("userName");
    if (!userName) {
      return setIsBackGroundBlur(true);
    } else setIsBackGroundBlur(false);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.userName.value.trim();
    if (!userName) return alert("이름을 입력해주세요");
    StorageHandler.setLocalStorage("userName", userName);
    setIsBackGroundBlur(false);
    e.target.userName.value = "";
  };

  return (
    <>
      {isBackGroundBlur && (
        <S.BlurBackGround>
          <S.UserNameForm onSubmit={onSubmit}>
            <input type="text" name="userName" placeholder="Enter your name" />
            <button type="submit">Submit</button>
          </S.UserNameForm>
        </S.BlurBackGround>
      )}
      <div>
        <h1>Home Page</h1>
        <Temperature />
        <S.Button onClick={onPressNavigateBlog}>블로그 보러가기</S.Button>
      </div>
    </>
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
