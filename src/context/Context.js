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

  return (
    <Context.Provider
      value={{
        letters,
        setLetters,
        removeBtn,
        updateBtn,
        updatedLetters,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default LetterProvider;
