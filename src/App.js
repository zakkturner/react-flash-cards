import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/layout/header/Header";
import AllCardsPage from "./pages/allcards/AllCards";
import CardDetailPage from "./pages/carddetails/CardDetail";
import ProgressBar from "./components/layout/progressBar/ProgressBar";

export const QuestionContext = React.createContext();
/*
on vacation finish/rewatch these
jest
https://www.youtube.com/watch?v=3e1GHCA3GP0 
redux
https://www.youtube.com/watch?v=bbkBuqC1rU4

1. finish redux state management
2. finish button state change for level
2.create unit test


*/
function App() {
  return (
    <div className="App">
      <Header />

      {/* ************** */}
      {/* Routes for app */}
      {/* ************** */}

      <Routes>
        <Route path="/" exact element={<AllCardsPage />} />
        <Route path="/cards/:questionId" element={<CardDetailPage />} />
      </Routes>
      <ProgressBar />
    </div>
  );
}

export default App;
