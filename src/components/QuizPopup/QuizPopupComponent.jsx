import React, { useState } from "react";
import Style from "./QuizPopupComponent.module.css";
export default function QuizPopupComponent(
    {
        quizPopupPosition,
        setIsQuizPopupOpen,
        setIsCreateQuizPopupOpen,
        setQuizzieType,
        quizzieType
    }
){
    const [quizName,setQuizName]=useState();
    const handleCancel=()=>{
        setIsQuizPopupOpen(false);
    }

    const handleContinue=()=>{
        setIsQuizPopupOpen(false);
        setIsCreateQuizPopupOpen(true)
    }

    const handleQuizType=(e)=>{
        setQuizzieType(e.target.innerText);
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
                    <button className={`${Style.Btn} ${quizzieType==="Q&A"&&Style.BtnTextColor}`} onClick={handleQuizType}>Q&A</button>
                    <button className={`${Style.Btn} ${quizzieType==="Poll Type"&&Style.BtnTextColor}`} onClick={handleQuizType}>Poll Type</button>
                </div>
            </div>
            <div className={Style.BtnContainer}>
            <button className={Style.Button} onClick={handleCancel}>Cancel</button>
            <button className={`${Style.Button} ${Style.BtnTextColor}`} onClick={handleContinue}>Continue</button>
            </div>
        </div>
    )
}