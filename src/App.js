import { BrowserRouter, Routes, Route } from "react-router-dom";
import MemberMainPage from "./pages/MainPage/MemberMainPage";
import routes from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.MAIN} element={<MemberMainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
