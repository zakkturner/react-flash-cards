import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import Header from "./components/layout/header/Header";
import AllCardsPage from "./pages/allcards/AllCards";
import CardDetailPage from "./pages/carddetails/CardDetail";
import ProgressBar from "./components/layout/progressBar/ProgressBar";

export const QuestionContext = React.createContext();
// export const ConfidenceContext = React.createContext();

function App() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: " What is React? State some of its key features.",
      answer:
        "React is a clientside Javascript library developed by Facebook. Some key Features include: the virtual dom, uni-directional or one way data flow, reusuable components, and JSX",
      level: 2,
    },
    {
      id: 2,
      question: " What is JSX?",
      answer:
        "JSX stands for JavaScript XML. It is a syntax extension of JavaScript and has all the properties of JavaScript. Any JavaScript expression can be used in JSX by containing it in curly braces.",
      level: 0,
    },
    {
      id: 3,
      question: "What are the lifecycle methods of React Components in detail?",
      answer:
        "Some important life cycle methods of React components are componentWillMount() componentDidMount()componentWillRecieveProps() shouldComponentUpdate()componentWillUpdate()",
      level: 1,
    },
    {
      id: 4,
      question: "What does HOC mean?",
      answer:
        "HOC stands for higher-order component.  It is an advanced technique in React that allows us to reuse component logic. HOC is not a part of the React API, it is a pattern that emerges from React’s compositional nature.",
      level: 1,
    },
    {
      id: 5,
      question: "What is Redux?",
      answer:
        "HOC stands for higher-order component.  It is an advanced technique in React that allows us to reuse component logic. HOC is not a part of the React API, it is a pattern that emerges from React’s compositional nature.",
      level: 1,
    },
    {
      id: 6,
      question: "What are the biggest limitations of React?",
      answer:
        "React is just a library. It is not a complete framework. It has a huge library which takes time to understand. It may be difficult for the new programmers to understand and code. React uses inline templating and JSX, which may be difficult and act as a barrier. It also makes the coding complex.",
      level: null,
    },
    {
      id: 7,
      question: "Why can't browsers read JSX?",
      answer:
        "Browsers cannot read JSX directly because they can only understand JavaScript objects, and JSX is not a regular JavaScript object. Thus, we need to transform the JSX file into a JavaScript object using transpilers like Babel and then pass it to the browser.",
      level: 0,
    },
  ]);

  // function changeConfidence(e) {
  //   console.log(e.target.value);
  //   // setQuestions({});
  // }

  return (
    <div className="App">
      <Header />

      {/* ************** */}
      {/* Routes for app */}
      {/* ************** */}
      <QuestionContext.Provider value={questions}>
        <Routes>
          <Route
            path="/"
            exact
            element={<AllCardsPage questions={questions} />}
          />
          <Route
            path="/cards/:questionId"
            element={<CardDetailPage questions={questions} />}
          />
        </Routes>
        {/* <ConfidenceContext.Provider value={changeConfidence}> */}
        <ProgressBar questions={questions} />
        {/* </ConfidenceContext.Provider> */}
      </QuestionContext.Provider>
    </div>
  );
}

export default App;
