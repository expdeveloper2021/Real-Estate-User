import React, { Component } from 'react'
import Navbar from '../../Components/Navbar';
import './Credit.css'

class Credit extends Component {
    render() {
        return (
            <div>
                <Navbar active2="active" />
                <div className="contacts">
                    <h3>Credit goes to</h3>
                    <h3><b>Muhammad Fahim Raza</b></h3>
                    <hr />
                    <h3 style={{ marginTop: 40 }}><b>Qualities</b></h3>
                    <label>Web Designer</label>
                    <br />
                    <label>Mobile App Designer</label>
                    <br />
                    <label>Graphic Designer</label>
                    <br />
                    <label>Web Designer</label>
                    <hr />
                    <h3><b>Number</b></h3>
                    <label>0305-2723867</label>
                </div>
            </div>
        )
    }
}

export default Credit
