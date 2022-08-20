import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "../features/questions/questionsSlice";

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
  },
});
