import React from 'react'

function PropertyBox(props) {
    return (
        <div className='p-box'>
            <img src={props.image}/>
            <p> {props.name} </p>
            <a href='#' className='price'> {props.price} </a>
            <a href='#' className='buy-btn'>Add to Cart</a>
        </div>
    )
}

export default PropertyBox
