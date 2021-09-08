import React, {useState} from 'react'
import './workout-inputs.scss'

 function Inputs({onAdd}) {
    let [weight, setWeight] = useState('');
    let [reps, setReps] = useState('');
    const item =[weight, reps]
    const onSumbit = e => { 
        e.preventDefault()
        onAdd(item)
        setWeight('')
        setReps('')
    }

    return(
        <form className='workout-form' onSubmit={onSumbit}>
            <input className='weight' type='number' name='weight' min="1" max="501" value={weight} onChange={event => {setWeight(event.target.value)}}/>
            <p>x</p>
            <input className='reps'type='number'  reps='weight' name='reps' min="1" max="100" value={reps} onChange={event => setReps(event.target.value)}/>
            <input type='submit' value='add' />
        </form>
    )
}

export default Inputs

