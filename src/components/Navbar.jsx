import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <ul className='general'>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/admin"}> Admin</Link ></li>
                    <li><Link to={"/AddProduct"}> AddProduct</Link ></li>
                    <li><Link to={"/DeleteProduct"}> DeleteProduct</Link ></li>
                    <li><Link to={"/UptadeProduct"}>UptadeProduct</Link ></li>
                </ul>
            </nav >
        </>
    )
}

export default Navbar