import styled from "styled-components"
import editIcon from "../../images/edit.png"
import closeIcon from "../../images/close.png"
import { useRef, useState } from "react"
import { useTodo } from "../../context/todo-context"

const OneTodo = ({ todo }) => {
	const [todoList, setTodoList] = useTodo()
	const [isEdit, setIsEdit] = useState(false)
	const todoContentInput = useRef(null)

	const onDeleteTodo = el => {
		const delete_list = todoList.filter(item => item.id !== el)
		setTodoList(delete_list)
	}

	const onEditTodo = el => {
		if (!isEdit) return setIsEdit(true)
		if (window.confirm("정말 수정하시겠습니까?")) {
			setTodoList(todoList => {
				const update_todo = todoList.find(item => item.id === el)
				update_todo.content = todoContentInput.current.value
				return todoList
			})
			setIsEdit(false)
		}
	}

	return (
		<Wrapper>
			<ContentBox>
				{isEdit ? (
					<EditInput defaultValue={todo.content} ref={todoContentInput} />
				) : (
					todo.content
				)}
			</ContentBox>
			<IconBox>
				<EditIcon src={editIcon} onClick={() => onEditTodo(todo.id)} />
				<DeleteIcon src={closeIcon} onClick={() => onDeleteTodo(todo.id)} />
			</IconBox>
		</Wrapper>
	)
}

export default OneTodo

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 400px;
`

const ContentBox = styled.div`
	font-size: 18px;
	padding: 30px 0 30px 0;
`

const EditIcon = styled.img`
	width: 25px;
	margin: 10px;
	cursor: pointer;
`

const DeleteIcon = styled.img`
	width: 20px;
	margin: 10px 0 10px 10px;
	cursor: pointer;
`

const EditInput = styled.input`
	padding: 10px;
	border-radius: 4px;
`
const IconBox = styled.div`
	display: flex;
	align-items: center;
`
