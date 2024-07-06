import React from "react";
import styled from "styled-components";
import PodcastCard from "../components/PodcastCard";

const Container = styled.div`
  padding:20px 30px  ;
  padding-bottom : 200px;
  height : 100%;
  overflow-y: scroll;
  display: flex;
  gap: 20px;
  flex-direction: column;
`;
const Topic = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  font-weigth: 500;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const FavouriteCotainer =styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding: 18px 6px;

  @media (max-width: 550px) {
    justify-content: center;
  }
`;

function Favourites() {
  return (
    <Container>
      <Topic>Favourites</Topic>
      <FavouriteCotainer>
        <PodcastCard />
        <PodcastCard />
      </FavouriteCotainer>
    </Container>
  );
}

export default Favourites;
