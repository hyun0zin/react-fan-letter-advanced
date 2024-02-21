import Login from "components/Login";
import SignUp from "components/SignUp";
import Layout from "components/layout/Layout";
import LetterProvider from "context/Context";
import DetailPage from "pages/DetailPage";
import MainPage from "pages/MainPage";
import MyPage from "pages/MyPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <LetterProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <MainPage />
              </Layout>
            }
          />
          <Route
            path="/detail/:id"
            element={
              <Layout>
                <DetailPage />
              </Layout>
            }
          />
          <Route
            path="/mypage"
            element={
              <Layout>
                <MyPage />
              </Layout>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </LetterProvider>
    </BrowserRouter>
  );
};

export default Router;
