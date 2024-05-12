import React from "react";
import PlayerBag from "./PlayerBag";
import PlayerSkills from "./PlayerSkills";
import PlayerStats from "./PlayerStats";
import PlayerHP from "./PlayerHP";
import PlayerMana from "./PlayerMana";
import PlayerEXP from "./PlayerEXP";
import PlayerLevel from "./PlayerLevel";


export default function PlayerBar(props) {
   
    

    return (
        <div>
        <div className="playerBar">
           
                
        </div>

                <PlayerBag inventory={props.inventory} />
                <PlayerSkills attackSkills={props.attackSkills} />
                <PlayerStats statsPoint={props.statsPoint} />
                <PlayerHP/>
                <PlayerMana/>
                <PlayerEXP/>
                <PlayerLevel/>
        </div>
    );
}