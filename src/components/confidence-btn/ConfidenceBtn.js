import { useContext } from "react";
import { useSelector } from "react-redux";
import style from "./ConfidenceBtn.module.css";
import { FaSmile, FaMeh, FaFrown } from "react-icons/fa";
import { QuestionContext } from "../../App";

import { changeLevel } from "../../features/questions/questionsSlice";
import { useDispatch } from "react-redux";

const ConfidenceBtn = ({ type, value, questionId }) => {
  const dispatch = useDispatch();
  const { questions } = useSelector((state) => state.questions);
  const buttonHandler = () => {
    dispatch(changeLevel({ questionId, value }));
  };
  return (
    <button className={style.confidence_btn} onClick={buttonHandler}>
      {type === "bad" && <FaFrown />}
      {type === "meh" && <FaMeh />}
      {type === "good" && <FaSmile />}
    </button>
  );
};

export default ConfidenceBtn;
