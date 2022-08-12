import style from "./HorizontalCard.module.css";
import { Link } from "react-router-dom";

const HorizontalCard = ({ question, id }) => {
  return (
    <li className={style.allcards_item}>
      <div className={style.allcards_question_container}>
        <h2 className={style.allcards_question}>
          <Link to={`/cards/${id}`}>{question}</Link>
        </h2>
      </div>
    </li>
  );
};

export default HorizontalCard;
