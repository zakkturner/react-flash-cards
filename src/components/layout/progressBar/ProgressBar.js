import React, { useEffect, useState } from "react";
import style from "./ProgressBar.module.css";

const ProgressBar = ({ questions }) => {
  const [percentages, setPercentages] = useState({
    startPercentage: null,
    badPercentage: null,
    mehPercentage: null,
    goodPercentage: null,
  });

  let counts = {};
  useEffect(() => {
    // groupQuestions(questions);
    calculatePercentages(questions);
  }, []);

  //   Groups amount of occurences the confidence level occurs
  const calculatePercentages = (questions) => {
    questions.forEach((question) => {
      if (question.level === 0) {
        counts[question.level] = counts[question.level]
          ? counts[question.level] + 1
          : 1;
      } else if (question.level === 1) {
        counts[question.level] = counts[question.level]
          ? counts[question.level] + 1
          : 1;
      } else if (question.level === 2) {
        counts[question.level] = counts[question.level]
          ? counts[question.level] + 1
          : 1;
      } else {
        counts[3] = counts[3] ? counts[3] + 1 : 1;
      }
    });
    if (!counts[3]) {
      counts = { ...counts, 3: 0 };
    }
    console.log(counts);
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
