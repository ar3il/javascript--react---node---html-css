import React, { useState, useEffect } from "react";

const Monster5 = ({ x, y, speedX, targetX, firstarenamonstersRight,firstarenamonstersLeft, targetY }) => {
    const [position, setPosition] = useState({ x, y });
    const [isFirstTarget, setIsFirstTarget] = useState(true);
    const [health, setHealth] = useState(100);

    useEffect(() => {
        const moveLeft = () => {
            setPosition(prevPosition => ({
                ...prevPosition,
                x: prevPosition.x - speedX,
                lastDirection: 'left'
            }));
        };

        const moveRight = () => {
            setPosition(prevPosition => ({
                ...prevPosition,
                x: prevPosition.x + speedX,
                lastDirection: 'right'
            }));
        };

        const checkTarget = () => {
            if (isFirstTarget) {
                
                if (position.x !== targetX) {
                    if (position.x > targetX) {
                        moveLeft();
                    } else {
                        moveRight();
                    }
                } else {
                    
                    setIsFirstTarget(false);
                }
            } else {
               
                if (position.x !== targetY) {
                    if (position.x > targetY) {
                        moveLeft();
                    } else {
                        moveRight();
                    }
                } else {
                    
                    setIsFirstTarget(true);
                }
            }
        };

        const interval = setInterval(checkTarget, 150);
        return () => clearInterval(interval);
    }, [position.x, isFirstTarget, targetX, targetY,firstarenamonstersRight,firstarenamonstersLeft, speedX]);

    
    return (
        <div>
          <img 
    src={isFirstTarget ? firstarenamonstersLeft : firstarenamonstersRight} 
    className="monster5" 
    alt="Monster5" 
    style={{ 
        top: position.y, 
        left: position.x, 
        filter: isFirstTarget ? 'none' : 'flip'
    }}  
/>

            <div style={{ position: 'absolute', top: position.y - 5, left: position.x+165, width: '70px', height: '8px', backgroundColor: 'red', border: '1px solid black' }}>
                <div style={{ width: `${health}%`, height: '100%', backgroundColor: 'red' }}></div>
            </div>
        </div>
    );
    
    
}

export default Monster5;