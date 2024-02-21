import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Context = createContext(null);

const LetterProvider = ({ children }) => {
  const [letters, setLetters] = useState(null);

  // db.json 데이터 불러오기 (GET)
  const fetchLetters = async () => {
    const { data } = await axios.get("http://localhost:4000/letters");
    console.log("data", data);
    setLetters(data);
  };

  const navigate = useNavigate();

  // letter 삭제하기 (DELETE)
  const deleteBtnClickHandler = async (id) => {
    axios.delete(`http://localhost:4000/letters/${id}`);
    alert("해당 팬레터가 삭제되었습니다");
    navigate(`/`);
    setLetters(letters.filter((letter) => letter.id !== id));
  };

  // letter 수정하기 (UPDATE)
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

  useEffect(() => {
    fetchLetters();
  }, []);

  return (
    <Context.Provider
      value={{
        letters,
        setLetters,
        updateBtn,
        updatedLetters,
        deleteBtnClickHandler,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default LetterProvider;
