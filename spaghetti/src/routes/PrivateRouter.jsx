import { Outlet } from "react-router-dom";
import StorageHandler from "../repository/StorageHandler";
import { ROUTES } from "../constants/Constant";

const PrivateRouter = () => {
  //로그인 된 상태면 => 해당 컴포넌트를 Outlet으로 보여주고
  //아니면 그냥 navigate로 다이렉트
  //if문 써서 localStorage에 이름 있으면
  const userName = StorageHandler.getLocalStorage("userName");
  if (!userName) {
    alert("로그인이 필요합니다");
    window.location.href = ROUTES.HOME;
  } else {
    return <Outlet />;
  }
};

export default PrivateRouter;
