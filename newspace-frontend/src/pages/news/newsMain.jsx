import { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import { useAuth } from "../../context/AuthContext";
import defaultProfile from "../../assets/profile.png";
import userImg from "../../assets/user_image.png";
import Sidebar from "./sidebar";
import Notice from "./notice";
import NewsKeyword from "./keywords";
import NewsArticle from "./article";
import UserToggle from "../user/userToggle";
import { useNavigate } from 'react-router-dom';


import {
    NewsTrack,
    NewsGridContainer,
    NewsCard,
    NewsTitle,
    NewsImage,
    NewsContent

} from "./news_s";


const SidebarWidth = "130px";

const PageContainer = styled.div`
    display: flex;
    width: 100vw; /* 화면 너비에 맞춤 */
    min-width: 100%;
    overflow-x: hidden; /* 가로 스크롤 제거 */
`;

const NoticeContainer = styled.div`
    position: fixed; 
    top: 20px; 
    left: calc(${SidebarWidth} + 10px);
    background-color: #ffffff; 
    z-index: 800; 
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 25px;
`;

const UserInfoContainer = styled.div`
    position: fixed;
    top: 33px; 
    right: 80px; 
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 800;
`;

const UserGreeting = styled.span`
    font-size: 16px;
    color: #333;
    margin-top: 5px;
`;

const UserIconContainer = styled.img`
    position: fixed;
    top: 30px;
    right: 20px; 
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;
`;

const LoginText = styled.span`
    position: fixed;
    top: 40px; /* Notice와 같은 높이 */
    right: 20px; /* 화면 오른쪽 끝 정렬 */
    font-size: 16px;
    font-weight: bold;
    color: #007bff;
    cursor: pointer;
    display: flex;
    align-items: center;
    
    &:hover {
        text-decoration: underline;
    }
`;

const ToggleContainer = styled.div`
    position: relative;  
    z-index: 1100;  
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - ${SidebarWidth}); 
    margin-left: ${SidebarWidth}; 
    padding-top: 60px;
`;

const NewsContainer = styled.div`
    position: fixed; 
    top: 120px; 
    left: calc(${SidebarWidth} + 40px);
    width: calc(100vw - ${SidebarWidth} - 50px); 
    max-width: 1100px;
    display: flex;
    justify-content: flex-start; 
    align-items: flex-start; 
    gap: 30px; 
    z-index: 800;
`;

const Divider = styled.div`
    position: fixed;
    top: 400px;
    left: 170px;
    width: 85%;
    height: 2px;
    background-color: #ddd;
    z-index: 100;
`;


const NewsMain = () => {
    // 로그인 상태
    const { isAuthorized, user, logout } = useAuth(); 
    const navigate = useNavigate();
    
    const BASE_URL = `${import.meta.env.VITE_NEWSPACE_TEST_BACKEND_URL}`.replace(/\/$/, '');

    // //임시 사용자 데이터
    // const [user, setUser] = useState({
    //     name: "김철수",
    //     userid: "sssjj",
    //     birth: "99-01-01",
    //     nickname: "어피치",
    //     image: userImg
    // });

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };    

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".user-dropdown") && !event.target.closest(".user-icon")) { 
                setDropdownOpen(false);
            }
        };
    
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleLogin = () => {
        navigate('/login');
    };

    const dummyNews = [
        { 
            title: "'\"내 잔고 왜 이래?\" 주식 팔아치운 개미들…증권사 '발칵'", 
            image: "https://img.hankyung.com/photo/202502/01.39584674.1.jpg",
            content: "메리츠증권에서 최근 합병을 거친 한 나스닥 상장사의 주식이 일부 투자자 계좌상에 30배 많은 잔고로 표기돼 실제 매도까지 체결된 사태가 발생했다.",
            link: "https://www.hankyung.com/article/202502211222i"
        },
        { 
            title: "최악의 구직난… 사람인 취준생 55% \"합격만 하면 어디든 간다\"", 
            image: "https://www.job-post.co.kr/news/photo/202502/127064_134591_4253.jpg", 
            content: "구직난이 심화하면서 취업준비생들이 기업 형태를 가리지 않고 우선 취업부터 하려는 경향이 뚜렷해지고 있다.",
            link: "https://www.job-post.co.kr/news/articleView.html?idxno=127064#rs"
        },
        { 
            title: "한국, 중국의 AI 챗봇 '딥시크' 신규 앱 다운로드 제한", 
            image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/52bd/live/a41fa3c0-ecfe-11ef-a42c-d793be61fa9c.jpg.webp", 
            content: "한국 개인정보보호위원회는 중국의 인공지능(AI) 챗봇 '딥시크(DeepSeek)'의 국내 신규 다운로드를 제한한다고 밝혔다.",
            link: "https://www.bbc.com/korean/articles/c98387zkj7go"
        },
        { 
            title: "한강, 노벨상 시상식 섰다…\“글 속의 인물들 결코 잊힐 수 없어\”", 
            image: "https://flexible.img.hani.co.kr/flexible/normal/970/757/imgdb/original/2024/1211/4917338464636372.webp", 
            content: "작가 한강을 비롯한 2024년 노벨상 수상자들을 위한 시상식이 10일(현지시각) 스웨덴 스톡홀름에서 열렸다.",
            link: "https://www.hani.co.kr/arti/international/international_general/1172295.html"
        }
    ];

    const newsList = [...dummyNews, ...dummyNews];

    console.log("🟢 현재 로그인 상태:", isAuthorized);
    console.log("🟢 현재 사용자 정보:", user ? user : "사용자 정보 없음");

    useEffect(() => {
        const handleClick = (event) => {
            console.log("클릭한 요소:", event.target);
        };
    
        document.addEventListener("click", handleClick);
    
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);
    return (
        <PageContainer>
            <Sidebar />
            <ContentContainer>
                <NoticeContainer>
                    <Notice />
                    {isAuthorized && user ? (
                        <UserInfoContainer>
                            <UserGreeting>
                                안녕하세요, <strong>{user.nickname}</strong>님!
                            </UserGreeting>
                            <UserIconContainer
                                className="user-icon" 
                                src={user.profileImage ? `${BASE_URL}/api/user/profile/${user.profileImage}` : defaultProfile} 
                                alt="user" 
                                onClick={toggleDropdown}
                            />
                            <ToggleContainer>
                            <UserToggle 
                                isDropdownOpen={isDropdownOpen} 
                                user={user} 
                                profile={defaultProfile} 
                                logout={logout} 
                            />
                            </ToggleContainer>
                        </UserInfoContainer>
                    ) : (
                        <LoginText onClick={handleLogin}>로그인</LoginText>  // 로그인 함수 호출로 업데이트
                    )}
                </NoticeContainer>
                <NewsContainer>
                    <NewsKeyword />
                    <a href="https://www.yna.co.kr/view/AKR20250217150300001" target="_blank" rel="noopener noreferrer">
                        <NewsArticle style={{ cursor: "pointer" }} />
                    </a>
                </NewsContainer>
                <Divider/>
                <NewsGridContainer>
                    <NewsTrack>
                        {newsList.map((news, index) => (
                            <a 
                                key={index} 
                                href={news.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none", color: "inherit" }} 
                            >
                                <NewsCard key={index}>
                                    <NewsTitle>{news.title}</NewsTitle>
                                    <NewsImage src={news.image} alt="뉴스 이미지" />
                                    <NewsContent>{news.content}</NewsContent>
                                </NewsCard>
                            </a>
                        ))}
                    </NewsTrack>
                </NewsGridContainer>
            </ContentContainer>
        </PageContainer>
    );
};

export default NewsMain;
