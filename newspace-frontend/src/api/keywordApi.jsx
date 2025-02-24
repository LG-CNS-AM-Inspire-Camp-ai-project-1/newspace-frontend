import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_NEWSPACE_TEST_BACKEND_URL}`.replace(/\/$/, '');

// 키워드 목록 조회 
export const fetchKeywords = async () => {
    console.log("키워드 조회 GET 요청:", `${BASE_URL}/api/news/keyword`);
    try {
        const response = await axios.get(`${BASE_URL}/api/news/keyword`);
        console.log("키워드 조회 성공:", response.data);
        return response.data; 
    } catch (error) {
        console.log("키워드 조회 실패:", error);
        throw error;
    }
};


// 키워드 추가 
export const addKeyword = async (name) => {
    console.log("키워드 추가 POST 요청:", { name });
    try {
        const response = await axios.post(`${BASE_URL}/api/news/keyword`, { name });
        console.log("키워드 추가 성공:", response.data);
        return response.data;
    } catch (error) {
        console.log("키워드 추가 실패:", error);
        throw error;
    }
};

// 키워드 수정 
export const updateKeyword = async (keywordId, name) => {
    console.log("키워드 수정 PUT 요청:", { keywordId, name});
    try {
        const response = await axios.put(`${BASE_URL}/api/news/keyword/${keywordId}`, { name});
        console.log("키워드 수정 성공:", response.data);
        return response.data;
    } catch (error) {
        console.log("키워드 수정 실패:", error);
        throw error;
    }
};


// 키워드 삭제 
export const deleteKeyword = async (keywordId) => {
    console.log("키워드 삭제 DELETE 요청:", `${BASE_URL}/api/news/keyword/${keywordId}`);
    try {
        await axios.delete(`${BASE_URL}/api/news/keyword/${keywordId}`);
        console.log("키워드 삭제 성공: ID", keywordId);
        return true;
    } catch (error) {
        console.log("키워드 삭제 실패:", error);
        throw error;
    }
};