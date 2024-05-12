import React, { useState } from "react";
import Registr from "./SingUp.jsx"; 
import ForgotPass from "./ForgotPass.jsx";



export default function EnterPage(props) {
    const [showRegistration, setShowRegistration] = useState(false);
    const [showForgotPass, setShowForgotPass] = useState(false);
   

    const handleForgotPassClick = () => {
        setShowForgotPass(true);
    };

    const handleLoginClick = () => {
        props.onLogin();
    };

    const handleClosePage = () => {
        window.close();
    };

    const handleRegistrationClick = () => {
        setShowRegistration(true);
    };

    

  


    return (
        <div className="game-screen">
            <video src={props.videobackground} autoPlay loop className="background-video-page1" muted />
            
                    
            <div className="login-input1-page1">
                <input type="text" id="username" name="username" placeholder="Username" />
            </div>

            <div className="login-input2-page1">
                <input type="password" id="password" name="password" placeholder="Password" />
            </div>

            <button className="login-button-page1" onClick={handleLoginClick}>
                Login
            </button>

            <button className="register-button-page1" onClick={handleRegistrationClick}>
                Register
            </button>

            <button className="forgotPass-button-page1" onClick={handleForgotPassClick}>
                Forgot your password???
            </button>

            <button className="Entry-quit-button-page1" onClick={handleClosePage}>
                Quit
            </button>

            {showForgotPass && <ForgotPass setShowForgotPass={setShowForgotPass} />}
            {showRegistration && <Registr setShowRegistration={setShowRegistration} />}

         
        </div>
    );
}
