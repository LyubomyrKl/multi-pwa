    import React from 'react';
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
                    <button
                        type='submit'
                        className='addBtn'>
                        <i class="fas fa-plus"></i>
                    </button>

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