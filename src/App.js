import { BrowserRouter, Routes, Route } from "react-router-dom";
import MemberMainPage from "./pages/MainPage/MemberMainPage";
import MakeStudyPage from "./pages/MakeStudyPage/";
import routes from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.MAIN} element={<MemberMainPage />} />
        <Route path={routes.MAKESTUDY} element={<MakeStudyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
