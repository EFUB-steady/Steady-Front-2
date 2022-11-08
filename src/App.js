import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import MemberMainPage from "./pages/MainPage/MemberMainPage";
import LoginPage from "./pages/LoginPage";
import MyInfoPage from "./pages/MyInfoPage";
import SignupPage from "./pages/SignupPage";
import FindUserPage from "./pages/FindUserPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.MAIN} element={<MemberMainPage />} />
        <Route path={routes.LOGIN} element={<LoginPage />} />
        <Route path={routes.MYINFO} element={<MyInfoPage />} />
        <Route path={routes.SIGNUP} element={<SignupPage />} />
        <Route path={routes.FINDUSER} element={<FindUserPage />} />
      </Routes>
    </BrowserRouter>
  );
}
