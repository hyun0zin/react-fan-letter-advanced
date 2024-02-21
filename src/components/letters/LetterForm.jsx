import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "moment/locale/ko";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { Context } from "context/Context";

const StMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const StForm = styled.form`
  background-color: black;
  width: 650px;
  height: 330px;
  padding: 20px;
  margin: 20px;
  border-radius: 30px;
`;

const StSpan = styled.span`
  color: white;
  font-size: larger;
  font-weight: 800;
`;

const StInput = styled.input`
  border-color: transparent;
  border-radius: 10px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const StDiv = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-around;
`;

const StSelect = styled.select`
  width: 150px;
  border-radius: 10px;
  background-color: white;
  text-align: center;
  font-weight: 600;
`;

const StBtn = styled.button`
  width: 10rem;
  height: 3rem;
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
function LetterForm() {
  const { letters, setLetters } = useContext(Context);

  // 실시간 시간 불러오기
  const date = Date.now();

  // 멤버 선택하기
  const memberList = ["JENNIE", "JISOO", "ROSÉ", "LISA"];
  const [selectedMember, setSelectedMember] = useState("JENNIE");

  const onChangeHandler = (event) => {
    const selectedMember = event.target.value;
    setSelectedMember(selectedMember);
  };

  // letter 추가하기 (POST)
  const submitHandler = async (event) => {
    event.preventDefault();

    // console.log(event.target.nickname.value);
    const nickname = event.target.nickname.value;
    const content = event.target.content.value;

    //빈 input 추가 막기
    if (!nickname.trim() && content.trim()) {
      alert("닉네임을 입력해주세요.");
      return;
    } else if (nickname.trim() && !content.trim()) {
      alert("내용을 입력해주세요.");
      return;
    } else if (!nickname.trim() && !content.trim()) {
      alert("닉네임과 내용을 입력해주세요.");
      return;
    }

    // input에 들어있는 값(state)을 DB에 저장
    const newLetter = {
      createdAt: date,
      nickname,
      avatar:
        "https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png",
      content,
      writedTo: selectedMember,
      id: uuidv4(),
      isUpdate: false,
    };
    axios.post("http://localhost:4000/letters", newLetter);
    setLetters([...letters, newLetter]);
    event.target.reset();
  };

  // 각각 input에 focus 옮겨가기
  // useRef 적용해보기
  const nicknameRef = useRef("");
  const contentRef = useRef("");

  const [nickname, setNickname] = useState("");

  useEffect(() => {
    nicknameRef.current.focus();
  }, []);

  useEffect(() => {
    if (nickname.length >= 20) {
      contentRef.current.focus();
    }
  }, [nickname]);

  return (
    <StMainContainer>
      <StForm onSubmit={submitHandler}>
        <StDiv>
          <StSpan>닉네임</StSpan>
          <StInput
            type="text"
            placeholder="최대 20글자까지 작성할 수 있습니다."
            name="nickname"
            ref={nicknameRef}
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value);
            }}
            width="320px"
            height="30px"
          />
          <StSelect onChange={onChangeHandler} value={selectedMember}>
            {memberList.map((name) => {
              return (
                <option key={name} value={name}>
                  {name}
                </option>
              );
            })}
          </StSelect>
        </StDiv>
        <StDiv>
          <StSpan>내용</StSpan>
          <StInput
            type="text"
            placeholder="최대 100글자 이내로 입력해주세요."
            name="content"
            ref={contentRef}
            width="500px"
            height="200px"
          />
        </StDiv>
        <StDiv style={{ justifyContent: "flex-end", marginRight: "2rem" }}>
          <StBtn>팬레터 등록하기</StBtn>
        </StDiv>
      </StForm>
    </StMainContainer>
  );
}

export default LetterForm;
