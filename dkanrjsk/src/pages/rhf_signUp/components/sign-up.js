import { useForm } from "react-hook-form"
import { useSearchParams } from "react-router-dom"
import Pair_2_Input from "../../../components/Input"
import Pair_2_Button from "../../../components/Button"
import { signUpStep } from "../../../consts/step"

const SignUp = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	// 앞에 값이 없으면 defaultValue로 1을 쓰겠습니다
	let step = searchParams.get("step") ?? "1"
	// 실제 주소 바꾸는 거 setSearchParams rerender를 일으킴
	// searchParams.set() --> 변수를 바꾸는 거

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onChange",
		defaultValues: {
			email: "h2@naver.com",
			password: "12345DKJAFdk@",
			phone: "010-1234-1234",
			birthday: "2023-11-11",
			text: "dafd",
		},
	})
	// const navigate = useNavigate()

	const numberStep = Number(step)

	const onSubmitForm = data => {
		// js의 기본에러 대신 throw new Error를 통해 더 친근한 에러보여주기
		if (numberStep > signUpStep.length) throw new Error("마지막 페이지임")
		if (numberStep === signUpStep.length) return alert(JSON.stringify(data))
		let nextStep = numberStep + 1
		console.log("nextStep", nextStep) // 2
		setSearchParams({ step: nextStep })
		console.log("data", data)
		// console.log("data", data.password)
		// navigate(`/sign-up?step=${nextStep}`)
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
					// defaultValue={data.email}
				/>
			))}
			<Pair_2_Button variant={"primary"} size={"large"}>
				다음
			</Pair_2_Button>
		</form>
	)
}

export default SignUp
