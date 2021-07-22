import React  from 'react'
import AddBtn from '../addBtn/addBtn'
import PopUp from '../popUp/popUp'
const HabitsForm = ({addHabit}) =>{
    return(
      <>
       <AddBtn/>
       <PopUp
        handleSubmit={addHabit}/>
      </>
    )
}

export default HabitsForm