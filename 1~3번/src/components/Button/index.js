import { Button } from "./style"

const Pair_2_Button = ({ variant, size, shape, children, onClick, ...rest }) => {
	return (
		<>
			<Button
				variant={variant}
				size={size}
				shape={shape}
				onClick={onClick}
				{...rest}
			>
				{children}
			</Button>
		</>
	)
}

export default Pair_2_Button
