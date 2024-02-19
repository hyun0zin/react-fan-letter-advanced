import React from "react";
import styled from "styled-components";
import youtubeLogo from "../../assets/images/youtubeLogo.png";
import { ReactComponent as githubLogo } from "../../assets/images/github.svg";
import tistoryLogo from "../../assets/images/tistory-logo.png";

const StFooter = styled.footer`
  background-color: black;
  color: white;
  height: 5rem;

  position: sticky;
  bottom: 0;
`;

const StDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StImgLink = styled.a`
  display: block;
`;

const StImgYoutube = styled.img.attrs({
  src: youtubeLogo,
  alt: "유튜브 로고",
})`
  height: 25px;
  cursor: pointer;
`;

const StImgGithub = styled(githubLogo)`
  height: 75px;
  cursor: pointer;
`;

const StImgTistory = styled.img.attrs({
  src: tistoryLogo,
  alt: "티스토리 로고",
})`
  height: 45px;
  cursor: pointer;
  border-radius: 50%;
`;

function Footer() {
  return (
    <>
      <StFooter>
        <StDiv>
          <StImgLink href="http://www.youtube.com/@BLACKPINK">
            <StImgYoutube />
          </StImgLink>
          <StImgLink href="https://github.com/hyun0zin">
            <StImgGithub />
          </StImgLink>
          <StImgLink href="https://hyun0zinlog.tistory.com/">
            <StImgTistory />
          </StImgLink>
        </StDiv>
      </StFooter>
    </>
  );
}

export default Footer;
