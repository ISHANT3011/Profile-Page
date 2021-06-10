import React, { Component } from 'react'
//import biologo from './public/image/biopicimg.jpg'
import logo from '../Components/public/image/ishant_bitmoji.jpeg';

class About extends Component {
    render() {
        return (
            <section id="container-about" className="container-about">
                    <h1>About Me</h1> 

                    <img id="profilepic" src={logo} width="170" height="170" alt="abtimg"/>
                    <p>I'm Ishant Khurana, a Sophomore from Chemical engineering department and my hostel is Manas I hail from Rohtak, Haryana. 
Talking of my interests, I am very passionate about Chess and Table Tennis. I am a big-time movie freak.  
In tech side, I've tried and even trying my hands in the fields of Coding, Data Science,  Consulting, And Finance. And very enthusiastic about Stock Market Kinda stuff.
Talking about my involvement at IITG, I was a core member of the Consulting And Analytics Club, and also FUND manager of the Finance and Economics Club. I have been a part of  Techniche - Our Technical fest, Robotics Club (Done a project name "pole climber" with them), UDGAM - E- Summit, In cult board, I have been a part of Xpressions- Our Dramatics Society(Done a street play with them),  and a finalist of Mr. And Ms. Fresher(organized by Anchorenza and RadioG, IIT G).
</p>
                
            </section>
        )
    }
}

export default About
