import React from 'react';

import './Project.scss';

function project(props) {
    var imageLinkMobile = props.imageLinkMobile;
    var imageLinkDesktop = props.imageLinkDesktop;
    const projectLink = props.projectLink;
    const projectGitLink = props.projectGitLink;
    const projectName = props.projectName;
    const projectDescript = props.projectDescript;

    if (imageLinkMobile == "" || imageLinkMobile == null) {
        imageLinkMobile = imageLinkDesktop;
    } else if (imageLinkDesktop == "" || imageLinkDesktop == null) {
        imageLinkDesktop = imageLinkMobile;
    }

    return (
        <div className='c-project c-project__container'>
            <div className='c-project__content'>
                {
                <div class={`c-project__example-pic ${(imageLinkMobile) ? "" : "c-project__example-pic--error-mobile"} ${(imageLinkDesktop) ? "" : "c-project__example-pic--error-desktop"}`}>
                    <img class='c-project__pic--mobile' src={imageLinkMobile} />
                    <img class='c-project__pic--desktop' src={imageLinkDesktop} />
                    <a class='c-project__img-overlay c-project__img-overlay--top'
                        href={projectLink} target='_blank'>
                        <h4>View In Browser!</h4>
                    </a>
                    <a class='c-project__img-overlay c-project__img-overlay--bot'
                        href={projectGitLink} target='_blank'>
                        <h4>View On GitHub!</h4>
                    </a>
                </div>}
                <div class='c-project__text'>
                    <h4 class='c-project__name u-text--white'>{projectName}</h4>
                    <p class='c-project__descript'>{projectDescript}</p>
                </div>
            </div>
        </div>
    );
}

export default project;