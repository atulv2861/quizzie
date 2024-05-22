import React, { useEffect, useState } from "react";
import Style from "./CreateQuizComponent.module.css";
import del from "../../assets/delete.svg";
import cross from "../../assets/cross.svg";
export default function CreateQuizComponent({ setIsCreateQuizPopupOpen, setIsConfirmQuizPopupOpen, quizzieType }) {
    const [createQuizPopupPosition, setCreateQuizPopupPosition] = useState();
    const [questions, setQuestions] = useState([1]);
    const [noOfOptions, setNoOfOptions] = useState([1, 2]);
    const [optionType, setOptionType] = useState("text");
    const [selectedQuestion, setSelectedQuestion] = useState();
    const [selectedRadioBtn, setSelectedRadioBtn] = useState(null);
    const [timer,setTimer]=useState('Off');
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
        //setQuestionsDetails(prev => [...prev, {}])
        //setSelectedQuestion(noOfQuestions)
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
        // let updatedStory = storyDetails;        
        // updatedStory.splice(item - 1, 1);        
        // setStoryDetails(updatedStory)
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
    return (
        <div className={Style.Wrapper}
            style={{ left: `${createQuizPopupPosition?.left}px`, top: `${createQuizPopupPosition?.top}px` }}>
            <div className={Style.Heading}>
                <div className={Style.Questions}>
                    {questions && questions?.map((item, ind) => (
                        item <= 1 ?
                            <button key={ind}
                                className={Style.Slide}
                            // onClick={
                            //     (e) => {
                            //         setSelectedSlide(ind);
                            //         setisSelected(ind);
                            //     }}
                            >{item}</button> :
                            <button key={ind} className={Style.Slide} onClick={(e) => { setSelectedQuestion(ind); }}>{item}
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
                    className={Style.InputBox} />
            </div>
            <div className={Style.OptionTypeContainer}>
                <div className={Style.QuizHeading}>Option Type</div>
                <div className={Style.OptionType}>
                    <label>
                        <input type="radio" onChange={e => handleOptionType(e)} checked={optionType==="text"&&true} name="option-type" value="text" />
                        Text
                    </label>
                    <label>
                        <input type="radio" onChange={e => handleOptionType(e)} checked={optionType==="imageUrl"&&true} name="option-type" value="imageUrl" />
                        Image URL
                    </label>
                    <label>
                        <input type="radio" onChange={e => handleOptionType(e)} checked={optionType==="text-imageUrl"&&true} name="option-type" value="text-imageUrl" />
                        Text & Image URL
                    </label>

                </div>
            </div>
            {quizzieType === "Q&A" ? <div className={Style.Options}>
                {optionType === "text" && <div className={Style.AddOptions}>
                    {noOfOptions && noOfOptions?.map((item, indx) => (
                        item <= 2 ?
                            <div className="radio-label">
                                <input 
                                type="radio" 
                                style={{ color: "red" }} 
                                name="option" 
                                value={indx}
                                onChange={() => handleRadioChange(indx)}
                                checked={selectedRadioBtn === indx}
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Text"                                 
                                />
                            </div> :
                            <div className="radio-label">
                                 <input 
                                type="radio" 
                                style={{ color: "red" }} 
                                name="option" 
                                value={indx}
                                onChange={() => handleRadioChange(indx)}
                                checked={selectedRadioBtn === indx}
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Text"                                 
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
                {optionType === "imageUrl" && <div className={Style.AddOptions}>
                {noOfOptions && noOfOptions?.map((item, indx) => (
                        item <= 2 ?
                            <div className="radio-label">
                                 <input 
                                type="radio" 
                                style={{ color: "red" }} 
                                name="option" 
                                value={indx}
                                onChange={() => handleRadioChange(indx)}
                                checked={selectedRadioBtn === indx}
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Image Url"                                 
                                />
                            </div> :
                            <div className="radio-label">
                                 <input 
                                type="radio" 
                                style={{ color: "red" }} 
                                name="option" 
                                value={indx}
                                onChange={() => handleRadioChange(indx)}
                                checked={selectedRadioBtn === indx}
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Image Url"                                 
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
                {optionType === "text-imageUrl" && <div className={Style.AddOptions}>
                {noOfOptions && noOfOptions?.map((item, indx) => (
                        item <= 2 ?
                            <div className="radio-label">
                                <input 
                                type="radio" 
                                style={{ color: "red" }} 
                                name="option" 
                                value={indx}
                                onChange={() => handleRadioChange(indx)}
                                checked={selectedRadioBtn === indx}
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Text"                                 
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Image Url"                                 
                                />
                            </div> :
                            <div className="radio-label">
                               <input 
                                type="radio" 
                                style={{ color: "red" }} 
                                name="option" 
                                value={indx}
                                onChange={() => handleRadioChange(indx)}
                                checked={selectedRadioBtn === indx}
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Text"                                 
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Image Url"                                 
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
                    <div><button className={`${Style.TimerButton} ${timer==="Off"&&Style.TimerBtnColor}`} onClick={e=>handleTimer('Off')}>Off</button></div>
                    <div><button className={`${Style.TimerButton} ${timer==="5 Sec"&&Style.TimerBtnColor}`} onClick={e=>handleTimer('5 Sec')}>5 Sec</button></div>
                    <div><button className={`${Style.TimerButton} ${timer==="10 Sec"&&Style.TimerBtnColor}`} onClick={e=>handleTimer('10 Sec')}>10 Sec</button></div>
                </div>
            </div> : <div className={Style.Options} style={{ marginLeft: "10px" }}>                
                {optionType === "text" && <div className={Style.AddOptions}>
                    {noOfOptions && noOfOptions?.map((item, indx) => (
                        item <= 2 ?
                            <div className="radio-label">
                                <input 
                                type="radio" 
                                style={{ color: "red" }} 
                                name="option" 
                                value={indx}
                                onChange={() => handleRadioChange(indx)}
                                checked={selectedRadioBtn === indx}
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Text"                                 
                                />
                            </div> :
                            <div className="radio-label">
                                <input 
                                type="radio" 
                                style={{ color: "red" }} 
                                name="option" 
                                value={indx}
                                onChange={() => handleRadioChange(indx)}
                                checked={selectedRadioBtn === indx}
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Text"                                 
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
                {optionType === "imageUrl" && <div className={Style.AddOptions}>
                {noOfOptions && noOfOptions?.map((item, indx) => (
                        item <= 2 ?
                            <div className="radio-label">
                                <input 
                                type="radio" 
                                style={{ color: "red" }} 
                                name="option" 
                                value={indx}
                                onChange={() => handleRadioChange(indx)}
                                checked={selectedRadioBtn === indx}
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Image Url"                                 
                                />
                            </div> :
                            <div className="radio-label">
                                <input 
                                type="radio" 
                                style={{ color: "red" }} 
                                name="option" 
                                value={indx}
                                onChange={() => handleRadioChange(indx)}
                                checked={selectedRadioBtn === indx}
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Image Url"                                 
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
                {optionType === "text-imageUrl" && <div className={Style.AddOptions}>
                {noOfOptions && noOfOptions?.map((item, indx) => (
                        item <= 2 ?
                            <div className="radio-label">
                                <input 
                                type="radio" 
                                style={{ color: "red" }} 
                                name="option" 
                                value={indx}
                                onChange={() => handleRadioChange(indx)}
                                checked={selectedRadioBtn === indx}
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Text"                                 
                                />&nbsp;&nbsp;
                                 <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Image Url"                                 
                                />
                            </div> :
                            <div className="radio-label">
                                <input 
                                type="radio" 
                                style={{ color: "red" }} 
                                name="option" 
                                value={indx}
                                onChange={() => handleRadioChange(indx)}
                                checked={selectedRadioBtn === indx}
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Text"                                 
                                />&nbsp;&nbsp;
                                <input 
                                className={`${Style.RadioInputBox} ${selectedRadioBtn===indx&&Style.SelectedRadioBtn}`} 
                                type="text" 
                                placeholder="Image Url"                                 
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