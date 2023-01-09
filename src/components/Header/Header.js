import React from 'react';

import './Header.scss';

import NavBar from '../NavBar/NavBar';

function header({ id }) {
    return (
        <div className='c-header c-header__wrapper c-header__wrapper--dark' id={id}>
            <div className='c-header__container'>
                <header className='c-header__content'>
                    <NavBar />
                    {<div class='c-header__smth'>
                        <div class='c-header__face--1'>UwU</div>
                        <div class='c-header__face--2'>^~^</div>
                    </div>}
                </header>
            </div>
        </div>
    );
}

export default header;
