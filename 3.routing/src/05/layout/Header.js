import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import '../assets/scss/layout/Header.scss';

export default function Header() {
    return (
        <header>
            <h1><Link to={'/'}>Mysite</Link></h1>
            {/* <h1><NavLink to={'/'}>Mysite</NavLink></h1> */}
        </header>
    );
}