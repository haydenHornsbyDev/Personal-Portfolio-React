import React from 'react';

import './Main.scss';

import About from '../About/About';
import Projects from '../Projects/Projects';

function main() {
    return (
        <div className='c-main c-main__wrapper c-main__wrapper--light'>
            <div className='c-main__about'>
                <div class='c-main__anchor-offset' id='about'></div>
                <About />
            </div>
            <div className='c-main__projects'>
                <div class='c-main__anchor-offset' id='projects'></div>
                <div class='c-main__border--top'></div>
                <Projects />
            </div>
        </div>
    );
}

export default main;