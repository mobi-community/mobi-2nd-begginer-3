import useFetch from "../hooks/useFetch";
import styled from "styled-components";
import { useGoBack } from "../hooks/useGoBack";
import { useSearchParams } from "react-router-dom";

const ImagePage = () => {
  const url = "https://dapi.kakao.com/v2/search/image";
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const { data, isLoading, error } = useFetch({
    url,
    method: "GET",
    query,
  });
  const goback = useGoBack();

  return (
    <>
      <button onClick={goback}>뒤로가기</button>
      {!isLoading &&
        data &&
        data.map((image, i) => {
          return <Img key={i} src={image.image_url} />;
        })}
    </>
  );
};

export default ImagePage;

const Img = styled.img`
  width: 200px;
`;
