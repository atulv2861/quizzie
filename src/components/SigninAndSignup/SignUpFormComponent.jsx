import React from "react";
import Style from "./SignUpFormComponent.module.css";
export default function SignUpFormComponent(){

    return(
        <div className={Style.FormWrapper}>
        <div className={Style.FieldWrapper}>
            <div className={Style.Label}>Name</div>
            <div><input className={Style.InputBox} type="text" value=""/></div>
        </div>
        <div className={Style.FieldWrapper}>
            <div className={Style.Label}>Email</div>
            <div><input className={Style.InputBox} type="text" value=""/></div>
        </div>
        <div className={Style.FieldWrapper}>
            <div className={Style.Label}>Password</div>
            <div><input className={Style.InputBox} style={{marginRight:"30px"}} type="text" value=""/></div>
        </div>
        <div className={Style.FieldWrapper}>
            <div className={Style.Label}>Confirm Password</div>
            <div><input className={Style.InputBox} style={{marginRight:"100px"}} type="text" value=""/></div>
        </div>
        <div>
            <button className={Style.Button}>Sign Up</button>
        </div>
        </div>
    )
}