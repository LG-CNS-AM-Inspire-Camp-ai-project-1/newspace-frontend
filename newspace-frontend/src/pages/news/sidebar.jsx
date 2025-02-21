import styled from "styled-components";
import { Link } from "react-router-dom";

import logo1 from "../../assets/newspace_logo1.png"; 
import { Banknote, Building, Users, Landmark } from "lucide-react";

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
    padding-top: 30px;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
    z-index: 1000; 
`;

const SidebarLogo = styled.img`
    width: 100px; 
    height: auto;
    margin-bottom: 20px; 
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

const Sidebar = () => {
    return (
        <SidebarContainer>

            <Link to="/news/main">
                <SidebarLogo src={logo1} alt="Logo" />
            </Link>

            <SidebarItem to="/news/politics">
                <Landmark size={24} />
                <SidebarText>정치</SidebarText>
            </SidebarItem>
            <SidebarItem to="/news/economy">
                <Banknote size={24} />
                <SidebarText>경제</SidebarText>
            </SidebarItem>
            <SidebarItem to="/news/society">
                <Users size={24} />
                <SidebarText>사회</SidebarText>
            </SidebarItem>
            <SidebarItem to="/news/culture">
                <Building size={24} />
                <SidebarText>문화</SidebarText>
            </SidebarItem>
        </SidebarContainer>
    );
};

export default Sidebar;
