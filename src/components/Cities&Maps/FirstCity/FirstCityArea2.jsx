import React from "react";
import Monsters2 from "../../Monsters/FirstCityMonsters/Area2/Monsters2";



export default function FirstCityArea2(props) {
    const handlePortalClick2 = () => {
        props.onPortalClick2(); 
    };

 const handlePortalClick4 = () => {
    
    props.onPortalClick4(); 
};
    return (
        <div className="game-screen-page3">
            <img src={props.firstpagebackground} className="background-createpage-page3" alt="Background" />
            <img src={props.portalToPreviousMap} className="portal4" onClick={handlePortalClick2} /> 
            <img src={props.portalToNextMap} className="portal5" onClick={handlePortalClick4} /> 
            <Monsters2
                        firstarena2monstersRight={props.firstarena2monstersRight }
                         firstarena2monstersLeft={props.firstarena2monstersLeft}
                 />
        </div>
    );
}
