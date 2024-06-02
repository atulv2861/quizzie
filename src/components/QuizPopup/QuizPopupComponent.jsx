import React, { useState } from "react";
import Style from "./QuizPopupComponent.module.css";
import { toast } from "react-toastify";
export default function QuizPopupComponent(
    {
        quizPopupPosition,
        setIsQuizPopupOpen,
        setIsCreateQuizPopupOpen,
        setQuizzieType,
        quizzieType,
        quizName,
        setQuizName
    }
){
    const [fieldErrors,setFieldErrors]=useState();
    const handleCancel=()=>{
        setIsQuizPopupOpen(false);
    }

    const handleContinue=()=>{
        const fieldErrors = {};
        if (!quizName?.trim()) {
            fieldErrors.quizName = true;
            toast.error("Quiz name is required!");
        }
        if (quizName?.length<3) {
            fieldErrors.quizName = true;
            toast.error("Quiz name should be minimum 3 characters!");
        }
        if (quizName?.length>100) {
            fieldErrors.quizName = true;
            toast.error("Quiz name should not be maximum 100 characters!");
        }
        if (Object.keys(fieldErrors).length > 0) {
            setFieldErrors(fieldErrors);
            return;
        }
        setIsQuizPopupOpen(false);
        setIsCreateQuizPopupOpen(()=>true)        
    }

    const handleQuizType=(value)=>{
        setQuizzieType(value);
    }

    
    const handleQuizName=(e)=>{
        setQuizName(e.target.value);
    }
    return(
        <div className={Style.Wrapper}
        style={{left:`${quizPopupPosition?.left}px`, top:`${quizPopupPosition?.top}px`}}>
            <div className={Style.InputContainer}>
                <input 
                type="text"
                placeholder="Quiz Name"
                value={quizName}
                onChange={handleQuizName}
                className={`${Style.InputBox} ${fieldErrors?.quizName && Style.ErrorMsg}`}/>
            </div>
            <div className={Style.BtnContainer}>
                <div className={Style.QuizHeading}>Quiz Type</div>
                <div className={Style.QuizType}>
                    <button className={`${Style.Btn} ${quizzieType==="Q&A"&&Style.BtnTextColor}`} onClick={e=>handleQuizType('Q&A')}>Q&A</button>
                    <button className={`${Style.Btn} ${quizzieType==="Poll_Type"&&Style.BtnTextColor}`} onClick={e=>handleQuizType('Poll_Type')}>Poll Type</button>
                </div>
            </div>
            <div className={Style.BtnContainer}>
            <button className={Style.Button} onClick={handleCancel}>Cancel</button>
            <button className={`${Style.Button} ${Style.BtnTextColor}`} onClick={handleContinue}>Continue</button>
            {/* <button disabled={quizName?false:true} className={`${Style.Button} ${Style.BtnTextColor}`} onClick={handleContinue}>Continue</button> */}
            </div>
        </div>
    )
}