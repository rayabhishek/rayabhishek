import React from 'react'
import './SocialMedia.css'

export default function SocialMedia() {


    return(
        <div className="text-center pt-1 mt-4 mx-auto social-media" style={{backgroundColor: 'black', width: '270px', height: '50px', marginLeft: '260px', borderRadius: '25px', padding: '0px'}}>
                    <div class="mt-0 ">
                            <a href="https://github.com/ray2294"> <i className="fab fa-github" style={{color:'white',fontSize: '40px', margin: '0px'}} title="Github Account"></i>
                            </a>
                            
                            <a href="https://www.hackerrank.com/ray2294" className="text-decoration-none text-muted m-1"> <i class="fab fa-hackerrank text-success" style={{fontSize: '40px'}} title="Hackerrank Profile"></i> </a>
                            
                            <a href="https://www.linkedin.com/in/abhishek-ray95/" className="text-decoration-none text-muted m-1 "> <i class="fab fa-linkedin " style={{color: '#2377B5', fontSize: '40px'}} title="Linkedin Profile"></i> </a>
                            
                            <a href="https://twitter.com/AbhishekRay94" className="text-decoration-none text-muted m-1 " title="Twitter Handle"> <i class="fab fa-twitter" style={{color:'#33A1F3',  fontSize: '40px'}}></i> </a>
                                            

                    </div>
            </div>
    )
}