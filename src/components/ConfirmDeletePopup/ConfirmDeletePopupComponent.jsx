import React, { useEffect, useState } from "react";
import Style from "./ConfirmDeletePopupComponent.module.css";
import cross from "../../assets/cross.svg"
import { toast } from "react-toastify";
export default function ConfirmDeletePopupComponent({ setIsConfirmDeletePopupOpen }) {
    const [confirmQuizPopupPosition, setConfirmQuizPopupPosition] = useState();

    const handleCancel = () => {
        setIsConfirmDeletePopupOpen(false);
    }

    const handleDelete = () => {
       
        toast.success('Deleted!');
    }
    
    useEffect(() => {
        let left = (window.innerWidth - 450) / 2;
        let top = (window.innerHeight - 200) / 2;
        setConfirmQuizPopupPosition({ left: left, top: top });
    }, [])
    return (
        <div className={Style.Wrapper}
            style={{ left: `${confirmQuizPopupPosition?.left}px`, top: `${confirmQuizPopupPosition?.top}px` }}>
           
            <div className={Style.DeleteConfirmation}>
                <div className={Style.Message}>
                    <h2>Are you confirm you want to delete?</h2>
                </div>
                <div className={Style.CancelnDeleteBtn}>                
                <button className={Style.Button} style={{ background: "#FF4B4B", color: "white" }} onClick={handleDelete}>Confirm Delete</button>
                <button className={Style.Button} onClick={handleCancel}>Cancel</button>
            </div>
            </div>
        </div>
    )
}