import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './StatPage.css'
import { Row, Col } from 'react-bootstrap'
//import GitHubCalendar from 'react-github-calendar';

export default function StatPage() {

    return (
        <Jumbotron className="jumbo">
            <div>
                <h2>Tech Stack</h2>
                <hr/>
                <div className="tech-stack">
                    <img src="/react.svg" alt="react" title="React"/>
                    <img src="/redux.svg" alt="redux" title="Redux"/>
                    <img src="/es6.svg" alt="es6" title="ES6"/>
                    <img src="/javascript.svg" alt="javascript" title="Javascript"/>
                    <img src="/html.svg" alt="html" title="HTML5"/>
                    <img src="/css.svg" alt="css" title="CSS3"/>
                    <img src="/bootstrap.svg" alt="bootstrap" title="Bootstrap"/>
                    <img src="/material.svg" alt="Material UI" title="Material UI" />
                </div>
            </div>
            
            <div className="tools">
                <h2>Tools</h2>
                <hr/>
                <div>
                <img
                    src="/git.svg"
                    width="120px"
                    className="img-fluid p-3"
                    alt=""
                  />
                <img
                    src="/gitcat.svg"
                    width="120px"
                    className="img-fluid p-3"
                    alt="" title="Github"
                  />
                  <img
                    src="/netlify.svg"
                    width="120px"
                    className="img-fluid p-3"
                    alt="" title="Netlify"
                  />
                  <img
                    src="/npm.svg"
                    width="120px"
                    className="img-fluid p-3"
                    alt="" title="NPM"
                  />
                  <img
                    src="/visual-studio-code.svg"
                    width="120px"
                    className="img-fluid p-3"
                    alt="" title="VS Code"
                  />
                </div>
            </div>
        <div>
                <h2 className="mt-3 text-center mx-auto">Stats</h2>
                <hr/>

            <div className="row mt-0">
                <div className="col-sm-12 col-md-8">
                        <Row>
                            <Col>
                        <div>
                            <h1> 1000+</h1>
                          <h4>Coding Hours</h4>
                        </div>
                        </Col>
                        <Col>
                        <div>
                            <h1> 200+</h1>
                          <h4>Github Commits</h4>
                        </div>
                        </Col>
                        </Row>

                        <Row>
                        <Col>
                        <div>
                            <h1> 100+</h1>
                           <h4>Hours of Soft Skills</h4>
                        </div>
                        </Col>
                        <Col>
                        <div>
                            <h1> 200+</h1>
                            <h4>DSA Problems</h4>
                        </div>
                        </Col>
                        </Row>
                </div>
                <div className="col-sm-12 col-md-4">
                    
                    <img src="/gitcommit.png" alt="Commits" title="Git Commits" className="commit-hist"/>
                </div>
            </div>
    </div>
        </Jumbotron>
    )
}


// <GitHubCalendar username="ray2294"/>
