import { Link, Route, Routes } from "react-router-dom";

import Header from "./components/layout/header/Header";
import AllCardsPage from "./pages/AllCards";
import CardPage from "./pages/CardPage";

function App() {
  return (
    <div className="App">
      <Header />

      {/* ************** */}
      {/* Routes for app */}
      {/* ************** */}
      <Routes>
        <Route path="/" exact element={<AllCardsPage />} />
        <Route path="/cards/:id" element={<CardPage />} />
      </Routes>
    </div>
  );
}

export default App;
