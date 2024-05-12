import React, { useState, useEffect } from "react";
import Monster1 from "./Monster1";
import Monster2 from "./Monster2";
import Monster3 from "./Monster3";
import Monster4 from "./Monster4";
import Monster5 from "./Monster5";
import Monster6 from "./Monster6";
import Monster7 from "./Monster7";


export default function Monsters(props) {
    const [monster1Position, setMonster1Position] = useState({ x: 1100, y: 80 });
    const [monster2Position, setMonster2Position] = useState({ x: 1000, y: 80 });
    const [monster3Position, setMonster3Position] = useState({ x: 1100, y: 240 });
    const [monster4Position, setMonster4Position] = useState({ x: 1000, y: 240 });
    const [monster5Position, setMonster5Position] = useState({ x: 700, y: 472 });
    const [monster6Position, setMonster6Position] = useState({ x: 800, y: 472 });
    const [monster7Position, setMonster7Position] = useState({ x: 1000, y: 472 });
    
    useEffect(() => {
        const moveMonsters = setInterval(() => {
            
            const newMonster1X = monster1Position.x -1; 
            const newMonster2X = monster2Position.x - 1; 
            const newMonster3X = monster3Position.x -1; 
            const newMonster4X = monster4Position.x - 1; 
            const newMonster5X = monster5Position.x -1; 
            const newMonster6X = monster6Position.x -1; 
            const newMonster7X = monster7Position.x -1; 
            
            
           
            setMonster1Position(prevPosition => ({ ...prevPosition, x: newMonster1X }));
            setMonster2Position(prevPosition => ({ ...prevPosition, x: newMonster2X }));
            setMonster3Position(prevPosition => ({ ...prevPosition, x: newMonster3X }));
            setMonster4Position(prevPosition => ({ ...prevPosition, x: newMonster4X }));
            setMonster5Position(prevPosition => ({ ...prevPosition, x: newMonster5X }));
            setMonster6Position(prevPosition => ({ ...prevPosition, x: newMonster6X }));
            setMonster7Position(prevPosition => ({ ...prevPosition, x: newMonster7X }));
            
        }, 500); 

        return () => clearInterval(moveMonsters); 
    }, []); 

    return (
        <div>
            <Monster1
                firstarenamonstersRight={props.firstarenamonstersRight}
                firstarenamonstersLeft={props.firstarenamonstersLeft}
                x={monster1Position.x}
                y={monster1Position.y}
                speedX={5} 
                isAtTarget={false} 
                reverseDirection={false} 
                targetX={900} 
                targetY={1100}
            />
            <Monster2
                firstarenamonstersRight={props.firstarenamonstersRight}
                firstarenamonstersLeft={props.firstarenamonstersLeft}
                x={monster2Position.x}
                y={monster2Position.y}
                speedX={5} 
                isAtTarget={false} 
                reverseDirection={false} 
                targetX={800} 
                targetY={1200}
            />
             <Monster3
                firstarenamonstersRight={props.firstarenamonstersRight}
                firstarenamonstersLeft={props.firstarenamonstersLeft}
                x={monster3Position.x}
                y={monster3Position.y}
                speedX={5} 
                isAtTarget={false} 
                reverseDirection={false} 
                targetX={1000} 
                targetY={1200}
            />
             <Monster4
                firstarenamonstersRight={props.firstarenamonstersRight}
                firstarenamonstersLeft={props.firstarenamonstersLeft}
                x={monster4Position.x}
                y={monster4Position.y}
                speedX={5} 
                isAtTarget={false} 
                reverseDirection={false} 
                targetX={1000} 
                targetY={1200}
            />
             <Monster5
                firstarenamonstersRight={props.firstarenamonstersRight}
                firstarenamonstersLeft={props.firstarenamonstersLeft}
                x={monster5Position.x}
                y={monster5Position.y}
                speedX={5} 
                isAtTarget={false} 
                reverseDirection={false} 
                targetX={700} 
                targetY={1200}
            />

            <Monster6
                firstarenamonstersRight={props.firstarenamonstersRight}
                firstarenamonstersLeft={props.firstarenamonstersLeft}
                x={monster6Position.x}
                y={monster6Position.y}
                speedX={5} 
                isAtTarget={false} 
                reverseDirection={false} 
                targetX={700} 
                targetY={900}
            />

            <Monster7
                firstarenamonstersRight={props.firstarenamonstersRight}
                firstarenamonstersLeft={props.firstarenamonstersLeft}
                x={monster7Position.x}
                y={monster7Position.y}
                speedX={5} 
                isAtTarget={false} 
                reverseDirection={false} 
                targetX={500} 
                targetY={700}
            /> 
        </div>
    );
}
