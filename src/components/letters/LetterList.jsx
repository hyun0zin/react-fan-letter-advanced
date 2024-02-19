import { useContext } from "react";
import LetterItem from "./LetterItem";
import { Context } from "context/Context";

function LetterList({ writedTo }) {
  const data = useContext(Context);
  const { letters } = data;

  const filteredLetters = letters.filter((letter) =>
    writedTo ? letter.writedTo === writedTo : true
  );

  return (
    <div>
      {filteredLetters.map((item) => {
        return <LetterItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default LetterList;
