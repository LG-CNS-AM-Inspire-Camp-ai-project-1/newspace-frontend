import React, { useState } from 'react';
import './signup.css'; // CSS 파일 임포트
import logo from '../../assets/newspace_logo1.png'; // 로고 이미지 임포트

function Signup() {
    const [birthYear, setBirthYear] = useState('2000');
    const [birthMonth, setBirthMonth] = useState('01');
    const [birthDay, setBirthDay] = useState('01');

    // 연도, 월, 일 범위 설정
    const years = Array.from({ length: 126 }, (_, i) => (2025 - i).toString());
    const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
    const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));

    return (
        <div className="signup-container abs-position flex-center" style={{width: '100%', height: '100vh'}}>
            <div className="top-left-logo">
                <img src={logo} alt="News Space Logo" style={{ width: '150px' }} />
            </div>
            <div className="signup-form background-white" style={{borderRadius: '20px', padding: '20px', width: '350px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}}>
                <h1 className="text-large">회원가입</h1>
                <div className="divider"></div>                
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
                            <select value={birthYear} onChange={e => setBirthYear(e.target.value)}>
                                {years.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                            <select value={birthMonth} onChange={e => setBirthMonth(e.target.value)}>
                                {months.map(month => (
                                    <option key={month} value={month}>{month}</option>
                                ))}
                            </select>
                            <select value={birthDay} onChange={e => setBirthDay(e.target.value)}>
                                {days.map(day => (
                                    <option key={day} value={day}>{day}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="signup-button" id="signup-button">가입하기</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
