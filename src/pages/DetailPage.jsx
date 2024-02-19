import MemberLetters from "components/letters/MemberLetters";
import { Context } from "context/Context";
import { defaultFormat } from "moment";
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
  background-image: url(${(props) => props.imageUrl});
  width: 30rem;
  height: 40rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

function DetailPage() {
  const { letters, memberImagesData } = useContext(Context);

  const params = useParams();

  //find
  const foundData = letters.find((item) => item.id === params.id);

  const imageUrl = memberImagesData[foundData.writedTo];

  return (
    <StDivContainer>
      <StDiv imageUrl={imageUrl}></StDiv>
      <MemberLetters foundData={foundData} />
    </StDivContainer>
  );
}

export default DetailPage;
