import { S } from "./style"

const Pair_2_Input = ({ label, error, ...inputProps }) => {
	return (
		<>
			<S.InputBox>
				<S.Label>{label}</S.Label>
				<input {...inputProps} />
				{error && <S.ValidateMessage>{error}</S.ValidateMessage>}
			</S.InputBox>
		</>
	)
}

export default Pair_2_Input
