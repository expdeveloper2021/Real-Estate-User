import React, { Component } from 'react'
import Navbar from '../../Components/Navbar';
import './Contact.css'
import contact from '../../Images/Contact.jpg'
import contact2 from '../../Images/Contact2.jpg'
import contact3 from '../../Images/Contact3.jpg'
import qr from '../../Images/QR.jpg'
import qr2 from '../../Images/QR2.jpg'

class Contact extends Component {
    render() {
        return (
            <div>
                <Navbar active="" active1="active" />
                <div className="contact">
                    <h1>Our Contact</h1>
                    <div id="myCarousel" className="carousel slide" data-ride="carousel" style={{marginTop: "30px"}}>
                        <div className="carousel-inner" id="uniq" style={{ width: "25%", margin: "0px auto" }}>
                            <div className="item active">
                                <img src={contact} alt="Contact" />
                            </div>
                            <div className="item">
                                <img src={qr} alt="Code" />
                            </div>
                            <div className="item">
                                <img src={contact3} alt="Contact" />
                            </div>
                        </div>
                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <div id="myCarousel" className="carousel slide" data-ride="carousel" style={{marginTop: "30px"}}>
                        <div className="carousel-inner" id="uniq" style={{ width: "25%", margin: "0px auto" }}>
                            <div className="item active"> 
                                <img src={contact2} alt="Contact" />
                            </div>
                            <div className="item">
                                <img src={qr2} alt="Code" />
                            </div>
                            <div className="item">
                                <img src={contact3} alt="Contact" />
                            </div>
                        </div>
                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
