import { createContext } from "react";
import { container } from "./Container";

export const ContainerContext = createContext(container);

//props로 context를 사용할 컴포넌트를 전달하여
//container안의 함수(makeCreateUser)를 사용할 수 있게 하는 함수
export const ContainerProvider = ({ children }) => {
  return (
    <ContainerContext.Provider value={container}>
      {children}
    </ContainerContext.Provider>
  );
};
