import MemberMainPage from "./pages/MainPage/MemberMainPage";

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
