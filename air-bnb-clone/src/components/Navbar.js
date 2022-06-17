import React from 'react'
import Airbnb from '../images/airbnb-logo.png'


export default function Navbar() {
    return (
        <nav className='Navbar-container'> 
            <img src={Airbnb} className='airbnb-logo' alt='airbnblogo' />
        </nav>
    )
}