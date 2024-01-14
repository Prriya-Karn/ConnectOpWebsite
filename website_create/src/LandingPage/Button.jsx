import React from "react";
const dataButton = [
    {
        commonButton : "Get Started ➡"
    },
    {
        commonButton : "Book Your Free Session ➡"
    }
]
const Button = (props)=>{
    return(
        <>
        <div className="button">
        <button>{props.commonButton}</button>
        </div>
       
        </>
    )
}

export default Button;
export {dataButton};