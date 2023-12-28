import { useForm } from "react-hook-form"
import Pair_2_Input from "../../../components/Input"
import Pair_2_Button from "../../../components/Button"

const Step1 = ({ onClickNextStep }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	return (
		<form
			noValidate
			onSubmit={handleSubmit(data => {
				console.log(data)
			})}
		>
			{/* htmlFor = id 연동 */}
			<Pair_2_Input
				label={"이메일"}
				type={"email"}
				id={"email"}
				placeholder={"이메일을 입력해주세요"}
				register={register}
				errors={errors}
			/>
			<Pair_2_Input
				label={"비밀번호"}
				type={"password"}
				id={"password"}
				placeholder={"비밀번호를 입력해주세요"}
				register={register}
				errors={errors}
			/>
			<Pair_2_Button
				type="submit"
				variant={"primary"}
				onClick={onClickNextStep}
			>
				다음
			</Pair_2_Button>
		</form>
	)
}

export default Step1
