import './App.css';
import React, {useState} from 'react';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import{QuizContext} from './Helpers/Context';

function App() {

  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
        <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
          <h1>Quiz App</h1>
          {gameState === "menu" && <MainMenu/>}
          {gameState === "quiz" && <Quiz/>}
          {gameState === "endScreen" && <EndScreen/>}
        </QuizContext.Provider>
    </div>
  );
}

export default App;
