import Login from "components/Login";
import SignUp from "components/SignUp";
import Layout from "components/layout/Layout";
import LetterProvider from "context/Context";
import DetailPage from "pages/DetailPage";
import MainPage from "pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <LetterProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Layout>
      </LetterProvider>
    </BrowserRouter>
  );
};

export default Router;
