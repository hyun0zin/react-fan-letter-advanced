import { BrowserRouter, Route, Routes } from "react-router-dom";
import JENNIE from "pages/JENNIE";
import JISOO from "pages/JISOO";
import ROSÉ from "pages/ROSÉ";
import LISA from "pages/LISA";
import Layout from "components/layout/Layout";
import MainPage from "components/MainPage";
import LetterProvider from "context/Context";

const Router = () => {
  return (
    <BrowserRouter>
      <LetterProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/JENNIE/:id" element={<JENNIE />} />
            <Route path="/JISOO/:id" element={<JISOO />} />
            <Route path="/ROSÉ/:id" element={<ROSÉ />} />
            <Route path="/LISA/:id" element={<LISA />} />
          </Routes>
        </Layout>
      </LetterProvider>
    </BrowserRouter>
  );
};

export default Router;
