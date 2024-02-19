import React from "react";
import styled from "styled-components";
import backgroungImg from "../../assets/images/blackpink_img.webp";

const Stdiv = styled.div`
  background-image: url(${backgroungImg});
  background-size: contain;
  /* background-repeat: no-repeat; */
  background-position: center;
  height: 30rem;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 2rem;
`;
const StNav = styled.nav`
  display: flex;
  flex-direction: row;
  text-align: center;
  gap: 1rem;
`;

const StBtn = styled.button`
  width: 7rem;
  height: 3.5rem;
  border-color: transparent;
  border-radius: 10px;
  background-color: #f7a7bb;
  font-weight: 600;
  font-size: medium;
  color: black;
  box-shadow: 0px 0px 20px black;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    transition: 0.5s;
  }
`;

const moveMemberPage = ["JENNIE", "JISOO", "ROSÉ", "LISA"];

function Nav({ memberBtnClickHandler }) {
  const memberName = (name) => {
    switch (name) {
      case "JENNIE":
        return "JENNIE";
      case "JISOO":
        return "JISOO";
      case "ROSÉ":
        return "ROSÉ";
      case "LISA":
        return "LISA";
      default:
        return;
    }
  };

  return (
    <>
      <Stdiv>
        <StNav>
          {moveMemberPage.map((name) => (
            <StBtn key={name} onClick={() => memberBtnClickHandler(name)}>
              {memberName(name)}
            </StBtn>
          ))}
        </StNav>
      </Stdiv>
    </>
  );
}

export default Nav;
