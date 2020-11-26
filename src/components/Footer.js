import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

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
							<li>Tues: 8:00 AM - 7:00 PM</li>
							<li>Wed: 8:00 AM - 7:00 PM</li>
							<li>Thurs: 8:00 AM - 7:00 PM</li>
							<li>Fri: 8:00 AM - 4:00 PM</li>
							<li>Sat: Closed</li>
							<li>Sun: Closed</li>
						</ul>
					</div>
					<div className='col'>
						<h4 className='col-header'>Quick Links</h4>
						<ul classname='link-list'>
						<li></li>

							<li>
								<Link className='footer-clickables' to='/'>Home</Link>
							</li>
							
							<li>
								<Link className='footer-clickables' to='/about'>About</Link>
							</li>
							
							<li>
								<Link className='footer-clickables' to='/services'>Services</Link>
							</li>
							
							<li>
								<Link className='footer-clickables' to='/contact'>Contact</Link>
							</li>
							
							<li>
								<Link className='footer-clickables' to='/new-patients'>New Patients</Link>
							</li>
							<li></li>
							
						</ul>
					</div>
					<div className='col'>
						<h4 className='col-header'>Contact Us</h4>
						<ul>
							<li></li>
							<li><i className= 'fa fa-phone fa'/>{" "}<a className='footer-clickables' href="tele:2042847000">204-284-7000</a></li>
							<li></li>
							<li>dentist@fgdc.ca</li>
							<li></li>
							<li> <i className= 'fa fa-map-marker fa'/>{" "}<a className='footer-clickables' href="https://www.google.com/maps/dir//fort+garry+dental/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x52ea7433ea37a115:0x37213adcfea9ca9d?sa=X&ved=2ahUKEwiPhemi4ZztAhVxIDQIHVRPDW8Q9RcwC3oECBkQBQ" target= "_blank">Get Directions</a></li>
							<li></li>
							<li>1-1248 Pembina Hwy, Winnipeg, MB. R3P 2M9 Canada</li>
							
							
							
						</ul>
					</div>
				</div>
				<hr />
				<div>
					<p className='bottombottom'>
						Fort Garry Dental Center | All Rights Reserved |{" "}
						{new Date().getFullYear()} Alex Mao Development <i className= 'fab fa-react'/>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
