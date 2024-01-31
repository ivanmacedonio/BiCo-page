import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainPage } from "./pages/MainPage";
import { Portfolio } from "./pages/Portfolio";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>} />
          <Route path="/portfolio" element={<Portfolio></Portfolio>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
