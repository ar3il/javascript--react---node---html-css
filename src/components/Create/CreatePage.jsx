import React, { useState } from "react";
import CharacterModal from "./CharacterModal";

export default function CreatePage(props) {
  const [showModal, setShowModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  


  const openModal = (character) => {
    setSelectedCharacter(character);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleCharacterSelect = (character) => {
    props.onCharacterSelect(character);
    setSelectedCharacter(character);
    closeModal();
  };

  const handleEnterButtonClick = () => {
    props.onEnterGame();
  };

  const handleBackToLoginButtonClick = () => {
    props.onBackToLogin(handleBackToLoginButtonClick); 
};
  return (
    <div className="game-screen-page2">
      <div className="background-createpage-page2">
        <img
          src={props.createpagebackground}
          className="background-createpage-page2"
          alt="Background"
        />
      </div>

      <img
        src={props.addingplayer}
        className="add1-button-createpage-page2"
        alt="addingplayer1"
        onClick={() => openModal(props.worriorPlayer)}
      />
      <img
        src={props.addingplayer}
        className="add2-button-createpage-page2"
        alt="addingplayer2"
        onClick={() => openModal(props.magicanPlayer)}
      />
      <img
        src={props.addingplayer}
        className="add3-button-createpage-page2"
        alt="addingplayer3"
        onClick={() => openModal(props.assassinPlayer)}
      />

      <button className="enter-button-createpage-page2" onClick={handleEnterButtonClick}>
           Enter
            </button>

      <button className="back-button-createpage-page2" onClick={() => handleBackToLoginButtonClick(handleBackToLoginButtonClick)}>
         Back
           </button>

      {showModal && (
        <CharacterModal
          characters={[props.worriorPlayer, props.magicanPlayer, props.assassinPlayer]}
          selectedCharacter={selectedCharacter}
          onSelect={handleCharacterSelect}
          onClose={closeModal}
        />
      )}
    </div>
  );
}