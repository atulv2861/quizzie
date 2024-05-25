import { securedAxiosInstance } from "../api";

export const logoutUser = async (userId) => {    
    try {
      return await securedAxiosInstance.post(`user/userLogout/${userId}`);
    } catch (error) {      
      return error.response;
    }
  };