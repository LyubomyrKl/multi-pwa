import React  from 'react'
import AddBtn from '../addBtn/addBtn'
import PopUp from '../popUp/popUp'


export default class HabitsForm extends React.Component{
    constructor(props){
        super(props)
        this.onModule = this.onModule.bind(this)
    }

    onModule(){
        console.log('kekek');
    }

    render(){
        return(
            <>
             <AddBtn
              onModule={this.onModule}/>
             <PopUp
              handleSubmit={this.props.addHabit}/>
            </>
          )
    }
}

