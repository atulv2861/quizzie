import { securedAxiosInstance } from "../api";

export const deleteQuiz = async quizId => {    
    try {
      return await securedAxiosInstance.delete(`quiz/deleteQuiz/${quizId}`);
    } catch (error) {      
      return error.response;
    }
  };