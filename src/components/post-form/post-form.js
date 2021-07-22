import React from 'react';
import AddBtn from '../addBtn/addBtn';
import './post-form.scss'

export default class PostForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text: ''
        }
        this.onVaalueChange = this.onVaalueChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)   
    }

    onVaalueChange(e){
        this.setState({
            text: e.target.value    
        })
    }
    
    onSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.state.text)
        this.setState({
            text: ''
        })
    }

    render(){
        return(
            <div>
                <form className='addForm'
                onSubmit={this.onSubmit}>
    
                    <AddBtn/>
                    <input 
                        type='text' 
                        placeholder='What do u need to do?'
                        className='addArea'
                        onChange={this.onVaalueChange}
                        value = {this.state.text}/>
                </form>
            </div>
           )
    }
}