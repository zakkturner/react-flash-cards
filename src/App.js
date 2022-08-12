import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import Header from "./components/layout/header/Header";
import AllCardsPage from "./pages/allcards/AllCards";
import CardDetailPage from "./pages/carddetails/CardDetail";

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
  ]);
  return (
    <div className="App">
      <Header />

      {/* ************** */}
      {/* Routes for app */}
      {/* ************** */}
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
    </div>
  );
}

export default App;
