import React from 'react'

export default function TakeTestOptions({options, answer, index}) {
    return (
    <>{
        options.map((opt, indexOpt)=>(
            <p><input type="radio" name='answer' onChange={()=>answer(index, indexOpt)}/>{opt}</p>
        ))
    }</>
    )
}
