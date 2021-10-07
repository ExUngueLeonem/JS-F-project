import React from "react";
import './errorMessage.css'
import img from './error.jpeg'

const ErrorMessage = () => {
    return (
        <>
            {/* <img src={process.env.PUBLIC_URL + '/img/error.jpeg'} alt="error"></img> */}
            <img src={img} alt="error"></img>
            <span>Something goes wrong</span>
        </>
    )
}

export default ErrorMessage;