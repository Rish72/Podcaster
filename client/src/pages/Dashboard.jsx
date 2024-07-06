import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PodcastCard from "../components/PodcastCard";

const DashboardMain = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  heigth: 100%;
  overflow-y: scroll;
  display: flex;
  gap: 20px;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 10px;
  padding: 20px 30px;
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

const Span = styled.span`
  color: ${({ theme }) => theme.text_primary};
  font-size: 16px;
  font-weigth: 400;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Podcast = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding: 18px 6px;

  @media (max-width: 550px) {
    justify-content: center;
  }
`;

function Dashboard() {
  return (
    <DashboardMain>
      <FilterContainer>
        <Topic>
          Most Popular
          <Link
            to={`/showpodcasts/mostpopular`}
            style={{ textDecoration: "none" }}
          >
            <Span>Show All</Span>
          </Link>
        </Topic>
        <Podcast>
          <PodcastCard />
          <PodcastCard />
        </Podcast>
      </FilterContainer>

      {/* COMEDY */}
      <FilterContainer>
        <Topic>
          Comedy
          <Link to={`/showpodcasts/comedy`} style={{ textDecoration: "none" }}>
            <Span>Show All</Span>
          </Link>
        </Topic>
        <Podcast>
          <PodcastCard />
        </Podcast>
      </FilterContainer>

      {/* NEWS */}

      <FilterContainer>
        <Topic>
          News
          <Link to={`/showpodcasts/news`} style={{ textDecoration: "none" }}>
            <Span>Show All</Span>
          </Link>
        </Topic>
        <Podcast>
          <PodcastCard />
          <PodcastCard />
        </Podcast>
      </FilterContainer>
    </DashboardMain>
  );
}

export default Dashboard;
