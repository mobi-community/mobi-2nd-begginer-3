import { styled } from "styled-components";
import useInputs from "../hooks/useInputs";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const navigate = useNavigate();

  const [value, onChange] = useInputs({
    query: "",
  });

  const onClickSubmit = () => {
    navigate(`/image?query=${value.query}`);
  };

  return (
    <>
      <Input onChange={onChange} name="query" />
      <button onClick={onClickSubmit}>검색</button>
    </>
  );
};

export default SearchPage;

const Input = styled.input`
  width: 200px;
  height: 40px;
`;
