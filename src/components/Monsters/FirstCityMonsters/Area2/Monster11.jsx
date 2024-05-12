import React, { useState, useEffect } from "react";

const Monster11 = ({ x, y, speedX, targetX, firstarena2monstersRight,firstarena2monstersLeft, targetY }) => {
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
                // If not yet at targetX, keep moving
                if (position.x !== targetX) {
                    if (position.x > targetX) {
                        moveLeft();
                    } else {
                        moveRight();
                    }
                } else {
                    // Change direction when reaching targetX
                    setIsFirstTarget(false);
                }
            } else {
                // If not yet at targetY, keep moving
                if (position.x !== targetY) {
                    if (position.x > targetY) {
                        moveLeft();
                    } else {
                        moveRight();
                    }
                } else {
                    // Change direction when reaching targetY
                    setIsFirstTarget(true);
                }
            }
        };

        const interval = setInterval(checkTarget, 150);
        return () => clearInterval(interval);
    }, [position.x, isFirstTarget, targetX, targetY,firstarena2monstersRight,firstarena2monstersLeft, speedX]);

    
    return (
        <div>
          <img 
    src={isFirstTarget ? firstarena2monstersLeft : firstarena2monstersRight} 
    className="monster11" 
    alt="Monster11" 
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

export default Monster11;
