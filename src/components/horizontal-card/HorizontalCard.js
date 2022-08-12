import style from "./HorizontalCard.module.css";
import { Link } from "react-router-dom";
import { FaSmile, FaMeh, FaFrown } from "react-icons/fa";

const HorizontalCard = ({ question, id, level }) => {
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
    <li className={style.allcards_item}>
      <div className={style.allcards_question_container}>
        <h2 className={style.allcards_question}>
          <Link to={`/cards/${id}`}>{question}</Link>
        </h2>
      </div>
      <div
        className={style.allcards_level_container}
        style={{ backgroundColor: levelColor(level) }}
      >
        <h4 className={style.allcards_level_text}>Confidence</h4>
        {level === 0 && <FaFrown />}
        {level === 1 && <FaMeh />}

        {level === 2 && <FaSmile />}
      </div>
    </li>
  );
};

export default HorizontalCard;
