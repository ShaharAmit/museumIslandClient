import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Nav, NavItem} from "react-bootstrap"
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.home = '/';
    }
    logout() {
        sessionStorage.setItem("username", "");
        sessionStorage.clear();
        window.location = "http://localhost:3000/login";
    }
    render() {
        return (
            <div className="headerCont">
            <Link className="appIcon" to={this.home} />
            <Nav bsStyle="tabs" activeKey="1">   
                <NavItem eventKey="1" componentClass={Link} href={'/profile'} to={'/profile'}>     
                    Profile
                </NavItem>
                <button onClick={this.logout}>     
                    logout
                </button>
            </Nav>
            </ div>
        );
    }
    
}
export default Header;