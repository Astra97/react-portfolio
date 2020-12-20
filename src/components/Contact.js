import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import info from '../information';

class Contact extends Component {
    state = {  }
    render() { 
        return (  <div>
        <h1>
                <Fade bottom cascade> Contact </Fade>
        </h1>
        <Fade bottom>
        <div className='contact-content'>
                
                    <a href={`mailto:${info.contactEmail}`} className='email'>{info.contactEmail}</a>
                <ul>
                    {info.social.map((link,index)=>(
                        <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}   
                </ul>
        </div>
        </Fade>
 </div>);
    }
}
 
export default Contact;