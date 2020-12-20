import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import info from '../information';


class Header extends Component {
    state = {}

    render() {
        return (<div>
        <h1 className='heading-background'>Estrada</h1>
            <header>
                <h1>
                    <Fade bottom cascade>{info.name}</Fade></h1>
            </header>
            <Fade bottom>
            <p className='header-title'>
            {info.headerTagline[0]}<br></br>{info.headerTagline[1]}<br></br>
            {info.headerTagline[2]}
               <br></br>
                    <button><a href={`mailto:${info.contactEmail}`} rel="noopener noreferrer" >Contact</a></button>
                    <button><a href={`${info.resume}`} rel="noopener noreferrer" >Resume</a></button>
                </p>
            </Fade>



        </div>);
    }
}

export default Header;