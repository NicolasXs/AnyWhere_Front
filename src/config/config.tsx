const API = "https://any-where-back.vercel.app/";

export const propertyRegister = async () => {
    const bodyForm = JSON.stringify();
    const config = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: bodyForm,
      };
  return await fetch(`${API}/property`, config);

}