import React, { useState } from 'react';
import './signup.css'; // CSS 파일 임포트
import logo from '../../assets/newspace_logo1.png'; // 로고 이미지 임포트

function Signup() {
    // 상태 초기화
    const [birthYear, setBirthYear] = useState('2000');
    const [birthMonth, setBirthMonth] = useState('01');
    const [birthDay, setBirthDay] = useState('01');

    // 각 범위 설정
    const years = Array.from({ length: 100 }, (_, i) => (new Date().getFullYear() - i).toString());
    const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
    const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));

    // 선택 핸들러
    const handleSelect = (type, value) => {
        if (type === 'year') setBirthYear(value);
        else if (type === 'month') setBirthMonth(value);
        else if (type === 'day') setBirthDay(value);
    };

    return (
        <div className="signup-container abs-position flex-center" style={{width: '100%', height: '100vh'}}>
            <div className="top-left-logo">
                <img src={logo} alt="News Space Logo" style={{ width: '150px' }} />
            </div>
            <div className="signup-form background-white" style={{borderRadius: '20px', padding: '20px', width: '350px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}}>
                <h1 className="text-large">회원가입</h1>
                <form>
                    <div className="input-group">
                        <label htmlFor="username">ID</label>
                        <input type="text" id="username" name="username" required className="input-text" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">PASSWORD</label>
                        <input type="password" id="password" name="password" required className="input-text" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="name">이름</label>
                        <input type="text" id="name" name="name" required className="input-text" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="nickname">닉네임</label>
                        <input type="text" id="nickname" name="nickname" required className="input-text" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="birthdate">생년월일</label>
                        <div className="date-selectors">
                            <button type="button" onClick={() => handleSelect('year', prompt('Select Year', birthYear))}>{birthYear}</button>
                            <button type="button" onClick={() => handleSelect('month', prompt('Select Month', birthMonth))}>{birthMonth}</button>
                            <button type="button" onClick={() => handleSelect('day', prompt('Select Day', birthDay))}>{birthDay}</button>
                        </div>
                    </div>
                    <button type="submit" className="signup-button" id="signup-button">가입하기</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
