import { validate } from "../../utils/vaildation"
import { S } from "./style"

const Pair_2_Input = ({ label, id, errors, register, ...inputProps }) => {
	return (
		<>
			<S.InputBox>
				<S.Label>{label}</S.Label>
				<input {...inputProps} {...register(id, validate[id])} />
				{errors[id] && (
					<S.ValidateMessage>{errors[id].message}</S.ValidateMessage>
				)}
			</S.InputBox>
		</>
	)
}

export default Pair_2_Input
