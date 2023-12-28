import { useForm } from "react-hook-form"
import styled from "styled-components"
import Pair_2_Button from "../../../components/Button"

const Step3 = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

    return(
    <form onSubmit={handleSubmit(data => console.log(data))}>
    <div>
    <label htmlFor="text">하고싶은 말</label>
    <textarea
      id="text"
      {...register("text", {
        required: "하고싶은 말은 필수입니다",
        minLength: {
          value: 100,
          message: "100자 이상으로 작성해주세요.",
        },
        maxLength: {
          value: 300,
          message: "300자 이하로 작성해주세요.",
        },
      })}
    />
    {errors.text && <Error>{errors.text.message}</Error>}
  </div>
  
  <Pair_2_Button variant={"primary"} type="submit">이전</Pair_2_Button>
  &nbsp;&nbsp;
	<Pair_2_Button variant={"primary"} type="submit">다음</Pair_2_Button>
  <Pair_2_Button variant={"primary"} type="submit">회원가입</Pair_2_Button>
  </form>
    )
}
export default Step3

const Error = styled.div`
	color: ${({ theme }) => theme.COLORS.error};
	font-size: 12px;
`