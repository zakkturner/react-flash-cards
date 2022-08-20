import React, { useEffect, useState } from "react";
import style from "./ProgressBar.module.css";

const ProgressBar = ({ questions }) => {
  const [percentages, setPercentages] = useState({
    startPercentage: null,
    badPercentage: null,
    mehPercentage: null,
    goodPercentage: null,
  });

  useEffect(() => {
    // groupQuestions(questions);
    calculatePercentages(questions);
  }, []);

  //   Calculates percentages
  const calculatePercentages = (questions) => {
    let counts = {};
    questions.forEach((question) => {
      counts[question.level] = counts[question.level]
        ? counts[question.level] + 1
        : 1;

      if (question.level === null) {
        /* if this is the first null question.level 
        add counts[3] to object and make its value one else add 1 to counts[1]*/
        counts[3] = counts[3] ? counts[3] + 1 : 1;
      }
    });
    if (!counts[3]) {
      counts = { ...counts, 3: 0 };
    }

    setPercentages({
      startPercentage: (counts[3] / questions.length) * 100,
      badPercentage: (counts[0] / questions.length) * 100,
      mehPercentage: (counts[1] / questions.length) * 100,
      goodPercentage: (counts[2] / questions.length) * 100,
    });
  };

  return (
    <div className={style.progress_bar}>
      <div
        className={style.progress_start}
        style={{ width: `${percentages.startPercentage}%` }}
      ></div>
      <div
        className={style.progress_bad}
        style={{ width: `${percentages.badPercentage}%` }}
      ></div>
      <div
        className={style.progress_meh}
        style={{ width: `${percentages.mehPercentage}%` }}
      ></div>
      <div
        className={style.progress_good}
        style={{ width: `${percentages.goodPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
