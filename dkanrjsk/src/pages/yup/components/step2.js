import { useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { schema } from "../../../utils/schema"

const Step2 = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({resolver: yupResolver(schema)})

	return (
		<form>
			<div>
				<label htmlFor="number">전화번호</label>
				<input
					id="number"
					type="number"
					placeholder="휴대폰번호를 입력해주세요"
					{...register("number")}
				/>
				{errors.number && <Error>{errors.number.message}</Error>}
			</div>
			<div>
				<label htmlFor="birth">생년월일</label>
				<input
					id="birth"
					type="date"
					placeholder="생년월일을 입력해주세요"
					{...register("birth")}
				/>
				{errors.birth && <Error>{errors.birth.message}</Error>}
			</div>
            <button type="submit">다음</button>
		</form>
	)
}
export default Step2
const Error = styled.div`
	color: ${({ theme }) => theme.COLORS.error};
	font-size: 12px;
`