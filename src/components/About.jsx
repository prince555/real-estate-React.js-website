import React from 'react';
import aboutimage from '../images/hero.png';

export default function About() {
    return (
        <div className='about'>
            <div className="about-model">
                <img src={aboutimage} alt='about image'/>
            </div>
                <div className="about-text">
                <h2>We are the Best <br/>Real Estate Company</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad modi repellendus, optio
                 eveniet eligendi molestiae? Fugiat, temporibus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad modi repellendus, optio
                 eveniet eligendi molestiae? Fugiat, temporibus!</p>
                 <button>View More</button>
                </div>
        </div>
        
    )
}
