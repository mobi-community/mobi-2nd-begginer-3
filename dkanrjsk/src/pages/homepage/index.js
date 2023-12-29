import { useNavigate } from "react-router-dom"
import Pair_2_Button from "../../components/Button"
import styled from "styled-components"
import { flexCenter, positionCenter } from "../../styles/common.style"

const HomePage = () => {
	const navigate = useNavigate()

	const goToSignUpPage = () => {
		navigate("/sign-up")
	}

	const goToSignUpSchemaPage = () => {
		navigate("/yup")
	}
	return (
		<Wrapper>
			<Container>
				<Pair_2_Button variant={"primary"} onClick={goToSignUpPage}>
					R H F 🦄
				</Pair_2_Button>
				<br />
				<Pair_2_Button variant={"primary"} onClick={goToSignUpSchemaPage}>
					Y U P 😛
				</Pair_2_Button>
			</Container>
		</Wrapper>
	)
}

export default HomePage

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
`

const Container = styled.div`
	${positionCenter}
	${flexCenter}
	flex-direction: column;
`
