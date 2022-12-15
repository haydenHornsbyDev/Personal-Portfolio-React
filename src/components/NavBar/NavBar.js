import React from 'react';

import './NavBar.scss';

function NavBar() {
  return (
    <nav className="c-nav">
        <ul class="c-nav__list">
            <li class="c-nav__item"><a class="c-nav__link" href="/#about">About</a></li>
            <li class="c-nav__item"><a class="c-nav__link" href="/#projects">Projects</a></li>
            <li class="c-nav__item"><a class="c-nav__link" href="/#contact">Contact</a></li>
        </ul>
    </nav>
  );
}

export default NavBar;
