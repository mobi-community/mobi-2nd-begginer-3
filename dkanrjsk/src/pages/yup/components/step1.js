import { useForm } from "react-hook-form"
import Pair_2_Button from "../../../components/Button"
import styled from "styled-components"
import {yupResolver} from "@hookform/resolvers/yup"
import { schema } from "../../../utils/schema"

const Step1 = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({resolver: yupResolver(schema)})

	return (
		<form
			noValidate
			onSubmit={handleSubmit(data => {
				console.log(data)
			})}
		>
			<div>
				{/* htmlFor = id 연동 */}
				<label htmlFor="email">이메일</label>
				<input
					id="email"
					type="email"
					placeholder="이메일을 입력해주세요."
					{...register("email")}
				/>
				{errors.email && <Error>{errors.email.message}</Error>}
			</div>
			<div>
				<label htmlFor="password">비밀번호</label>
				<input
					id="password"
					type="password"
					placeholder="비밀번호를 입력해주세요."
					{...register("password")}
				/>
				{errors.password && <Error>{errors.password.message}</Error>}
			</div>
			<Pair_2_Button type="submit" variant={"primary"}>
				다음
			</Pair_2_Button>
		</form>
	)
}

export default Step1
const Error = styled.div`
	color: ${({ theme }) => theme.COLORS.error};
	font-size: 12px;
`
