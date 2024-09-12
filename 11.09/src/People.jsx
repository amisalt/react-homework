import React from 'react'
import Person from './Person'

export default function People({people, setPeople}) {
    function deletePerson(id){
        setPeople(people.filter(person => person.id !== id))
    }
  return (
    <div className='main'>
        {people.map((person, index)=><Person {...person} setPeople={setPeople} key={index}/>)}
    </div>
  )
}
