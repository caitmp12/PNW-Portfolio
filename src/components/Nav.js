import React from "react"
import { LInk } from "react-router-dom"

const Nav = (props) => {
    return (
        <> 
        <div className="nav-box">
            <div className="nav-logo">
                <h1>PNW</h1>
            </div>
            <div className="nav">
                <ul>
                    <li>About</li>
                    <li>Gallery</li>
                    <li>Blog</li>
                    <li>Contact</li>    
                </ul>
            </div>
        </div>
        </>
    )
}

export default Nav;