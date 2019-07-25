import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import All from '../Containers/All Property/All';
import Contact from '../Containers/Contact/Contact';
import Credit from '../Containers/Credit/Credit';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={All} />
                <Route path="/contact" component={Contact} />
                <Route path="/credit" component={Credit} />
            </Router>
        )
    }
}

export default Routes
