import React from "react";
import Style from "./SignUpFormComponent.module.css";
export default function SignUpFormComponent(){

    return(
        <div className={Style.FormWrapper}>
        <div className={Style.FieldWrapper}>
            <div>Name</div>
            <div><input/></div>
        </div>
        <div className={Style.FieldWrapper}>
            <div>Email</div>
            <div><input/></div>
        </div>
        <div className={Style.FieldWrapper}>
            <div>Password</div>
            <div><input/></div>
        </div>
        <div className={Style.FieldWrapper}>
            <div>Confirm Password</div>
            <div><input/></div>
        </div>
        <div>
            <button>Sign Up</button>
        </div>
        </div>
    )
}