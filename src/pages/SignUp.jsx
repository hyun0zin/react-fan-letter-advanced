import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function SignUp() {
  return (
    <SignupContainer>
      <SignUpBox>
        <Text>회원가입</Text>
        <InputContainer>
          <StInput type="text" placeholder="아이디 (4~10글자)" />
          <br />
          <StInput type="text" placeholder="비밀번호 (4~15글자)" />
          <br />
          <StInput type="text" placeholder="닉네임 (1~10글자)" />
        </InputContainer>

        <div>
          <SignUpBtn>회원가입</SignUpBtn>
        </div>
        <Link to="/login">
          <Text onClick={() => {}} style={{ cursor: "pointer" }}>
            로그인
          </Text>
        </Link>
      </SignUpBox>
    </SignupContainer>
  );
}

export default SignUp;

const SignupContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SignUpBox = styled.div`
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

const SignUpBtn = styled.button`
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
const LoginBtn = styled.p`
  color: white;
`;
