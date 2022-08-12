import { Link } from "react-router-dom";
import style from "./AllCards.module.css";
import HorizontalCard from "../../components/horizontal-card/HorizontalCard";

const AllCardsPage = ({ questions }) => {
  console.log(questions[0].question);
  return (
    <div className={style.allcards_page}>
      <ul className={style.allcards_list}>
        {questions.map((questionData) => (
          <HorizontalCard
            id={questionData.id}
            question={questionData.question}
          />
        ))}
      </ul>
    </div>
  );
};

export default AllCardsPage;
