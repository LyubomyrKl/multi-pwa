import React from 'react';
import {Link} from "react-router-dom"
import './app-footer.scss';
 
const AppFooter = () =>{
    return(
        <footer className='footer'>
          <ul className='nav-menu' onClick=''>
            <li className='nav-menu_item'><Link className='active' to='/'><i className="fas fa-list-ul "></i></Link></li>
            <li className='nav-menu_item'><Link to='/habits'><i className="far fa-check-square"></i></Link></li>
            <li className='nav-menu_item'><Link to='/workout-log'><i className="fas fa-book-open"></i></Link></li>
          </ul>
        </footer>
    )
};

export default AppFooter;     