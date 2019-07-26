import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div style={{backgroundColor: "#d4f296" , height: "auto" , padding: 10 , width: "100%"}}>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="nav nav-pills nav-justified">
                                <p>© 2019 Bantva Real Estate.</p>
                                <p>All Rights Reserved.</p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
