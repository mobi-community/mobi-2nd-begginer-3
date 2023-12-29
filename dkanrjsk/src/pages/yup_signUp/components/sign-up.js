import { useForm } from "react-hook-form"
import { useNavigate, useSearchParams } from "react-router-dom"
import Pair_2_Input from "../../../components/Input"
import Pair_2_Button from "../../../components/Button"
import { signUpStep } from "../../../consts/step"
import { yupResolver } from "@hookform/resolvers/yup"
import { schema } from "../../../utils/schema"

const SignUp_Yup = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	// 앞에 값이 없으면 defaultValue로 1을 쓰겠습니다
	let step = searchParams.get("step") ?? "1"

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: "onChange", resolver: yupResolver(schema[step - 1])})
	const navigate = useNavigate()

	const numberStep = Number(step)

	const onSubmitForm = data => {
		// js의 기본에러 대신 throw new Error를 통해 더 친근한 에러보여주기
		if (numberStep > signUpStep.length) throw new Error("마지막 페이지임")
		if (numberStep === signUpStep.length) return alert(JSON.stringify(data))
		let nextStep = numberStep + 1
		navigate(`/yup?step=${nextStep}`)
	}

	return (
		<form onSubmit={handleSubmit(onSubmitForm)}>
			{signUpStep[step - 1].map(el => (
				<Pair_2_Input
					label={el.label}
					id={el.id}
					type={el.type}
					placeholder={el.placeholder}
					maxLength={el.maxLength}
					register={register}
					errors={errors}
				/>
			))}
			<Pair_2_Button variant={"primary"} size={"large"}>
				다음
			</Pair_2_Button>
		</form>
	)
}

export default SignUp_Yup
