import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import info from '../information';

class About extends Component {
    state = {  }
    render() { 
        return (<div className='about'>
            <div className='about-content'>
            <h1><Fade bottom cascade>About Me</Fade></h1>
            <Fade bottom>
                    <p>{info.abouttext}</p>
            </Fade>
            </div>
            {info.ShowAboutImage ? <img src={info.aboutImage} alt='about image' width='300' height = '400'></img> : null}
            

        </div>  );
    }
}
 
export default About;