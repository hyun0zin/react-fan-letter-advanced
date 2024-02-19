import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BlackPinkLogo from "../../assets/images/logo.png";

const StHead = styled.header`
  background-color: black;

  height: 5rem;

  /* position: sticky;
  top: 0; */

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StImg = styled.img.attrs({
  src: BlackPinkLogo,
  alt: "유튜브 로고",
})`
  height: 35px;
  cursor: pointer;
`;

function Header() {
  const navigate = useNavigate();
  const logeClickEvent = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <StHead>
        <StImg onClick={logeClickEvent} />
      </StHead>
    </>
  );
}

export default Header;
