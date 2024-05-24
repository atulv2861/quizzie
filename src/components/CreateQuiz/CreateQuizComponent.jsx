import React, { useEffect, useState } from "react";
import Style from "./CreateQuizComponent.module.css";
import del from "../../assets/delete.svg";
import cross from "../../assets/cross.svg";
export default function CreateQuizComponent({ setIsCreateQuizPopupOpen, setIsConfirmQuizPopupOpen, quizzieType }) {
    const [createQuizPopupPosition, setCreateQuizPopupPosition] = useState();
    const [questions, setQuestions] = useState([1]);
    const [noOfOptions, setNoOfOptions] = useState([1, 2]);
    const [optionType, setOptionType] = useState("Text");
    const [selectedQuestion, setSelectedQuestion] = useState(0);
    const [selectedRadioBtn, setSelectedRadioBtn] = useState(null);
    const [quizQuestions, setQuizQuestions] = useState([
        { question: '', optionType: '', options: [], answer: '', timer: 0 }
      ]);
    const [timer,setTimer]=useState('0');
  const handleRadioChange = (indx) => {    
    setSelectedRadioBtn(indx);
  };

    const handleCancel = () => {
        setIsCreateQuizPopupOpen(false);

    }

    const handleCreateQuiz = () => {
        setIsCreateQuizPopupOpen(false);
        setIsConfirmQuizPopupOpen(true);

    }
    useEffect(() => {
        let left = (window.innerWidth - 700) / 2;
        let top = (window.innerHeight - 550) / 2;
        setCreateQuizPopupPosition({ left: left, top: top });
        
    }, [])

    const addQuestions = () => {
        const noOfQuestions = questions.length;
        setQuestions([...questions, noOfQuestions + 1]);
        setQuizQuestions(prev => [...prev, { question: '', optionType: '', options: ["",""], answer: '', timer: 0 }])
        setSelectedQuestion(noOfQuestions)
        setNoOfOptions([1,2]);
        setSelectedRadioBtn(null);
        setTimer('0');
    }

    const handleOptionType = (e) => {        
        setOptionType(e.target.value);
    }

    const handleRemoveQuestions = (item, e) => {
        e.preventDefault();
        e.stopPropagation();
        const remaningQuestions = questions.filter(value => value !== item);
        setQuestions(remaningQuestions);
        if (item - 1 <= selectedQuestion) {
            setSelectedQuestion(prev => prev - 1);
        }
         let updatedQuestion = quizQuestions;        
         updatedQuestion.splice(item - 1, 1);        
         setQuizQuestions(updatedQuestion);
         console.log(updatedQuestion)
    }

    const handleAddOptions = () => {
        const noOfOption = noOfOptions.length;
        setNoOfOptions([...noOfOptions, noOfOption + 1]);
    }

    const handleRemoveOptions = (item,e) => {
        e.preventDefault();
        e.stopPropagation();
        const remaningOptions = noOfOptions.filter(value => value !== item);
        setNoOfOptions(remaningOptions);
    }

    const handleTimer=(value)=>{
        setTimer(value);
    }

    useEffect(()=>{
        const values = [...quizQuestions];
        values[selectedQuestion]['optionType'] = 'Text';
        setQuizQuestions(values);
    },[questions]);
    const handleQuizQuestionChange = (indx,e) => {
        const values = [...quizQuestions];
        console.log(e.target.name)
        if (e.target.name === "options") {
          values[selectedQuestion].options[indx] = e.target.value;
        } else if (e.target.name === "answer") {
            values[selectedQuestion][e.target.name] = values[selectedQuestion].options[indx];
        } else{
          values[selectedQuestion][e.target.name] = e.target.value;
        }
        console.log(values)
        setQuizQuestions(values);
        console.log(quizQuestions)
      };


    return (
        <div className={Style.Wrapper}
            style={{ left: `${createQuizPopupPosition?.left}px`, top: `${createQuizPopupPosition?.top}px` }}>
            <div className={Style.Heading}>
                <div className={Style.Questions}>
                    {questions && questions?.map((item, indx) => (
                        item <= 1 ?
                            <button key={indx}
                                className={Style.Slide}
                             onClick={
                                 (e) => {
                                    setSelectedQuestion(indx);
                            //         setisSelected(ind);
                                 }}
                            >{indx+1}</button> :
                            <button key={indx} className={Style.Slide} onClick={(e) => { setSelectedQuestion(indx); }}>{indx+1}
                                <img
                                    src={cross}
                                    onClick={(e) => handleRemoveQuestions(item, e)}
                                    className={Style.Close}
                                    alt=""
                                />
                            </button>
                    ))}
                    {questions && questions.length < 5 &&
                        <button className={Style.AddQuestion} onClick={() => addQuestions()}>+</button>
                    }
                </div>
                <div style={{ marginRight: "50px" }}><h2>Max 5 Questions</h2></div>
            </div>
            <div className={Style.InputContainer}>
                <input
                    type="text"
                    placeholder="Poll Question"
                    className={Style.InputBox} 
                    name="question"  
                    value={quizQuestions[selectedQuestion]?.question}
                    onChange={e=>handleQuizQuestionChange(0,e)}                  
                    />
            </div>
            <div className={Style.OptionTypeContainer}>
                <div className={Style.QuizHeading}>Option Type</div>
                <div className={Style.OptionType}>
                    <label>
                        <input type="radio" 
                        onChange={e => {handleOptionType(e);handleQuizQuestionChange(0,e)}} checked={optionType==="Text"&&true} name="optionType" value="Text" />
                        Text
                    </label>
                    <label>
                        <input type="radio" onChange={e => {handleOptionType(e);handleQuizQuestionChange(0,e)}} checked={optionType==="ImageUrl"&&true} name="optionType" value="ImageUrl" />
                        Image URL
                    </label>
                    <label>
                        <input type="radio" onChange={e => {handleOptionType(e);handleQuizQuestionChange(0,e)}} checked={optionType==="Text_ImageUrl"&&true} name="optionType" value="Text_ImageUrl" />
                        Text & Image URL
                    </label>

                </div>
            </div>
            {quizzieType === "Q&A" ? <div className={Style.Options}>
                {optionType === "Text" && <div className={Style.AddOptions}>
                    {noOfOptions && noOfOptions?.map((item, indx) => (
                        item <= 2 ?
                            <div className="radio-label">
                                <input 
                                type="radio" 
                                style={{ color: "red" }} 
                                name="answer"                                
                                value={indx}
                                onChange={(e) => {handleRadioChange(indx);handleQuizQuestionChange(indx,e)}}
                                checked={selectedRadioBtn === indx}
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn==indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Text"  
                                name="options"  
                                value={quizQuestions[selectedQuestion]?.options[indx]} 
                                onChange={e=>handleQuizQuestionChange(indx,e)}                            
                                />
                            </div> :
                            <div className="radio-label">
                                 <input 
                                type="radio" 
                                style={{ color: "red" }} 
                                name="answer" 
                                value={indx}
                                onChange={(e) => {handleRadioChange(indx);handleQuizQuestionChange(indx,e)}}
                                checked={selectedRadioBtn === indx}
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Text"   
                                name="options"  
                                value={quizQuestions[selectedQuestion]?.options[indx]} 
                                onChange={e=>handleQuizQuestionChange(indx,e)}                               
                                />
                                <img 
                                src={del} 
                                onClick={e=>handleRemoveOptions(item,e)}
                                style={{ marginLeft: "10px", alignItems: "center" }} alt="" />
                            </div>
                    ))}
                    {noOfOptions && noOfOptions.length < 4 &&
                        <div style={{ marginLeft: "20px" }}>
                        <button 
                        onClick={e=>handleAddOptions()}
                        className={Style.AddOptionButton} >Add Option</button>
                    </div>
                    }
                   
                </div>}
                {optionType === "ImageUrl" && <div className={Style.AddOptions}>
                {noOfOptions && noOfOptions?.map((item, indx) => (
                        item <= 2 ?
                            <div className="radio-label">
                                 <input 
                                type="radio" 
                                style={{ color: "red" }} 
                                name="answer"                                
                                value={indx}
                                onChange={(e) => {handleRadioChange(indx);handleQuizQuestionChange(indx,e)}}
                                checked={selectedRadioBtn === indx}
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Image Url" 
                                name="options"  
                                value={quizQuestions[selectedQuestion]?.options[indx]} 
                                onChange={e=>handleQuizQuestionChange(indx,e)}                                 
                                />
                            </div> :
                            <div className="radio-label">
                                 <input 
                                type="radio" 
                                style={{ color: "red" }} 
                                name="answer"                                
                                value={indx}
                                onChange={(e) => {handleRadioChange(indx);handleQuizQuestionChange(indx,e)}}
                                checked={selectedRadioBtn === indx}
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Image Url"  
                                name="options"  
                                value={quizQuestions[selectedQuestion]?.options[indx]} 
                                onChange={e=>handleQuizQuestionChange(indx,e)}                                
                                />
                                <img 
                                src={del} 
                                onClick={e=>handleRemoveOptions(item,e)}
                                style={{ marginLeft: "10px", alignItems: "center" }} alt="" />
                            </div>
                    ))}
                    {noOfOptions && noOfOptions.length < 4 &&
                        <div style={{ marginLeft: "20px" }}>
                        <button 
                        onClick={e=>handleAddOptions()}
                        className={Style.AddOptionButton} >Add Option</button>
                    </div>
                    }                    
                </div>}
                {optionType === "Text_ImageUrl" && <div className={Style.AddOptions}>
                {noOfOptions && noOfOptions?.map((item, indx) => (
                        item <= 2 ?
                            <div className="radio-label">
                                <input 
                                type="radio" 
                                style={{ color: "red" }} 
                                name="answer"                                
                                value={indx}
                                onChange={(e) => {handleRadioChange(indx);handleQuizQuestionChange(indx,e)}}
                                checked={selectedRadioBtn === indx}
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Text"  
                                name="options"  
                                value={quizQuestions[selectedQuestion]?.options[indx]} 
                                onChange={e=>handleQuizQuestionChange(indx,e)}                                
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Image Url"   
                                name="options"  
                                value={quizQuestions[selectedQuestion]?.options[indx]} 
                                onChange={e=>handleQuizQuestionChange(indx,e)}                               
                                />
                            </div> :
                            <div className="radio-label">
                               <input 
                                type="radio" 
                                style={{ color: "red" }} 
                                name="answer"                                
                                value={indx}
                                onChange={(e) => {handleRadioChange(indx);handleQuizQuestionChange(indx,e)}}
                                checked={selectedRadioBtn === indx}
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Text"  
                                name="options"  
                                value={quizQuestions[selectedQuestion]?.options[indx]} 
                                onChange={e=>handleQuizQuestionChange(indx,e)}                                
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Image Url" 
                                name="options"  
                                value={quizQuestions[selectedQuestion]?.options[indx]} 
                                onChange={e=>handleQuizQuestionChange(indx,e)}                                 
                                />
                                <img 
                                src={del} 
                                onClick={e=>handleRemoveOptions(item,e)}
                                style={{ marginLeft: "10px", alignItems: "center" }} alt="" />
                            </div>
                    ))}
                    {noOfOptions && noOfOptions.length < 4 &&
                        <div style={{ marginLeft: "20px" }}>
                        <button 
                        onClick={e=>handleAddOptions()}
                        className={Style.AddOptionButton} >Add Option</button>
                    </div>
                    }                    
                </div>}
                <div className={Style.Timer}>
                    <div>Timer</div>
                    <div><button 
                    className={`${Style.TimerButton} ${timer==="0"&&Style.TimerBtnColor}`} 
                    onClick={e=>{handleTimer('0'); handleQuizQuestionChange(0,e)}} name="timer" value="0">Off</button></div>
                    <div><button 
                    className={`${Style.TimerButton} ${timer==="5"&&Style.TimerBtnColor}`} 
                    onClick={e=>{handleTimer('5'); handleQuizQuestionChange(0,e)}} name="timer" value="5">5 Sec</button></div>
                    <div><button 
                    className={`${Style.TimerButton} ${timer==="10"&&Style.TimerBtnColor}`} 
                    onClick={e=>{handleTimer('10'); handleQuizQuestionChange(0,e)}} name="timer" value="10">10 Sec</button></div>
                </div>
            </div> : <div className={Style.Options} style={{ marginLeft: "10px" }}>                
                {optionType === "Text" && <div className={Style.AddOptions}>
                    {noOfOptions && noOfOptions?.map((item, indx) => (
                        item <= 2 ?
                            <div className="radio-label">
                                <input 
                                type="radio" 
                                style={{ color: "red" }} 
                                name="answer"                                
                                value={indx}
                                onChange={(e) => {handleRadioChange(indx);handleQuizQuestionChange(indx,e)}}
                                checked={selectedRadioBtn === indx}
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Text"   
                                name="options"  
                                value={quizQuestions[selectedQuestion]?.options[indx]} 
                                onChange={e=>handleQuizQuestionChange(indx,e)}                               
                                />
                            </div> :
                            <div className="radio-label">
                                <input 
                                type="radio" 
                                style={{ color: "red" }} 
                                name="answer"                                
                                value={indx}
                                onChange={(e) => {handleRadioChange(indx);handleQuizQuestionChange(indx,e)}}
                                checked={selectedRadioBtn === indx}
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Text"  
                                name="options"  
                                value={quizQuestions[selectedQuestion]?.options[indx]} 
                                onChange={e=>handleQuizQuestionChange(indx,e)}                                
                                />
                                <img 
                                src={del} 
                                onClick={e=>handleRemoveOptions(item,e)}
                                style={{ marginLeft: "10px", alignItems: "center" }} alt="" />
                            </div>
                    ))}
                    {noOfOptions && noOfOptions.length < 4 &&
                        <div style={{ marginLeft: "20px" }}>
                        <button 
                        onClick={e=>handleAddOptions()}
                        className={Style.AddOptionButton} >Add Option</button>
                    </div>
                    }
                </div>}
                {optionType === "ImageUrl" && <div className={Style.AddOptions}>
                {noOfOptions && noOfOptions?.map((item, indx) => (
                        item <= 2 ?
                            <div className="radio-label">
                                <input 
                                type="radio" 
                                style={{ color: "red" }} 
                                name="answer"                                
                                value={indx}
                                onChange={(e) => {handleRadioChange(indx);handleQuizQuestionChange(indx,e)}}
                                checked={selectedRadioBtn === indx}
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Image Url"    
                                name="options"  
                                value={quizQuestions[selectedQuestion]?.options[indx]} 
                                onChange={e=>handleQuizQuestionChange(indx,e)}                              
                                />
                            </div> :
                            <div className="radio-label">
                                <input 
                                type="radio" 
                                style={{ color: "red" }} 
                                name="answer"                                
                                value={indx}
                                onChange={(e) => {handleRadioChange(indx);handleQuizQuestionChange(indx,e)}}
                                checked={selectedRadioBtn === indx}
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Image Url"
                                name="options"  
                                value={quizQuestions[selectedQuestion]?.options[indx]} 
                                onChange={e=>handleQuizQuestionChange(indx,e)}                                  
                                />
                                <img 
                                src={del} 
                                onClick={e=>handleRemoveOptions(item,e)}
                                style={{ marginLeft: "10px", alignItems: "center" }} alt="" />
                            </div>
                    ))}
                    {noOfOptions && noOfOptions.length < 4 &&
                        <div style={{ marginLeft: "20px" }}>
                        <button 
                        onClick={e=>handleAddOptions()}
                        className={Style.AddOptionButton} >Add Option</button>
                    </div>
                    }
                </div>}
                {optionType === "Text_ImageUrl" && <div className={Style.AddOptions}>
                {noOfOptions && noOfOptions?.map((item, indx) => (
                        item <= 2 ?
                            <div className="radio-label">
                                <input 
                                type="radio" 
                                style={{ color: "red" }} 
                                name="answer"                                
                                value={indx}
                                onChange={(e) => {handleRadioChange(indx);handleQuizQuestionChange(indx,e)}}
                                checked={selectedRadioBtn === indx}
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Text"   
                                name="options"  
                                value={quizQuestions[selectedQuestion]?.options[indx]} 
                                onChange={e=>handleQuizQuestionChange(indx,e)}                               
                                />&nbsp;&nbsp;
                                 <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Image Url"  
                                name="options"  
                                value={quizQuestions[selectedQuestion]?.options[indx]} 
                                onChange={e=>handleQuizQuestionChange(indx,e)}                                
                                />
                            </div> :
                            <div className="radio-label">
                                <input 
                                type="radio" 
                                style={{ color: "red" }} 
                                name="answer"                                
                                value={indx}
                                onChange={(e) => {handleRadioChange(indx);handleQuizQuestionChange(indx,e)}}
                                checked={selectedRadioBtn === indx}
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Text"   
                                name="options"  
                                value={quizQuestions[selectedQuestion]?.options[indx]} 
                                onChange={e=>handleQuizQuestionChange(indx,e)}                               
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Image Url"  
                                name="options"  
                                value={quizQuestions[selectedQuestion]?.options[indx]} 
                                onChange={e=>handleQuizQuestionChange(indx,e)}                                
                                />
                                <img 
                                src={del} 
                                onClick={e=>handleRemoveOptions(item,e)}
                                style={{ marginLeft: "10px", alignItems: "center" }} alt="" />
                            </div>
                    ))}
                    {noOfOptions && noOfOptions.length < 4 &&
                        <div style={{ marginLeft: "20px" }}>
                        <button 
                        onClick={e=>handleAddOptions()}
                        className={Style.AddOptionButton} >Add Option</button>
                    </div>
                    }                    
                </div>}
            </div>}
            <div className={Style.CancelnCreateBtn}>
                <button className={Style.Button} onClick={handleCancel}>Cancel</button>
                <button className={Style.Button} style={{ background: "#60B84B", color: "white" }} onClick={handleCreateQuiz}>Create Quiz</button>
            </div>
        </div>
    )
}