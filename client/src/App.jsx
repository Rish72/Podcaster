import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/Themes";
import "./index.css";

const Container = styled.div`
  background : ${ ({theme}) => theme.bg };
  width : 100%;
  height : 100vh;
  color : ${({theme} ) => theme.text_primary};
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode? darkTheme : lightTheme}>
      <Container>
        <h1>PodCaster</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
