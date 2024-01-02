import styled from "styled-components"
import moment from "moment"
import "moment/locale/ko"
import { useTodo } from "../../context/todo-context"

const TodoHead = () => {
	const today = moment().format("YYYY년 MM월 DD일")
	const day = moment().format("dddd")
	const [todoList] = useTodo()
	console.log(today)
	return (
		<Container>
			<Today>{today}</Today>
			<Day>{day}</Day>
			<br />
			<TodoCount>할 일 {todoList.length}개 남음</TodoCount>
		</Container>
	)
}

export default TodoHead

const Container = styled.div`
	position: absolute;
	top: 4%;
	left: 6%;
	padding-bottom: 10px;
	width: 450px;
	border-bottom: 1px solid ${({ theme }) => theme.COLORS.gray[100]};
`

const Today = styled.div`
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: ${({ theme }) => theme.FONT_SIZE.large};
`

const Day = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.medium};
	color: gray;
`

const TodoCount = styled.div`
	color: ${({ theme }) => theme.COLORS.mint};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`
