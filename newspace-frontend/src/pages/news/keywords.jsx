import styled from "styled-components";
import NewsArticle from "./article";

const SectionContainer = styled.div`
    width: 450px;
    padding: 20px;
    height: 200px;
    background-color: #ffffff;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 50px;
    overflow: hidden;
`;

const Title = styled.h2`
    font-size: 20px;
    font-weight: bold;
    margin-top: 0px;
    margin-left: 15px;
    padding-bottom: 10px;
    text-align: left;
    align-self: flex-start;
`;

const KeywordContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const Keyword = styled.span`
    position: absolute;
    font-size: ${({ size }) => size || "16px"};
    font-weight: bold;
    color: ${({ color }) => color || "#333"};
    top: ${({ top }) => top}%;
    left: ${({ left }) => left}%;
    transform: translate(-50%, -50%);
`;

const keywords = [
    { text: "미국", size: "24px", color: "#1D7F81", top: 30, left: 75 },
    { text: "딥시크", size: "29px", color: "#2D5BE3", top: 50, left: 50 },
    { text: "반도체", size: "18px", color: "#FF7F50", top: 20, left: 50 },
    { text: "카카오", size: "26px", color: "#FFD700", top: 60, left: 85 },
    { text: "GPT", size: "20px", color: "#8A2BE2", top: 10, left: 90 },
    { text: "유튜브", size: "18px", color: "#FF4500", top: 65, left: 30 },
    { text: "AI", size: "28px", color: "#4682B4", top: 7, left: 24 },
    { text: "비트코인", size: "16px", color: "#2E8B57", top: 45, left: 14 }
];



const NewsKeyword = () => {

    return (
        <>
        <SectionContainer>
            <Title>오늘의 키워드</Title>
            <KeywordContainer>
                {keywords.map((keyword, index) => (
                    <Keyword
                        key={index}
                        size={keyword.size}
                        color={keyword.color}
                        top={keyword.top}
                        left={keyword.left}
                    >
                        {keyword.text}
                    </Keyword>
                ))}
            </KeywordContainer>
        </SectionContainer>
        </>
    );
};

export default NewsKeyword;