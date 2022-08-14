import { useContext } from "react";

// import { ConfidenceContext } from "../../App";
import style from "./ConfidenceBtn.module.css";
import { FaSmile, FaMeh, FaFrown, FaQuestion } from "react-icons/fa";
import { QuestionContext } from "../../App";
const ConfidenceBtn = ({ type }) => {
  // const changeConfidence = useContext(ConfidenceContext);
  // console.log(changeConfidence.value);
  const questions = useContext(QuestionContext);
  console.log(questions);
  return (
    <button className={style.confidence_btn}>
      {type === "bad" && <FaFrown />}
      {type === "meh" && <FaMeh />}
      {type === "good" && <FaSmile />}
    </button>
  );
};

export default ConfidenceBtn;
