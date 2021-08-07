import React from 'react';
import PropertyBox from './PropertyBox';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';

function Properties() {
    return (
        <div className='product'>
            <div className="p-heading">
                <h3>Properties</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad modi repellendus, optio
                 eveniet eligendi molestiae? Fugiat, temporibus!</p>
            </div>
            <div className="product-container">
                <PropertyBox image={p1} name="land" price="500"/>
                <PropertyBox image={p2} name="land" price="500"/>
                <PropertyBox image={p3} name="land" price="500"/>
            </div>
        </div>
    )
}

export default Properties
