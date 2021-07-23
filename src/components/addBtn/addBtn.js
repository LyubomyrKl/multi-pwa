import React from 'react';
import './addBtn.scss'

const AddBtn = ({onModule}) =>{
    return(
        <button
        type='submit'
        className='addBtn'
        onClick={()=>{
            console.log('klds');
        }}>
            <i class="fas fa-plus"></i>
        </button>   

    )
}

export default AddBtn