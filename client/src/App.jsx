import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/Themes";
import "./index.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";

const Container = styled.div`
  background: ${({ theme }) => theme.bg};
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 100vh;
  // color : ${({ theme }) => theme.text_primary};
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container>
          <Sidebar />
          <h1>PodCaster</h1>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
