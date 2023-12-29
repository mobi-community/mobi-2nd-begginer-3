// import { React } from "react";

// //context용 파일 분리
// import { createContext, useState } from "react";

// const ThemeContext = createContext();

// export function ThemeContextProvider({ children }) {
//   const [mode, setMode] = useState("light");
//   return (
//     <ThemeContext.Provider value={{ mode, setMode }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export default ThemeContextProvider;

// //App.js
// const App = () => {
//   return (
//     <ThemeContextProvider>
//       <Toolbar />
//     </ThemeContextProvider>
//   );
// };

// //Toolbar
// import { useContext } from "react";
// import { ThemeContext } from "styled-components";

// function Toolbar() {
//   const value = useContext(ThemeContext);

//   console.log(value); //dark
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   );
// }

// class ThemedButton extends React.Component {
//   static contextType = ThemeContext;
//   render() {
//     return <Button theme={this.context} />;
//   }
// }

// const darkModeButton = new ThemedButton();
