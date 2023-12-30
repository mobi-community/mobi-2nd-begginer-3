import { useContext } from "react";
import { ContainerContext } from "../container";

const HomePage = () => {
  const { createPost } = useContext(ContainerContext);
  return (
    <div className="home-container">
      <buttov className="btn" onClick={() => createPost()}>
        포스트 생성
      </buttov>
    </div>
  );
};

export default HomePage;
