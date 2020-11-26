import React from 'react'
import './Book-Button.css';
import { Link } from 'react-router-dom';

export function Button(){
return(
    <Link to='book-now'>
        <button className='btn'>
            Book Now
        </button>
    </Link>
);
}