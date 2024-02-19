import { Context } from "context/Context";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StMain = styled.main`
  background-color: black;
  width: 650px;
  height: 200px;
  padding: 20px;

  margin: 20px;
  border-radius: 30px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;

  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const StSpan = styled.span`
  color: white;
  font-size: larger;
  font-weight: 800;
`;

const StP = styled.p`
  border: 1px solid white;
  background-color: white;
  border-radius: 10px;
  width: 500px;
  height: 130px;

  padding: 3px;
`;

const StDiv = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-end;
`;

const StImgContainer = styled.div`
  justify-content: flex-start;
  width: 100px;
`;

const StImg = styled.img`
  /* background-color: white; */
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

function LetterItem({ item }) {
  const data = useContext(Context);
  const { letters } = data;

  const { avatar, content, nickname, writedTo } = item;

  const rawData = item.createdAt;
  const formattedData = new Date(rawData).toLocaleDateString("ko-KR", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  const navigate = useNavigate();

  const LetterClickHandler = () => {
    if (item.writedTo === writedTo) {
      navigate(`/${item.writedTo}/${item.id}`);
    }
  };

  return (
    <StMainContainer>
      <StMain onClick={LetterClickHandler} key={item.id} letters={letters}>
        <StImgContainer>
          <StImg src={avatar} alt="프로필 사진" />
        </StImgContainer>
        <StDiv style={{ flexDirection: "column", width: "500px" }}>
          <StDiv style={{ justifyContent: "space-evenly" }}>
            <StSpan>{nickname}</StSpan>
            <StSpan>{formattedData}</StSpan>
          </StDiv>
          <StDiv>
            <StP>{content}</StP>
          </StDiv>
        </StDiv>
      </StMain>
    </StMainContainer>
  );
}

export default LetterItem;
