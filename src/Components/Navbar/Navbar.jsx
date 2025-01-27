import React from 'react'
import { BiSolidPlaneAlt } from 'react-icons/bi'


function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <div className='navbar-logo'>
                    <BiSolidPlaneAlt />
                    <span>Rise of Coding</span>
                </div>

<div >
    <button className='navbar-button'>Book Now </button>

</div>
            </div>
        </div>
    )
}

export default Navbar