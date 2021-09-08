import React from 'react';
import './post-list.scss'
import PostListItem from '../post-list-item/post-list-item';

const PostList = ({posts, onDelete, onToggleImportant, onToggleDone}) => {
  const elements = posts.map((item)=>{
    const {id, label, important, done} = item;
   
    return(
        <li className='list-group-item'>
             <PostListItem
             onToggleDone = {()=>{
              onToggleDone(id)
             }}
             onToggleImportant = {()=>{
              onToggleImportant(id)
             }}
             key={id}
             label={label}
             important={important}
             done={done}
             onDelete={()=>{onDelete(id)}}/>
        </li>
    )
  });


  return(
      <div className='list-wrapper'>
          <ul className='post-list'>
               {elements}
          </ul>
      </div>
  )
};

export default PostList; 