import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <div className='header'>
            <Navbar/>
            <div className='intro'>
                <p>Looking for a property !</p>
                <h1><span>Buy </span>and<span> Sell</span> Properties</h1>
                <p className='details'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad modi repellendus, optio
                 eveniet eligendi molestiae? Fugiat, temporibus!</p>
                 <a href='#' className='header-btn'>details</a>
            </div>
        </div>
    )
}
export default Header;