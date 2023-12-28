import { createBrowserRouter } from "react-router-dom"
import RHF_SignUp from "../pages/rhf"

const router = createBrowserRouter([
	{
		path: "/",
		element: <RHF_SignUp />,
	},
])

export default router
