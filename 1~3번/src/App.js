import { ThemeProvider } from "styled-components"
import theme from "./styles/theme.style"
import router from "./router/routes"
import { RouterProvider } from "react-router-dom"
import GlobalStyles from "./styles/global.style"
import { ChakraProvider } from "@chakra-ui/react"
import TodoProvider from "./context/todo-context"

function App() {
	return (
		<TodoProvider>
			<ChakraProvider>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<RouterProvider router={router} />
				</ThemeProvider>
			</ChakraProvider>
		</TodoProvider>
	)
}

export default App
