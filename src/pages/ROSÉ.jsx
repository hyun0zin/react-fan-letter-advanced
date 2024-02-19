import DetailPage from "components/DetailPage";
import React, { useContext } from "react";
import styled from "styled-components";

import { useParams } from "react-router-dom";
import { Context } from "context/Context";

const StDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StDiv = styled.div`
  background-image: url("https://i.pinimg.com/564x/f5/4d/82/f54d828a86423aff30473d263ea9742f.jpg");
  width: 30rem;
  height: 40rem;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
function ROSÉ() {
  const data = useContext(Context);
  const { letters } = data;

  const params = useParams();

  //find
  const foundData = letters.find((item) => {
    return item.id === params.id;
  });
  return (
    <StDivContainer>
      <StDiv></StDiv>
      <DetailPage foundData={foundData} />
    </StDivContainer>
  );
}

export default ROSÉ;
