import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Login from '../Containe/Add Property/Add';
import All from '../Containers/All Property/All';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Route path="/" component={All} />
            </Router>
        )
    }
}

export default Routes
