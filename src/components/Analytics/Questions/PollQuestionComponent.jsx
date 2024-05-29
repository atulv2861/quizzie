import React from "react";
import Style from "./PollQuestionComponent.module.css";
export default function PollQuestionComponent({ item }) {
    return (
        <>
            <div><h1>{item.question}</h1></div>
            <div className={Style.Wrapper1}>
                <div className={Style.Card}>
                    <div className={Style.Details}>
                        <h1>{item[0]?.option1}</h1>
                        <p className={Style.Text}>Option1</p>
                    </div>
                </div>
                <div className={Style.Card}>
                    <div className={Style.Details}>
                        <h1>{item[0]?.option2}</h1>
                        <p className={Style.Text}>Option2</p>
                    </div>
                </div>
                <div className={Style.Card}>
                    <div className={Style.Details}>
                        <h1>{item[0]?.option3}</h1>
                        <p className={Style.Text}>Option3</p>
                    </div>
                </div>
                <div className={Style.Card}>
                    <div className={Style.Details}>
                        <h1>{item[0]?.option4}</h1>
                        <p className={Style.Text} >Option4</p>
                    </div>
                </div>
            </div>
            
        </>
    )
}