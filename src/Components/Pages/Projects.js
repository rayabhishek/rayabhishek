import React from 'react'
import { Paper } from '@material-ui/core'
import './Projects.css'

export default function Projects(){

    

    return(
        <div className="basic-grid">
            <div className="card">
                <img src="/food.png" alt="img" />
                <h2>eatstreet</h2>
                <p>A Food Delivery App built using React & Redux</p>
                <div className="buttons">
                    <div>
                    <a href="#" title="Source Code">GitHub</a>
                    <a href="#" >Demo Link</a>
                    </div>
                    <div>
                    <img src="/html.svg" alt="html" className="tech-icon" title="HTML"/>
                    <img src="/css.svg" alt="css" className="tech-icon" title="CSS"/>
                    <img src="/javascript.svg" alt="javascript" className="tech-icon-big" title="JavaScript"/>
                    <img src="/react.svg" alt="react" className="tech-icon" title="React"/>
                    <img src="/redux.svg" alt="redux" className="tech-icon" title="Redux"/>
                    </div>
                </div>
            </div>
            <div className="card">
                <img src="/covid.png" alt="img" />
                <h2>Covid-19 Visualizer</h2>
                <p>Graphically compare different countries' Covid Cases</p>
                <div className="buttons">
                    <div>
                    <a href="#" title="Source Code">GitHub</a>
                    <a href="#" >Demo Link</a>
                    </div>
                    <div>
                    <img src="/html.svg" alt="html" className="tech-icon" title="HTML"/>
                    <img src="/css.svg" alt="css" className="tech-icon" title="CSS"/>
                    <img src="/javascript.svg" alt="javascript" className="tech-icon-big" title="JavaScript"/>
                    </div>
                </div>
            </div>
            <div className="card">
            <img src="/quiz.png" alt="img" />
                <h2>Quiz Generator</h2>
                <p>Uses Open Trivia API for Question Bank</p>
                <div className="buttons">
                    <div>
                    <a href="#" title="Source Code">GitHub</a>
                    <a href="#" >Demo Link</a>
                    </div>
                    <div>
                    <img src="/html.svg" alt="html" className="tech-icon" title="HTML"/>
                    <img src="/css.svg" alt="css" className="tech-icon" title="CSS"/>
                    <img src="/javascript.svg" alt="javascript" className="tech-icon-big" title="JavaScript"/>
                    <img src="/react.svg" alt="react" className="tech-icon" title="React"/>
                    </div>
                </div>
            </div>
            
            <div className="card">
                <img src="/compare.png" alt="img" />
                <h2>Compare Movie Stats</h2>
                <p>Uses OMDb API</p>
                <div className="buttons">
                    <div>
                    <a href="#" title="Source Code">GitHub</a>
                    <a href="#" >Demo Link</a>
                    </div>
                    <div>
                    <img src="/html.svg" alt="html" className="tech-icon" title="HTML"/>
                    <img src="/css.svg" alt="css" className="tech-icon" title="CSS"/>
                    <img src="/javascript.svg" alt="javascript" className="tech-icon-big" title="JavaScript"/>
                    </div>
                </div>
            </div>
        </div>
    )
}