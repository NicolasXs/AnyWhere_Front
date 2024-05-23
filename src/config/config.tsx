import axios from "axios";

const API = axios.create({
    baseURL: "https://any-where-back.vercel.app",
});

export const propertyRegister = async (requestBody: any) => {
    try {
        console.log("Request Body:", requestBody); 
        const response = await API.post('/accommodation', requestBody);
        console.log("Response Data:", response.data); 
        return response.data; 
    } catch (error) {
        console.error("Error:", error); 
        throw error;
    }
};
