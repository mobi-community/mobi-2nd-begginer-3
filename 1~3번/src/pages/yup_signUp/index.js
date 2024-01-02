import styled from "styled-components"
import SignUp from "./components/sign-up"

import {
	flexCenter,
	flexJustifyCenter,
	positionCenter,
} from "../../styles/common.style"

const SignUpFormPage_Yup = () => {
	return (
		<Wrapper>
			<Container>
				<Title>😛Yup-SignUp</Title>
				<SignUp />
			</Container>
		</Wrapper>
	)
}

export default SignUpFormPage_Yup

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
`

const Container = styled.div`
	width: 26%;
	height: 50%;
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
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`
