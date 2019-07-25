import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import All from '../Containers/All Property/All';
import Contact from '../Containers/Contact/Contact';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={All} />
                <Route path="/contact" component={Contact} />
            </Router>
        )
    }
}

export default Routes
