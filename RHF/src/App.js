import { RouterProvider } from "react-router-dom";
import "./App.css";
import ControllerVersion from "./components/ControllerVersion";
import { router } from "./router/routing";
function App() {
  return <RouterProvider router={router} />;
}

export default App;
