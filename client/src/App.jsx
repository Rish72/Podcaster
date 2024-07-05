import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/Themes";
import "./index.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import  Dashboard  from "./pages/Dashboard";
import  Search  from "./pages/Search";
import  Favourites  from "./pages/Favourites";
import  Profile  from "./pages/Profile";
import  Podcast  from "./pages/Podcast";
import  PodcastDetails  from "./pages/PodcastDetails";

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
            <Routes>
              <Route path="/" exact element={<Dashboard/>}/>
              <Route path="/search" exact element={<Search />}/>
              <Route path="/favourites" exact element={< Favourites/>}/>
              <Route path="/profile" exact element={< Profile/>}/>
              <Route path="/podcast/:type" exact element={< Podcast/>}/>
              <Route path="/showpodcast/:id" exact element={< PodcastDetails/>}/>
            </Routes>
          </Frame>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
