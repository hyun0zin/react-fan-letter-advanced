import { Context } from "context/Context";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import letterApi from "../../api/letterApi";

const StMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StMain = styled.main`
  background-color: black;
  width: 500px;
  height: 500px;
  padding: 20px;

  margin: 20px;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StTopP = styled.p`
  background-color: #f7a7bb;
  color: white;
  border-radius: 10px;
  width: 300px;
  height: 50px;
  font-size: larger;
  font-weight: 800;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StSpan = styled.span`
  color: white;
  font-size: larger;
  font-weight: 800;
`;

const StP = styled.p`
  background-color: white;
  border-radius: 10px;
  width: 500px;
  height: 250px;
`;
const StTextarea = styled.textarea`
  background-color: white;
  border-radius: 10px;
  width: 500px;
  height: 250px;
`;

const StDiv = styled.div`
  padding: 10px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StImg = styled.img`
  /* background-color: white; */
  border-radius: 50%;
  width: 75px;
  height: 75px;
`;

const StBtn = styled.button`
  width: 8rem;
  height: 3.5rem;
  border-color: transparent;
  border-radius: 10px;
  background-color: #f7a7bb;
  font-weight: 800;
  font-size: large;
  color: white;
  box-shadow: 0px 0px 20px black;

  &:hover {
    background-color: white;
    color: black;
    transition: 0.5s;
  }
`;
function MemberLetters({ foundData }) {
  const data = useContext(Context);
  const navigate = useNavigate();

  const { letters, setLetters, deleteBtnClickHandler } = data;
  const { writedTo, avatar, nickname, formattedData, content, id } = foundData;

  // letter 수정하기 (UPDATE)
  const [isUpdateContent, setIsUpdateContent] = useState(content);
  const [isUpdate, setIsUpdate] = useState(false);

  // 수정하기 <-> 수정 완료 버튼 설정
  const updateBtnClickHandler = async () => {
    if (!isUpdate) {
      setIsUpdate(true);
    } else {
      await letterApi.patch(`/letters/${id}`, {
        content: isUpdateContent,
      });
      // updateBtn(id);
      const updatedLetter = await letterApi.get(`/letters/${id}`);
      setLetters(
        letters.map((letter) => {
          if (letter.id === id) {
            return updatedLetter.data;
          } else {
            return letter;
          }
        })
      );
      setIsUpdate(false);
      alert("해당 팬레터가 수정되었습니다");
      navigate(`/`);
    }
  };

  // 수정하기 눌렀을 때, textarea 나옴 / 다시 수정 완료 시 p태그로 돌아가기.
  const updateContent = () => {
    if (!isUpdate) {
      return <StP>{isUpdateContent}</StP>;
    } else {
      return (
        <StTextarea
          value={isUpdateContent}
          onChange={(e) => setIsUpdateContent(e.target.value)}
        />
      );
    }
  };

  // DetailPage로 들어왔을 때, 화면 위치 상단으로 고정
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <StMainContainer>
        <StMain>
          <StTopP>To.{writedTo}</StTopP>
          <StDiv
            style={{ flexDirection: "row", width: "500px", height: "50px" }}
          >
            <StImg src={avatar} alt="프로필 사진" />
            <StSpan>{nickname}</StSpan>
            <StSpan>{formattedData}</StSpan>
          </StDiv>
          <StDiv>{updateContent()}</StDiv>
          <StDiv style={{ gap: "2rem" }}>
            <StBtn onClick={updateBtnClickHandler}>
              {isUpdate ? "수정 완료" : "수정하기"}
            </StBtn>
            <StBtn onClick={() => deleteBtnClickHandler(id)}>삭제하기</StBtn>
          </StDiv>
        </StMain>
      </StMainContainer>
    </>
  );
}

export default MemberLetters;
