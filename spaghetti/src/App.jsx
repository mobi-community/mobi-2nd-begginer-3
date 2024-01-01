import { RouterProvider } from "react-router-dom";
import "./app.css";
import { worker } from "./__mock__/browser";
import router from "./routes/router";
import DiaLogProvider from "./contexts/DialogProvider";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  worker.start();
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <DiaLogProvider>
        <RouterProvider router={router} />
      </DiaLogProvider>
    </QueryClientProvider>
  );
}

export default App;
