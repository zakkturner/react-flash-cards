import { createSlice } from "@reduxjs/toolkit";

// putting in own constant because file so large.
// may change if and express api
const initialState = {
  questions: [
    {
      id: 1,
      question: " What is React? State some of its key features.",
      answer:
        "React is a clientside Javascript library developed by Facebook. Some key Features include: the virtual dom, uni-directional or one way data flow, reusuable components, and JSX",
      level: null,
    },
    {
      id: 2,
      question: " What is JSX?",
      answer:
        "JSX stands for JavaScript XML. It is a syntax extension of JavaScript and has all the properties of JavaScript. Any JavaScript expression can be used in JSX by containing it in curly braces.",
      level: null,
    },
    {
      id: 3,
      question: "What are the lifecycle methods of React Components in detail?",
      answer:
        "Some important life cycle methods of React components are componentWillMount() componentDidMount()componentWillRecieveProps() shouldComponentUpdate()componentWillUpdate()",
      level: null,
    },
    {
      id: 4,
      question: "What does HOC mean?",
      answer:
        "HOC stands for higher-order component.  It is an advanced technique in React that allows us to reuse component logic. HOC is not a part of the React API, it is a pattern that emerges from React’s compositional nature.",
      level: null,
    },
    {
      id: 5,
      question: "What is Redux?",
      answer:
        "HOC stands for higher-order component.  It is an advanced technique in React that allows us to reuse component logic. HOC is not a part of the React API, it is a pattern that emerges from React’s compositional nature.",
      level: null,
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
      level: null,
    },
  ],
  /*   This is just an attempt to see if the percentage. not sure if will be able to work like this / may clean it up
  
  */
  startPercentage: null,
  badPercentage: null,
  mehPercentage: null,
  goodPercentage: null,
};

export const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    changeLevel: (state, action) => {
      const { questionId, value } = action.payload;

      state.questions = state.questions.map((question, index) => {
        if (parseInt(questionId) === question.id) {
          return { ...question, level: parseInt(value) };
        } else {
          return question;
        }
      });

      return state;
    },
  },
});

export const { changeLevel } = questionSlice.actions;
export default questionSlice.reducer;
