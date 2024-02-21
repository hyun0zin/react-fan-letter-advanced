import MemberLetters from "components/letters/MemberLetters";
import { Context } from "context/Context";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const StDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StDiv = styled.div`
  background-image: url(${(props) => props.imageurl});
  width: 30rem;
  height: 40rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

function DetailPage() {
  const { letters } = useContext(Context);

  const params = useParams();

  //멤버별 imageUrl
  const memberImagesData = {
    JENNIE:
      "https://i.pinimg.com/736x/9a/1c/b8/9a1cb83f3c42b75b55caffd76c9b5b96.jpg",
    JISOO:
      "https://i.pinimg.com/564x/7d/85/27/7d8527048832709dea1c4c5a04123921.jpg",
    ROSÉ: "https://i.pinimg.com/564x/f5/4d/82/f54d828a86423aff30473d263ea9742f.jpg",
    LISA: "https://i.pinimg.com/564x/0b/88/da/0b88da206ad13b0974b783cb6f6c6bcc.jpg",
  };

  //find
  const foundData = letters?.find((item) => item.id === params.id);

  const imageurl = memberImagesData[foundData.writedTo];

  return (
    <StDivContainer>
      <StDiv imageurl={imageurl}></StDiv>
      <MemberLetters foundData={foundData} />
    </StDivContainer>
  );
}

export default DetailPage;
