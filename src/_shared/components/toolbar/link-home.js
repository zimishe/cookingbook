import React from 'react';
import { Link } from 'react-router-dom';
import IconHome from './../../styles/images/icon-home.svg';

export const LinkHome = () => (
    <Link to='/' className="link--home" title="Home"><img src={IconHome} alt="Home" /></Link>
);