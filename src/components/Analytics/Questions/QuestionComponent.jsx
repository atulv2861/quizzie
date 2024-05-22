import React from "react";
import Style from "./QuestionComponent.module.css";
export default function QuestionComponent({item}){

    return(
        <>
        <div><h1>Question {item}</h1></div>
        <div className={Style.Wrapper1}>
                <div className={Style.Card}>
                    <div className={Style.Details}>
                        <h1>12</h1>
                        <p className={Style.Text}>People Attempted the question</p>
                    </div>                    
                </div>
                <div className={Style.Card}>
                    <div className={Style.Details}>
                        <h1>110</h1>
                        <p className={Style.Text}>People Answered Correctly</p>
                    </div>                    
                </div>
                <div className={Style.Card}>
                    <div className={Style.Details}>
                        <h1>989</h1>
                        <p className={Style.Text}>People Answered Incorrectly</p>
                    </div>                    
                </div>                
            </div>
            <hr style={{width:"82%", marginRight:"400px", marginBottom:"40px", size:"16", color:"black"}}/>
        </>
    )
}