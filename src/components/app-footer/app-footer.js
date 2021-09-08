import React from 'react';
import {NavLink} from "react-router-dom"
import './app-footer.scss';
 
const AppFooter = () =>{

    return(
        <footer className='footer'>
          <ul className='nav-menu'>
            <li className='nav-menu_item toDoPage'><NavLink  activeClassName="active " exact={true} to='/'><i className="fas fa-list-ul "></i></NavLink></li>
            <li className='nav-menu_item habitsPage'><NavLink to='/habits'><i className="far fa-check-square"></i></NavLink></li>  
            <li className='nav-menu_item workoutPage'><NavLink to='/workout-log'><i className="fas fa-book-open"></i></NavLink></li>
          </ul>
        </footer>
    )
    
};

export default AppFooter;     