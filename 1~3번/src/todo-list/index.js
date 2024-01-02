import styled from "styled-components"
import TodoHead from "./components/todo-head"
import { flexAlignCenter, positionCenter } from "../styles/common.style"
import plusIcon from "../images/plus.png"
import { useState } from "react"
import { useTodo } from "../context/todo-context"
import TodoModal from "./components/todo-modal"
import OneTodo from "./components/one-todo"

const TodoList = () => {
	const [isOpenModal, setIsOpenModal] = useState(false)

	const [todoList] = useTodo()

	const onOpenModal = () => {
		setIsOpenModal(true)
	}
	return (
		<>
			<Wrapper>
				<Container>
					<TodoHead />
					<TodoContainer>
						{todoList.map(todo => (
							<OneTodo todo={todo} />
						))}
					</TodoContainer>
					<Button onClick={onOpenModal}>
						<img src={plusIcon} />
					</Button>
				</Container>
			</Wrapper>
			{isOpenModal && <TodoModal setIsOpenModal={setIsOpenModal} />}
		</>
	)
}

export default TodoList

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: ${({ theme }) => theme.COLORS.gray[100]};
	overflow: hidden;
`

const Container = styled.div`
	width: 30%;
	height: 80%;
	border-radius: 14px;
	background-color: ${({ theme }) => theme.COLORS.white};
	flex-direction: column;
	${positionCenter}
	${flexAlignCenter}
	overflow: hidden;
`

const TodoContainer = styled.div`
	margin-top: 160px;
`

const Button = styled.div`
	background-color: ${({ theme }) => theme.COLORS.mint};
	border-radius: 50%;
	padding: 10px;
	cursor: pointer;
	position: absolute;
	bottom: 3%;
`
