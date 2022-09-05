import React, { Component } from 'react'


import Navbar from '../Navbar/Navbar'
import Jumbotron from '../Jumbotron/Jumbotron'


export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron />
            </div>
        )
    }
}
