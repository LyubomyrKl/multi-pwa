import React from 'react'
import './workout-accord.scss'
import AccordionItem from '../workout-item/workout-item';


export default function WorkoutAccord({addReps, onDeleteLog, dataLog}) {
    const element =  dataLog.map((item)=>{
        const{id, title, weightRepsPairs} = item
        return(
            <AccordionItem
            id = {id}
            key={id}
            title = {title}
            weightRepsPairs={weightRepsPairs}
            addItem = {addReps}
            onDelete = {onDeleteLog}/>
        )
    })
  return (
    
    <div  className='accrodion-wrapper'>
        {element}
    </div>
  );
}

