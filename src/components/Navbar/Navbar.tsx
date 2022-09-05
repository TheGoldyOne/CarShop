import React, { Component } from 'react'
import './Navbar.scss'

// import Logo from "./logo.png"

export default class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                {/* <img src={Logo} alt="logo" className="logo"/> */}
                <div className="buttonBox">
                    <div className="button">
                        Używane
                    </div>
                    <div className="button">
                        Nowe
                    </div>
                    <div className="button">
                        Import
                    </div>
                </div>
            </div>
        )
    }
}