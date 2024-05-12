import React, { useState } from 'react';
import EnterPage from "./components/Enter/EntryPage.jsx";
import CreatePage from "./components/Create/CreatePage.jsx";
import World from "./components/World/World.jsx";
import FirstGameCity from "./components/Cities&Maps/FirstCity/FirstGameCity.jsx";
import FirstCityArea1 from "./components/Cities&Maps/FirstCity/FirstCityArea1.jsx";
import FirstCityArea2 from "./components/Cities&Maps/FirstCity/FirstCityArea2.jsx";
import FirstCityArea3 from "./components/Cities&Maps/FirstCity/FirstCityArea3.jsx";
import data from "./data.js";
import "./style.css";

export default function App() {
    const [currentPage, setCurrentPage] = useState("EnterPage");
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const handleLogin = () => {
        setCurrentPage("CreatePage");
    };
    
    const handleBackToLogin = () => {
        setCurrentPage("EnterPage"); 
    };
    const handleEnterGame = () => {
        setCurrentPage("World");
    };

    const handleCharacterSelect = (character) => {
        setSelectedCharacter(character);
    };

    const handlePortalClick = () => {
        setCurrentPage("FirstCityArea1");
    };

    const handlePortalClick2 = () => {
        setCurrentPage("FirstCityArea2");
    };

    const handlePortalClick4 = () => {
        setCurrentPage("FirstCityArea3");
    };
    
    return (
        <div>
            {currentPage === "EnterPage" && (
                <EnterPage
                    videobackground={data[0].videobackground}
                    onLogin={handleLogin}
                    setCurrentPage={setCurrentPage}
                />
            )}

            {currentPage === "CreatePage" && (
                <CreatePage
                createpagebackground={data[0].createpagebackground}
                settingwheel={data[0].settingwheel}
                addingplayer={data[0].addingplayer}
                worriorPlayer={data[0].worriorPlayer}
                magicanPlayer={data[0].magicanPlayer}
                assassinPlayer={data[0].assassinPlayer}
                onEnterGame={handleEnterGame}
                onCharacterSelect={handleCharacterSelect}
                onBackToLogin={handleBackToLogin}
            />
            )}

            {currentPage === "World" && (
                <World
                    firstmap={data[0].firstmap}
                    inventory={data[0].inventory}
                    statsPoint={data[0].statsPoint}
                    attackSkills={data[0].attackSkills}
                    missionNPC={data[0].missionNPC}
                    travalNPC={data[0].travalNPC}
                    storeNPC={data[0].storeNPC}
                    portalToNextMap={data[0].portalToNextMap}
                    portalToPreviousMap={data[0].portalToPreviousMap}
                    firstmaparena={data[0].firstmaparena}
                    firstpagebackground={data[0].firstpagebackground} 
                    worriorPlayer={data[0].worriorPlayer}
                    firstarenamonstersRight={data[0].firstarenamonstersRight}
                    firstarenamonstersLeft={data[0].firstarenamonstersLeft}
                    firstarena2monstersRight ={data[0].firstarena2monstersRight}
                    firstarena2monstersLeft={data[0].firstarena2monstersLeft}
                    firstarena3monstersRight={data[0].firstarena3monstersRight}
                    firstarena3monstersLeft={data[0].firstarena3monstersLeft}
                />
            )}

            {currentPage === "FirstGameCity" && (
                <FirstGameCity
                    portalToNextMap={data[0].portalToNextMap}
                    missionNPC={data[0].missionNPC}
                    travalNPC={data[0].travalNPC}
                    storeNPC={data[0].storeNPC}
                    firstmap={data[0].firstmap}
                    setCurrentPage={setCurrentPage}
                    onPortalClick={handlePortalClick}
                />
            )}

            {currentPage === "FirstCityArea1" && (
                <FirstCityArea1
                    firstmaparena={data[0].firstmaparena}
                    portalToNextMap={data[0].portalToNextMap}
                    portalToPreviousMap={data[0].portalToPreviousMap}
                    firstarenamonstersRight={data[0].firstarenamonstersRight}
                    firstarenamonstersLeft={data[0].firstarenamonstersLeft}
                    setCurrentPage={setCurrentPage}  
                    onPortalClick={handlePortalClick}
                    onPortalClick2={handlePortalClick2}
                />
            )}

            {currentPage === "FirstCityArea2" && (
                <FirstCityArea2
                    firstpagebackground={data[0].firstpagebackground}
                    portalToNextMap={data[0].portalToNextMap}
                    portalToPreviousMap={data[0].portalToPreviousMap}
                    firstarena2monstersRight={data[0].firstarena2monstersRight}
                    firstarena2monstersLeft={data[0].firstarena2monstersLeft}
                    setCurrentPage={setCurrentPage}
                    onPortalClick2={handlePortalClick2}
                    onPortalClick4={handlePortalClick4} 
                />
            )}

            {currentPage === "FirstCityArea3" && (
                <FirstCityArea3
                    firstmap={data[0].firstmap}
                    onPortalClick4={handlePortalClick4}
                    portalToNextMap={data[0].portalToNextMap}
                    portalToPreviousMap={data[0].portalToPreviousMap}
                    firstarena3monstersRight={data[0].firstarena3monstersRight}
                    firstarena3monstersLeft={data[0].firstarena3monstersLeft}
                />
            )}
        </div>
    );
    
}