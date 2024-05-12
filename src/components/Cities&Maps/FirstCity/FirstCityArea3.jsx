import React from "react";
import Monsters3 from "../../Monsters/FirstCityMonsters/Area3/Monsters3";
export default function FirstCityArea3(props) {
    const handlePortalClick4 = () => {
        props.onPortalClick4(); 
    };

    return (
        <div className="game-screen-page3">
            <img src={props.firstmap} className="background-createpage-page3" alt="Background" />
            <img src={props.portalToPreviousMap} className="portal6" onClick={handlePortalClick4} /> 
            
            <Monsters3
                         firstarena3monstersRight={props.firstarena3monstersRight}
                         firstarena3monstersLeft={props.firstarena3monstersLeft}
                 />
        </div>
    );
}