import React from 'react'
import './popUp.scss'

export default class PopUp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            descr: '',
            numb: null
        }
    }


    render(){
        return(
            <div className='wrapper-habits'>
                <form className='habits-form'>
                      <input
                       type='text'
                       placeholder='Habit Title'
                       />
                       <input
                       type='text'
                       placeholder='Description'
                       />
                       <input
                       type='number'
                       placeholder='Number of days'/>
                       <input
                       type='submit'
                       onClick={(e)=>{
                           e.preventDefault()
                           this.props.handleSubmit()
                       }}/>
                </form>
            </div>
          )
    }
}


