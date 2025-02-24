import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { FaPlus } from "react-icons/fa"; 

import { fetchKeywords, addKeyword, updateKeyword } from "../../api/keywordApi";

const SectionContainer = styled.div`
    width: 450px;
    min-width: 450px;
    padding: 20px;
    height: 200px;
    background-color: #ffffff;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 50px;
    overflow: hidden;
    position: relative; /* 팝업의 absolute 위치 기준이 됨 */
`;

const Title = styled.h2`
    font-size: 20px;
    font-weight: bold;
    margin-top: 0px;
    margin-left: 15px;
    padding-bottom: 10px;
    text-align: left;
`;

const KeywordContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const Keyword = styled(Link)`
    position: absolute;
    font-size: ${({ size }) => size || "16px"};
    font-weight: bold;
    color: ${({ color }) => color || "#333"};
    top: ${({ top }) => top}%;
    left: ${({ left }) => left}%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    text-decoration: none;
    transition: transform 0.2s ease, color 0.2s ease;

    &:hover {
        transform: translate(-50%, -50%) scale(1.1);
        color: #ff5733;
    }
`;

const ContextPopup = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border: 1px solid #ccc;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    padding: 15px;
    border-radius: 8px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;
`;

const KeywordText = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
`;

const ContextPopupItem = styled.div`
    padding: 8px 12px;
    cursor: pointer;
    transition: background 0.2s;
    width: 100%;
    text-align: center;
    font-size: 14px;

    &:hover {
        background: #f0f0f0;
    }
`;

// 모달 스타일
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1100;
`;

const ModalContainer = styled.div`
    position: relative; 
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px; 
    width: 400px; 
    height: 150px; 
`;

const FlexBox = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 30px;
    margin-top: 20px;
`;

const LabelContainer = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #333;
    white-space: nowrap;
`;

const InputField = styled.input`
    width: 70%;
    padding: 12px; 
    font-size: 18px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;


const CloseButton = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    color: #333;
    
    &:hover {
        color: #1D7F81;
    }
`;

const SubmitButton = styled.button`
    padding: 10px 15px;
    background: ${({ disabled }) => (disabled ? "#ccc" : "#1D7F81")};
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    width: 30%;
    margin-top: 30px;
    
    &:hover {
        background: ${({ disabled }) => (disabled ? "#ccc" : "#16665E")};
    }
`;

const DeletedKeywordIcon = styled(FaPlus)`
    position: absolute;
    font-size: 20px;
    color: #888;
    top: ${({ top }) => top}%;
    left: ${({ left }) => left}%;
    transform: translate(-50%, -50%);
