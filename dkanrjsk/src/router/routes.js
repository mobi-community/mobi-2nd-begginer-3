import { createBrowserRouter } from "react-router-dom"
import AirbnbCard from "../ui-library/card.chakra"
import Chakra_Product_Card from "../ui-library/card.chakra"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Chakra_Product_Card />,
	},
	{
		path: "/airbnb",
		element: <AirbnbCard />,
	},
])

export default router
