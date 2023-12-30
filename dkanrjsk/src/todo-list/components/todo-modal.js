import styled from "styled-components"
import closeIcon from "../../images/close.png"
import { useTodo } from "../../context/todo-context"

const TodoModal = ({ setIsOpenModal }) => {
	const [, setTodoList] = useTodo()

	const onAddTodo = e => {
		e.preventDefault()
		const { content } = e.target
		setTodoList(prev => [
			...prev,
			{ id: Math.floor(Math.random() * 10000), content: content.value },
		])
		setIsOpenModal(false)
	}

	return (
		<Wrapper>
			<Form onSubmit={onAddTodo}>
				<CloseIcon src={closeIcon} onClick={() => setIsOpenModal(false)} />
				<Title>TodoList</Title>
				<Input type="text" placeholder="할 일을 입력하세요." name="content" />
				<Button>추가</Button>
			</Form>
		</Wrapper>
	)
}

export default TodoModal

const Wrapper = styled.div`
	position: fixed;
	width: 100%;
	height: 100vh;
	z-index: 10000000;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`

const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 400px;
	height: 300px;
	border: 1px solid ${({ theme }) => theme.COLORS.gray[300]};
	position: relative;
	background-color: white;
	border-radius: 10px;
	& > input {
		outline: none;
	}
`

const Title = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.large};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	margin-bottom: 20px;
`

const Input = styled.input`
	width: 300px;
	height: 50px;
	margin-bottom: 15px;
	border: 1px solid #eaeaea;
	border-radius: 10px;
	text-align: center;
`

const Button = styled.button`
	width: 308px;
	height: 50px;
	background-color: ${({ theme }) => theme.COLORS.mint};
	color: ${({ theme }) => theme.COLORS.white};
	font-size: ${({ theme }) => theme.FONT_SIZE.medium};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	border-radius: 10px;
	border: none;
	cursor: pointer;
`

const CloseIcon = styled.img`
	width: 25px;
	position: absolute;
	top: 25px;
	right: 25px;
	cursor: pointer;
`
