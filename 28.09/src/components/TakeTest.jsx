import React, { useState } from 'react';
import '../index.css';
import { useDispatch, useSelector } from 'react-redux';
import TakeTestOptions from './TakeTestOptions';
import { submitTestResult } from '../features/tests/testsSlice';

const TakeTest = () =>{
  const dispatch = useDispatch()
  const test = useSelector(state=>state.tests.currentTest)
  const queNum = test.questions.length
  const [currentQueNum, setQueNum] = useState(0)
  const [answers, setAnswers] = useState([])
  function answer(index, ans){
    const newAnswers = [...answers]
    newAnswers[index] = ans
    setAnswers(newAnswers)
  }
  function calcResults(){
    const realAnswers = []
    for(let question of test.questions){
      realAnswers.push(question.correctAnswer)
    }
    let correct = 0
    for(let ans in realAnswers){
      if(realAnswers[ans] === answers[ans]) correct+=1
    }
    const percentage = Math.round(correct/realAnswers.length*100)
    dispatch(submitTestResult({test:test.title, result:percentage, date:new Date().toDateString()}))
  }
  return (
    <div className="take-test">
      <h2>{test.title}</h2>
      <div className='question-block'>
        <p>{test.questions[currentQueNum].question}</p>
        <TakeTestOptions index={currentQueNum} options={test.questions[currentQueNum].options} answer={answer}/>
        <button disabled={currentQueNum === 0} onClick={()=>{setQueNum(currentQueNum-1)}}>Prev</button>
        <button disabled={currentQueNum === queNum-1} onClick={()=>{setQueNum(currentQueNum+1)}}>Next</button>
      </div>
      <button className="submit-button" onClick={calcResults}>Submit Test</button>
    </div>
  );
};

export default TakeTest;
