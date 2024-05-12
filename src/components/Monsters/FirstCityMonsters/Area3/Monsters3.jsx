import React, { useState, useEffect } from "react";
import Monster15 from "../Area3/Monster15"
import Monster16 from "../Area3/Monster16";
import Monster17 from "../Area3/Monster17";
import Monster18 from "../Area3/Monster18";
import Monster19 from "../Area3/Monster19";
import Monster20 from "../Area3/Monster20";
import Monster21 from "../Area3/Monster21";



export default function Monsters3(props) {
    const [monster15Position, setMonster15Position] = useState({ x: 200, y: 500 });
    const [monster16Position, setMonster16Position] = useState({ x: 400, y: 500 });
    const [monster17Position, setMonster17Position] = useState({ x: 800, y: 500 });
    const [monster18Position, setMonster18Position] = useState({ x: 600, y: 500 });
    const [monster19Position, setMonster19Position] = useState({ x: 700, y: 500 });
    const [monster20Position, setMonster20Position] = useState({ x: 900, y: 500});
    const [monster21Position, setMonster21Position] = useState({ x: 1000, y: 500 });
    
    useEffect(() => {
        const moveMonsters = setInterval(() => {
            // Calculate new positions
            const newMonster15X = monster15Position.x -1; 
            const newMonster16X = monster16Position.x - 1; 
            const newMonster17X = monster17Position.x -1; 
            const newMonster18X = monster18Position.x - 1; 
            const newMonster19X = monster19Position.x -1; 
            const newMonster20X = monster20Position.x -1; 
            const newMonster21X = monster21Position.x -1; 
            
            
            // Update positions
            setMonster15Position(prevPosition => ({ ...prevPosition, x: newMonster15X }));
            setMonster16Position(prevPosition => ({ ...prevPosition, x: newMonster16X }));
            setMonster17Position(prevPosition => ({ ...prevPosition, x: newMonster17X }));
            setMonster18Position(prevPosition => ({ ...prevPosition, x: newMonster18X }));
            setMonster19Position(prevPosition => ({ ...prevPosition, x: newMonster19X }));
            setMonster20Position(prevPosition => ({ ...prevPosition, x: newMonster20X }));
            setMonster21Position(prevPosition => ({ ...prevPosition, x: newMonster21X }));
            
        }, 500); 

        return () => clearInterval(moveMonsters); 
    }, []); 

    return (
        <div>
            <Monster15
                firstarena3monstersRight={props.firstarena3monstersRight}
                firstarena3monstersLeft={props.firstarena3monstersLeft}
                x={monster15Position.x}
                y={monster15Position.y}
                speedX={5} // Example speed
                isAtTarget={false} // Example initial state
                reverseDirection={false} // Example initial state
                targetX={100} 
                targetY={1100}
            />
            <Monster16
                firstarena3monstersRight={props.firstarena3monstersRight}
                firstarena3monstersLeft={props.firstarena3monstersLeft}
                x={monster16Position.x}
                y={monster16Position.y}
                speedX={5} // Example speed
                isAtTarget={false} // Example initial state
                reverseDirection={false} // Example initial state
                targetX={200} // Example target
                targetY={800}
            />
             <Monster17
                firstarena3monstersRight={props.firstarena3monstersRight}
                firstarena3monstersLeft={props.firstarena3monstersLeft}
                x={monster17Position.x}
                y={monster17Position.y}
                speedX={5} // Example speed
                isAtTarget={false} // Example initial state
                reverseDirection={false} // Example initial state
                targetX={300} // Example target
                targetY={1200}
            />
             <Monster18
               firstarena3monstersRight={props.firstarena3monstersRight}
               firstarena3monstersLeft={props.firstarena3monstersLeft}
                x={monster18Position.x}
                y={monster18Position.y}
                speedX={5} // Example speed
                isAtTarget={false} // Example initial state
                reverseDirection={false} // Example initial state
                targetX={400} // Example target
                targetY={800}
            />
             <Monster19
                firstarena3monstersRight={props.firstarena3monstersRight}
                firstarena3monstersLeft={props.firstarena3monstersLeft}
                x={monster19Position.x}
                y={monster19Position.y}
                speedX={5} // Example speed
                isAtTarget={false} // Example initial state
                reverseDirection={false} // Example initial state
                targetX={500} // Example target
                targetY={1200}
            />

            <Monster20
                firstarena3monstersRight={props.firstarena3monstersRight}
                firstarena3monstersLeft={props.firstarena3monstersLeft}
                x={monster20Position.x}
                y={monster20Position.y}
                speedX={5} // Example speed
                isAtTarget={false} // Example initial state
                reverseDirection={false} // Example initial state
                targetX={600} // Example target
                targetY={900}
            />

            <Monster21
                firstarena3monstersRight={props.firstarena3monstersRight}
                firstarena3monstersLeft={props.firstarena3monstersLeft}
                x={monster21Position.x}
                y={monster21Position.y}
                speedX={5} // Example speed
                isAtTarget={false} // Example initial state
                reverseDirection={false} // Example initial state
                targetX={500} // Example target
                targetY={800}
            /> 
        </div>
    );
}
