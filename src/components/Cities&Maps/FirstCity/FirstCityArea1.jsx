import React from "react";
import Monsters from "../../Monsters/FirstCityMonsters/Area1/Monsters";


export default function FirstCityArea1(props) {
    const handlePortalClick = () => {
        props.onPortalClick(); 
    };

    const handlePortalClick2 = () => {
        props.onPortalClick2(); 
    };

    return (
        <div className="game-screen-page3">
            <img src={props.firstmaparena} className="background-createpage-page3" alt="Background" />
            
            <img src={props.portalToPreviousMap} className="portal2" onClick={() => handlePortalClick()} />
            
            <img src={props.portalToNextMap} className="portal3" onClick={() => handlePortalClick2()} /> 

            <Monsters
                firstarenamonstersRight={props.firstarenamonstersRight}
                firstarenamonstersLeft={props.firstarenamonstersLeft}
            />
            
        </div>
    );
}
