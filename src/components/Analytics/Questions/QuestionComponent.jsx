import React from "react";
import Style from "./QuestionComponent.module.css";
export default function QuestionComponent({item}){
    return(
        <>
        <div><h1>{item.question}</h1></div>
        <div className={Style.Wrapper1}>
                <div className={Style.Card}>
                    <div className={Style.Details}>
                        <h1>{item[0]?.attemptedPeople?item[0]?.attemptedPeople:0}</h1>
                        <p className={Style.Text}>People Attempted the question</p>
                    </div>                    
                </div>
                <div className={Style.Card}>
                    <div className={Style.Details}>
                        <h1>{item[0]?.correctAnswered?item[0]?.correctAnswered:0}</h1>
                        <p className={Style.Text}>People Answered Correctly</p>
                    </div>                    
                </div>
                <div className={Style.Card}>
                    <div className={Style.Details}>
                        <h1>{item[0]?.incorrectAnswered?item[0]?.incorrectAnswered:0}</h1>
                        <p className={Style.Text}>People Answered Incorrectly</p>
                    </div>                    
                </div>                
            </div>
            
        </>
    )
}