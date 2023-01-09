import React from 'react';

import './About.scss';

function about() {
    return (
        <div className='c-about'>
            <div className='c-about__container'>
                <div className='c-about__content'>
                    <h3 class='c-about__heading--mobile u-enlarge'>About Me</h3>
                    <div class='c-about__profile-pic c-main__card'>
                        <img src='./images/profile-pic.jpg' />
                    </div>
                    <div class='c-about__text'>
                        <h2 class='c-about__heading--desktop'>About Me</h2>
                        <p class='c-about__para'>
                            Hi, I'm Hayden Hornsby, a front-end web developer. I endeavour 
                            to recreate designs as responsive, intuitive, and accessible 
                            websites. Throughout my education, programming has had a 
                            prominent place however I take pride in being largely 
                            self-taught when it comes to web development.
                        </p>
                        <p class='c-about__para c-about__para--bot'>
                            I am an avid enjoyer of music and channel that creativity and 
                            enthusiam through my guitar playing in Brazen Bull, having 
                            successfully released our debut album and played gigs all over 
                            England. I feel it is important to bring your own unique style 
                            and twist to one's projects, both for pleasure and for work.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default about;