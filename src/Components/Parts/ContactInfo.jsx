import React from 'react'
import './ContactInfo.css'

export default function ContactInfo() {

    return (
        <div class="row mt-5 text-white text-center font-weight-bolder contact-info" >
                <div class="col">
                    <i class="fas fa-map-marker-alt  ml-2"></i> <br/>Bengaluru
                </div>
                <div class="col">
                    <i class="fas fa-envelope ml-2"> </i> <br/>apostate22@gmailcom
                </div>
                <div class="col">
                    <i class="fas fa-phone-alt ml-2"></i> <br/>7978724908
                </div>
        </div>
    )
}


