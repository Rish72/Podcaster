import React from "react";
import styled from "styled-components";
import {
  HomeRounded,
  CloseRounded,
  SearchRounded,
  FavoriteRounded,
  UploadRounded,
  LightModeRounded,
  LogoutRounded,
  DarkModeRounded,
} from "@mui/icons-material";
import LogoImg from "../Images/Logo.png";
import { Link } from "react-router-dom";



const menuItems = [
    {
      link: "/",
      name: "Dashboard",
      icon: <HomeRounded />,
    },
    {
      link: "/search",
      name: "Search",
      icon: <SearchRounded />,
    },
    {
      link: "/favourites",
      name: "Favourites",
      icon: <FavoriteRounded />,
    },
  ];
  




const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5;
  height: 100vh;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};

    @media(max-width: 1100px) {
    position : fixed;
    z-index : 1000;
    width : 100%;
    max-width : 250px;
    left: ${({ menuOpen }) => (menuOpen ? "0" : "-100% ")};
    transition : 0.3s ease-in-out;
    }
`;
const Logo = styled.div`
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-weight: bold;
  font-size: 20px;
  margin: 16px 0;
`;

const Flex = styled.div`
padding : 0 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Close = styled.div`
  display: none;
  @media (max-width: 1100px) {
    display: block;
  }
`;
const Element = styled.div`
  padding: 4px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};
  &:hover {
    background-color: ${({ theme }) => theme.text_secondary};
  }
`;
const NavText = styled.div`
  padding: 12px 0px;
  
`;
const Image = styled.img`
  height: 40px;
`;

const HR =  styled.hr`
  height : 1px ;
   background-color: ${({ theme }) => theme.text_secondary+50};
   margin : 10px 0px;

`;

function Sidebar({menuOpen, setMenuOpen,darkMode, setDarkMode}) {
  const button = [
    {
      fun: () => console.log("Triggered Upload"),
      name: "Upload",
      icon: <UploadRounded />,
    },
    {
      fun: () => setDarkMode(!darkMode),
      name: darkMode ? "Light Mode" : "Dark Mode",
      icon: darkMode ? <LightModeRounded /> : <DarkModeRounded/>,
    },
    {
      fun: () => console.log("Triggered logout"),
      name: "Log Out",
      icon: <LogoutRounded />,
    },
  ];



  return (
    <MenuContainer menuOpen={menuOpen}>
      <Flex> 
        <Logo>
          <Image src={LogoImg} />
          PodCaster
        </Logo>
        <Close>
          <CloseRounded onClick={() => setMenuOpen(false)}/> {/*in Mui */}
        </Close>
      </Flex>

      {menuItems.map((item,i) => (
        <Link key ={i} to={item.link} style={{textDecoration : "none"}}>
          <Element>
           {item.icon}
            <NavText>{item.name}</NavText>
          </Element>
        </Link>
      ))}
      <HR/>
      {button.map((item,i) => (
          <Element key ={i} onClick={item.fun}>
           {item.icon}
            <NavText>{item.name}</NavText>
          </Element>
      ))}
    </MenuContainer>
  );
}

export default Sidebar;
