import React from 'react'
import Contact from '../Components/Pages/Contact'
import About from '../Components/Pages/About'
import Projects from '../Components/Pages/Projects'
import { Route, Switch } from "react-router-dom";

export default function Routes(){

    return(
        <Switch>
            <Route path="/" exact render={(props)=><About {...props} /> } />

            

            <Route path="/:projects" render={(props)=><Projects {...props} /> } />
        </Switch>
    )
}

// <Route path="/contact"  render={(props)=><Contact {...props} /> } />