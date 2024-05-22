import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./LiveQuizComponent.module.css";
export default function LiveQuizComponent() {
    const [questions, setQuestions] = useState([1]);
    const [currQuestion, setCurrQuestion] = useState(0);
    const [liveQuizPopupPosition, setLiveQuizPopupPosition] = useState();
    const [quizType, setQuizType] = useState("!Q&A");
    const [timer, setTimer] = useState(5);
    const quizQuestion = [
        { qno: "1", question: "1. Your question text comes here, its a sample text.", optionType: "text", options: { option1: "abc", option2: "bcd", option3: "cde", option4: "def" } },
        { qno: "2", question: "2. Your question text comes here, its a sample text.", optionType: "imageUrl", options: { option1: "abc", option2: "bcd", option3: "cde", option4: "def" } },
        { qno: "3", question: "3. Your question text comes here, its a sample text.", optionType: "text-imageUrl", options: { option1: "abc", option2: "bcd", option3: "cde", option4: "def" } },
        { qno: "4", question: "4. Your question text comes here, its a sample text.", optionType: "text", options: { option1: "abc", option2: "bcd", option3: "cde", option4: "def" } },
        { qno: "5", question: "5. Your question text comes here, its a sample text.", optionType: "text", options: { option1: "abc", option2: "bcd", option3: "cde", option4: "def" } }]
    const navigate = useNavigate();

    useEffect(() => {
        setQuestions([quizQuestion[currQuestion]]);
    }, [currQuestion]);

    const handleNext = () => {
        setCurrQuestion(currQuestion + 1);        
        setTimer(5);
    }

    const handleSubmit = () => {
        navigate('/congrates');
    }
    useEffect(() => {
        let left = (window.innerWidth - 600) / 2;
        let top = (window.innerHeight - 550) / 2;
        setLiveQuizPopupPosition({ left: left, top: top });
    }, []);

    

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prevSeconds => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(interval); 
    }else{
        setCurrQuestion(currQuestion + 1);       
        setTimer(5);
        if(quizQuestion?.length === currQuestion + 1){
            navigate('/congrates');
        }
        
    }
  }, [timer]);

  const formatTimer = (sec) => {
    return sec < 10 ? `00:0${sec}` : `00:${sec}`;
  };

    return (
        <div className={Style.Wrapper}
            style={{ left: `${liveQuizPopupPosition?.left}px`, top: `${liveQuizPopupPosition?.top}px` }}>
            {questions.map((item, indx) => (
                <>
                    <div className={Style.Heading}>
                        <div><h3>0{item?.qno}/0{quizQuestion?.length}</h3></div>
                        {quizType==="Q&A"&&<div>
                            <p style={{ color: "#FF5D01" }}>{formatTimer(timer)}s</p>
                        </div>}
                    </div>
                    <div><h3>{item?.question}</h3></div>
                    <div className={Style.Wrapper1}>
                        {item?.optionType === "text" && <>
                            <div>
                                <div className={Style.Card}>
                                    <div className={Style.Details}>
                                        <p>{item?.options?.option1}</p>
                                    </div>
                                </div>
                                <div className={Style.Card}>
                                    <div className={Style.Details}>
                                        <p>{item?.options?.option2}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={Style.Card}>
                                    <div className={Style.Details}>
                                        <p>{item?.options?.option3}</p>
                                    </div>
                                </div>
                                <div className={Style.Card}>
                                    <div className={Style.Details}>
                                        <p>{item?.options?.option4}</p>
                                    </div>
                                </div>
                            </div>
                        </>}
                        {item?.optionType === "imageUrl" && <>
                            <div>
                                <div className={Style.Card}>
                                    <div className={Style.Details}>
                                        <img src={item?.options?.option1} alt="" />
                                    </div>
                                </div>
                                <div className={Style.Card}>
                                    <div className={Style.Details}>
                                        <img src={item?.options?.option2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={Style.Card}>
                                    <div className={Style.Details}>
                                        <img src={item?.options?.option3} alt="" />
                                    </div>
                                </div>
                                <div className={Style.Card}>
                                    <div className={Style.Details}>
                                        <img src={item?.options?.option4} alt="" />
                                    </div>
                                </div>
                            </div>
                        </>}
                        {item?.optionType === "text-imageUrl" && <>
                            <div>
                                <div className={Style.Card}>
                                    <div className={Style.Details}>
                                    <p>{item?.options?.option1}</p>
                                        <img src={item?.options?.option1} alt="" />
                                    </div>
                                </div>
                                <div className={Style.Card}>
                                    <div className={Style.Details}>
                                    <p>{item?.options?.option2}</p>
                                        <img src={item?.options?.option2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={Style.Card}>
                                    <div className={Style.Details}>
                                    <p>{item?.options?.option3}</p>
                                        <img src={item?.options?.option3} alt="" />
                                    </div>
                                </div>
                                <div className={Style.Card}>
                                    <div className={Style.Details}>
                                    <p>{item?.options?.option4}</p>
                                        <img src={item?.options?.option4} alt="" />
                                    </div>
                                </div>
                            </div>
                        </>}
                    </div>
                </>
            ))}
            <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                {quizQuestion?.length === currQuestion + 1 ?
                    <button className={Style.Button} onClick={handleSubmit}>Submit</button> :
                    <button className={Style.Button} onClick={handleNext}>Next</button>}
            </div>
        </div>
    )
}