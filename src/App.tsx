import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./helpers/theme";
import Theme from "./interface/theme";
import Routes from "./routes";


const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    body{
      font-family: Arial, Helvetica, sans-serif;
      display: flex;
      height: 100vh;
      width: 100vw;
      background-color: ${({ theme }: Theme) => theme?.colors.bg};
      overflow: hidden;
    }
    #root{
      flex: 1 !important;
      display: flex;
    }
`


const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Routes/>
    </ThemeProvider>
  );
};

export default App;
