import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import logo from '../../assets/newspace_logo1.png';

function Signup() {
    const [birthYear, setBirthYear] = useState('2000');
    const [birthMonth, setBirthMonth] = useState('01');
    const [birthDay, setBirthDay] = useState('01');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [isUsernameAvailable, setIsUsernameAvailable] = useState(false);


    const navigate = useNavigate();

    // 로고 클릭 시 메인 페이지로 이동
    const handleLogoClick = () => {
        navigate('/news/main');
    };

    // 아이디 중복 확인
    const checkUsernameAvailability = async () => {
        setIsActive(true);
        console.log('아이디 중복 확인:', username);

        // 예시: 중복 확인 로직 (실제 API 연결 시 수정 필요)
        if (username === 'alreadytaken') {
            alert('이미 사용 중인 아이디입니다.');
            setIsUsernameAvailable(false);
        } else {
            alert('사용 가능한 아이디입니다.');
            setIsUsernameAvailable(true);
        }
        setIsActive(false);
    };

    // 회원가입 폼 제출
    const handleSignup = (e) => {
        e.preventDefault();
        if (!isUsernameAvailable) {
            alert('아이디 중복 확인을 해주세요.');
            return;
        }
        if (password !== checkPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }
        alert('회원가입 완료!');
        navigate('/news/main');
    };

    // 년, 월, 일 옵션 생성
    const years = Array.from({ length: 126 }, (_, i) => (2025 - i).toString());
    const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
    const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));


    return (
        <div className="signup-page">
            <div className="top-left-logo" onClick={handleLogoClick}>
                <img src={logo} alt="News Space Logo" className="logo-image" />
            </div>
            <div className="signup-container">
                <div className="signup-form">
                    <h1 className="signup-title">회원가입</h1>
                    <div className="signup-divider"></div>
                    <form onSubmit={handleSignup}>
                        <label htmlFor="id">ID</label>
                        <div className="signup-input-group flex-row">
                            <input type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)} required className="signup-input-text" />
                            <button type="button" onClick={checkUsernameAvailability} className={`signup-check-button ${isActive ? 'active' : ''}`} disabled={isActive}>
                                {isActive ? '확인 중...' : '아이디 중복 확인'}
                            </button>
                        </div>
                        <div className="signup-input-group">
                            <label htmlFor="password">PASSWORD</label>
                            <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required className="signup-input-text" />
                        </div>
                        <div className="signup-input-group">
                            <label htmlFor="check-password">PASSWORD 확인</label>
                            <input type="password" id="check-password" name="check-password" value={checkPassword} onChange={e => setCheckPassword(e.target.value)} required className="signup-input-text" />
                        </div>
                        <div className="signup-input-group">
                            <label htmlFor="name">이름</label>
                            <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} required className="signup-input-text" />
                        </div>
                        <div className="signup-input-group">
                            <label htmlFor="nickname">닉네임</label>
                            <input type="text" id="nickname" name="nickname" value={nickname} onChange={e => setNickname(e.target.value)} required className="signup-input-text" />
                        </div>
                        <div className="signup-input-group">
                            <label htmlFor="birthdate">생년월일</label>
                            <div className="signup-date-selectors">
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
        </div>
    );
}

export default Signup;
