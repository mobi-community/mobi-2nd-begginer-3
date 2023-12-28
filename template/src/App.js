import { ThemeProvider } from "styled-components";
import "./App.css";
import router from "./router/router";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
