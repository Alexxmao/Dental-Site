import React from 'react'
import './DrMao.css'
import Headshot from './assets/images/drmao.jpg'


export default function DrMao(){
    return(
        <div className= 'main'>
            <img src={Headshot} className='picture'/>
           <div className= 'text'>
            <h1 className= 'title'>Dr. Patrick Mao</h1>
<p>
    Dr. Mao graduated from the University of Manitoba Faculty of Dentistry in 1996, and began working at Fort Garry Dental Center in 1998.
    He specializes in implant and cosmetic dentistry, placing an emphasis on mecury-amalgam-free white fillings. Alongside, Dr. Mao is profecient in all aspects of general dentistry, including endodontics, crowns and bridges, children's dentistry, oral surgery, and orthodontics.
    Since his graduation, Dr. Mao has also been teaching at the University of Manitoba Faculty of Dentistry in the Department of Restorative Dentistry, recieving numerous awards of excellence in teaching.
    Currently, Dr. Mao is an executive board member of the Winnipeg Dental Society (past president), a member of the Manitoba Dental Association, and a board member of the Manitoba Dental Foundation, actively playing a role in charitable work.
</p>


{/* <p>  Dr. Mao has been teaching at the University of Manitoba Faculty of Dentistry, Dept. of Restorative Dentistry since 1998 and have also received numerous awards for Excellence in Teaching at the Faculty.
    <p>
    Dr.Mao also mentors dental students on a regular basis.
        </p>
    <p>Dr.Mao is a Fellow of the Pierre Fauchard Academy, an International Honour Dental Organization.</p>
   <p> Dr. Mao is an Executive Board Member of the Winnipeg Dental Society (Past President) and a Member of the Manitoba Dental Association.</p>
<p></p>    
   
    Dr. Mao is also a Board Member of The Manitoba Dental Foundation and actively involved with it's numerous charitable work.</p> */}
    </div>
        </div>
    )
}