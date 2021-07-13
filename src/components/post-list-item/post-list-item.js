import React from 'react';
import './post-list-item.scss';


export default class PostListItem extends React.Component {

    render(){
        const {label, onDelete, onToggleDone, onToggleImportant, important, done} = this.props;
        let classNames = 'post-list-item';

        if(important){
            classNames += ' important';
        }

        if(done){
            classNames += ' done';
        }

        return(
            <div className={classNames}>
                <span className='text'>{label}</span>
                <div className='btn-group'>
                    <i className="far fa-check-circle " onClick={onToggleDone}></i>
                    <i className="fas fa-star " onClick={onToggleImportant}></i>
                    <i className="fas fa-trash " onClick={onDelete}></i>
                </div>
            </div>
        )
    }
}
