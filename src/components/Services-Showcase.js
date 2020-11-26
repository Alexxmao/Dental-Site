import React from 'react'


import { Link } from 'react-router-dom'

import './Services-Showcase.css'



export default function Services_Showcase() {
    return(
        <div className='service-section'>
           <div className='service-wrapper'>
               <div>
                   <div className= 'service-heading'>
               <h3>What We Offer at Fort Garry Dental Centre</h3>
                <h1>Featured Services</h1>
                <p>Our patients always have access to all areas of oral health in one location</p>
                   </div>
                   <div className='service-container'>
                       <Link to= '/services/general-dentistry' className='service-container-card' >
                           <div className = 'service-container-cardInfo'>
                           <h3>General Dentistry</h3>
                           </div>
                           <div className= 'icon'>
                           <i className="fas fa-users fa-2x"/>
                           </div>
                           <div className= 'icon'>
                               Learn More {" "}<i className='fas fa-caret-right fa-s'/>
                               </div>
                       </Link>
                       <Link to= '/services/cosmetic-dentistry' className='service-container-card'>
                       <div className = 'service-container-cardInfo'>
                           <h3>Cosmetic Dentistry</h3>
                           </div>
                           <div className='icon'>
                               <i className= 'fas fa-tooth fa-2x'/>
                           </div>
                           <div className= 'icon'>
                               Learn More {" "}<i className='fas fa-caret-right fa-s'/>
                               </div>
                       </Link>
                       <Link to= '/services/specialty-dentistry' className='service-container-card'>
                       <div className = 'service-container-cardInfo'>
                           <h3>Specialty Dentistry</h3>
                           </div>
                           <div className= 'icon'>
                           <i className="fas fa-asterisk fa-2x"/>
                           </div>
                           <div className= 'icon'>
                               Learn More {" "}<i className='fas fa-caret-right fa-s'/>
                               </div>
                       </Link>
                   </div>
               </div>
           </div>
        </div>
    )
}