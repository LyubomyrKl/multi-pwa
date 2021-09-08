import React from 'react';
import './habits-item.scss'

export default class HabitsItem extends React.Component{
   

    render(){
        const {title, descr, checkboxes, onArrowDone} = this.props;
        return(
            <div className='habits-item'>
                <h1 className='habits-title'>{title}</h1>
                <p>{descr}</p>
                <div className='checkboxes-wrapp'>{checkboxes.map((checkbox, idx) => checkbox ? <div className='checkbox-item done' onClick={()=>{onArrowDone(idx)}} key={idx}>✔</div> : <div className='checkbox-item' onClick={()=>{onArrowDone(idx)}} key={idx}>✖</div>)}</div>
            </div>
        )
    }

}
