import React from "react";
import "./Footer.css";

function Footer() {
	return (
		<div className='main-footer'>
			<div className='container'>
				<div className='row'>
					<div className='col'>
						<h4 className='col-header'>Business Hours</h4>
						<ul>
							<li></li>
							<li>Mon: 8:00 AM - 4:00 PM </li>
							<li>Tues: 8:00 AM - 7:00 AM</li>
							<li>Wed: 8:00 AM - 7:00 AM</li>
							<li>Thurs: 8:00 AM - 7:00 AM</li>
							<li>Fri: 8:00 AM - 4:00 PM</li>
							<li>Sat: Closed</li>
							<li>Sun: Closed</li>
						</ul>
					</div>
					<div className='col'>
						<h4 className='col-header'>Quick Links</h4>
						<ul>
							<li></li>
							<li>Home</li>
							<li>About</li>
							<li>Services</li>
							<li>Contact</li>
							<li>New Patients</li>
							<li></li>
							<li></li>
						</ul>
					</div>
					<div className='col'>
						<h4 className='col-header'>Contact Us</h4>
						<ul>
							<li></li>
							<li>(204) 284-7000</li>
							<li>dentist@fgdc.ca</li>
							<li>Get Directions</li>
							<li>1-1248 Pembina Hwy, Winnipeg, MB. R3P 2M9 Canada</li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</div>
				</div>
				<hr />
				<div>
					<p className='bottombottom'>
						Fort Garry Dental Center |All Rights Reserved |{" "}
						{new Date().getFullYear()} Alex Mao Development &copy;
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
