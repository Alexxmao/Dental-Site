import React from 'react'
import './DrBao.css'
import Headshot from './assets/images/drmao.jpg'


export default function DrBao(){
    return(
        <div className= 'main'>
            <img src={Headshot} className='picture'/>
           <div className= 'text'>
            <h1 className= 'title'>Dr. Chris Bao</h1>
<p>
    fill with bio
</p>
    </div>
        </div>
    )
}