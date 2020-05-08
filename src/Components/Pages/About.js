import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { CSSTransitionGroup } from 'react-transition-group'
import  SocialMedia  from '../Parts/SocialMedia'
import  ContactInfo  from '../Parts/ContactInfo'
import StatPage from '../Parts/StatPage'
import './About.css'
import Typical from 'react-typical'
import Typist from 'react-typist'

export default function About(){

    
    return(
        <div>
        <div style={center} className="about">
            <div xs="2" className="fix-height">     
                <img src="/dev.svg" alt="devicon" className="devIcon" style={devIcon}/>
                <img src='/passport.jpg' alt="img" style={profilePic}/>
                <SocialMedia />
            </div>
            <div xs="10" className="fix-height-left">
                <div>
                <h1><Typical 
                    steps={['Hi',1000,"I'm",500,"Abhishek Ray",350]}
                    loop={1} />    
                </h1>
                <h4>As a Full Stack Developer<br/>I love bringing ideas to fruition with technology</h4>
                </div>
                <ContactInfo />
            </div>
            
        </div>
        <StatPage />
        </div>
    )
}

const profilePic = {
    width : '180px',
    height : '180px',
    borderRadius : '60%',
    margin : '20px',
    objectFit : 'cover',
}

const center = {
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
}

const devIcon = {
    position : 'absolute',
    top : '150px',
}