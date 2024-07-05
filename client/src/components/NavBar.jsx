import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { PersonRounded } from "@mui/icons-material";

const NavBarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  // width: 10%;
  padding: 16px 20px;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  background-color: ${({ theme }) => theme.bg};

  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.7px);
  -webkit-backdrop-filter: blur(5.7px);

  @media(max-width : 750px){
    padding : 18px 20px;
  }
`;

const BtnDiv = styled.button`
  font-size: 14px;
  cursor: pointer;
  display: flex;
  text-decoration: none;
  background: none;
  color: #fff;
  align-items: center;
  border-radius: 12px;
  padding: 8px 10px;
`;

function NavBar({ setMenuOpen, menuOpen }) {
  return (
    <NavBarDiv>
        <MenuIcon  onClick={() => setMenuOpen(!menuOpen)}/>
      <BtnDiv>
        <PersonRounded />
        Login
      </BtnDiv>
    </NavBarDiv>
  );
}

export default NavBar;
