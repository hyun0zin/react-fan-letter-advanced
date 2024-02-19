import React, { useContext, useState } from "react";
import Nav from "../components/layout/Nav";
import LetterForm from "../components/letters/LetterForm";
import LetterList from "../components/letters/LetterList";
import { Context } from "context/Context";

function MainPage() {
  const data = useContext(Context);
  const { setLetters } = data;

  // console.log(data);

  const [writedTo, setWritedTo] = useState("");

  // 카드 추가하기
  const addLetterSubmit = (newLetter) => {
    setLetters((letters) => [newLetter, ...letters]);
  };

  // console.log(letters);

  // 멤버 이름 누르면 해당 카드만 filtering 되어 뜨게 하기
  const memberBtnClickHandler = (writedTo) => {
    setWritedTo(writedTo);
  };

  return (
    <>
      <Nav memberBtnClickHandler={memberBtnClickHandler} />
      <LetterForm addLetterSubmit={addLetterSubmit} />
      <LetterList writedTo={writedTo} />
    </>
  );
}

export default MainPage;
