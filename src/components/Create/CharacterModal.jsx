import React, { useState, useEffect } from "react";

export default function CharacterModal({ characters, onSelect, onClose }) {
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [characterName, setCharacterName] = useState('');

  const currentCharacter = characters[currentCharacterIndex] || ' ';
 
  const handleSelect = () => {
    const selectedCharacter = characters[currentCharacterIndex];
    onSelect(selectedCharacter);
    onClose();
  };

  const handlePrev = () => {
    setCurrentCharacterIndex((prevIndex) => (prevIndex - 1 + characters.length) % characters.length);
  };

  const handleNext = () => {
    setCurrentCharacterIndex((prevIndex) => (prevIndex + 1) % characters.length);
  };

  useEffect(() => {
    console.log("Current character:", characters[currentCharacterIndex]);
}, [currentCharacterIndex, characters]);

  return (
    <div className="modal">
      <div className="modal-content">
        <img src={currentCharacter.image} className="modal-content-img" alt="Selected Character" />
        <div className="navigation-button">
          <button onClick={handlePrev}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
        </div>
        <input type="text" placeholder="Enter a player name" value={characterName} onChange={(event) => setCharacterName(event.target.value)} />
        <button className="confirm" onClick={handleSelect}>Confirm</button>
      </div>
    </div>
  );
}
