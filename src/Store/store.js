import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slice/UserSlice";
import QuizSlice from "./Slice/QuizSlice";
export const store = configureStore({
    reducer: {        
        user:userSlice,
        quiz:QuizSlice
    }
});