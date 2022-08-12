import { Link } from "react-router-dom";
import style from "./AllCards.module.css";
import HorizontalCard from "../../components/horizontal-card/HorizontalCard";

const AllCardsPage = ({ questions }) => {
  return (
    <div className={style.allcards_page}>
      <ul className={style.allcards_list}>
        {questions.map((questionData) => (
          <HorizontalCard
            key={questionData.id}
            id={questionData.id}
            question={questionData.question}
            level={questionData.level}
          />
        ))}
      </ul>
    </div>
  );
};

export default AllCardsPage;
