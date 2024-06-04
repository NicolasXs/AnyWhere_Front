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

// export const createUser = async (registerForm: { name: string; lastname: string; birthdate: string; email: string; phone: string; }) => {
//     const bodyForm = JSON.stringify(registerForm);
//     const config = {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: bodyForm,
//     };
//     const response = await fetch(`${API}/users`, config);
//     return response;
//   };