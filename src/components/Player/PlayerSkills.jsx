import React, { useState } from "react";

export default function PlayerSkills(props) {
    const [isWindowOpen, setIsWindowOpen] = useState(false); 

    const handleSkillsClick = () => {
        setIsWindowOpen(!isWindowOpen); 
    };

    return (
        <div className="player-skills" onClick={handleSkillsClick}>
            <img src={props.attackSkills} alt="Player Skills" />
           
            {isWindowOpen && (
                <div className="modal" onClick={handleSkillsClick}> 
                    <div className="modal-content" > 
                        <h2>Inventory</h2>
                       
                    </div>
                </div>
            )}
        </div>
    );
}