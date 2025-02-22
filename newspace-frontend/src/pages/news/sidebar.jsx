import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo1 from "../../assets/newspace_logo1.png"; 
import { Banknote, Building, Users, Landmark, Plus, Book, Newspaper, Globe, Briefcase, X  } from "lucide-react";

const SidebarContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 130px;
    height: 100vh;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
    z-index: 900; 
`;

const SidebarLogo = styled.img`
    width: 100px; 
    height: auto;
    margin-bottom: 10px; 
`;

const SidebarItem = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 15px 0;
    color: #333;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        color: #1D7F81;
        transform: scale(1.1);
    }
`;

const SidebarText = styled.span`
    font-size: 17px;
    font-weight: bold;
`;

// 추가 버튼 스타일
const AddCategoryButton = styled.div`
    margin-top: auto;
    margin-bottom: 40px;
    padding: 15px;
    width: 15px;  /* 버튼 크기 조정 */
    height: 15px; /* 버튼 크기 조정 */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #1D7F81;
    border-radius: 50px; /* 더 둥글게 조정 */
    color: white;
    transition: 0.3s ease;

    &:hover {
        background-color: #145A5E;
        transform: scale(1.1);
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
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
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

const IconGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

const IconOption = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    border-radius: 8px;
    transition: 0.3s ease;
    background-color: ${({ selected }) => (selected ? "#1D7F81" : "transparent")};
    color: ${({ selected }) => (selected ? "white" : "black")};

    &:hover {
        transform: scale(1.1);
    }
`;

const Input = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 80%;
`;

const AddButton = styled.button`
    padding: 10px 15px;
    background-color: #1D7F81;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        background-color: #145A5E;
    }
`;

// 선택 가능한 아이콘 목록
const iconOptions = [
    { name: "Landmark", component: <Landmark size={24} /> },
    { name: "Banknote", component: <Banknote size={24} /> },
    { name: "Users", component: <Users size={24} /> },
    { name: "Building", component: <Building size={24} /> },
    { name: "Book", component: <Book size={24} /> },
    { name: "Newspaper", component: <Newspaper size={24} /> },
    { name: "Globe", component: <Globe size={24} /> },
    { name: "Briefcase", component: <Briefcase size={24} /> }
];


const Sidebar = () => {
    const [categories, setCategories] = useState([
        { name: "정치", icon: <Landmark size={24} /> },
        { name: "경제", icon: <Banknote size={24} /> },
        { name: "사회", icon: <Users size={24} /> },
        { name: "문화", icon: <Building size={24} /> },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [newCategory, setNewCategory] = useState("");
    const [selectedIcon, setSelectedIcon] = useState(null);

    const addCategory = () => {
        if (newCategory && selectedIcon) {
            setCategories([...categories, { name: newCategory, icon: selectedIcon }]);
            setNewCategory("");
            setSelectedIcon(null);
            setShowModal(false);
        }
    };

    return (
        <SidebarContainer>

            <Link to="/news/main">
                <SidebarLogo src={logo1} alt="Logo" />
            </Link>

            {categories.map((category, index) => (
                <SidebarItem key={index} to={`/news/${encodeURIComponent(category.name)}`}>
                    {category.icon}
                    <SidebarText>{category.name}</SidebarText>
                </SidebarItem>
            ))}

            {/* + 버튼 추가 */}
            <AddCategoryButton onClick={() => setShowModal(true)}>
                <Plus size={40} />
            </AddCategoryButton>

            {/* 모달 */}
            {showModal && (
                <ModalOverlay>
                    <ModalContainer>
                        <CloseButton onClick={() => setShowModal(false)}>
                            <X size={24} />
                        </CloseButton>
                        <h3>카테고리 추가</h3>
                        <Input
                            type="text"
                            placeholder="카테고리명 입력"
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                        />
                        <IconGrid>
                            {iconOptions.map((icon) => (
                                <IconOption key={icon.name} selected={selectedIcon === icon.component} onClick={() => setSelectedIcon(icon.component)}>
                                    {icon.component}
                                </IconOption>
                            ))}
                        </IconGrid>
                        <AddButton onClick={addCategory}>추가</AddButton>
                    </ModalContainer>
                </ModalOverlay>
            )}
        </SidebarContainer>
    );
};

export default Sidebar;
