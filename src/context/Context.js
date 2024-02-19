import { createContext, useState } from "react";
import fakeData from "../assets/json/fakeData.json";

export const Context = createContext(null);

const LetterProvider = ({ children }) => {
  const [letters, setLetters] = useState(fakeData);

  // letter 삭제하기 버튼
  const removeBtn = (id) => {
    const removeLetters = letters.filter((letter) => letter.id !== id);

    setLetters(removeLetters);
  };

  // letter 수정하기 버튼
  const updateBtn = (id) => {
    const updatedLetters = letters.map((letter) => {
      if (letter.id === id) {
        return {
          ...letter,
          isUpdate: !letter.isUpdate,
          content: letter.content,
        };
      }
      return letter;
    });
    setLetters(updatedLetters);
  };

  const updatedLetters = (updatedLetters) => {
    setLetters(updatedLetters);
  };

  //멤버별 imageUrl
  const memberImagesData = {
    JENNIE:
      "https://i.pinimg.com/736x/9a/1c/b8/9a1cb83f3c42b75b55caffd76c9b5b96.jpg",
    JISOO:
      "https://i.pinimg.com/564x/7d/85/27/7d8527048832709dea1c4c5a04123921.jpg",
    ROSÉ: "https://i.pinimg.com/564x/f5/4d/82/f54d828a86423aff30473d263ea9742f.jpg",
    LISA: "https://i.pinimg.com/564x/0b/88/da/0b88da206ad13b0974b783cb6f6c6bcc.jpg",
  };
  return (
    <Context.Provider
      value={{
        letters,
        setLetters,
        removeBtn,
        updateBtn,
        updatedLetters,
        memberImagesData,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default LetterProvider;
