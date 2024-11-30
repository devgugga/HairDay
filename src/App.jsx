import { GlobalStyle } from "./style/global.js";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme.js";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <h1>Hair Day</h1>
      </ThemeProvider>
    </>
  );
}

export default App;
