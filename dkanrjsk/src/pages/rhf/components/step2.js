import { useForm } from "react-hook-form"
import styled from "styled-components"
import Pair_2_Input from "../../../components/Input"
import Pair_2_Button from "../../../components/Button"

const Step2 = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	return (
		<form onSubmit={handleSubmit(data => console.log(data))}>
			<Pair_2_Input
				label={"휴대폰번호"}
				type={"number"}
				id={"number"}
				placeholder={"휴대폰번호를 입력주세요."}
				register={register}
				errors={errors}
			/>
			<Pair_2_Input label={"생년월일"} type={"date"} id={"birth"} placeholder={"생년월일을 입력해주세요."} register={register} errors={errors}/>
			<Pair_2_Button variant={"primary"} type="submit">이전</Pair_2_Button>
			&nbsp;&nbsp;
			<Pair_2_Button variant={"primary"} type="submit">다음</Pair_2_Button>
		</form>
	)
}
export default Step2
const Error = styled.div`
	color: ${({ theme }) => theme.COLORS.error};
	font-size: 12px;
`
