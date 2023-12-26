import { Button } from "./style"


const Pair_2_Button = ({ variant, size, shape, children, ...rest }) => {
	return (
		<>
			<Button variant={variant} size={size} shape={shape} {...rest}>
				{children}
			</Button>
		</>
	)
}

export default Pair_2_Button


