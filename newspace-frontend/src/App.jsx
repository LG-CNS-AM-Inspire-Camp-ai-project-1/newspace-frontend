import { useState } from 'react'
import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//Pages
import Login from './pages/login/login.jsx'; // 로그인 페이지
import Signup from './pages/signup/signup.jsx'; // 회원가입 페이지
import NewsMain from './pages/news/newsMain';
import NewsCategoryPage from './pages/news/newsCategory';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />  // 로그인 페이지
          <Route path="/signup" element={<Signup />} />  // 회원가입 페이지
          <Route path="/news/main" element={<NewsMain />} />                {/* 뉴스 메인 페이지 */}
          <Route path="/news/:category" element={<NewsCategoryPage />} />   {/* 뉴스 카테고리 페이지 */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
