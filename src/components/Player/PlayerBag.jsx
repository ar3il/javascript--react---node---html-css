import React, { useState } from "react";

export default function PlayerBag(props) {
    const [isWindowOpen, setIsWindowOpen] = useState(false); 

    const handleBagClick = () => {
        setIsWindowOpen(!isWindowOpen); 
    };

    return (
        <div className="player-bag" onClick={handleBagClick}>
            <img src={props.inventory} alt="Player Bag" />
           
            {isWindowOpen && (
                <div className="modal" onClick={handleBagClick}> 
                    <div className="modal-content" > 
                        <h2>Inventory</h2>
                       
                    </div>
                </div>
            )}
        </div>
    );
}