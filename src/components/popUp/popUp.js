import React from 'react'
import './popUp.scss'
import AddBtn from '../addBtn/addBtn'

export default class PopUp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            descr: '',
            active: false,
            numb: ''
        }
      
        this.changeDescr = this.changeDescr.bind(this)
        this.changeTitle = this.changeTitle.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onModule = this.onModule.bind(this)
    }


    changeTitle(e){
        this.setState({
            title: e.target.value    
        })
    }
    
    onModule(e){
        e.preventDefault();
       this.setState({
           active: !this.state.active
       })
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
            numb: null,
            active: false
        })
    }
    
    toggleActive(){
        this.props.active = !this.props.active
    }

    render(){
        let className = 'wrapper-habits';

        if(this.state.active){
            className += ' active'
        }

        return(
            <>
            <AddBtn onModule = {this.onModule}/>
            <div className={className}>
                <form className='habits-form'>
                      <input
                       type='text'
                       placeholder='Habit Title'
                       onChange = {this.changeTitle}
                       
                       />
                       <input
                       type='text'
                       placeholder='Description'
                       onChange = {this.changeDescr}
                       
                       />
                       <input
                       type='number'
                       placeholder='Number of days'
                       onChange = {this.changeNumb}
                       
                       />
                       <input
                       type='submit'
                       onClick={this.onSubmit}/>
                </form>
            </div>
            </>
        )
    }
}


