//최상위 파일
import { ContainerProvider } from "./ContainerContext";
import HomePage from "./HomePage";

function App() {
  return (
    <ContainerProvider>
      <HomePage />
    </ContainerProvider>
  );
}
