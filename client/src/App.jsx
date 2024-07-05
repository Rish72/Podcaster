import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/Themes";
import "./index.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";
import { dark } from "@mui/material/styles/createPalette";
import NavBar from "./components/NavBar";

const Container = styled.div`
  background: ${({ theme }) => theme.bgLight};
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 100vh;
  // color : ${({ theme }) => theme.text_primary};
`;
const Frame = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container>
          {menuOpen && (
            <Sidebar
              setMenuOpen={setMenuOpen}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              menuOpen={menuOpen}
            />
          )}

          <Frame>
            <NavBar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
            <h1>PodCaster</h1>
          </Frame>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
