import React, { useState, useEffect } from "react";
import Monster8 from "../Area2/Monster8";
import Monster9 from "../Area2/Monster9";
import Monster10 from "../Area2/Monster10";
import Monster11 from "../Area2/Monster11";
import Monster12 from "../Area2/Monster12";
import Monster13 from "../Area2/Monster13";
import Monster14 from "../Area2/Monster14";


export default function Monsters2(props) {
    const [monster8Position, setMonster8Position] = useState({ x: 600, y: 100 });
    const [monster9Position, setMonster9Position] = useState({ x: 800, y: 100 });
    const [monster10Position, setMonster10Position] = useState({ x: 1050, y: 300 });
    const [monster11Position, setMonster11Position] = useState({ x: 660, y:300 });
    const [monster12Position, setMonster12Position] = useState({ x: 760, y:300 });
    const [monster13Position, setMonster13Position] = useState({ x: 860, y: 500 });
    const [monster14Position, setMonster14Position] = useState({ x: 1000, y: 500 });
    
    useEffect(() => {
        const moveMonsters = setInterval(() => {
           
            const newMonster8X = monster8Position.x -1; 
            const newMonster9X = monster9Position.x - 1; 
            const newMonster10X = monster10Position.x -1; 
            const newMonster11X = monster11Position.x - 1; 
            const newMonster12X = monster12Position.x -1; 
            const newMonster13X = monster13Position.x -1; 
            const newMonster14X = monster14Position.x -1; 
            
            
            
            setMonster8Position(prevPosition => ({ ...prevPosition, x: newMonster8X }));
            setMonster9Position(prevPosition => ({ ...prevPosition, x: newMonster9X }));
            setMonster10Position(prevPosition => ({ ...prevPosition, x: newMonster10X }));
            setMonster11Position(prevPosition => ({ ...prevPosition, x: newMonster11X }));
            setMonster12Position(prevPosition => ({ ...prevPosition, x: newMonster12X }));
            setMonster13Position(prevPosition => ({ ...prevPosition, x: newMonster13X }));
            setMonster14Position(prevPosition => ({ ...prevPosition, x: newMonster14X }));
            
        }, 500); 

        return () => clearInterval(moveMonsters); 
    }, []); 

    return (
        <div>
            <Monster8
                firstarena2monstersRight={props.firstarena2monstersRight}
                firstarena2monstersLeft={props.firstarena2monstersLeft}
                x={monster8Position.x}
                y={monster8Position.y}
                speedX={5} 
                isAtTarget={false} 
                reverseDirection={false} 
                targetX={600} 
                targetY={1100}
            />
            <Monster9
               firstarena2monstersRight={props.firstarena2monstersRight}
               firstarena2monstersLeft={props.firstarena2monstersLeft}
                x={monster9Position.x}
                y={monster9Position.y}
                speedX={5} 
                isAtTarget={false} 
                reverseDirection={false} 
                targetX={600} 
                targetY={800}
            />
             <Monster10
                firstarena2monstersRight={props.firstarena2monstersRight}
                firstarena2monstersLeft={props.firstarena2monstersLeft}
                x={monster10Position.x}
                y={monster10Position.y}
                speedX={5} 
                isAtTarget={false} 
                reverseDirection={false} 
                targetX={700} 
                targetY={1200}
            />
             <Monster11
                firstarena2monstersRight={props.firstarena2monstersRight}
                firstarena2monstersLeft={props.firstarena2monstersLeft}
                x={monster11Position.x}
                y={monster11Position.y}
                speedX={5} 
                isAtTarget={false} 
                reverseDirection={false} 
                targetX={400} 
                targetY={800}
            />
             <Monster12
                firstarena2monstersRight={props.firstarena2monstersRight}
                firstarena2monstersLeft={props.firstarena2monstersLeft}
                x={monster12Position.x}
                y={monster12Position.y}
                speedX={5} 
                isAtTarget={false} 
                reverseDirection={false} 
                targetX={700} 
                targetY={1200}
            />

            <Monster13
                firstarena2monstersRight={props.firstarena2monstersRight}
                firstarena2monstersLeft={props.firstarena2monstersLeft}
                x={monster13Position.x}
                y={monster13Position.y}
                speedX={5} 
                isAtTarget={false} 
                reverseDirection={false} 
                targetX={700} 
                targetY={900}
            />

            <Monster14
                firstarena2monstersRight={props.firstarena2monstersRight}
                firstarena2monstersLeft={props.firstarena2monstersLeft}
                x={monster14Position.x}
                y={monster14Position.y}
                speedX={5} 
                isAtTarget={false}
                reverseDirection={false} 
                targetX={500} 
                targetY={700}
            /> 
        </div>
    );
}
