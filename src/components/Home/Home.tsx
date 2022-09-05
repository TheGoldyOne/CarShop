import React, { Component } from 'react'
import './Home.scss'

import Navigation from '../Navigation/Navigation'
import CarCards from '../CarCards/CarCards'
import Footer from '../Footer/Footer'
import Github from '../GitHub/Github'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Github />
                <Navigation />
                <CarCards />
                <Footer />
            </div>
        )
    }
}
