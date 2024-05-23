import axios from "axios";

const API = axios.create({
    baseURL: "https://any-where-back.vercel.app",

})

export const propertyRegister = async (requestBody: any) => {
    try {
        console.log(requestBody);
        const response = await API.post('/accommodation', requestBody);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}