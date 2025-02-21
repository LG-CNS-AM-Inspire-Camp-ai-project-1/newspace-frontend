import styled, { keyframes } from "styled-components";

// 무한 스크롤 애니메이션 
const scrollLeft = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); } /* 50%만 이동 후 다시 시작 → 공백 없이 반복 */
`;

export const NewsGridContainer = styled.div`
    position: absolute;
    top: 440px;
    left: 170px;
    width: 1320px;
    height: 30px;
`;

export const NewsTrack = styled.div`
    display: flex;
    width: calc(310px * 8); 
    animation: ${scrollLeft} 30s linear infinite; /* 30초 동안 애니메이션 반복 */
`;

export const NewsCard = styled.div`
    width: 310px;
    height: 300px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px; 
`;

export const NewsTitle = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const NewsImage = styled.img`
    width: 100%; 
    height: 120px; 
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 5px;
`;

export const NewsContent = styled.p`
    font-size: 14px;
    color: #555;
`;