import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./LiveQuizComponent.module.css";
import { useParams } from "react-router-dom";
import useQuiz from "../Hook/useQuiz";
import { useSelector } from "react-redux";
import CongratesComponent from "./CongratesComponent";
import { quizAssessment } from "../../Service/quiz/assessment";
export default function LiveQuizComponent() {
    const [questions, setQuestions] = useState(null);
    const [currQuestion, setCurrQuestion] = useState(0);
    const [liveQuizPopupPosition, setLiveQuizPopupPosition] = useState();
    const [selectedOption, setSelectedOption] = useState(null);
    const [questionAndOption, setQuestionAndOption] = useState([]);
    const [isCongratesPopupOpen, setIsCongratesPopupOpen] = useState(false);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(0);
    const { handleGetQuizById } = useQuiz();
    const { quizById } = useSelector(state => state.quiz);
    const { id } = useParams();

    useEffect(() => {
        const initial = async () => {
            await handleGetQuizById(id);
        }
        initial();
    }, []);

    useEffect(() => {
        if (quizById?.success === true)
            setQuestions(quizById?.quiz?.quizQuestions[currQuestion]);
        setTimer(quizById?.quiz?.quizQuestions[currQuestion]?.timer);
    }, [currQuestion, quizById]);

    const handleNext = () => {
        setSelectedOption(null);
        setCurrQuestion((currQuestion) => currQuestion + 1);
        setTimer(quizById?.quiz?.quizQuestions[currQuestion]?.timer);
    }

    const handleSubmit = async () => {
        console.log(questionAndOption);
        //navigate('/congrates');
        let obj1 = questionAndOption;
        let obj2 = quizById?.quiz?.quizQuestions;
        let result = null;
        let data = null;
        if (quizById?.quiz?.quizType === 'Q&A') {
            result = obj2
                .filter(item2 => obj1.some(item1 => item1.qId === item2._id))
                .map(item2 => {
                    const item1 = obj1.find(item1 => item1.qId === item2._id);
                    return {
                        _id: item2._id,
                        isCorrect: item1.option === item2.answer
                    };
                });
            console.log("==============================58")
            console.log(result)
            data = {
                quizId: quizById?.quiz?._id,
                quizType: quizById?.quiz?.quizType,
                assessment: result
            };

            const score = result.reduce((sum, item) => sum + (item.isCorrect ? 1 : 0), 0);
            setScore(score);
        }



        if (quizById?.quiz?.quizType === 'Poll_Type') {
            result = obj1.map(obj1Item => {
                const matchedObj2Item = obj2.find(obj2Item => obj2Item._id === obj1Item.qId);
                //if (matchedObj2Item) {
                const optionIndex = matchedObj2Item.options.indexOf(obj1Item.option);
                return {
                    _id: obj1Item.qId,
                    // option: obj1Item.option,
                    option: optionIndex !== -1 ? optionIndex+1 : 'Not found'
                };
                //} 
            });

            console.log("==============================81")
            console.log(result)
            data = {
                quizId: quizById?.quiz?._id,
                quizType: quizById?.quiz?.quizType,
                assessment: result
            };
        }

        let res = null;
     if(result.length>0)
         res=await quizAssessment(data);
     console.log(res)
    console.log("============================65")

    setIsCongratesPopupOpen(true);
    }

    

useEffect(() => {
    let left = (window.innerWidth - 600) / 2;
    let top = (window.innerHeight - 550) / 2;
    setLiveQuizPopupPosition({ left: left, top: top });
}, []);


let ref = useRef(null);
useEffect(() => {
    const initial = () => {
        if (timer == questions?.timer) {
            clearInterval(ref.current);
            ref.current = setInterval(() => {
                setTimer(prevSeconds => prevSeconds - 1);
            }, 1000);
            return () => clearInterval(ref.current);
        } else if (timer == 0) {
            setSelectedOption(null);
            setCurrQuestion((currQuestion) => currQuestion + 1);
            setTimer(quizById?.quiz?.quizQuestions[currQuestion]?.timer);

            if (quizById?.quiz?.quizQuestions?.length === currQuestion + 1) {
                handleSubmit();
            }
        }
        console.log(questions?.timer);
        if (questions?.timer <= 0)
            clearInterval(ref.current);
    }
    if (quizById?.quiz?.quizType === 'Q&A')
        initial();
}, [timer, quizById]);

const formatTimer = (sec) => {
    return sec < 10 ? `00:0${sec}` : `00:${sec}`;
};

const handleOptionSelection = (qId, indx) => {
    console.log(qId + "================" + indx)
    let data = { qId: qId, option: questions?.options[indx] };
    setQuestionAndOption([...questionAndOption, data]);
    setSelectedOption(indx);
}
//console.log(questions)
return (<>
    {isCongratesPopupOpen && <CongratesComponent score={score} />}
    {!isCongratesPopupOpen && <div className={Style.Wrapper}
        style={{ left: `${liveQuizPopupPosition?.left}px`, top: `${liveQuizPopupPosition?.top}px` }}>
        <>
            <div className={Style.Heading}>
                <div><h3>0{currQuestion + 1}/0{quizById?.quiz?.quizQuestions?.length}</h3></div>
                {quizById?.quiz?.quizType === "Q&A" && questions?.timer > 0 && <div>
                    <p style={{ color: "#FF5D01" }}>{formatTimer(timer)}s</p>
                </div>}
            </div>
            <div><h3>{questions?.question}</h3></div>
            <div className={Style.Wrapper1}>
                {questions?.optionType === "Text" && <>
                    {questions?.options?.map((item, indx) => (
                        <div className={`${Style.Card} ${selectedOption === indx && Style.SelectedOption}`}
                            onClick={e => handleOptionSelection(questions?._id, indx)}>
                            <div className={Style.Details}>
                                <p>{item}</p>
                            </div>
                        </div>
                    ))}
                </>}
                {questions?.optionType === "ImageUrl" && <>
                    {questions?.options?.map((item, indx) => (
                        <div className={Style.Card}>
                            <div className={Style.Details}>
                                <img src={item} alt="option" />
                            </div>
                        </div>
                    ))}
                </>}
                {questions?.optionType === "Text-ImageUrl" && <>
                    {questions?.options?.map((item, indx) => (
                        <div className={Style.Card}>
                            <div className={Style.Details}>
                                <p>{item?.option}</p>
                                <img src={item?.image} alt="option" />
                            </div>
                        </div>
                    ))}
                </>}
            </div>
        </>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            {quizById?.quiz?.quizQuestions?.length === currQuestion + 1 ?
                <button className={Style.Button} onClick={handleSubmit}>Submit</button> :
                <button className={Style.Button} onClick={handleNext}>Next</button>}
        </div>
    </div>}
</>
)
}