import { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import Sidebar from "./sidebar";
import Notice from "./notice";
import NewsKeyword from "./keywords";
import NewsArticle from "./article";

const SidebarWidth = "130px";

const PageContainer = styled.div`
    display: flex;
    min-width: 1000px; 
`;

const SidebarContainer = styled.div`
    position: fixed; /* 사이드바 고정 */
    left: 0;
    top: 0;
    width: ${SidebarWidth};
    height: 100vh;
    z-index: 1000; 
`;

const NoticeContainer = styled.div`
    position: fixed;
    top: 15px;
    left: 170px;
    background-color: #ffffff; 
    z-index: 1000; 
    display: flex;
    align-items: flex-start;
    gap: 10px; 
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
    top: 100px; 
    left: 170px; 
    width: 1100px; 
    display: flex;
    justify-content: flex-start; 
    align-items: flex-start; 
    gap: 40px; 
`;

const Divider = styled.div`
    position: fixed;
    top: 380px;
    left: 170px;
    width: 1320px;
    height: 2px;
    background-color: #ddd;
    z-index: 1000;
`;


const NewsMain = () => {

    return (
        <PageContainer>
            <SidebarContainer>
                <Sidebar />
            </SidebarContainer>
            <ContentContainer>
                <NoticeContainer>
                <Notice />
                </NoticeContainer>
                    <NewsContainer>
                        <NewsKeyword />
                        <NewsArticle />
                    </NewsContainer>
                    <Divider/>
            </ContentContainer>
        </PageContainer>
    );
};

export default NewsMain;
