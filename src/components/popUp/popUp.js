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
        this.changeDescr = this.changeDescr.bind(this)
        this.changeNumb = this.changeNumb.bind(this)
        this.changeTitle = this.changeTitle.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeTitle(e){
        this.setState({
            title: e.target.value    
        })
    }
    changeNumb(e){
    
    }
    changeDescr(e){
        this.setState({
            descr: e.target.value    
        })
    }

    onSubmit(e){
        e.preventDefault()
        this.props.handleSubmit(this.state)
        this.setState({
            title: '',
            descr: '',
            numb:''
        })
    }

    render(){
        return(
            <div className='wrapper-habits active'>
                <form className='habits-form'>
                      <input
                       type='text'
                       placeholder='Habit Title'
                       onChange = {this.changeTitle}
                       value= {this.state.title}
                       />
                       <input
                       type='text'
                       placeholder='Description'
                       onChange = {this.changeDescr}
                       value= {this.state.descr}
                       />
                       <input
                       type='number'
                       placeholder='Number of days'
                       onChange = {this.changeNumb}
                       value= {this.state.numb}
                       />
                       <input
                       type='submit'
                       onClick={this.onSubmit}/>
                </form>
            </div>
          )
    }
}


