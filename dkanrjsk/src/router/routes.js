import { createBrowserRouter } from "react-router-dom"
import HomePage from "../pages/homepage"
import SignUpFormPage from "../pages/rhf_signUp"
import SignUpFormPage_Yup from "../pages/yup_signUp"
import TodoList from "../todo-list"

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/sign-up",
		element: <SignUpFormPage />,
	},
	{
		path: "/yup",
		element: <SignUpFormPage_Yup />,
	},
	{
		path: "/todo-list",
		element: <TodoList />,
	},
])

export default router
