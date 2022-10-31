import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import MemberMainPage from "./pages/MainPage/MemberMainPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.MAIN} element={<MemberMainPage />} />
        <Route path={routes.LOGIN} element={<LoginPage />} />
        <Route path={routes.SIGNUP} element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}