`;


const Keywords = [
    { id: 1, text: "", size: "24px", color: "#1D7F81", top: 30, left: 75 },
    { id: 2, text: "", size: "29px", color: "#2D5BE3", top: 50, left: 50 },
    { id: 3, text: "", size: "18px", color: "#FF7F50", top: 20, left: 50 },
    { id: 4, text: "", size: "26px", color: "#FFD700", top: 60, left: 85 },
    { id: 5, text: "", size: "20px", color: "#8A2BE2", top: 10, left: 90 },
    { id: 6, text: "", size: "18px", color: "#FF4500", top: 65, left: 30 },
    { id: 7, text: "", size: "28px", color: "#4682B4", top: 7, left: 24 },
    { id: 8, text: "", size: "16px", color: "#2E8B57", top: 45, left: 14 }
];


const NewsKeyword = () => {
    const [keywords, setKeywords] = useState([]);
    const [popup, setPopup] = useState(null);
    const [modal, setModal] = useState(null);
    const [inputValue, setInputValue] = useState("");


    useEffect(() => {
        const loadKeywords = async () => {
            try {
                const apiData = await fetchKeywords(); // API에서 키워드 목록 가져오기

                // API 데이터와 Keywords 배열을 병합하면서 인덱스 초과 방지 및 기본값 설정
                const matchKeywords = Keywords.map((keyword) => {
                    const matchedKeyword = apiData.find((item) => item.id === keyword.id);
                    return matchedKeyword
                        ? { ...keyword, text: matchedKeyword.name }
                        : keyword; // 일치하는 id가 없으면 기존 데이터 유지
                });
    
                setKeywords(matchKeywords);
            } catch (error) {
                console.error("키워드 조회 실패:", error);
            }
        };

        loadKeywords();
    }, []);


    // 우클릭 시 팝업 표시
    const handleRightClick = (event, keyword) => {
        event.preventDefault();
        setPopup({ keyword });
    };

    // 팝업 바깥 클릭 시 닫기
    useEffect(() => {
        const handleClickOutside = (event) => {
            // 팝업이 열려있을 때만 동작
            if (popup) {
                setPopup(null);
            }
        };

        // 문서 전체에 클릭 이벤트 추가
        document.addEventListener("click", handleClickOutside);

        // cleanup (이벤트 리스너 해제)
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [popup]);

    // 키워드 생성
    const handleCreate = (keyword) => {
        setModal(keyword);
        setInputValue(""); // 새로운 키워드는 빈칸
    };

    // 키워드 수정
    const handleEdit = () => {
        setInputValue(popup.keyword.text);
        setModal(popup.keyword);
        setPopup(null);
    };

    // 삭제 (실제 삭제가 아니라 name을 ""로 변경)
    const handleDelete = async (keyword) => {
        try {
            await updateKeyword(keyword.id, ""); // name을 빈 값으로 업데이트
            setKeywords((prevKeywords) =>
                prevKeywords.map((kw) =>
                    kw.id === keyword.id ? { ...kw, text: "" } : kw
                )
            );
        } catch (error) {
            console.error("키워드 삭제 실패:", error);
        }
    };

    // 키워드 수정 완료
    const handleSubmit = async () => {
        if (!modal) return;

        try {
            if (modal.text === "") {
                // 삭제된 키워드 다시 추가
                const restoredKeyword = await addKeyword(modal.id, inputValue); // 기존 ID 유지
                setKeywords((prev) =>
                    prev.map((kw) =>
                        kw.id === modal.id ? { ...kw, text: restoredKeyword.name } : kw
                    )
                );
            } else {
                // 기존 키워드 수정
                const updatedKeyword = await updateKeyword(modal.id, inputValue);
                setKeywords((prev) =>
                    prev.map((kw) =>
                        kw.id === updatedKeyword.id ? { ...kw, text: updatedKeyword.name } : kw
                    )
                );
            }
            setModal(null);
        } catch (error) {
            console.error("키워드 저장 실패:", error);
        }
    };


    return (
        <SectionContainer>
            <Title>오늘의 키워드</Title>
            <KeywordContainer>
                {keywords.map((keyword, index) => (
                    keyword.text ? (
                    <Keyword
                        key={keyword.id || `keyword-${index}`}
                        to={`/news/${encodeURIComponent(keyword.text)}`}
                        size={keyword.size}
                        color={keyword.color}
                        top={keyword.top}
                        left={keyword.left}
                        onContextMenu={(e) => handleRightClick(e, keyword)}
                    >
                        {keyword.text}
                    </Keyword>
                    ) : (
                        <DeletedKeywordIcon key={keyword.id} top={keyword.top} left={keyword.left}
                            onClick={() => handleCreate(keyword)} />
                    )
                ))}
            </KeywordContainer>

            {popup && (
                <ContextPopup>
                    <KeywordText>{popup.keyword.text}</KeywordText>
                    <ContextPopupItem onClick={handleEdit}>수정</ContextPopupItem>
                    <ContextPopupItem onClick={() => handleDelete(popup.keyword)}>삭제</ContextPopupItem>
                </ContextPopup>
            )}

            {modal && (
                <ModalOverlay>
                    <ModalContainer>
                        <CloseButton onClick={() => setModal(null)}>X</CloseButton>
                        <FlexBox>
                            <LabelContainer>키워드</LabelContainer>
                            <InputField 
                                value={inputValue} 
                                onChange={(e) => setInputValue(e.target.value)} 
                            />
                        </FlexBox>
                        <SubmitButton onClick={handleSubmit} disabled={!inputValue.trim()}>수정완료</SubmitButton>
                    </ModalContainer>
                </ModalOverlay>
            )}
        </SectionContainer>
    );
};

export default NewsKeyword;