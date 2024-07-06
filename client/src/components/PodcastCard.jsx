import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";


const PlayIcon = styled.div`
  padding: 10px;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  align-items: center;
  background: #9000ff !important;
  color: white !important;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  position: absolute !important;
  top: 45%;
  right: 10%;
  display: none;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0 16px 4px #9000ff50 !important;
`;


const Card = styled.div`
  position: relative;
  text-decoration: none;
  background-color: ${({ theme }) => theme.card};
  max-width: 220px;
  heigth: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  border-radius: 6px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    cursor: pointer;
    transform: translateY(-8px);
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.3);
    filter: brightness(1.3);
  }

  &:hover ${PlayIcon}{
  display : flex;
  transition: all 0.4s ease-in-out;

  }
  
`;
const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  position: relative;
`;
const Favorite = styled(IconButton)`
        color : white;
        top : 8px;
        right 6px;
        padding : 6px !important;
        border-radius : 50%;
        z-index :100;
        display : flex;
        background-color: ${({ theme }) => theme.text_secondary};
        color : white !important;
        position : absolute !important;
        backdrop-filter : blur(4px);
        box-shadow: 0 0px 16px 6px #222423 !important;
        
    `;
const CardImg = styled.img`
  object-fit: cover;
  width: 220px;
  height: 140px;
  border-radius: 6px;
  box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.4);
  }
`;
const CartInfo = styled.div`
  display: flex;
  align-items: flex-end;
  font-weight: 450px;
  padding: 14px 0px 0px 0px;
  width: 100%;
`;
const Main = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
`;
const Title = styled.div`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_primary};
`;
const Desc = styled.div`
  verflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 12px;
`;
const CreatorInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
`;
const Creator = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
const CreatorName = styled.div`
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_secondary};
`;
const Views = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.text_secondary};
  width: max-content;
`;

function PodcastCard() {
  return (
    <Card>
      <div>
        <Top>
          <Favorite>
            <FavoriteIcon style={{ width: "16px", height: "16px" }} />
          </Favorite>
          <CardImg src="https://cdn.pixabay.com/photo/2023/03/17/08/50/podcast-7858186_640.png" />
        </Top>

        <CartInfo>
          <Main>
            <Title>The First Podcast</Title>
            <Desc>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
              consequuntur.
            </Desc>
            <CreatorInfo>
              <Creator>
                <Avatar style={{ width: "26px", height: "26px" }}>R</Avatar>
                <CreatorName>Rishabh</CreatorName>
              </Creator>
              <Views>213 Views</Views>
            </CreatorInfo>
          </Main>
        </CartInfo>
      </div>
      <PlayIcon>
        {"video" === "video" ? (
          <PlayArrowIcon style={{ width: "28px", height: "28px" }} />
        ) : (
          <HeadphonesIcon style={{ width: "28px", height: "28px" }} />
        )}
      </PlayIcon>
    </Card>
  );
}

export default PodcastCard;
