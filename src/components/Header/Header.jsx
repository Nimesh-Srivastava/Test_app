import React from 'react'
import "./header.css"

import { Container, Row } from 'reactstrap'

import logo from "../../assets/images/eco-logo.png"
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
        <Container fluid>
            <Row>
                <div className="nav_wrapper">
                    <div className="logo">
                        {/* <img src={logo} alt='Logo' /> */}
                        <h1>EDGECUT</h1>
                    </div>

                    <div className="navigation">
                        <ul className="menu">
                            <li className="nav_item">
                                <NavLink to="home" >HOME</NavLink>
                            </li>
                            <li className="nav_item">
                                <NavLink to="home" >ABOUT</NavLink>
                            </li>
                            <li className="nav_item">
                                <NavLink to="home" >FURNITURES</NavLink>
                            </li>
                            <li className="nav_item">
                                <NavLink to="home" >BLOG</NavLink>
                            </li>
                            <li className="nav_item">
                                <NavLink to="home" >CONTACT US</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="navBtn">
                        <span className="login" style={{marginRight: 5}}>
                            LOGIN
                        <i class="ri-user-fill" style={{fontSize: "23px"}}></i>
                        </span>
                        <span className="search" style={{marginLeft: 5, padding: 5}}><i class="ri-search-line" style={{fontSize: "23px"}}></i></span>
                    </div>
                </div>
            </Row>
        </Container>
    </header>
  )
}

export default Header