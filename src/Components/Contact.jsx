import React, { Component } from 'react'
import contact from '../Components/public/image/contactlogo.png';
import mailme from '../Components/public/image/mailmeimg.png';


class Contact extends Component {
    render() {
        return (
            <section className="container-1">

                <img id="contactimg" src={contact} width="180" height="180" alt="contactlogo"/>
                <h3> <strong>Ishant Khurana</strong></h3>
                <h4>Fell Free to contact</h4>
                <h4>Email Id: i.khurana@iitg.ac.in</h4>
                {/* <a id="mail"href="https://mail.google.com/mail/?view=cm&fs=1&to=okdexter94@gmail.com"><img id="mailmelogo" src={mailme} alt="mail me"/>Click Here To Send Mail</a> */}
                <h4>Contant Info: 8930790886</h4>

                
                
                        <a href="https://www.facebook.com/ishant.khurana.39/">
                        <span className="icon fa fa-facebook" style={{color:'antiquewhite'}} ></span>
                        </a>
                        {/* <a href="https://twitter.com/techstud101" >
                                <span className="icon fa fa-twitter"  style={{color:'antiquewhite'}}></span>
                        </a> */}
                        <a href="https://github.com/ISHANT3011">
                                <span className="icon fa fa-github" style={{color:'antiquewhite'}} ></span>
                        </a>
                        <a href="https://www.linkedin.com/in/ishantkhurana3011/">
                                <span className="icon fa fa-linkedin-square"  style={{color:'antiquewhite'}}></span>
                        </a>
                        {/* <a href="https://techstud105blog.wordpress.com/">
                                <span className="icon fa fa-wordpress" style={{color:'antiquewhite'}}></span>
                        </a> */}
                
            </section>
        )
    }
}

export default Contact
