import React, { useState, useEffect } from "react";
import PlayerHP from "./PlayerHP";
class Player {
  constructor(x, y, gravity, lastDirection = null, attackMove = 10) {
    this.x = x;
    this.y = y;
    this.gravity = gravity;
    this.speedX = 5;
    this.speedY = 150;
    this.isJumping = false;
    this.lastDirection = lastDirection;
    this.isAttacking = false;
    this.attackMove = attackMove;
    this.attackPosition = x;
    this.attackDirection = null; 
  }

  moveLeft() {
    this.x -= this.speedX;
    this.lastDirection = 'left';
  }

  moveRight() {
    this.x += this.speedX;
    this.lastDirection = 'right';
  }

  jump() {
    if (!this.isJumping) {
      this.isJumping = true;
      this.y -= this.speedY;
    }
  }

  updatePosition(floor) {
    if (this.y < floor) {
      this.y += this.gravity;
    }
    this.isJumping = this.y < floor;
  }

  attack1(attackDirection) {
    this.isAttacking = true;
    this.isAttacking1 = true;
    this.attackDirection = attackDirection;
    this.attackInterval = setInterval(() => {
      if (this.attackDirection === 'left') {
        this.attackPosition -= this.attackMove;
      } else if (this.attackDirection === 'right') {
        this.attackPosition += this.attackMove;
      }
      
    }, 1000); 
    
    setTimeout(() => {
      this.isAttacking1 = false;
      clearInterval(this.attackInterval); 
    }, 7000); 
  }
  
  attack2(attackDirection) {
    this.isAttacking = true;
    this.isAttacking2 = true;
    this.attackDirection = attackDirection;
    this.attackInterval = setInterval(() => {
      if (this.attackDirection === 'left') {
        this.attackPosition -= this.attackMove;
      } else if (this.attackDirection === 'right') {
        this.attackPosition += this.attackMove;
      }
      
    }, 70); 
    
    setTimeout(() => {
      this.isAttacking2 = false;
      clearInterval(this.attackInterval); 
    }, 7000); 
  }

  attack3(attackDirection) {
    this.isAttacking = true;
    this.isAttacking3 = true;
    this.attackDirection = attackDirection;
    this.attackInterval = setInterval(() => {
      if (this.attackDirection === 'left') {
        this.attackPosition -= this.attackMove;
      } else if (this.attackDirection === 'right') {
        this.attackPosition += this.attackMove;
      }
      
    }, 70); 
    
    setTimeout(() => {
      this.isAttacking3 = false;
      clearInterval(this.attackInterval); 
    }, 7000); 
  }
  
  
}

