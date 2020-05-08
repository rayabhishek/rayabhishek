import React from 'react'
import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import './Navbar.css'


const navButtons = [
    {
        "Link" : "About Me",
        "Route" : "/"
    },
    {
        "Link" : "Projects",
        "Route" : "/projects"
    },
 /*   {
        "Link" : "Contact",
        "Route" : "/contact"
    },  */

]

export default function Navbar(){
    return (
        <Row style={navStyle} className="nav-bar">
        {navButtons.map(link => {
        return <Link to={link.Route} style={navButtonStyles} >{link.Link}</Link>
    })}
    </Row>
    )
}

const navStyle = {
    backgroundColor: 'black',
    display : 'flex',
    justifyContent : 'flex-end',
}

const navButtonStyles = {
    textDecoration : 'none',
    color: 'grey',
    fontWeight: 'bold',
    padding: 20
}

