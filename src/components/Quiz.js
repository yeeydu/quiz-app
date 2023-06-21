import React, {useState, useContext} from 'react';
import {Questions} from '../Helpers/QuestionBank';
import { QuizContext } from '../Helpers/Context';

export default function Quiz() {

const {score, setScore, setGameState } = useContext(QuizContext);    
const [currQuestion, setCurrQuestion] = useState(0);
const [optionChosen, setOptionChosen] = useState("")

const nextQuestion = () => {
    if(Questions[currQuestion].answer == optionChosen){
        setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1)
};

const finishQuiz = ()=> {
    if(Questions[currQuestion].answer == optionChosen){
        setScore(score + 1); 
    }
    setGameState("endScreen")
}

  return (
    <div className='Quiz'>
        <h1>{Questions[currQuestion].prompt}</h1>
        <div className='Options'>
            <button className='selected' onClick={ ()=> setOptionChosen("A") }>{Questions[currQuestion].optionA}</button>
            <button className='selected' onClick={ ()=> setOptionChosen("B") }>{Questions[currQuestion].optionB}</button>
            <button className='selected' onClick={ ()=> setOptionChosen("C") }>{Questions[currQuestion].optionC}</button>
            <button className='selected' onClick={ ()=> setOptionChosen("D") }>{Questions[currQuestion].optionD}</button>
        </div>
        { currQuestion == Questions.length-1  ? 
        ( <button className='endBtn' onClick={finishQuiz}>Finish Quiz</button> ) : 
        ( <button className='nextBtn' onClick={ nextQuestion}>Next Question</button> ) }
        
    </div>
  )
}
