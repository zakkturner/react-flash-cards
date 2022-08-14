import { useContext } from "react";

import style from "./ConfidenceBtn.module.css";
import { FaSmile, FaMeh, FaFrown } from "react-icons/fa";
import { QuestionContext } from "../../App";
const ConfidenceBtn = ({ type }) => {
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
