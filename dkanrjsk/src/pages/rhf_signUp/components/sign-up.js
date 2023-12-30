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
			email: "",
			password: "",
			phone: "",
			birthday: "",
			text: "",
		},
	})

	const numberStep = Number(step)
	const storageKey = ["email", "password", "phone", "birthday", "text"]

	const onSubmitForm = data => {
		storageKey.map(key => {
			if (data[key]) {
				localStorage.setItem(key, data[key])
			}
		})
		// js의 기본에러 대신 throw new Error를 통해 더 친근한 에러보여주기
		if (numberStep > signUpStep.length) throw new Error("마지막 페이지입니다")
		if (numberStep === signUpStep.length) return alert(JSON.stringify(data))
		let nextStep = numberStep + 1
		// url encoding
		console.log("nextStep", nextStep) // 2
		setSearchParams({
			step: nextStep,
		})
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
					defaultValue={localStorage.getItem(el)}
					// 아래인풋만 저장되는 문제..
				/>
			))}
			<Pair_2_Button variant={"primary"} size={"large"}>
				다음
			</Pair_2_Button>
		</form>
	)
}

export default SignUp
