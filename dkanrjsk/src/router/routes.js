import { createBrowserRouter } from "react-router-dom"
import HomePage from "../pages/homepage"
import SignUpFormPage from "../pages/rhf_signUp"
import SignUpFormPage_Yup from "../pages/yup_signUp"

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
])

export default router
