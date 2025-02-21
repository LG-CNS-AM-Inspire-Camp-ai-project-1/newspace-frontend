import styled from "styled-components";

const NewsContent = styled.div`
    width: 500px; 
    height: 200px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 20px;
`;

const NewsImage = styled.img`
    width: 400px;
    height: 230px;
    object-fit: cover;
    border-radius: 10px;
`;

const NewsTextContainer = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: flex-start;  
    padding-left: 20px;
    text-align: left;
`;

const NewsTitle = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin-left: 5px;
    margin-bottom: 5px;
`;

const NewsSummary = styled.p`
    font-size: 14px;
    color: #666;
    white-space: normal;
    text-overflow: ellipsis;
    width: 400px; 
`;


const newsData = [
    {
        title: "반도체법, 결국 산업소위 통과 불발",
        summary: "여야는 17일 국회 산업통상자원중소벤처기업위원회 산업통상자원특허소위원회를 열고 반도체 특별법에 '주 52시간 근로제' 예외 규정을 포함할지 여부를 두고 논의했으나 이견을 좁히지 못했다. 이에 따라 이날 반도체 특별법 소위 통과는 불발됐으며, 산업위는 추후 소위를 다시 열고 반도체법을 계속 심사하기로 했다. 여야 의원들이 발의한 반도체법은 반도체 산업 경쟁력 강화를 위해 정부가 반도체 기업에 보조금을 지급하는 내용을 핵심으로 한다. 각국이 반도체 산업 패권을 놓고 첨예한 경쟁을 벌이는 가운데, 여야는 반도체 기업에 인센티브를 주는 내용에는 공감대를 형성한 바 있다...",
        imageUrl: "https://img1.yna.co.kr/photo/yna/YH/2025/02/17/PYH2025021704480001300_P4.jpg"
    }
];

const NewsArticle = () => {
    return (
        <>
            {newsData.map((news, index) => (
                <NewsContent key={index}>
                    <NewsImage src={news.imageUrl} alt="뉴스 이미지" />
                    <NewsTextContainer>
                        <NewsTitle>{news.title}</NewsTitle>
                        <NewsSummary>{news.summary}</NewsSummary>
                    </NewsTextContainer>
                </NewsContent>
            ))}
        </>
    );
};

export default NewsArticle;
