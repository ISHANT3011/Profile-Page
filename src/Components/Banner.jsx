import React, { Component } from 'react'
import logo from '../Components/public/image/maxresdefault.jpg';
//import cse from '../Components/public/image/yt1.png';
import ishant from '../Components/public/image/Ishant_png.png';
import ish from'../Components/public/image/iiii.jpg';

class Banner extends Component {
    render() {
        return (
            <section className="container-banner">

                    <a href="#home"><img id="profilepic" src={ish}  width="170" height="170" alt="profilepic"/></a>
                    <h1> Hi! I'm Ishant Khurana </h1>
                    <p id="paragarph1"> Web Developer <br/></p>
                    <a id="logo" href="https://www.contentstack.com/" ><img src={ishant} width="30" height="30" alt="cselogo"/></a> 
                    
            </section>
        )
    }
}

export default Banner


