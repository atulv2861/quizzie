import { securedAxiosInstance } from "../api";

export const getTrendingQuiz = async () => {    
    try {
      return await securedAxiosInstance.get(`quiz/getTrendingQuiz`);
    } catch (error) {      
      return error.response;
    }
  };