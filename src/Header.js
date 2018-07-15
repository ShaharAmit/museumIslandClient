import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Nav, NavItem} from "react-bootstrap"
import './Header.css';

class Header extends Component {
    navSelected = '1';
    content = 'home';
    home = '/';      
    render() {
        return (
            <div className="headerCont">
            <a className="appIcon" componentClass={Link} href={this.home} exact to={this.home} eventKey="1"></a>
            <Nav bsStyle="tabs" activeKey={this.navSelected}>   
                <NavItem eventKey="1" componentClass={Link} href={'#'} exact to={'#'}>     
                    Profile
                </NavItem>
                <NavItem eventKey="1" componentClass={Link} href={this.home} exact to={this.home}>
                    Home
                </NavItem>
            </Nav>
            </ div>
        );
    }
    
}
export default Header;