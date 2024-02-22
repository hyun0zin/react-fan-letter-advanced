import { createContext, useEffect, useState } from "react";
import letterApi from "../api/letterApi";
import { useNavigate } from "react-router-dom";

export const Context = createContext(null);

const LetterProvider = ({ children }) => {
  const [letters, setLetters] = useState(null);

  // db.json 데이터 불러오기 (GET)
  const fetchLetters = async () => {
    const { data } = await letterApi.get(`/letters`);
    console.log("data", data);
    setLetters(data);
  };

  const navigate = useNavigate();

  // letter 삭제하기 (DELETE)
  const deleteBtnClickHandler = async (id) => {
    letterApi.delete(`/letters/${id}`);
    alert("해당 팬레터가 삭제되었습니다");
    navigate(`/`);
    setLetters(letters.filter((letter) => letter.id !== id));
  };

  useEffect(() => {
    fetchLetters();
  }, []);

  return (
    <Context.Provider
      value={{
        letters,
        setLetters,
        deleteBtnClickHandler,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default LetterProvider;
