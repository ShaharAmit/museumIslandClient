import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Nav, NavItem} from "react-bootstrap"
import './includes/museumHeader.css';

class Header extends Component {
    render() {
        return (
            <div className="headerCont2">
                <ul id='museumHeader'>
                    <li><a href="#galleries">Galleries</a></li>
                    <li><a href="#articles">Articles</a></li>
                </ul>
            </ div>
        );
    }

}
export default Header;