import React from "react";
import { Button } from "../About-Button";
import './Home.css';
import Services_Showcase from "../Services-Showcase";
import Why_Us from "../Why-Us";
import Office_Offers from "../Office-Offers";

export default function Home() {
	return (
		<div>
            {/* header of home page, need image */}
            <div className= 'intro'>
			<h1>State of the Art Dentistry</h1>
            <p className= 'intro-p'>With over 20 years of dental experience, we are professionals in any aspect of dental services.</p>
			</div>
            {/* quick excerpt of what the office has to offer, need image */}
            <div>
<Office_Offers/>
            </div>
            {/* service list -> make into interactive boxes */}
            <div>
                <Services_Showcase/>
            {/* design service tab, implement interactable boxes -> hover over gives information about */}
            </div>
            {/* why choose fgdc */}
            <div>
           <Why_Us/>
            </div>
            {/* meet the team -> route a button to about page */}
            <div className= 'meet'>
            <Button>Meet the Team!</Button>
             {/* implement button to go to about page */}
            </div>
            {/* book appt */}
            <div>
            {/* design booking tab -> for now keep barebones, saves information for receptionist to access to call/email back about */}
            </div>
            </div>

	);
}
