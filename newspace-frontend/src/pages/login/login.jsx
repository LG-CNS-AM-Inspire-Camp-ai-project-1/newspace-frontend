import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';  // 해당 컴포넌트 전용 CSS
import { useAuth } from "../../context/AuthContext"; 
import logo from '../../assets/newspace_logo1.png';
import { loginApi } from '../../api/loginApi';  // loginApi 함수 임포트

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            // API를 호출하여 로그인 시도
            const loginResponse = await loginApi(username, password);
            console.log('로그인 성공:', loginResponse);
            login(); // AuthContext를 통해 로그인 상태 업데이트
            navigate('/news/main');  // 로그인 성공 시 메인 페이지로 이동
        } catch (error) {
            // 로그인 실패 시, 에러 처리 로직
            console.error('로그인 실패:', error);
            alert('로그인 실패: 아이디 또는 비밀번호를 확인해주세요.');
        }
    };

    const handleLogoClick = () => {
        navigate('/news/main'); // 로고 클릭 시 메인 페이지 이동
    };

    return (
        <div className="login-container">
            <div className="login-top-left-logo" onClick={handleLogoClick}>
                <img src={logo} alt="News Space Logo" style={{ width: '150px', cursor: 'pointer' }} />
            </div>
            <div className="login-form">
                <h1 className="login-text-large">로그인</h1>
                <div className="login-divider"></div>
                <form onSubmit={handleLogin}>
                    <div className="login-input-group">
                        <label htmlFor="username">ID</label>
                        <input type="text" id="username" name="username" required className="login-input-text" onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className="login-input-group">
                        <label htmlFor="password">PASSWORD</label>
                        <input type="password" id="password" name="password" required className="login-input-text" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="login-button" id="login-button">로그인</button>
                    <a href="/signup" className="login-link">회원가입</a>
                </form>
            </div>
        </div>
    );
}

export default Login;
