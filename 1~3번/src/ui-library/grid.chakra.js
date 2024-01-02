import { Box, SimpleGrid } from "@chakra-ui/react"
import product from "../images/airbnb.avif"

const Chakra_Grid = () => {
	return (
		<SimpleGrid columns={4} spacing={3} rowGap={160}>
			{/* BOX */}
			<Box height="200px">
				<img src={product} />
			</Box>
			<Box height="200px">
				<img src={product} />
			</Box>
			<Box height="200px">
				<img src={product} />
			</Box>
			<Box height="200px">
				<img src={product} />
			</Box>
			<Box height="200px">
				<img src={product} />
			</Box>
			<Box height="200px">
				<img src={product} />
			</Box>
			<Box height="200px">
				<img src={product} />
			</Box>
			<Box height="200px">
				<img src={product} />
			</Box>
			<Box height="200px">
				<img src={product} />
			</Box>
			<Box height="200px">
				<img src={product} />
			</Box>
			<Box height="200px">
				<img src={product} />
			</Box>
			<Box height="200px">
				<img src={product} />
			</Box>
		</SimpleGrid>
	)
}

export default Chakra_Grid
