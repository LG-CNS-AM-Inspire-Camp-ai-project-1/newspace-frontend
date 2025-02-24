import { useState } from "react";
import styled from "styled-components";
import { FiLogOut } from "react-icons/fi";

import EditProfileModal from "./editProfile";

const DropdownMenu = styled.div`
    position: absolute;
    top: 55px;
    right: -50px;
    background: white;
    border: 2px solid #337477; 
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 220px;
    display: ${(props) => (props.open ? "block" : "none")};
    padding: 20px;
    text-align: center;
    z-index: 1002;
    pointer-events: auto;
`;

const DropdownItem = styled.div`
    padding: 10px;
    cursor: pointer;
    font-size: 14px;
    color: #333;

    &:hover {
        background: #f5f5f5;
    }
`;

const ProfileImage = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    display: block;
    margin: 0 auto 10px;
`;

const UserName = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: black;
    margin-bottom: 15px;
`;

const EditProfileButton = styled.button`
    width: 100%;
    padding: 10px;
    background: #337477;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 14px;
    cursor: pointer;
    margin-bottom: 20px;
    
    &:hover {
        background: #285e5e;
    }
`;

const LogoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    color: black;
`;

const LogoutIcon = styled(FiLogOut)`
    font-size: 24px;
    color: #337477;
    margin-bottom: 5px;
`;

const UserToggle = ({ isDropdownOpen, user, profile, logout }) => {
    const [isModalOpen, setModalOpen] = useState(false); // 개인정보수정 modal

    return (
        <>
            <DropdownMenu className="user-dropdown" open={isDropdownOpen}>
                <ProfileImage src={user?.image || profile} alt="프로필" />
                <UserName>{user?.name}</UserName>
                <EditProfileButton onClick={() => setModalOpen(true)}>
                    개인정보 수정
                </EditProfileButton>
                <LogoutContainer onClick={logout}>
                    <LogoutIcon />
                    logout
                </LogoutContainer>
            </DropdownMenu>

            {isModalOpen && (
                <EditProfileModal
                    user={user}
                    profile={profile}
                    onClose={() => setModalOpen(false)}
                />
            )}
        </>
    );

};

export default UserToggle;


