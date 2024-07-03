import React from "react";
import styled from "styled-components";
import { HomeRounded, CloseRounded } from "@mui/icons-material";
import LogoImg from "../Images/Logo.png";
import { Link } from "react-router-dom";
const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5;
  height: 100vh;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};

  //   @media(max-width: 1100px) {
  //   position : fixed;
  //   z-index : 1000;
  //   width : 100%;
  //   max-width : 250px;
  //   left: ${({ setMenuOpen }) => (setMenuOpen ? "0" : "-100% ")};
  //   transition : 0.3s ease-in-out;
  //   }
`;
const Logo = styled.div`
  color: ${({ theme }) => theme.primary};
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-weight: bold;
  font-size: 20px;
  margin: 16px 0;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
  width: 100%;
  color: ${({ theme }) => theme.text_primary};
  &:hover {
    background-color: ${({ theme }) => theme.text_secondary};
  }
`;
const NavText = styled.div`
  paddin: 12px 0px;
`;
const Image = styled.img`
  height: 40px;
`;

function Sidebar() {
  return (
    <MenuContainer>
      <Flex>
        <Logo>
          <Image src={LogoImg} />
          PodStream
        </Logo>
        <Close>
          <CloseRounded /> {/*in Mui */}
        </Close>
      </Flex>
      <Link to="/">
        <Element>
          <HomeRounded />
          <NavText>Dashboard</NavText>
        </Element>
      </Link>
    </MenuContainer>
  );
}

export default Sidebar;
