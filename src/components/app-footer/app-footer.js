import React from 'react';
import './app-footer.scss';
 
const AppFooter = () =>{
    return(
        <footer className='footer'>
          <ul className='nav-menu'>
              <li className='nav-menu_item '><a href='#' className='active'><i className="fas fa-list-ul "></i></a></li>
              <li className='nav-menu_item'><a href='#'><i className="far fa-check-square"></i></a></li>
              <li className='nav-menu_item'><a href='#'><i className="fas fa-book-open"></i></a></li>
          </ul>
        </footer>
    )
};

export default AppFooter;