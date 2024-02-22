import Login from "pages/Login";
import SignUp from "pages/SignUp";
import Layout from "components/layout/Layout";
import LetterProvider from "context/Context";
import DetailPage from "pages/DetailPage";
import MainPage from "pages/MainPage";
import MyPage from "pages/MyPage";
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const Router = () => {
  const [isLogin, setLogin] = useState(true);
  return (
    <BrowserRouter>
      <LetterProvider>
        <Routes>
          {isLogin ? (
            <>
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
              <Route path="*" element={<Navigate replace to="/" />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </>
          )}
        </Routes>
      </LetterProvider>
    </BrowserRouter>
  );
};

export default Router;
