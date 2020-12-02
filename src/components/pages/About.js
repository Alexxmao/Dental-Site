import React from 'react'
import DrMao from '../DrMao'
import DrBao from '../DrBao'
import AliceCarousel from 'react-alice-carousel';
import Hygenists from '../Hygenists'
import Assistants from '../Assistants'
import Reception from '../Reception'
import 'react-alice-carousel/lib/alice-carousel.css';
import './About.css'
import image1 from '../assets/images/img1.jpg'
import image2 from '../assets/images/img2.jpg'
import image3 from '../assets/images/img3.jpg'

const handelDragStart = (e) => e.preventDefault();

const items = [
    <img src={image1} onDragStart={handelDragStart} className= 'sliderimg' />,
    <img src= {image2} onDragStart={handelDragStart} className= 'sliderimg' />,
    <img src= {image3} onDragStart={handelDragStart} className= 'sliderimg' />
]

export default function About(){
    return(
     <div>
         {/* dentists */}
         <div>
             <h1 className='dentists-title'>The Dentists</h1>
<DrMao/>
<DrBao/>
             </div>
{/* team */}
             <div>
<Hygenists/>
<Assistants/>
<Reception/>
         </div>
         {/* office tour */}
         {/* uses alice carousel */}
         <div>
             <h1 className='imagetitle'>The Office</h1>
<AliceCarousel mouseTracking items={items} autoPlay= {true} autoPlayInterval='5000' infinite={true} />
         </div>
     </div>
    )
}