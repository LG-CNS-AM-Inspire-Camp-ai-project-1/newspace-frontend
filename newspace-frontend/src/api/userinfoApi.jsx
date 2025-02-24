import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_NEWSPACE_TEST_BACKEND_URL}`.replace(/\/$/, '');

// 회원정보조회 
export const getUserInfo = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/user/info`, {
            withCredentials: true,  
        });
        console.log("사용자 정보 조회 성공:", response.data);
        return response.data;
    } catch (error) {
        console.error("사용자 정보 조회 실패:", error);
        return null;
    }
};