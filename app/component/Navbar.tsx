
import React from 'react'
import Link from 'next/link'
import "./style.css"
const Navbar = () => {
    return (
        <div>
            <ul className='Nav'>
                <li  className='Lis'> Home</li>
                <li className='Lis'>About</li>
                <li className='Lis'>Contact us</li>
                <li className='Lis'>Login</li>


            
            </ul>

        </div>
    )
}

export default Navbar
