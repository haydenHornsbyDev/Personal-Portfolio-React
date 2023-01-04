import React, { useEffect, useState } from 'react';
import './Hero.scss';

function Hero() {
    const [ isActive, setIsActive ] = useState(false);

    useEffect(() => {
        setIsActive(true)
    },[isActive]);

  return (
    <div className="c-hero c-hero__wrapper c-hero__wrapper--gray">
        <div className="c-hero__container">
            <div className="c-hero__content">
                <div className={`c-hero__divider${isActive ? ` is-active` : ``}`}></div>
                <div className={`c-hero__name${isActive ? ` is-active` : ``}`}>
                    <h1 className="c-hero__firstname u-enlarge">Hayden</h1>
                    <h1 className="c-hero__surname u-enlarge">Hornsby</h1>
                </div>
                <div className={`c-hero__text${isActive ? ` is-active` : ``}`}>
                    <h4 className="c-hero__title">Front-End<br/>Web Developement</h4>
                    <p className="c-hero__caption u-text--gray">
                        Creating accessible and intuitive<br/>websites from your designs
                    </p>
                </div>
            </div>
            <a className={`c-hero__arrow${isActive ? ` is-active` : ``}`} href="#header">
                <svg xmlns="http://www.w3.org/2000/svg" width="70.71" height="43.356" viewBox="0 0 70.71 43.356">
                    <path data-name="Subtraction 1"
                        d="M35.355,86.711h0L0,51.355l8-8L35.356,70.71,62.711,43.355l8,8L35.356,86.711Z"
                        transform="translate(0 -43.355)" fill="rgba(255,255,255,0.64)" />
                </svg>
            </a>
        </div>
    </div>
  );
}

export default Hero;
