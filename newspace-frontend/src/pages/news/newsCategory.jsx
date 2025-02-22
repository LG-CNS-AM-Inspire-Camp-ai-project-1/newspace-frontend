import { useParams, Link} from "react-router-dom";
import styled from "styled-components";


import Sidebar from "./sidebar";

const Container = styled.div`
    position: absolute;
    top: 90px; /* Navbar 높이 제외 */
    left: 200px; /* Sidebar 너비 제외 */
    width: calc(95vw - 200px); /* 전체 너비에서 Sidebar(200px) 제외 */
    height: 800px; 
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: center; /* 세로 중앙 정렬 */
`;

const Title = styled.h1`
    font-size: 28px;
    font-weight: bold;
    margin: 0px;
    color: #808080;
`;

const Title2 = styled.h1`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 70px;
`;

const HighlightedText = styled.span`
    color: #4880ee; /* 원하는 색상 코드 */
    font-weight: bold;
`;


const NewsTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const TableHeader = styled.th`
    text-align: left;
    padding: 10px;
    border-bottom: 2px solid #13767b;
    font-weight: bold;
`;

const TableRow = styled.tr`
    border-bottom: 1px solid #ccc;
`;

const TableData = styled.td`
    padding: 15px;
    text-align: left;
    vertical-align: middle;
`;

const TitleLink = styled(Link)`
    text-decoration: none;
    color: #13767b;
    font-weight: bold;
    
    &:hover {
        text-decoration: underline;
    }
`;

const NewsCategoryPage = () => {
    const { category } = useParams(); 

    // 뉴스 더미 데이터
    const newsList = [
        {
            id: 1,
            title: "Fed Cuts Interest Rates to 2.5%",
            content: "The Federal Reserve cut interest rates for the fifth time in six months, lowering the federal funds rate to 2.5%.",
            date: "2002-02-21",
            source: "The New York Times",
            link: "https://www.nytimes.com/2002/02/21/business/fed-cuts-interest-rates-to-2.5.html"
        },
        { 
            id: 2,
            title: "Tech Giants Face Antitrust Scrutiny",
            content: "Regulators in the US and EU are looking into whether major tech firms have engaged in anti-competitive behavior.",
            date: "2024-02-20",
            source: "BBC News",
            link: "https://www.bbc.com/news/business-tech"
        },
        { 
            id: 3,
            title: "Global Markets Rally on Strong Earnings",
            content: "Stock markets surged worldwide following better-than-expected earnings reports from leading companies.",
            date: "2024-02-19",
            source: "CNBC",
            link: "https://www.cnbc.com/global-markets"
        },
        { 
            id: 4,
            title: "Climate Change Policies Under Debate",
            content: "World leaders gather to discuss the future of climate change policies in a high-stakes summit.",
            date: "2024-02-18",
            source: "The Guardian",
            link: "https://www.theguardian.com/environment/climate-policy"
        },
        {   
            id: 5,
            title: "AI Breakthrough in Medical Diagnosis",
            content: "A new AI model has been developed that can detect diseases with higher accuracy than human doctors.",
            date: "2024-02-17",
            source: "MIT Technology Review",
            link: "https://www.technologyreview.com/ai-medicine"
        },
        {   
            id: 6,
            title: "Electric Vehicles Sales Hit Record High",
            content: "Sales of electric vehicles reached an all-time high last quarter, driven by government incentives and innovation.",
            date: "2024-02-16",
            source: "Bloomberg",
            link: "https://www.bloomberg.com/ev-sales"
        },
        { 
            id: 7,
            title: "NASA Announces New Mars Mission",
            content: "NASA has revealed plans for a new mission to explore potential signs of life on Mars.",
            date: "2024-02-15",
            source: "NASA",
            link: "https://mars.nasa.gov/new-mission"
        },
        { 
            id: 8,
            title: "Cryptocurrency Market Sees Major Fluctuations",
            content: "Bitcoin and Ethereum prices experienced significant volatility, prompting concerns among investors.",
            date: "2024-02-14",
            source: "CoinDesk",
            link: "https://www.coindesk.com/crypto-market"
        },
        { 
            id: 9,
            title: "Major Cities Implement New Traffic Laws",
            content: "Several global cities have introduced new regulations aimed at reducing traffic congestion and pollution.",
            date: "2024-02-13",
            source: "Reuters",
            link: "https://www.reuters.com/traffic-laws"
        },
        { 
            id: 10,
            title: "Advances in Quantum Computing Announced",
            content: "Scientists have made a breakthrough in quantum computing, bringing commercial applications closer to reality.",
            date: "2024-02-12",
            source: "Wired",
            link: "https://www.wired.com/quantum-computing"
        }
    ];

    return (
        <>
        <Sidebar />
        <Container>
                <Title>과거의 오늘 </Title>
                <Title2>가장 많이 주목받은 <HighlightedText>{category}</HighlightedText> 뉴스</Title2>
                <NewsTable>
                    <thead>
                        <tr>
                            <TableHeader>제목</TableHeader>
                            <TableHeader>날짜</TableHeader>
                            <TableHeader>출처</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {newsList.map((news, index) => (
                            <TableRow key={index}>
                                <TableData>
                                    <TitleLink to={`/news/${encodeURIComponent(category)}/${news.id}`}>
                                        {news.title}
                                    </TitleLink>
                                </TableData>
                                <TableData>{news.date}</TableData>
                                <TableData>{news.source}</TableData>
                            </TableRow>
                        ))}
                    </tbody>
                </NewsTable>
            </Container>
        </>
    );
};

export default NewsCategoryPage;