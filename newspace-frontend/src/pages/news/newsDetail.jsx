import { useParams, Link} from "react-router-dom";
import styled from "styled-components";


import Sidebar from "./sidebar";

const Container = styled.div`
    position: absolute;
    top: 100px;
    left: 200px;
    width: calc(95vw - 200px);
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
`;

const Title = styled.h1`
    font-size: 30px;
    font-weight: bold;
    margin-left: 20px;
    margin-bottom: 30px;
`;

const DetailBox = styled.div`
    width: 90%;
    border: 2px solid #13767b;

    padding: 0;
    background-color: white;
    display: table;
    margin-left: 20px;
    border-collapse: collapse; 
`;

const DetailRow = styled.div`
    display: table-row;
`;

const DetailLabel = styled.div`
    display: table-cell;
    width: 150px;
    padding: 12px;
    font-weight: bold;
    background-color: #f1f8f9;
    color: #13767b;
    border-right: 2px solid #13767b;
    text-align: left;

`;

const DetailValue = styled.div`
    display: table-cell;
    padding: 12px;
    text-align: left;
    color: #333;
`;

const NewsLink = styled.a`
    color: #13767b;
    text-decoration: none;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`;

const NewsDetailPage = () => {
    const { category, id } = useParams();

    const newsData = {
        id: 1,
        title: "Fed Cuts Interest Rates to 2.5%",
        content: "The Federal Reserve cut interest rates for the fifth time in six months, lowering the federal funds rate to 2.5%.The Federal Reserve cut interest rates for the fifth time in six months, lowering the federal funds rate to 2.5%.The Federal Reserve cut interest rates for the fifth time in six months, lowering the federal funds rate to 2.5%.The Federal Reserve cut interest rates for the fifth time in six months, lowering the federal funds rate to 2.5%.The Federal Reserve cut interest rates for the fifth time in six months, lowering the federal funds rate to 2.5%.The Federal Reserve cut interest rates for the fifth time in six months, lowering the federal funds rate to 2.5%.",
        date: "2002-02-21",
        source: "The New York Times",
        link: "https://www.nytimes.com/2002/02/21/business/fed-cuts-interest-rates-to-2.5.html"
    };

    return (
        <>
            <Sidebar />
            <Container>
                <Title>{newsData.title}</Title>
                <DetailBox>
                    <DetailRow>
                        <DetailLabel>날짜</DetailLabel>
                        <DetailValue>{newsData.date}</DetailValue>
                    </DetailRow>
                    <DetailRow>
                        <DetailLabel>제공사</DetailLabel>
                        <DetailValue>{newsData.source}</DetailValue>
                    </DetailRow>
                    <DetailRow>
                        <DetailLabel>내용</DetailLabel>
                        <DetailValue>{newsData.content}</DetailValue>
                    </DetailRow>
                    <DetailRow>
                        <DetailLabel>뉴스 링크</DetailLabel>
                        <DetailValue>
                            <NewsLink href={newsData.link} target="_blank" rel="noopener noreferrer">
                                {newsData.link}
                            </NewsLink>
                        </DetailValue>
                    </DetailRow>
                </DetailBox>
            </Container>
        </>
    );
};

export default NewsDetailPage;