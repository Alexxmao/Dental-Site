import React from 'react'
import './Why-Us.css'


export default function Why_Us(){

    return(
        <div className= 'why-background'>
            <div className= 'why-header'>
            <h1>Why Choose FGDC?</h1>
            </div>
        <div className= 'why-wrapper'>
            
        <div className= 'why-container'>
            <div className= 'why-container-card'>
<div className= 'why-container-card-info'>
    <h2>Direct Billing With Insurance</h2>
    </div>
    <div className= 'why-container-card-blurb'>
    <p>Our practice can easily accept customers enrolled with any insurance plan and bill directly.</p>
    </div>

            </div>
            <div className= 'why-container-card'>
            <div className= 'why-container-card-info'>
            <h2>Using Cutting-Edge Technology</h2>
            </div>
            <div className= 'why-container-card-blurb'>
            <p>All our procedures use state of the art equipment, always maintained at the highest standards.</p>
            </div>
            
                </div>
                <div className= 'why-container-card'>
                <div className= 'why-container-card-info'>
                <h2>Convenient Hours</h2>
                </div>
                <div className= 'why-container-card-blurb'>
                <p>Our office is open early mornings to late evenings to accomodate your schedule and daily life.</p>
                </div>
                
                </div>
                <div className= 'why-container-card'>
                <div className= 'why-container-card-info'>
                
                <h2>Patient Priority</h2>
                </div>
                <div className= 'why-container-card-blurb'>
                <p>We are professionals in taking away the pain and fear associated with the average trip to the dentist.</p>
                </div>
               
                </div>
        </div>


        </div>
    
        </div> 
       
    )
}