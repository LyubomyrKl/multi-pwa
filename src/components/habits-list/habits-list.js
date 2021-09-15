import React from 'react'
import './habits-list.scss'
import HabitsItem from '../habits-item/habits-item'

const HabitsList = ({habitsData, onDone}) =>{

    const elements = habitsData.map((item)=>{
        const {title, descr, checkboxes, id} = item;
        return (
            <li key={id} className='habits-item'>
                <HabitsItem
                title={title}
                descr={descr}
                checkboxes={checkboxes}
                onArrowDone={(idx)=>{onDone(id, idx)}}/>
            </li>
        )
    })

    return(
        <div className='list-wrapper-habits'>
          <ul className='habits-list'>
               {elements}
          </ul>
        </div>
    )
}

export default HabitsList


