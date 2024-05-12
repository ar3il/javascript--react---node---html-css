import React, { useState } from "react";

export default function SingUp(props) {
    const handleCloseClick = () => {
        props.setShowSingUp(false);
    };

    const [username, setUser] = useState(null);

    return (
        <form>
            <div className="register-box-page1">
                <div className="input-register-box-page1">
                    <input type="text" id="username" name="username" placeholder="Username" onChange={(event) =>
                        setUser({ ...username, username: event.target.value })
                    } />
                    <span className="input-text1-register-box-page1">Enter at least 8 characters</span>
                    <p></p>
                    <input type="password" id="password" name="password" placeholder="Password" onChange={(event) =>
                        setUser({ ...username, password: event.target.value })
                    } />
                    <span className="input-text2-register-box-page1">Enter password between 8-12 characters</span>
                    <p></p>
                    <input type="email" id="email" name="email" placeholder="Email" onChange={(event) =>
                        setUser({ ...username, email: event.target.value })
                    } />
                    <span className="input-text3-register-box-page1">Your email is your only way to recover password. Keep it close to you. Make sure your email includes '@'.</span>
                </div>
                <button className="register-createuser-button-image-box-page1">Create User</button>
            </div>
            <button className="register-quit-button-image-box-page1" onClick={handleCloseClick}>Quit</button>
        </form>
    );
}