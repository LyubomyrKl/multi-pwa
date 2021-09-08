import React from 'react'
import './app-header.scss';

const AppHeader = ({name, surname, classOfPage})=> {
    return (
        <header className ="AppHeader">
            <h1>{name}<span className={classOfPage}>{surname}</span></h1>
        </header>
    )
}

export default AppHeader;