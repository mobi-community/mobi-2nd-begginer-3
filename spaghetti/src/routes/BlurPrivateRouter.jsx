import { Outlet } from "react-router-dom";
import StorageHandler from "../repository/StorageHandler";
import { useEffect, useState } from "react";
import styled from "styled-components";

const BlurPrivateRouter = () => {
  //로그인 된 상태면 => 해당 컴포넌트를 Outlet으로 보여주고
  //아니면 그냥 navigate로 다이렉트
  //if문 써서 localStorage에 이름 있으면
  const [isBackGroundBlur, setIsBackGroundBlur] = useState(true);

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
      <Outlet />
    </>
  );
};

export default BlurPrivateRouter;

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
