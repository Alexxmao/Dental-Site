import React from 'react'
import './About-Button.css';
import { Link } from 'react-router-dom';

export function Button(){
return(
    <Link to='/about'>
        <button className='abtn'>
            Meet the Team!
        </button>
    </Link>
);
}