export default function PlayerFunc(props) {
  const [player, setPlayer] = useState(new Player(100, 100, 0.5));
  const floor = 568;
  const maxX = 1450;
  

  useEffect(() => {
    let animationFrameId;

    function animate() {
      setPlayer(prevPlayer => {
        const updatedPlayer = new Player(prevPlayer.x, prevPlayer.y, prevPlayer.gravity);
        updatedPlayer.updatePosition(floor);
        return updatedPlayer;
      });

      animationFrameId = window.requestAnimationFrame(animate);
    }

    animationFrameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    function handleKeyDown(event) {
      switch (event.key) {
        case 'a':
          setPlayer(prevPlayer => {
            const updatedPlayer = new Player(prevPlayer.x, prevPlayer.y, prevPlayer.gravity, prevPlayer.lastDirection);
            updatedPlayer.moveLeft();
            return updatedPlayer;
          });
          break;
        case 'd':
          setPlayer(prevPlayer => {
            const updatedPlayer = new Player(prevPlayer.x, prevPlayer.y, prevPlayer.gravity, prevPlayer.lastDirection);
            updatedPlayer.moveRight();
            return updatedPlayer;
          });
          break;
        case 'w':
          setPlayer(prevPlayer => {
            const updatedPlayer = new Player(prevPlayer.x, prevPlayer.y, prevPlayer.gravity, prevPlayer.lastDirection);
            updatedPlayer.jump();
            return updatedPlayer;
          });
          break;
          case '1':
  setPlayer(prevPlayer => {
    const updatedPlayer = new Player(prevPlayer.x, prevPlayer.y, prevPlayer.gravity, prevPlayer.lastDirection);
    updatedPlayer.attackDirection = prevPlayer.lastDirection;
    updatedPlayer.attack1(); 
    return updatedPlayer;
  });
  break;

case '2':
  setPlayer(prevPlayer => {
    const updatedPlayer = new Player(prevPlayer.x, prevPlayer.y, prevPlayer.gravity, prevPlayer.lastDirection);
    updatedPlayer.attackDirection = prevPlayer.lastDirection; 
    updatedPlayer.attack2();
    return updatedPlayer;
  });
  break;

case '3':
  setPlayer(prevPlayer => {
    const updatedPlayer = new Player(prevPlayer.x, prevPlayer.y, prevPlayer.gravity, prevPlayer.lastDirection);
    updatedPlayer.attackDirection = prevPlayer.lastDirection;
    updatedPlayer.attack3(); 
    return updatedPlayer;
  });
  break;


          
        default:
          break;
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    setPlayer(prevPlayer => {
      const updatedPlayer = new Player(prevPlayer.x, prevPlayer.y, prevPlayer.gravity, prevPlayer.lastDirection);
      if (updatedPlayer.x < 23) {
        updatedPlayer.x = 23;
      } else if (updatedPlayer.x > maxX) {
        updatedPlayer.x = maxX;
      }

      if (updatedPlayer.y < 0) {
        updatedPlayer.y = 0;
      } else if (updatedPlayer.y > floor) {
        updatedPlayer.y = floor;
        updatedPlayer.isJumping = false;
      }

      return updatedPlayer;
    });
  }, [player.x, player.y]);


  useEffect(() => {
    let animationFrameId;
    
    function animate() {
      setPlayer(prevPlayer => {
        const updatedPlayer = new Player(prevPlayer.x, prevPlayer.y, prevPlayer.gravity);
        updatedPlayer.updatePosition(floor);
        return updatedPlayer;
      });
  
      animationFrameId = window.requestAnimationFrame(animate);
    }
  
    animationFrameId = window.requestAnimationFrame(animate);
  
    return () => window.cancelAnimationFrame(animationFrameId);
  }, []);
  
  useEffect(() => {
    let animationFrameId;
  
    function animateAttack() {
        setPlayer(prevPlayer => {
          const updatedPlayer = new Player(prevPlayer.x, prevPlayer.y, prevPlayer.gravity, prevPlayer.lastDirection, prevPlayer.attackMove, prevPlayer.attackPosition);
          if (updatedPlayer.isAttacking1 || updatedPlayer.isAttacking2 || updatedPlayer.isAttacking3) {
            if (updatedPlayer.attackDirection === 'left') {
              updatedPlayer.attackPosition -= updatedPlayer.attackMove;
            } else if (updatedPlayer.attackDirection === 'right') {
              updatedPlayer.attackPosition += updatedPlayer.attackMove;
            }

            updatedPlayer.cubePosition = updatedPlayer.attackPosition;
          }
          return updatedPlayer;
        });
      
        animationFrameId = window.requestAnimationFrame(animateAttack);
      }
      
  
    if (player.isAttacking1 || player.isAttacking2 || player.isAttacking3) {
      animationFrameId = window.requestAnimationFrame(animateAttack);
    }
  
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [player]);
  
  
  
  return (
    <div>
      {player.isAttacking1 && <div className="attack1" style={{ top: player.y + 15, left: player.lastDirection === 'left' ? player.x - 20 : player.x + 100 }}></div>}
      {player.isAttacking2 && <div className="attack2" style={{ top: player.y + 15, left: player.lastDirection === 'left' ? player.x - 20 : player.x + 300}}></div>}
      {player.isAttacking3 && <div className="attack3" style={{ top: player.y + 15, left: player.lastDirection === 'left' ? player.x - 20 : player.x + 300 }}></div>}
      
      <img src={props.worriorPlayer} className="player" style={{ top: player.y, left: player.x }} alt="player" />

    </div>
  );
}
