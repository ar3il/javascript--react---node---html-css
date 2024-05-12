import React from "react";



export default function ForgotPass(props) {

    const handleCloseClick = () => {
        props.setShowForgotPass(false);
    };

    return (
        <form>
        <div className="forgotPass-box-page1">


                  <span >Follow the next setps to recover your password
                         Enter you email the system will send you the password make sure you 
                         fill in the correct email.have a safe  journey

                  </span>
            <div className="forgotPass-input-box-page1">
            
                <input type="email" id="email" name="email"  placeholder ="email" onChange={(event) => 
                        setUser({...username,email: event.target.value})
                }/>
                
                
            </div>

            <button className="forgotPass-confirm-button-page1" onClick={handleCloseClick}>
                Confirm
            </button>

            <button className="forgotPass-quit-button-page1" onClick={handleCloseClick}>
                Quit
            </button>
            
        </div>

        </form>
    );
}