import React from 'react';
import './login.css'; // CSS 파일 임포트
import logo from '../../assets/newspace_logo1.png'; // 로고 이미지 임포트

function Login() {
    return (
        <div className="login-container abs-position flex-center" style={{width: '100%', height: '100vh'}}>
            {/* 로고 이미지 상단 좌측 배치 */}
            <div className="top-left-logo">
                <img src={logo} alt="News Space Logo" style={{ width: '150px' }} />
            </div>
            <div className="login-form background-white" style={{borderRadius: '20px', padding: '20px', width: '300px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}}>
                <h1 className="text-large">Login</h1>
                {/* 디자인 직선 추가 */}
                <div className="divider"></div>
                <form>
                    <div className="input-group">
                        <label htmlFor="username" className="text-small">Id</label>
                        <input type="text" id="username" name="username" required className="input-text" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password" className="text-small">Password</label>
                        <input type="password" id="password" name="password" required className="input-text" />
                    </div>
                    <button type="submit" className="login-button" id="login-button">로그인</button>
                    {/* 회원가입 링크 추가 */}
                    <a href="/signup" className="signup-link">회원가입</a>
                </form>
            </div>
        </div>
    );
}

export default Login;