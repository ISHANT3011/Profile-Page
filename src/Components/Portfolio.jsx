import React, { Component } from 'react'
import cna from '../Components/public/image/cna.png'
import fec from '../Components/public/image/Fec.png'
import coursehub from '../Components/public/image/coursehub.png'
import stock from '../Components/public/image/stock.png'
class Portfolio extends Component {
    render() {
        return (
            
            <section className="projects">
                  <h1 id='Portfolio'>Projects Portfolio</h1>
                  <p>Some of the projects done by me.</p>

                    <div className="container">
                        <a href="http://iitg.ac.in/sa/caciitg/wc21/"><img  src={cna} width="200" height="200" alt="Pybot"/><p>Winter Consulting Website</p></a>
                        <a href="https://drive.google.com/file/d/1EvDGaWYjd0Rxg6SDxSWsmN1LLSAIilYl/view"><img src={fec} width="200" height="200" alt="Pybot"/><p>Finance and Economic Club Website</p></a>
                       </div>

                    <div className="container">
                    <a href="https://github.com/ISHANT3011/CourseHub"><img src={coursehub} width="200" height="200" alt="Pybot"/><p>CourseHub Website</p></a>
                     <a href="https://drive.google.com/file/d/1h-_MNB2VHex928z6qoPRnBDTkh-BgPHg/view"><img src={stock} width="200" height="200" alt="Pybot"/><p>Stock Optimization</p></a>
                    </div>

                       
            </section>
        )
    }
}

export default Portfolio


