import React, { useState } from 'react';
import '../index.css';
import {useDispatch} from 'react-redux'
import { addTest } from '../features/tests/testsSlice';
const AddTestForm = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState("")
  const [questions, setQuestions] = useState([])
  const [queNum, setQueNum] = useState(1)
  const [ansNum, setAnsNum] = useState(1)
  function setQuestion(id, question){
    const newQuestions = [...questions]
    newQuestions[id].question = question
    setQuestions(newQuestions)
  }
  function setAnswer(id, index, answer){
    const newQuestions = [...questions]
    const newAnswers = [...newQuestions[id].options]
    newAnswers[index] = answer
    newQuestions[id].options= newAnswers
    setQuestions(newQuestions)
  }
  function setCorrectAnswer(id, number){
    const newQuestions = [...questions]
    if(number >= 0 && number <= newQuestions[id].options.length-1 && Number(number)===+number) newQuestions[id].correctAnswer = number
    setQuestions(newQuestions)
  }
  function createQuestions(){
    const newQuestions = []
    const options = []
    for(let i=0;i<ansNum;i++)options.push("")
    console.log(options);
    
    for(let i = 0; i<queNum; i++){
      newQuestions.push({
        id:Date.now()+i,
        title:"",
        options:options,
        correctAnswer:0
      })
    }
    setQuestions(newQuestions)
    console.log(newQuestions);
  }
  function submit(){ 
    if(title.trim() !== '') dispatch(addTest({id:Date.now(), title, questions}))
  }
  return (
    <div className="add-test-form">
      <h2>Add New Test</h2>
      <div>
        <input type="text" placeholder="Test Title" className="input-field" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <br />
        <p>Number of questions:<input type="number" min={1} value={queNum} onChange={(e)=>setQueNum(e.target.value)}/></p>
        <p>Number of answers:<input type="number" min={1} value={ansNum} onChange={(e)=>setAnsNum(e.target.value)}/></p>
        <button onClick={createQuestions}>Create Questions</button>
        {
          questions.map((q,index)=>(
            <div className="question-field" key={index}>
              <h3>Quiestion {q.id}</h3>
              <input type="text" placeholder="Question" className="input-field" value={q.question} onChange={(e)=>{if(e.key==='Enter')setQuestion(index,e.target.value)}}/>
              <p>Answers:</p>
              {q.options.map((opt,indexOpt)=>(
                <p key={`${indexOpt}${index}`}>Order Number:{indexOpt}<input type="text" placeholder="Answer" className="input-field" value={opt} onChange={(e)=>{setAnswer(index,indexOpt,e.target.value)}}/></p>
              ))}
              {/* <>{
                q.options && q.options.map && [...q.options].map((opt,indexOpt)=>(
                  <p key={indexOpt}>Order Number:{indexOpt}<input type="text" placeholder="Answer" className="input-field" value={q.options[indexOpt]} onChange={(e)=>{setAnswer(index,indexOpt,e.target.value)}}/></p>
                ))``
              }</> */}
              <p>Order Number of Correct Answer:<input type="number" placeholder='Order Number of Correct Answer' min={0} max={q.options.length-1} value={q.correctAnswer} onChange={(e)=>setCorrectAnswer(index, +e.target.value)}/></p>
            </div>
          ))
        }

        {/* <div className="question-field">
          <p>Quiestion {}</p>
          <input type="text" placeholder="Question" className="input-field" />
          <input type="text" placeholder="Answer" className="input-field" />
          <input type="text" placeholder="Incorrect Answer 1" className="input-field" />
          <input type="text" placeholder="Incorrect Answer 2" className="input-field" />
          <input type="text" placeholder="Incorrect Answer 3" className="input-field" />
        </div> */}
        <button className="submit-button" onClick={submit}>Add Test</button>
      </div>
    </div>
  );
};

export default AddTestForm;
