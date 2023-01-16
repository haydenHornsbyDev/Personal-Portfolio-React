import React from 'react';

import './Footer.scss';

function footer() {
    return (
        <div className='c-footer c-footer__wrapper c-footer__wrapper--light'>
            <div className='c-footer__container'>
                <footer className='c-footer__content'>
                    <div className='c-footer__border c-footer__border--top'></div>
                    <ul className='c-footer__icons'>
                        <li className='c-footer__icon'>
                            <a className='c-footer__link c-footer__link--icon' href='https://github.com/haydenHornsbyDev' target='_blank'
                                title='GitHub'>
                                <img id='github-icon' src='./images/github-icon.png' />
                                <div className='c-footer__underline'></div>
                            </a>
                        </li>
                        <li className='c-footer__icon'>
                            <a className='c-footer__link c-footer__link--icon' href='https://linkedin.com/in/hayden-hornsby-064220249'
                                target='_blank' title='LinkedIn'>
                                <img id='linkedin-icon' src='./images/linkedin-icon.png' />
                                <div className='c-footer__underline'></div>
                            </a>
                        </li>
                        {/* <li className='c-footer__icon'>
                            <a className='c-footer__link c-footer__link--icon' href='https://www.instagram.com' target='_blank'
                                title='Instagram'>
                                <img id='instagram-icon' src='./images/instagram-icon.png' />
                                <div className='c-footer__underline'></div>
                            </a>
                        </li> */}
                    </ul>
                    <div className='c-footer__divider'></div>
                    <ul className='c-footer__pages'>
                        <li className='c-footer__page'><a className='c-footer__link c-footer__link--page' href='/'>Home</a></li>
                        <li className='c-footer__page'><a className='c-footer__link c-footer__link--page' href='#about'>About</a></li>
                        <li className='c-footer__page'><a className='c-footer__link c-footer__link--page' href='#projects'>Projects</a></li>
                        {/* <li className='c-footer__page'><a className='c-footer__link c-footer__link--page' href='#contact'>Contact</a></li> */}
                    </ul>
                </footer>
            </div>
        </div>
    );
}

export default footer;