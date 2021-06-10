import React, { Component } from 'react'
import c_lang from '../Components/public/image/C_language.png'
import pyimg from '../Components/public/image/pythonimg.png'
import jsimg from '../Components/public/image/javascriptimg2.png'
import htmlimg from '../Components/public/image/html5logo.jpg'
import cssimg from '../Components/public/image/csslogo.png'
import canva from '../Components/public/image/canva.png'
import mongoimg from '../Components/public/image/mngodbimg.png'
import databasebimg from '../Components/public/image/database.jpg'
import figma from '../Components/public/image/figma.png'
import react from '../Components/public/image/react.png'
import node from '../Components/public/image/node.png'


class Project extends Component {
    render() {
        return (
       
            <section id="skillheader" className="flex-project-container">
                     
                     <div><img src={c_lang} width="100" height="100" alt="python"/></div>
                    <div><img src={pyimg} width="100" height="100" alt="python"/></div>
                    <div><img src={jsimg} width="100" height="100" alt="js"/></div>
                    <div><img src={react} width="100" height="100" alt="python"/></div>
                    <div><img src={node} width="100" height="100" alt="python"/></div>
                    <div><img src={htmlimg} width="100" height="100" alt="html"/></div>  
                    <div><img src={cssimg} width="100" height="100" alt="css"/></div>
                    
                    <div><img src={mongoimg} width="100" height="100" alt="mongodb"/></div>  
                    <div><img src={databasebimg} width="100" height="100" alt="db"/></div>
                    <div><img src={canva} width="100" height="100" alt="python"/></div>
                    <div><img src={figma} width="100" height="100" alt="wordpress"/></div>
                
            </section>
        )
    }
}

export default Project
