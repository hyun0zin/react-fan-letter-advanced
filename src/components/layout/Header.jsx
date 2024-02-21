import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import BlackPinkLogo from "../../assets/images/logo.png";

const HeaderContainer = styled.header`
  background-color: black;
  height: 5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 2rem;

  position: relative;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Btn = styled.button`
  border-color: transparent;
  background-color: transparent;
  color: white;
  font-size: medium;
  cursor: pointer;
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
  const logoClickEvent = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <StImg onClick={logoClickEvent} />
      </LogoContainer>
      <BtnContainer>
        <Link to="/mypage">
          <Btn>마이페이지</Btn>
        </Link>
        <Btn>로그아웃</Btn>
      </BtnContainer>
    </HeaderContainer>
  );
}

export default Header;
