import React from 'react'
// import styles from './Navigation.module.css'

const Navigation = () => {
  return (
        <nav>
            <div className='logo'>
                <img src="/Images/logo.png" alt="" />
            </div>

            <ul>
                <li>Home</li>
                <li>Categories</li>
                <li>Contact Us</li>
                <li>About Us</li>
            </ul>
        </nav>
  )
}

export default Navigation