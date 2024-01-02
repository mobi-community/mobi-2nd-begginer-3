import styled from "styled-components";
import useDialog from "../hooks/useDialog";
import Temperature from "../components/Home/Temperature";

const HomePage = () => {
  const { onPressNavigateBlog } = useDialog();

  return (
    <>
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
