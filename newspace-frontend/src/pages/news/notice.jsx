import { useState } from "react";
import styled from "styled-components";
import { Megaphone, Pencil, Check } from "lucide-react";

const NoticeWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px; 
    margin-bottom: 20px;
`;

const NoticeContainer = styled.div`
    width: 490px;
    padding: 10px 10px;
    border: 2px solid #1D7F81;
    border-radius: 8px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NoticeContent = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const NoticeTitle = styled.span`
    font-weight: bold;
    color: #1D7F81;
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
        vertical-align: middle; 
        margin-top: 2px; 
    }
`;

const NoticeText = styled.span`
    color: #333;
`;

const NoticeInput = styled.input`
    border: none;
    outline: none; 
    padding: 5px;
    font-size: 14px;
    width: 300px;
    background-color: transparent;
`;

const EditButton = styled.button`
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: #1D7F81;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 10px 10px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    
    &:hover {
        background-color: #155A5D;
    }
`;

const Notice = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [noticeText, setNoticeText] = useState("16일 14시 - 18시 웹페이지 점검 예정입니다.");

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleChange = (event) => {
        setNoticeText(event.target.value);
    };

    return (
        <NoticeWrapper>
            <NoticeContainer>
                <NoticeContent>
                    <NoticeTitle>
                        <Megaphone size={18} /> 관리자 공지
                    </NoticeTitle>
                    {isEditing ? (
                        <NoticeInput type="text" value={noticeText} onChange={handleChange} />
                    ) : (
                        <NoticeText>{noticeText}</NoticeText>
                    )}
                </NoticeContent>
            </NoticeContainer>
            <EditButton onClick={handleEditClick}>
                {isEditing ? <Check size={16} /> : <Pencil size={16} />} {isEditing ? "저장" : "수정"}
            </EditButton>
        </NoticeWrapper>
    );
};

export default Notice;
