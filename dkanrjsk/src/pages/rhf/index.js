import Step1 from "./components/step1"
import Step2 from "./components/step2"
import Step3 from "./components/step3"
import styled from "styled-components"
import { useSearchParams } from "react-router-dom"
import {
	flexCenter,
	flexJustifyCenter,
	positionCenter,
} from "../../styles/common.style"
import { useEffect, useState } from "react"
import Pair_2_Button from "../../components/Button"

const RHF_SignUp = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const [currentStep, setCurrentStep] = useState(1)

	const step = searchParams.get("step") || 1

	const onClickNextStep = () => {
		const nextStep = currentStep + 1
		// arg
		searchParams.set("step", nextStep)
		setCurrentStep(nextStep)
		console.log("nextStep", nextStep)
		setSearchParams(searchParams)
	}

	useEffect(() => {
		setCurrentStep(step)
	}, [searchParams])

	// useEffect(() => {
	// 	setCurrentStep(currentStep)
	// }, [searchParams])

	return (
		<Wrapper>
			<Container>
				<Title>Sign-Up</Title>
				{currentStep === 1 && (
					<Step1
						setCurrentStep={setCurrentStep}
						currentStep={currentStep}
						onClickNextStep={onClickNextStep}
					/>
				)}
				{currentStep === 2 && <Step2 />}
				{currentStep === 3 && <Step3 />}
				{currentStep === 1 ? (
					<Pair_2_Button type="button" variant={"primary"} disabled="disabled">
						이전
					</Pair_2_Button>
				) : (
					<Pair_2_Button type="submit" variant={"primary"}>
						이전
					</Pair_2_Button>
				)}
			</Container>
		</Wrapper>
	)
}

export default RHF_SignUp

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
`

const Container = styled.div`
	width: 30%;
	height: 52%;
	border-radius: 14px;
	border: 1px solid ${({ theme }) => theme.COLORS.gray[300]};
	flex-direction: column;
	${positionCenter}
	${flexJustifyCenter}
	${flexCenter}
  	overflow: hidden;
`

const Title = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.large};
`

/*
Levi: 리액트 훅 폼을 사용하여 보다 편리하게 회원가입 로직을 만들수 있었던거 같습니다.
회고가 왜 여기있어요ㅠㅠㅠㅠㅠㅋㅋㅋㅋㅋㅋㅋㅋㅋ그렇게졸렸나요?????(kimi)
*/
