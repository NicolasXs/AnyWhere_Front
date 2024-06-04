import axios from "axios";

const API = axios.create({
    baseURL: "https://any-where-back.vercel.app",
});

export const propertyRegister = async (requestBody: any) => {
    try {
        const response = await API.post('/accommodation', requestBody);
        return response.data; 
    } catch (error) {
        console.error("Error:", error); 
        throw error;
    }
};

export const createUser = async (requestBody: any) => {
    try {
        const response = await API.post('/users', requestBody);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};