import React, { useState } from "react";

export default function PlayerStats(props) {
    const [isWindowOpen, setIsWindowOpen] = useState(false); 

    const handleStatsClick = () => {
        setIsWindowOpen(!isWindowOpen); 
    };

    return (
        <div className="player-stats" onClick={handleStatsClick}>
            <img src={props. statsPoint} alt="Player Stats" />
           
            {isWindowOpen && (
                <div className="modal" onClick={handleStatsClick}> 
                    <div className="modal-content" > 
                        <h2>Inventory</h2>
                       
                    </div>
                </div>
            )}
        </div>
    );
}