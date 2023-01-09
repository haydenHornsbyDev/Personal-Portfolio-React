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
                        {/* <li className='c-projects__item'>
                            <div class='c-projects__divider'></div>
                            <div class='c-project'>
                                <div class='c-project__example-pic c-main__card'>
                                    <img class='c-project__pic--mobile' src='./images/project-example-pic-1--mobile.png' />
                                    <img class='c-project__pic--desktop' src='./images/project-example-pic-1--desktop.png' />
                                    <a class='c-project__img-overlay c-project__img-overlay--mid'
                                        href='https://mintguild.xyz/memories' target='_blank'>
                                        <h4>View In Browser!</h4>
                                    </a>
                                </div>
                                <div class='c-project__text'>
                                    <h4 class='c-project__name u-text--white'>Memories of Battle</h4>
                                    <p class='c-project__descript'>
                                        Using API to fetch and display images from a database and display them in
                                        a carousel where the number of slides dynamically changes as more images
                                        are added to the database.
                                        <br /><br />
                                        This was a passion project to be able to view all the memorable moments that
                                        were uploaded during an event within the participating community and was my
                                        first time using back end data to dynamically populate a website with elements.
                                    </p>
                                </div>
                            </div>
                        </li> */}
                    </ul>}
                    {ProjectsData.length === 0 && <div className='c-projects__render-error'> Sorry, no projects found.</div>}
                    <div class='c-projects__divider'></div>
                    <a class='c-projects__website-git'
                        href='https://github.com/haydenHornsbyDev/Personal-Portfolio-React' target='_blank'>
                        The GitHub page for this website<br />
                        can be found here!
                    </a>
                </div>
            </div>
        </div>
    );
}

export default projects;