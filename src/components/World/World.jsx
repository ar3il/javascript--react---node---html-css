import React, { useState } from 'react';
import PlayerFunc from "../Player/Player";
import FirstGameCity from "../Cities&Maps/FirstCity/FirstGameCity";
import FirstCityArea1 from "../Cities&Maps/FirstCity/FirstCityArea1";
import PlayerBar from '../Player/PlayerBar';
import FirstCityArea2 from '../Cities&Maps/FirstCity/FirstCityArea2';
import FirstCityArea3 from '../Cities&Maps/FirstCity/FirstCityArea3';

export default function World(props) {
    const [showCity, setShowCity] = useState(true); 
    const [showArea2, setShowArea2] = useState(false);
    const [showArea3, setShowArea3] = useState(false);
    const [showArea3Portal5, setShowArea3Portal5] = useState(false); 

  
    const handlePortalClick = () => {
        setShowCity(!showCity); 
        setShowArea2(false);
        setShowArea3(false); 
        setShowArea3Portal5(false); 
    };

    const handlePortalClick2 = () => {
        setShowCity(false); 
        setShowArea2(false);
        setShowArea3(false); 
        setShowArea3Portal5(false); 
    };

    const handlePortalClick3 = () => {
        setShowCity(false);
        setShowArea2(true);
        setShowArea3(false); 
        setShowArea3Portal5(false); 
    };

    const handlePortalClick4 = () => {
        setShowCity(false);
        setShowArea2(false);
        setShowArea3(true); 
        setShowArea3Portal5(false); 
    };

    
    
    
    return (
        <div>
            
            <PlayerBar
                         inventory={props.inventory}
                         attackSkills={props.attackSkills}
                         statsPoint={props.statsPoint}
            />
            
            <PlayerFunc worriorPlayer={props.worriorPlayer}/>




            {showCity ? (
                <FirstGameCity
                    portalToNextMap={props.portalToNextMap}
                    firstmap={props.firstmap}
                    missionNPC={props.missionNPC} 
                    travalNPC={props.travalNPC} 
                    storeNPC={props.storeNPC}
                    onPortalClick={handlePortalClick}
                     
                />
            ) : (
                <>
            {showCity ? (
                <FirstGameCity
                    portalToNextMap={props.portalToNextMap}
                    firstmap={props.firstmap}
                    missionNPC={props.missionNPC} 
                    travalNPC={props.travalNPC} 
                    storeNPC={props.storeNPC}
                    onPortalClick={handlePortalClick}
                    
                />
            ) : (
                <>
            {showArea2 ? (
                <FirstCityArea2
                   firstpagebackground={props.firstpagebackground}
                   portalToNextMap={props.portalToNextMap}
                   portalToPreviousMap={props.portalToPreviousMap}
                   firstarena2monstersRight={props.firstarena2monstersRight}
                    firstarena2monstersLeft={props.firstarena2monstersLeft}
                   onPortalClick2={handlePortalClick2} 
                   onPortalClick4={handlePortalClick4}
                   
                />
            ) : (
                <>
            {showArea3 ? (
                <FirstCityArea3
                   firstmap={props.firstmap} 
                  
                   portalToNextMap={props.portalToNextMap}
                   portalToPreviousMap={props.portalToPreviousMap}
                   firstarena3monstersRight={props.firstarena3monstersRight}
                   firstarena3monstersLeft={props.firstarena3monstersLeft}
                   onPortalClick4={handlePortalClick3}
                />
            ) : (
                <FirstCityArea1
                  firstmaparena={props.firstmaparena}
                  firstarenamonstersRight={props.firstarenamonstersRight}
                  firstarenamonstersLeft={props.firstarenamonstersLeft}
                  portalToNextMap={props.portalToNextMap}
                  portalToPreviousMap={props.portalToPreviousMap}
                  onPortalClick={handlePortalClick}
                  onPortalClick2={handlePortalClick3} 
                  
                  
                />
                )}
                </>
               )}
             </>
            )}          

       </>
            )}
        </div>
    );
}