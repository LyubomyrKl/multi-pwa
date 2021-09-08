import React  from 'react'
import PopUp from '../popUp/popUp'

import './habits-form.scss'


export default class HabitsForm extends React.Component{

    render(){
        return(
            <>
             <PopUp
              handleSubmit={this.props.addHabit}/>
            </>
        )
    }
}

