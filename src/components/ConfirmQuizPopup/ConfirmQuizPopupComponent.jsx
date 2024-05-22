import React, { useEffect, useState } from "react";
import Style from "./ConfirmQuizPopupComponent.module.css";
import cross from "../../assets/cross.svg"
import { toast } from "react-toastify";
export default function ConfirmQuizPopupComponent({ setIsConfirmQuizPopupOpen }) {
    const [confirmQuizPopupPosition, setConfirmQuizPopupPosition] = useState();

    const handleClose = () => {
        setIsConfirmQuizPopupOpen(false);
    }

    const handleShareQuiz = () => {
        navigator.clipboard.writeText('https://quizzie-5wrf.onrender.com/live-quiz');
        toast.success('Link copied to clipboard');
    }

    useEffect(() => {
        let left = (window.innerWidth - 450) / 2;
        let top = (window.innerHeight - 270) / 2;
        setConfirmQuizPopupPosition({ left: left, top: top });
    }, [])
    return (
        <div className={Style.Wrapper}
            style={{ left: `${confirmQuizPopupPosition?.left}px`, top: `${confirmQuizPopupPosition?.top}px` }}>
            <div className={Style.CloseBtn}>
                <img alt="img" src={cross} style={{width:"30px", height:"30px"}} onClick={handleClose} />
            </div>
            <div className={Style.QuizConfirmation}>
                <div className={Style.Message}>
                    <h2>Congrates your Quiz is Published!</h2>
                </div>
                <div className={Style.QuizLink}>
                    Your link is here
                </div>
                <div>
                    <button className={Style.ShareButton} onClick={handleShareQuiz}>Share</button>
                </div>
            </div>
        </div>
    )
}