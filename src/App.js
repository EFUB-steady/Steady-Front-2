import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import MemberMainPage from "./pages/MainPage/MemberMainPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.MAIN} element={<MemberMainPage />} />
        <Route path={routes.LOGIN} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
