import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import MyInfoPage from "./pages/MyInfoPage";
import SignupPage from "./pages/SignupPage";
import FindUserPage from "./pages/FindUserPage";
import MakeStudyPage from "./pages/MakeStudyPage/";
import ModifyInfoPage from "./pages/ModifyInfoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.MAIN} element={<MainPage />} />
        <Route path={routes.LOGIN} element={<LoginPage />} />
        <Route path={routes.MYINFO} element={<MyInfoPage />} />
        <Route path={routes.SIGNUP} element={<SignupPage />} />
        <Route path={routes.FINDUSER} element={<FindUserPage />} />
        <Route path={routes.MAKESTUDY} element={<MakeStudyPage />} />
        <Route path={routes.MODIFYINFO} element={<ModifyInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
