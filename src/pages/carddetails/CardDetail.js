import { useState } from "react";
import { useParams } from "react-router-dom";
import style from "./CardDetail.module.css";
import { FaUndo } from "react-icons/fa";
const CardDetailPage = ({ questions }) => {
  // Displays specific card based on id passed in url
  const { questionId } = useParams();
  // finds the matching id in the questions array prop
  const question = questions.find((question) => question.id == questionId);
  const [isFlipped, setIsFlipped] = useState(false);
  const cardFlipHandler = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };
  return (
    <div className={style.cardDetailPage}>
      <div class={style.cardDetail_container}>
        <div className={style.cardDetail_text_container}>
          <h1 className={style.cardDetail_text}>
            {!isFlipped ? question.question : question.answer}
          </h1>
        </div>
        <div className={style.cardDetail_flip_container}>
          <button
            className={style.cardDetail_flipbtn}
            onClick={cardFlipHandler}
          >
            <FaUndo />
          </button>
        </div>
      </div>
      {/* {question.question} */}
    </div>
  );
};

export default CardDetailPage;
