import React, { Component } from 'react'
import './Home.scss'

import Navigation from '../Navigation/Navigation'
import CarCards from '../CarCards/CarCards'
import Footer from '../Footer/Footer'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <CarCards />
                <Footer />
            </div>
        )
    }
}
