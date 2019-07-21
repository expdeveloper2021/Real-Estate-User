import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid cont">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/" style={{ fontSize: "20px" }}>Bantva Real Estate</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                         <ul className="nav navbar-nav">
                            <li className="active" ><Link to="/delete">Properties</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

}

export default withRouter(NavBar);