import React from 'react';

import ProjectsData from './Projects.json';
import './Projects.scss';

import Project from '../Project/Project';

function projects() {
    return (
        <div className='c-projects'>
            <div className='c-projects__container'>
                <div className='c-projects__content'>
                    <h3 class='c-projects__heading u-enlarge'>Projects</h3>
                    {ProjectsData.length > 0 && <ul className='c-projects__list'>
                        {ProjectsData.map((props, index) => (
                            <li className='c-projects__item' key={index}>
                                {index > 0 && <div class='c-projects__divider'></div>}
                                <Project
                                    imageLinkMobile = {props.imageLinkMobile}
                                    imageLinkDesktop = {props.imageLinkDesktop}
                                    projectLink = {props.projectLink}
                                    projectGitLink = {props.projectGitLink}
                                    projectName = {props.projectName}
                                    projectDescript = {props.projectDescript}
                                />
                            </li>
                        ))}
                    </ul>}
                    {ProjectsData.length === 0 && <div className='c-projects__render-error'> Sorry, no projects found.</div>}
                    <div class='c-projects__divider c-projects__divider--last'></div>
                    <a class='c-projects__website-git'
                        href='https://github.com/haydenHornsbyDev/Personal-Portfolio-React'
                        target='_blank' rel='noreferrer'>
                        The GitHub page for this website<br />
                        can be found here!
                    </a>
                </div>
            </div>
        </div>
    );
}

export default projects;