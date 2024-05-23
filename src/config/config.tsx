const API = "https://any-where-back.vercel.app";

// Em config.ts
export const propertyRegister = async (requestBody: any) => {
    try {
        const bodyForm = JSON.stringify(requestBody);
        const config = {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: bodyForm,
        };
        const response = await fetch(`${API}/accommodation`, config);
        
        if (!response.ok) {
            throw new Error('Failed to fetch. Status: ' + response.status);
        }

        return response;
    } catch (error) {
        console.error('Error sending data to API:', error);
        throw error; // Propagar o erro para o código que chamou essa função
    }
};
