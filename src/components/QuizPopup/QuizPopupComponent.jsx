import React, { useState } from "react";
import Style from "./QuizPopupComponent.module.css";
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
    
    const handleCancel=()=>{
        setIsQuizPopupOpen(false);
    }

    const handleContinue=()=>{
        setIsQuizPopupOpen(false);
        setIsCreateQuizPopupOpen(true)        
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
                className={Style.InputBox}/>
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
            <button disabled={quizName?false:true} className={`${Style.Button} ${Style.BtnTextColor}`} onClick={handleContinue}>Continue</button>
            </div>
        </div>
    )
}