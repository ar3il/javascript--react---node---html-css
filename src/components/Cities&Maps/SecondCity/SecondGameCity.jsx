
import React from "react";
import QuestNpc from "../../NPC/QuestNpc";
import TravalNpc from "../../NPC/TravalNpc";
import StoreNpc from "../../NPC/StoreNpc";

export default function SecondGameCity(props) {
    const handlePortalClick = () => {
        props.onPortalClick(); 
    };

    return (
        <div className="game-screen-page3">
            <img src={props.firstmap} className="background-createpage-page3" alt="Background" />
            <img src={props.portalToNextMap} className="portal" onClick={handlePortalClick} />
            
            <QuestNpc
                       missionNPC={props.missionNPC}    
            />

            <TravalNpc
                       travalNPC={props.travalNPC}
            />         

            <StoreNpc
                       storeNPC={props.storeNPC}  
           />

        </div>
    );
}