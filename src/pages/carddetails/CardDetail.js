import { useState } from "react";
import { useParams } from "react-router-dom";
import style from "./CardDetail.module.css";
import { FaUndo } from "react-icons/fa";
import ConfidenceBtn from "../../components/confidence-btn/ConfidenceBtn";
import { useDispatch, useSelector } from "react-redux";

const CardDetailPage = () => {
  const dispatch = useDispatch();
  const { questions } = useSelector((state) => state.questions);
  // Displays specific card based on id passed in url
  const { questionId } = useParams();
  // finds the matching id in the questions array prop
  const question = questions.find((question) => question.id == questionId);
  // Card flip logic
  const [isFlipped, setIsFlipped] = useState(false);
  const cardFlipHandler = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };
  // temporary will maybe think about using state management for this
  const levelColor = (level) => {
    switch (level) {
      case 0:
        return "#9D2235";

      case 1:
        return "#AC9F3C";
      case 2:
        return "#006E33";
      default:
        return "gray";
    }
  };
  return (
    <div className={style.cardDetailPage}>
      <div
        class={style.cardDetail_container}
        // style={{ backgroundColor: isFlipped ? "#61dafb" : "white" }}
      >
        <div
          className={style.cardDetail_header}
          style={
            isFlipped
              ? { backgroundColor: levelColor(question.level), color: "white" }
              : { backgroundColor: "#61dafb", color: "black" }
          }
        >
          <p className={style.cardDetail_questionNum}>
            Question Number {question.id}
          </p>
        </div>
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
      <div class={style.confidence_button_container}>
        <ConfidenceBtn type="bad" value="0" questionId={questionId} />
        <ConfidenceBtn type="meh" value="1" questionId={questionId} />
        <ConfidenceBtn type="good" value="2" questionId={questionId} />
      </div>
    </div>
  );
};

export default CardDetailPage;
