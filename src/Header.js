import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Nav, NavItem} from "react-bootstrap"
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="headerCont">
            <Link className="appIcon" href='/' exact to='/' eventKey="1"></Link>
            <Nav bsStyle="tabs" activeKey={this.navSelected}>   
                <NavItem eventKey="1" componentClass={Link} href={'#'} exact to={'#'}>     
                    Profile
                </NavItem>
            </Nav>
            </ div>
        );
    }
    
}
export default Header;