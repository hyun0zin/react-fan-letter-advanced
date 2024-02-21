import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Login() {
  return (
    <LoginContainer>
      <LoginBox>
        <Text>로그인</Text>
        <InputContainer>
          <StInput type="text" placeholder="아이디 (4~10글자)" />
          <br />
          <StInput type="text" placeholder="비밀번호 (4~15글자)" />
        </InputContainer>

        <div>
          <LoginBtn>로그인</LoginBtn>
        </div>
        <Link to="/signup">
          <Text onClick={() => {}} style={{ cursor: "pointer" }}>
            회원가입
          </Text>
        </Link>
      </LoginBox>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoginBox = styled.div`
  width: 500px;
  height: 500px;

  background-color: black;
  border-radius: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  text-align: center;
  color: white;
  padding: 20px;
  font-size: larger;
  font-weight: 800;
`;

const InputContainer = styled.div``;

const StInput = styled.input`
  background-color: white;
  width: 400px;
  height: 50px;

  border-radius: 10px;
  margin: 5px;
`;

const LoginBtn = styled.button`
  width: 400px;
  height: 3rem;
  margin: 5px;

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
const SignUpBtn = styled.p`
  color: white;
`;
