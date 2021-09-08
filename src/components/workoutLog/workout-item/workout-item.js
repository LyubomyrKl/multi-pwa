import React from 'react'
import './workout-item.scss'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Inputs from '../workout-inputs/workout-inputs';

export default function AccordionItem(props) {
    const {id, title, weightRepsPairs, addItem, onDelete} = props
    
    const elements = weightRepsPairs.map((pair, idx)=>{
       return(
       <div className='container' key={idx} > <p className='item' ><span className='numbers'>{pair.weight}</span>X<span className='numbers'>{pair.reps}</span><span  onClick = {()=>{onDelete(idx, id)}} className='cancel'><i   className="fas fa-backspace"></i></span></p></div>
       )
    })
    
  return (
   <>
    <Accordion key={id} className='accordion-item'>
        <AccordionSummary
         className='accordion-title'
         aria-controls="panel1a-content"
         id="panel1a-header">
            <Typography >{title}</Typography>
        </AccordionSummary>

        <AccordionDetails className='accordion-details'>
            <div className='item-wrapper'>
                {elements}
                <Inputs onAdd={(item)=>{addItem(item, id)}}/>
            </div>
        </AccordionDetails>
    </Accordion>
   </>
  );
}